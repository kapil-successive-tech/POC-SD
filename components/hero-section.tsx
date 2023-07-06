import React from 'react';
import Image from 'next/image';

export default function HeroSection(props: any) {
  const { title_h2, description, group } = props;
  return (
    <div className='container'>
      <div className='hero-section-wrap'>
        <h2>{title_h2}</h2>
        <p>{description}</p>
        <div className='hero-image-wrap'>
          {group.map(
            ({ image }: any, key: Number) => {
              return (
                <Image src={image.url} alt='something' key={`image-${key}`} width={467} height={291} />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
