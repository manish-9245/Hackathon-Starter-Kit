import React from 'react';
import Picone from "../../public/office-long-1.png"
import Pictwo from "../../public/office-long-2.png"
import Image from 'next/image';

const ContentSection = () => {
  return (
    <section>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Introduce your product</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut facere ex eaque? Magnam numquam soluta a illo quas nulla distinctio accusamus quibusdam, vel repudiandae eveniet illum iure expedita animi.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sit inventore error est tempora, eaque officia quod placeat eveniet laboriosam veritatis laborum fugiat, laudantium quis vero doloribus aspernatur consectetur earum?</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image className="w-full rounded-lg" src={Picone} alt="picone" />
          <Image className="mt-4 w-full lg:mt-10 rounded-lg" src={Pictwo} alt="pic2" />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
