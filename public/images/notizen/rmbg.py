from PIL import Image, ImageDraw
import cv2
import numpy as np
import math

def remove_background_and_crop_with_bbox(image_path, output_path):
    # Open image using PIL (Pillow)
    pil_image = Image.open(image_path)

    # Convert PIL image to OpenCV format (BGR)
    opencv_image = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)


    imgray = cv2.cvtColor(opencv_image,cv2.COLOR_BGR2GRAY)
    imgray = cv2.blur(imgray,(15,15))
    ret,thresh = cv2.threshold(imgray,math.floor(np.average(imgray)),255,cv2.THRESH_BINARY_INV)
    dilated=cv2.morphologyEx(thresh, cv2.MORPH_OPEN, cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(10,10)))
    contours,_ = cv2.findContours(dilated,cv2.RETR_LIST,cv2.CHAIN_APPROX_SIMPLE)

    # Sort contours by area in descending order
    sorted_contours = sorted(contours, key=cv2.contourArea, reverse=True)

    # Choose the second largest bounding box based on area and aspect ratio
    for i in range(1, min(10, len(sorted_contours))):  # Choose the second largest bounding box
        contour = sorted_contours[i]

        # Get bounding box coordinates of the contour
        x, y, w, h = cv2.boundingRect(contour)

        # Calculate aspect ratio
        aspect_ratio = w / h

        # Adjust aspect ratio threshold based on your requirements
        aspect_ratio_threshold = 2.0

        # Check if the aspect ratio is within the desired range
        if 0.5 < aspect_ratio < aspect_ratio_threshold:
            # Draw bounding box on the image
            draw = ImageDraw.Draw(pil_image)
            draw.rectangle([x, y, x+w, y+h], outline="red", width=2)

            # Print bounding box information
            print(f"Selected bounding box: x={x}, y={y}, w={w}, h={h}, aspect_ratio={aspect_ratio}")

            break  # Break out of the loop after finding the suitable bounding box

    # Save the image with bounding box
    pil_image.save(output_path)

    print("Bounding box drawn and image saved to", output_path)

if __name__ == "__main__":
    input_image_path = "1.jpg"  # Replace with the path to your input image
    output_image_path = "output_processed_scan_with_bbox.jpg"  # Replace with the desired output path

    remove_background_and_crop_with_bbox(input_image_path, output_image_path)
