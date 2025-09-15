import Image from 'next/image';
import React from 'react';

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const imagesData: ImageItem[] = [
  { id: 1, src: '/assets/gallery2/gallery2.png', alt: 'Gallery 2' },
  { id: 2, src: '/assets/automate/automate3.png', alt: 'Automate 3' },
  { id: 3, src: '/assets/automate/automate4.png', alt: 'Automate 4' },
  { id: 4, src: '/assets/automate/automate1.png', alt: 'Automate 1' },
  { id: 5, src: '/assets/automate/automate2.png', alt: 'Automate 2' },
  { id: 5, src: '/assets/gallery2/gallery6.png', alt: 'Automate 2' },
];

const RequestDemo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 px-4 sm:px-6 md:px-8">
      {imagesData.map((img) => (
        <div key={img.id} className="w-full">
          <Image
            className="w-full h-[230px] object-cover rounded-3xl"
            src={img.src}
            alt={img.alt}
            width={200}
            height={230}
          />
        </div>
      ))}
    </div>
  );
};

export default RequestDemo;
