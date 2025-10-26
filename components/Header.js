"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".logo", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });

      tl.to(
        ".header-animation-target",
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5",
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      id="header"
      className="pointer-events-none fixed top-0 z-99999999999 h-screen w-full"
      ref={headerRef}
    >
      <div
        className={`app-container pointer-events-auto relative z-50 flex py-2 transition-[background] duration-300 sm:py-4 lg:items-center lg:justify-between lg:px-8 xl:max-w-none xl:px-10 ${
          isScrolled
            ? "text-primary bg-secondary border-b-[0.9px]"
            : "text-secondary bg-transparent"
        }`}
      >
        <div className="flex flex-1 items-center">
          <div>
            <nav className="flex w-full items-center space-x-14">
              <button
                className="group header-animation-target relative py-5 opacity-0 hover:cursor-pointer focus:outline-none"
                data-v-241a1fe1=""
              >
                <span className="hidden" aria-hidden="false" data-v-241a1fe1="">
                  Open Menu
                </span>
                <div
                  className="lines relative h-3 w-16 before:top-px before:left-0 before:w-6/12 group-hover:before:w-11/12 after:bottom-px after:left-0 after:w-full group-hover:after:w-11/12"
                  data-v-241a1fe1=""
                ></div>
              </button>
              <ul className="hidden space-x-9 xl:flex">
                <li className="header-animation-target opacity-0">
                  <Link
                    href="https://ulamanbali.com/rooms"
                    className="ui-underline-anim"
                  >
                    Villas
                  </Link>
                </li>
                <li className="header-animation-target opacity-0">
                  <Link
                    href="https://riversidespabyulaman.com/"
                    className="ui-underline-anim"
                  >
                    Spa
                  </Link>
                </li>
                <li className="header-animation-target opacity-0">
                  <Link
                    href="https://earthbyulaman.com"
                    className="ui-underline-anim"
                  >
                    Dine
                  </Link>
                </li>
                <li className="header-animation-target opacity-0">
                  <Link
                    href="https://ulamanbali.com/retreats"
                    className="ui-underline-anim"
                  >
                    Retreats
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div
            className="text-smallest hidden flex-1 sm:block lg:block"
            style={{ display: "none" }}
          >
            <ul className="opacity-0 lg:opacity-100">
              <li>
                <Link
                  href="https://www.google.com/travel/search?q=ulaman%20bali&amp;g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C10210222%2C72248047%2C72248049%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72462234%2C72470899%2C72471280%2C72472051%2C72473841%2C72481459%2C72485658%2C72486593%2C72494250%2C72499705%2C72513513%2C72536387%2C72549171%2C72569093%2C72570850%2C72602734%2C72616120%2C72619927%2C72620306%2C72620962%2C72634630%2C72648289%2C72653660%2C72658035%2C72661848%2C72662543%2C72671093%2C72673973&amp;hl=en-ID&amp;gl=id&amp;cs=1&amp;ssta=1&amp;ts=CAEaRwopEicyJTB4MmRkMjM5MjEzNjlkNTcxMzoweDg0ZjMzZTkzODU1NTBmZDQSGhIUCgcI6A8QCRgTEgcI6A8QCRgUGAEyAhAA&amp;qs=CAEyFENnc0kxSl9VcXJqU3pfbUVBUkFCOAJCCQnUD1WFkz7zhEIJCdQPVYWTPvOE&amp;ap=ugEHcmV2aWV3cw&amp;ictx=111&amp;ved=0CAAQ5JsGahcKEwiomPuP68GHAxUAAAAAHQAAAAAQCg"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center"
                >
                  <span>4.7</span>&nbsp;
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
                    className="lucide lucide-star-icon aspect-square w-3.5 fill-current stroke-none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>&nbsp;/&nbsp;</span>
                  <span>742 Google Reviews</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center"
                >
                  <span>4.8</span>&nbsp;
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
                    className="lucide lucide-star-icon aspect-square w-3.5 fill-current stroke-none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>&nbsp;/&nbsp;</span>
                  <span>295 Tripadvisor Reviews</span>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-1 items-center justify-center">
            <Link
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active transition-opacity duration-300"
            >
              <figure
                className={`logo opacity-0 transition-[width] duration-300 ${isScrolled ? "w-16 sm:w-14 lg:w-20" : "w-24 sm:w-28 lg:w-40 xl:w-32"}`}
              >
                <img
                  src="https://ulaman.cdn.prismic.io/ulaman/aAMlsuvxEdbNPPas_logo-new.svg"
                  alt=""
                  className="h-auto w-full"
                />
              </figure>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end xl:items-start">
          <nav className="pointer-events-auto flex items-center justify-end xl:items-start">
            <div>
              <button className="rounded-asymetrical hover:bg-primary hover:border-primary hover:text-secondary header-animation-target px-6 py-2 leading-none opacity-0 transition-colors duration-300 sm:py-4 lg:px-8">
                <span className="sm:hidden">Book</span>
                <span className="hidden sm:inline-block">Stay With Us</span>
              </button>
            </div>
            {/* <button style={{ display: "none" }} className="aspect-square w-10">
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
                className="lucide lucide-xicon h-full w-full stroke-1"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button> */}
          </nav>
        </div>
      </div>

      {/* <aside
        style="opacity: 0; display: none;"
        class="bg-light-background text-brand pointer-events-auto absolute inset-0 z-40 pt-40 xl:flex xl:gap-x-28 xl:px-10 xl:pt-56 xl:pb-20"
      >
        <div class="flex h-full w-full flex-col items-end gap-y-8 xl:w-1/3">
          <div class="flex flex-1 flex-col justify-center sm:pr-16 lg:p-0 xl:hidden">
            <nav class="app-container display-4 sm:text-30 lg:text-45 w-fit sm:px-11 lg:px-20">
              <ul class="flex w-fit flex-wrap gap-x-2.5 gap-y-1.5 sm:gap-x-3.5 sm:gap-y-5 lg:gap-y-6">
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    aria-current="page"
                    href="/"
                    class="router-link-active active active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Home
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/rooms"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Villas
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/packages-ulaman"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Packages
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://riversidespabyulaman.com/"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Spa
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/retreats"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Retreats
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://earthbyulaman.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Dine
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/activities"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Experiences
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/facilities"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Facilities
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/blog"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Blog
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/testimonials"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Reviews
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/about"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    About
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/contact"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Contact
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-2.5 opacity-0 sm:space-x-3.5 lg:space-x-5"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/ulaman-map"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    The Map
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden flex-1 flex-col justify-center xl:flex">
            <nav class="display-4 text-40 w-fit">
              <ul class="flex w-fit flex-wrap gap-3">
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 0;"
                >
                  <Link
                    aria-current="page"
                    href="/"
                    class="router-link-active active active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Home
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/rooms"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Villas
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 0;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/packages-ulaman"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Packages
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://riversidespabyulaman.com/"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Spa
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/retreats"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Retreats
                  </Link>
                </li>
                <li
                  class="group menu-link inline-block space-x-3 pr-5 opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://earthbyulaman.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Dine
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 1;"
                >
                  <Link
                    href="https://ulamanbali.com/activities"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Experiences
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="app-container flex w-full items-center justify-between sm:px-11 lg:px-20 xl:p-0">
            <nav class="text-smaller w-1/2 w-fit max-w-52 lg:max-w-72 xl:w-full">
              <ul class="gap-.5em flex w-fit flex-wrap">
                <li
                  class="space-x-.5em menu-link group inline-block opacity-0"
                  style="opacity: 1;"
                >
                  <Link
                    href="https://wa.me/6281227142854"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Whatsapp
                  </Link>
                </li>
                <li
                  class="space-x-.5em menu-link group inline-block opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://www.google.com/maps/dir//Ulaman+Road,+Buwit,+Kediri,+Tabanan+Regency,+Bali+82121/@-8.5929565,115.048163,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23921369d5713:0x84f33e9385550fd4!2m2!1d115.1305649!2d-8.5929653?entry=ttu"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Directions
                  </Link>
                </li>
                <li
                  class="space-x-.5em menu-link group inline-block opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Resort-Tabanan_Bali.html"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    TripAdvisor
                  </Link>
                </li>
                <li
                  class="space-x-.5em menu-link group inline-block opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://www.instagram.com/ulamanbali"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Instagram
                  </Link>
                </li>
                <li
                  class="space-x-.5em menu-link group inline-block opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://www.facebook.com/UlamanBali/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </nav>
            <div class="text-light w-20 xl:hidden">
              <img
                src="https://ulaman.cdn.prismic.io/ulaman/ZpJWph5LeNNTxIU8_ulaman.svg?auto=compress,format"
                alt="Ulaman Bali"
                class="menu-link h-auto w-full opacity-0"
                loading="lazy"
                style="opacity: 1;"
              />
            </div>
          </div>
          <div class="aspect-[15/10] w-screen overflow-hidden rounded-t-full sm:aspect-video xl:hidden">
            <img
              src="https://images.prismic.io/ulaman/Zjeq0EMTzAJOCirD_hotel.jpg?auto=format,compress"
              alt="ulaman bali from drone the best hotel in the world "
              class="menu-image h-full w-full object-cover opacity-0"
              loading="lazy"
              style="opacity: 0;"
            />
          </div>
        </div>
        <div
          class="menu-image hidden opacity-0 xl:block xl:w-1/3"
          style="opacity: 0;"
        >
          <figure class="relative h-full w-full overflow-hidden rounded-t-full object-cover">
            <div class="rounded-inherit">
              <div class="rounded-inherit absolute inset-0 flex justify-center">
                <div
                  style=""
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/Zjeq0EMTzAJOCirD_hotel.jpg?auto=format,compress"
                    alt="ulaman bali from drone the best hotel in the world "
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZjejSkMTzAJOCioK_bali-hotels.jpg?auto=format,compress"
                    alt="ulaman bali the best bamboo hotel in the world "
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/Zo56cB5LeNNTw_Xy_ulaman-2.jpg?auto=format,compress"
                    alt="ulaman bali the best bamboo hotel in the world "
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
                    alt="riverside spa by ulaman bali the best bamboo hotel in the world "
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
                    alt="Ulaman Bali Retreats"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZiSAvPPdc1huKqB-_restuarant-near-ubud.jpg?auto=format,compress"
                    alt="Earth by ulaman bali"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZiR1p_Pdc1huKqBs_sound-healing-bali.jpg?auto=format,compress"
                    alt="sound healing in bali"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZoafWB5LeNNTwyz5_yoga-shala.jpg?auto=format,compress"
                    alt="yoga-shala ulaman bali"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/Zjr4hkMTzAJOCn6N_bali-architecture.jpg?auto=format,compress"
                    alt="the bamboo architecture ulaman bali"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZpD3Ax5LeNNTxF6c_Ulaman.jpg?auto=format,compress"
                    alt="ulaman bali by drone"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZiPocPPdc1huKp2I_Ulaman-bali.jpg?auto=format,compress"
                    alt="Ulaman bali entrance"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress"
                    alt="infinity pool at sunset time ulaman bali"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  style="display: none;"
                  class="rounded-inherit h-full w-full overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress"
                    alt="sky bamboo villa ulaman bali"
                    class="rounded-inherit h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </figure>
        </div>
        <div class="hidden flex-col items-end xl:flex xl:w-1/3">
          <div class="flex flex-1 flex-col justify-center">
            <nav class="display-4 text-40 w-fit">
              <ul class="flex w-fit flex-wrap justify-end gap-3">
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 1;"
                >
                  <Link
                    href="https://ulamanbali.com/facilities"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Facilities
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/blog"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Blog
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/testimonials"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Reviews
                  </Link>
                </li>
                <li
                  class="group menu-link inline-block space-x-3 pr-5 opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/about"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    About
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 1;"
                >
                  <Link
                    href="https://ulamanbali.com/contact"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    Contact
                  </Link>
                </li>
                <li
                  class="menu-link group inline-block space-x-3 opacity-0"
                  style="opacity: 1;"
                >
                  <span class="group-first:hidden">/</span>
                  <Link
                    href="https://ulamanbali.com/ulaman-map"
                    class="active-class:opacity-50 transition-opacity duration-300 hover:opacity-50"
                  >
                    The Map
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="inline-block w-20">
            <img
              src="https://ulaman.cdn.prismic.io/ulaman/ZpJWph5LeNNTxIU8_ulaman.svg?auto=compress,format"
              alt="Ulaman Bali"
              class="menu-link h-auto w-full opacity-0"
              loading="lazy"
              style="opacity: 1;"
            />
          </div>
        </div>
      </aside> */}
    </header>
  );
}
