import React from 'react';
import Image from 'next/image';
import styles from './hero-section.module.css'

export default function HeroSection(props: any) {
  const { title_h2, description, group } = props;
  return (
    <div className='container'>
      <div className={styles.hero_section_wrap}>
        <h2>{title_h2}</h2>
        <p>{description}</p>
        <div className={styles.hero_image_wrap}>
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
