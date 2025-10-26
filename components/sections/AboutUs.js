"use client";
import { Carousel } from "flowbite-react";
import "flowbite";
import Link from "next/link";
export default function AboutUs() {
  return (
    <section className="app-container">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-11 lg:justify-between lg:gap-20 xl:gap-32">
        <div className="w-full items-center xl:max-w-lg">
          <div className="aspect-10/13 sm:aspect-10/14">
            <figure className="group rounded-asymetrical relative h-full w-full overflow-hidden border-none object-cover">
              <div className="rounded-inherit absolute inset-0 flex justify-center">
                <div className="rounded-inherit h-full w-full overflow-hidden">
                  <img
                    src="https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress"
                    alt="Ulaman Bali"
                    className="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-inherit hidden h-full w-full overflow-hidden">
                  <img
                    src="https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress"
                    alt="The Best Infinity Pool at Sunset Time in Bali"
                    className="rounded-inherit h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="rounded-inherit hidden h-full w-full overflow-hidden">
                  <img
                    src="https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress"
                    alt="Ice Bath and Hot Bath at Riverside Spa"
                    className="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <nav className="absolute inset-x-3.5 bottom-5 flex items-center justify-between">
                  <button
                    className="text-secondary bg-secondary/40 flex aspect-square w-14 rotate-180 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0"
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-move-right-icon w-6 stroke-1"
                    >
                      <path d="M18 8L22 12L18 16"></path>
                      <path d="M2 12H22"></path>
                    </svg>
                  </button>
                  <nav>
                    <ul className="flex gap-2">
                      <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full transition-opacity duration-300 hover:opacity-100"></li>
                      <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
                      <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
                    </ul>
                  </nav>
                  <button className="text-secondary bg-secondary/40 flex aspect-square w-14 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-move-right-icon w-6 stroke-1"
                    >
                      <path d="M18 8L22 12L18 16"></path>
                      <path d="M2 12H22"></path>
                    </svg>
                  </button>
                </nav>
              </div>
            </figure>
          </div>
        </div>
        <div className="relative w-full xl:max-w-xl">
          <div className="space-y-9 lg:space-y-5 xl:space-y-9">
            <h5 className="heading display-5">
              An award-winning eco-luxury resort offering a unique hideaway
              experience. Embrace authenticity, balance, and harmony with nature
              in a healing, luxurious environment.
            </h5>
            <p>
              We believe nature and luxury can coexist. Ulaman Eco Luxury Resort
              offers
              <em>
                a secluded, lush haven with luxurious amenities and impeccable
                service
              </em>
              . Immerse yourself in traditional Balinese culture and leave
              feeling renewed, all while minimizing your ecological footprint.
              Recharge your mind, body, and soul in this unique holistic
              retreat.
            </p>
            <p>
              <Link
                href="https://ulamanbali.com/about"
                className="rich-text-link text-primary inline-block"
                data-path="/about"
              >
                <span className="btn-primary ui-underline-anim reverse inline-block">
                  About Us
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
