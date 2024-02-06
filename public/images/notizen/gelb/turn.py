import cv2
import os

def rotate_images_in_folder(folder_path):
    # Loop through all files in the folder
    for filename in os.listdir(folder_path):
        # Check if the file is an image
        if filename.endswith(('.jpg', '.jpeg', '.png', '.bmp', '.tiff')):
            # Read the image
            image_path = os.path.join(folder_path, filename)
            image = cv2.imread(image_path)
            
            # Rotate the image 90 degrees counterclockwise
            rotated_image = cv2.rotate(image, cv2.ROTATE_90_COUNTERCLOCKWISE)
            
            # Save the rotated image
            output_path = os.path.join(folder_path, f"{filename}")
            cv2.imwrite(output_path, rotated_image)
            print(f"Rotated {filename} saved as {output_path}")

if __name__ == "__main__":
    folder_path = '.'  # Change this to your folder containing images
    rotate_images_in_folder(folder_path)
