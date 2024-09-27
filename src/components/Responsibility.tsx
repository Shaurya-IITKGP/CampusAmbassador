"use client"
import React, { useState, useRef } from 'react';

interface Item {
  id: number;
  title: string;
  content: string;
}

const itemsData: Item[] = [
  { id: 1, title: 'Slide 1', content: 'Lorem ipsum dolor sit amet...' },
  { id: 2, title: 'Slide 2', content: 'Lorem ipsum dolor sit amet...' },
  { id: 3, title: 'Slide 3', content: 'Lorem ipsum dolor sit amet...' },
  { id: 4, title: 'Slide 4', content: 'Lorem ipsum dolor sit amet...' },
  { id: 5, title: 'Slide 5', content: 'Lorem ipsum dolor sit amet...' },
  { id: 6, title: 'Slide 6', content: 'Lorem ipsum dolor sit amet...' },
  { id: 7, title: 'Slide 7', content: 'Lorem ipsum dolor sit amet...' },
];

const Responsibility: React.FC = () => {
  const [active, setActive] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const loadShow = () => {
    let stt = 0;
    return itemsData.map((item, index) => {
      let transform = '';
      let opacity = 1;
      let zIndex = 1;
      let blur = 'none';

      if (index === active) {
        transform = 'none';
      } else if (index > active) {
        stt = index - active;
        transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt})`;
        opacity = stt > 2 ? 0 : 0.6;
        zIndex = -stt;
        blur = 'blur(5px)';
      } else if (index < active) {
        stt = active - index;
        transform = `translateX(-${120 * stt}px) scale(${1 - 0.2 * stt})`;
        opacity = stt > 2 ? 0 : 0.6;
        zIndex = -stt;
        blur = 'blur(5px)';
      }

      return (
        <div
          key={item.id}
          className="absolute w-52 h-80 p-5 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-500 rounded-lg text-justify transition-transform bg-size-200 animate-gradient-move"
          style={{
            transform,
            zIndex,
            filter: blur,
            opacity,
          }}
        >
          <h1 className="text-xl font-bold text-white">{item.title}</h1>
          <p className="text-white">{item.content}</p>
        </div>
      );
    });
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1 < itemsData.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) {
      // Swipe left (next slide)
      handleNext();
    } else if (deltaX < -50) {
      // Swipe right (previous slide)
      handlePrev();
    }
  };

  return (
    <div
      className="relative w-full h-[370px] flex justify-center items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
        {loadShow()}
        
        {/* Only show arrows on medium and larger screens */}
        <button
          onClick={handlePrev}
          className="hidden sm:block absolute top-[40%] left-[50px] text-white bg-transparent text-6xl font-bold"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:block absolute top-[40%] right-[50px] text-white bg-transparent text-6xl font-bold"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Responsibility;
