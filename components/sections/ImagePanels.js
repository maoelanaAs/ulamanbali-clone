import React from "react";

export default function ImagePanels() {
  return (
    <section className="mt-36">
      <ul className="flex gap-1.5 px-1.5 sm:px-6 lg:gap-3.5 lg:px-9 xl:gap-5 xl:px-5">
        <li className="group aspect-10/16 w-1/2 overflow-hidden rounded-md sm:aspect-10/14 sm:w-1/3">
          <figure className="relative h-full w-full">
            <img
              src="https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress"
              alt="farm to table at Ulaman Bali"
              data-speed="0.6"
              loading="lazy"
              className="h-full w-full scale-125 object-cover"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, -123px) scale(1.25, 1.25)",
                willChange: "transform",
              }}
              data-lag="0"
            />
            <figcaption className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="badge glass bg-secondary/90 capitalize">
                Ulaman Salad
              </span>
            </figcaption>
          </figure>
        </li>
        <li className="group aspect-10/16 w-1/2 overflow-hidden rounded-md sm:aspect-10/14 sm:w-1/3">
          <figure className="relative h-full w-full">
            <img
              src="https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress"
              alt="Chef Arik by Ulaman Bali"
              data-speed="0.6"
              loading="lazy"
              className="h-full w-full scale-125 object-cover"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, -123px) scale(1.25, 1.25)",
                willChange: "transform",
              }}
              data-lag="0"
            />
            <figcaption className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="badge glass bg-secondary/90 capitalize">
                Our Chef: Arik
              </span>
            </figcaption>
          </figure>
        </li>
        <li className="group hidden aspect-10/16 w-1/2 overflow-hidden rounded-md sm:block sm:aspect-10/14 sm:w-1/3">
          <figure className="relative h-full w-full">
            <img
              src="https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress"
              alt="Earth Restaurant By Ulaman"
              data-speed="0.6"
              loading="lazy"
              className="h-full w-full scale-125 object-cover"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, -123px) scale(1.25, 1.25)",
                willChange: "transform",
              }}
              data-lag="0"
            />
            <figcaption className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="badge glass bg-secondary/90 capitalize">
                E.A.R.T.H Restaurant
              </span>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
}
