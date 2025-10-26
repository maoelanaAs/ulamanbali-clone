"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroVideo() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".video-cover", {
        autoAlpha: 0,
        delay: 1,
        duration: 2,
        ease: "power2.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef}>
      <div className="relative rounded-none">
        <div className="aspect-screen w-full">
          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/60"></div>
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <iframe
              className="pointer-events-none absolute"
              width="1992.888888888889"
              height="1121"
              src="https://www.youtube.com/embed/pqkVOxt7Tk4?si=M-Gxo7VW-ob8hqd0&controls=0&autoplay=1&mute=1&loop=1&playlist=pqkVOxt7Tk4"
              title="Ulaman"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="bg-secondary video-cover absolute top-0 left-0 z-20 h-full w-full">
              <img
                src="https://images.prismic.io/ulaman/ZiO2APPdc1huKpxk_eco-resort-bali.jpg?auto=format,compress"
                alt="“Experience sustainable luxury amidst Bali’s lush jungle at Ulaman Eco Luxury Retreat #EcoLuxury"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
