import React, { useEffect, useState } from 'react';
import './App.css';
import { getImages } from "./services/instagram";
import { ImageUpload } from "./components/ImageUpload";
import { SortableImageGrid } from "./components/SortableImageGrid";


function App() {
  const [images, setImages] = useState<any>(() => {
    const savedImages = localStorage.getItem('images');
    return savedImages ? JSON.parse(savedImages) : []
  });
  const [instagramImages, setInstagramImages] = useState<any>([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const images = await getImages('IGQVJXZAz');
  //     setImages(images);
  //   };
  //   fetchImages();
  // }, []);


  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;
      const image = {
        media_url: base64data,
        caption: 'Uploaded image',
      };
      setImages((prevImages: any) => {
        const newImages = [...prevImages, image];
        localStorage.setItem('images', JSON.stringify(newImages));
        return newImages;
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <ImageUpload onUpload={handleUpload} />
      <SortableImageGrid images={images} setImages={setImages}  />
      <SortableImageGrid images={instagramImages} setImages={setInstagramImages}  />
    </div>
  );
}

export default App;
