document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const maxSizeInput = document.getElementById('maxSizeInput').value;

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    formData.append("maxSize", maxSizeInput);

    // Show a loading message
    document.getElementById('resultMessage').innerText = 'Processing...';

    try {
        // Send the file to the FastAPI backend
        const response = await fetch('http://localhost:8000/api/resize', {
            method: 'POST',
            body: formData
        });

        // If the response is successful
        if (response.ok) {
            const data = await response.blob();

            // Create a link to download the compressed file
            const downloadLink = document.getElementById('downloadLink');
            const fileURL = URL.createObjectURL(data);
            downloadLink.href = fileURL;
            downloadLink.style.display = 'block';

            // Display success message and provide the download link
            const finalSizeKB = response.headers.get('X-Final-Size-KB');
            document.getElementById('resultMessage').innerText = `File compressed successfully! Final size: ${finalSizeKB} KB`;
        } else {
            document.getElementById('resultMessage').innerText = 'Error: Failed to compress the file. Please try again.';
        }
    } catch (error) {
        document.getElementById('resultMessage').innerText = 'Error: Something went wrong. Please try again.';
    }
});
