import React, { useState, useEffect } from 'react';

const GalleryManagement = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://localhost:3001/gallery/upload', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Upload failed');
            }
            const data = await response.json();
            setUploadedImages([...uploadedImages, data]);
            alert('Image uploaded successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (index, imageId) => {
        try {
            const response = await fetch(`http://localhost:3001/gallery/delete/${imageId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Delete failed');
            }
            // Remove the image from the front-end state
            setUploadedImages(uploadedImages.filter((_, i) => i !== index));
        } catch (error) {
            console.error('Error during deletion:', error);
        }
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://localhost:3001/gallery/images');
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                setUploadedImages(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="p-6 bg-gray-50 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gallery Management</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="mb-4 w-full max-w-md text-gray-700 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    Upload
                </button>
            </form>

            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase">Image</th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {uploadedImages.map((image, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b border-gray-200">
                                <img src={`http://localhost:3001${image.filePath}`} alt={`Uploaded ${index}`} className="w-24 h-24 object-cover" />
                            </td>
                            <td className="py-2 px-4 border-b border-gray-200">
                                <button
                                    onClick={() => handleDelete(index, image._id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GalleryManagement;
