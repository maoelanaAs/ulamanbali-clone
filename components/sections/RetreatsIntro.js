"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RetreatsIntro() {
  const sectionRef = useRef(null);
  const figure1Ref = useRef(null);
  const figure2Ref = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });

      tl.to(
        figure1Ref.current,
        {
          x: 460.8,
          rotation: 8,
        },
        0,
      );

      tl.to(
        figure2Ref.current,
        {
          x: -460.8,
          rotation: -8,
        },
        0,
      );

      tl.to(
        contentRef.current,
        {
          opacity: 1,
        },
        0,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="[&amp;+*]:!mt-0 mt-28!">
      <div className="aspect-screen relative container mx-auto flex w-full max-w-screen items-center justify-center overflow-hidden px-32 sm:aspect-auto sm:min-h-[90vh] xl:max-w-none">
        <div className="pointer-events-none absolute z-10 flex h-full w-full items-center justify-center py-14 2xl:py-0">
          <figure
            ref={figure1Ref}
            className="absolute aspect-10/14 w-96"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <img
              src="https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress"
              alt="Reiki Healing"
              className="relative top-10 -right-20 h-full w-full rotate-4 rounded-md object-cover"
              loading="lazy"
            />
          </figure>
          <figure
            ref={figure2Ref}
            className="absolute aspect-10/14 w-96"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <img
              src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
              alt="Ulaman Retreats"
              className="relative -top-10 -left-20 h-full w-full -rotate-4 rounded-md object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div ref={contentRef} className="max-w-md space-y-5 opacity-0">
          <div className="max-w-92 space-y-5 text-center lg:max-w-lg">
            <h4 className="heading display-4">
              Discover your path to wellness and growth.
            </h4>
            <p>
              At Ulaman we redefine luxury as an experience that not only
              pampers the senses but also nurtures the soul. Nestled in pristine
              nature, our eco-luxury retreat offers a sanctuary for healing and
              transformation. With personalized programs year-round, enjoy
              dedicated attention and care, immersing yourself in relaxation,
              rejuvenation, or profound inner change through meticulously
              curated activities and treatments.
              <em>Your transformative journey begins here.</em>
            </p>
          </div>
          <ul className="text-brand flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8">
            <li className="inline-block">
              <a
                href="/retreats"
                className="ui-underline-anim reverse btn-primary capitalize"
              >
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
