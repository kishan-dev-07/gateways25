'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './TeamSlider.module.css';

const TeamSlider = () => {
  const cursorRef = useRef(null);
  const overlayRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  
  const team = [
    { name: "Dr. Neha Singhal", role: "Coordinators" },
    { name: "Dr. Somnath Sinha", role: "Coordinators" },
    { name: "Dr. Nisha Varghese", role: "Coordinators" },
  ];

  const totalSlides = 3;

  useEffect(() => {
    // Add marquee data
    const addMarqueeData = () => {
      const marqueeWrapper = overlayRef.current;
      if (!marqueeWrapper) return;

      // Clear existing content
      marqueeWrapper.innerHTML = '';

      team.forEach((member, index) => {
        const marqueeDiv = document.createElement("div");
        marqueeDiv.classList.add(`t-${index + 1}`, styles.marqueeWrapper);

        const h1 = document.createElement("h1");
        h1.textContent = `${member.name} `.repeat(3);
        h1.className = styles.marqueeText;

        marqueeDiv.appendChild(h1);
        marqueeWrapper.appendChild(marqueeDiv);
      });
    };

    addMarqueeData();
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const cursorIcon = cursor.querySelector("i");
    const cursorWidth = cursor.offsetWidth / 2;
    const cursorHeight = cursor.offsetHeight / 2;

    const updateCursorClass = (xPosition) => {
      const halfPageWidth = window.innerWidth / 2;
      if (xPosition > halfPageWidth) {
        if (currentSlide < totalSlides) {
          cursorIcon?.classList.remove("ph-arrow-left");
          cursorIcon?.classList.add("ph-arrow-right");
          cursor.style.display = '';
        } else {
          cursor.style.display = 'none';
        }
      } else {
        if (currentSlide > 1) {
          cursorIcon?.classList.remove("ph-arrow-right");
          cursorIcon?.classList.add("ph-arrow-left");
          cursor.style.display = '';
        } else {
          cursor.style.display = 'none';
        }
      }
    };

    const handleMouseMove = (event) => {
      gsap.to(cursor, {
        x: event.clientX - cursorWidth,
        y: event.clientY - cursorHeight,
        duration: 1,
        ease: "power3.out"
      });

      updateCursorClass(event.clientX);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentSlide, totalSlides]);

  const animateSlide = (slideNumber, reveal) => {
    const marquee = document.querySelector(`.t-${slideNumber}.${styles.marqueeWrapper}`);
    const img = document.getElementById(`t-${slideNumber}`);
    const clipPathValue = reveal 
      ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' 
      : 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)';

    if (marquee) {
      gsap.to(marquee, { 
        clipPath: clipPathValue,
        duration: 1,
        ease: "power4.out",
        delay: 0.3
      });
    }

    if (img) {
      gsap.to(img, {
        clipPath: clipPathValue,
        duration: 1,
        ease: "power4.out",
      });
    }
  };

  const handleRightClick = () => {
    if (currentSlide < totalSlides) {
      animateSlide(currentSlide + 1, true);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentSlide > 1) {
      animateSlide(currentSlide, false);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleClick = (e) => {
    const halfPageWidth = window.innerWidth / 2;
    if (e.clientX > halfPageWidth) {
      handleRightClick();
    } else {
      handleLeftClick();
    }
  };

  const currentMember = team[currentSlide - 1];

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        <div className={styles.overlay} ref={overlayRef}>
          {/* Marquee content will be added dynamically */}
        </div>

        <div className={styles.modal}>
          <div className={styles.modalImages}>
            <div className={`${styles.img} ${styles.t1}`} id="t-1">
              <img src="/about/neha.jpg" alt="Dr. Neha Singhal" />
            </div>
            <div className={`${styles.img} ${styles.t2}`} id="t-2">
              <img src="/about/somnath.jpg" alt="Dr. Somnath Sinha" />
            </div>
            <div className={`${styles.img} ${styles.t3}`} id="t-3">
              <img src="/about/nisha.jpg" alt="Dr. Nisha Varghese" />
            </div>
          </div>

          <div className={styles.info}>
            <p className={styles.name}>{currentMember?.name}</p>
            <p className={styles.role}>{currentMember?.role}</p>
          </div>
        </div>
      </div>

      <div className={styles.cursor} ref={cursorRef}>
        <i className="ph-light ph-arrow-left"></i>
      </div>
    </>
  );
};

export default TeamSlider;