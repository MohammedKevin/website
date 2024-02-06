from PyPDF2 import PdfReader
# import module
from pdf2image import convert_from_path
# Store Pdf with convert_from_path function
import os

def split_pdf_and_rotate(pdf_path):
    # Create a directory to save images
    output_dir = 'output_images'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Open the PDF
    with open(pdf_path, 'rb') as file:
        images = convert_from_path(pdf_path)        
        for i in range(len(images)):
            images[i].save(str(i+1) +'_gelb.jpg', 'JPEG')

if __name__ == "__main__":
    pdf_path = 'gelbesbuch.pdf'  # Change this to your PDF file path
    split_pdf_and_rotate(pdf_path)
