import cv2
import os
import numpy as np

def decrease_brightness(image, percent):
    # Convert the image to float
    img_float = image.astype(float)
    
    # Adjust brightness
    img_float *= 1 - percent / 100
    
    # Clip to ensure the pixel values stay within the valid range [0, 255]
    img_float = np.clip(img_float, 0, 255)
    
    # Convert back to uint8
    img_uint8 = np.uint8(img_float)
    
    return img_uint8

def process_images_in_folder(folder_path):
    # Loop through all files in the folder
    for filename in os.listdir(folder_path):
        # Check if the file is an image
        if filename.endswith(('.jpg', '.jpeg', '.png', '.bmp', '.tiff')):
            # Read the image
            image_path = os.path.join(folder_path, filename)
            image = cv2.imread(image_path)
            
            # Decrease brightness
            image_adjusted = decrease_brightness(image, percent=10)
            
            # Save the processed image
            output_path = os.path.join(folder_path, f"{filename}")
            cv2.imwrite(output_path, image_adjusted)
            print(f"Processed {filename} saved as {output_path}")

if __name__ == "__main__":
    folder_path = '.'  # Change this to your folder containing images
    process_images_in_folder(folder_path)
