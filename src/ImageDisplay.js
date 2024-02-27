import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8089/images/1x/download', { responseType: 'blob' })
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setImage(imageUrl);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  return (
    <div className='text-center my-5'>
      <img className="w-25" src={image} alt="Loaded Image" />
    </div>
  );
};

export default ImageDisplay;
