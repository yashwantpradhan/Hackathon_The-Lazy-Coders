from fastapi import FastAPI, UploadFile, File, Form
from io import BytesIO
from fastapi.responses import StreamingResponse
from PIL import Image
import fitz  # PyMuPDF

app = FastAPI()

@app.post("/compress/")
async def compress_file(file: UploadFile = File(...), image_quality: int = Form(...)):
    """
    Compress the uploaded file (PDF or image). 
    If the file is a PDF, it compresses the images inside the PDF.
    If the file is an image, it compresses the image.
    
    :param file: Uploaded file (image or PDF)
    :param image_quality: Quality for compressing the images (0-100)
    :return: Compressed file (PDF or image)
    """
    # Check if the uploaded file is a PDF
    if file.filename.endswith(".pdf"):
        # Read the uploaded PDF file
        contents = await file.read()
        pdf_document = fitz.open(BytesIO(contents))

        # Loop through each page of the PDF
        for page_num in range(len(pdf_document)):
            page = pdf_document.load_page(page_num)

            # Extract images from the page
            image_list = page.get_images(full=True)

            for img_index, image in enumerate(image_list):
                xref = image[0]
                base_image = pdf_document.extract_image(xref)
                image_bytes = base_image["image"]

                # Open the image with Pillow
                img = Image.open(BytesIO(image_bytes))

                # Compress the image
                img = img.convert("RGB")
                buffer = BytesIO()
                img.save(buffer, "JPEG", quality=image_quality)
                buffer.seek(0)
                compressed_image = buffer.read()

                # Replace the original image with the compressed one
                pdf_document[page_num].insert_image(image[1], stream=compressed_image)

        # Save the modified PDF to memory
        output_pdf = BytesIO()
        pdf_document.save(output_pdf)
        output_pdf.seek(0)

        # Send the compressed PDF back as a response
        return StreamingResponse(output_pdf, media_type="application/pdf")
    
    # If the file is an image (not a PDF)
    elif file.filename.endswith((".jpg", ".jpeg", ".png")):
        # Read the uploaded image
        contents = await file.read()
        img = Image.open(BytesIO(contents))

        # Compress the image
        img = img.convert("RGB")
        buffer = BytesIO()
        img.save(buffer, "JPEG", quality=image_quality)
        buffer.seek(0)

        # Send the compressed image back as a response
        return StreamingResponse(buffer, media_type="image/jpeg")

    else:
        return {"error": "Unsupported file type. Please upload a PDF or image file."}

