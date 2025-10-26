import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-36 sm:mt-28 lg:mt-40 xl:mt-36">
      <article className="space-y-6 pb-2 lg:space-y-9 lg:pb-2.5 xl:pb-3">
        <header className="text-primary text-center leading-none font-normal">
          <Link
            href="https://www.instagram.com/ulamanbali/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ulamanbali
          </Link>
        </header>
        <div>
          <div
            className="relative outline-none"
            role="region"
            aria-roledescription="carousel"
            tabIndex="0"
          >
            <div className="overflow-hidden">
              <div className="-ml-4 flex"></div>
            </div>
          </div>
        </div>
      </article>

      <div className="bg-accent text-secondary">
        <div className="py-20 xl:py-16">
          <div className="app-container">
            <section className="pt-20">
              <div className="flex flex-col items-center justify-center">
                <ul className="flex flex-col items-center gap-y-3">
                  <li>
                    <Link
                      href="https://www.google.com/travel/search?q=ulaman%20bali&amp;g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C10210222%2C72248047%2C72248049%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72462234%2C72470899%2C72471280%2C72472051%2C72473841%2C72481459%2C72485658%2C72486593%2C72494250%2C72499705%2C72513513%2C72536387%2C72549171%2C72569093%2C72570850%2C72602734%2C72616120%2C72619927%2C72620306%2C72620962%2C72634630%2C72648289%2C72653660%2C72658035%2C72661848%2C72662543%2C72671093%2C72673973&amp;hl=en-ID&amp;gl=id&amp;cs=1&amp;ssta=1&amp;ts=CAEaRwopEicyJTB4MmRkMjM5MjEzNjlkNTcxMzoweDg0ZjMzZTkzODU1NTBmZDQSGhIUCgcI6A8QCRgTEgcI6A8QCRgUGAEyAhAA&amp;qs=CAEyFENnc0kxSl9VcXJqU3pfbUVBUkFCOAJCCQnUD1WFkz7zhEIJCdQPVYWTPvOE&amp;ap=ugEHcmV2aWV3cw&amp;ictx=111&amp;ved=0CAAQ5JsGahcKEwiomPuP68GHAxUAAAAAHQAAAAAQCg"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <span className="flex items-center">
                        4.7 &nbsp;
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
                      </span>
                      <span>/</span>
                      <span className="opacity-50">742 Google Reviews</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <span className="flex items-center">
                        4.8 &nbsp;
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
                      </span>
                      <span>/</span>
                      <span className="opacity-50">
                        295 TripAdvisor Reviews
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <div className="py-20">
              <div className="app-container flex w-full max-w-3xl flex-col space-y-8 overflow-visible sm:flex-row sm:justify-center md:mx-auto md:space-y-0 md:px-0">
                <div className="border-secondary flex cursor-pointer items-center justify-between rounded-none pb-6 sm:w-1/3 sm:justify-start sm:border-r sm:pb-0">
                  <div className="relative h-min">
                    <span>Check In</span>
                  </div>
                  <div className="bg-secondary mr-5 ml-4 h-px w-20 sm:w-8"></div>
                  <div className="relative h-min">
                    <span>Check Out</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:w-1/2 lg:w-2/3">
                  <div className="flex flex-1 items-center justify-start gap-5 sm:justify-center">
                    <label htmlFor="adult">Adult</label>
                    <div className="flex items-center space-x-4">
                      <button className="border-secondary hover:bg-primary hover:border-primary flex aspect-square w-7 items-center justify-center rounded-full border transition-colors duration-300 disabled:pointer-events-none disabled:opacity-60">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1px"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-minus-icon w-5"
                        >
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                      <div className="w-5 text-center">
                        <span className="inline-block">2</span>
                      </div>
                      <input
                        id="adult"
                        name="adult"
                        type="number"
                        defaultValue="2"
                        className="pointer-events-none hidden"
                        aria-hidden="false"
                      />
                      <button
                        disabled=""
                        className="border-secondary hover:bg-primary hover:border-primary flex aspect-square w-7 items-center justify-center rounded-full border transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1px"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus-icon w-5"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button className="justify rounded-asymetrical border-secondary hover:bg-primary hover:border-primary flex h-12 items-center border px-12 transition-colors duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <section className="flex flex-col items-center justify-between sm:flex-row-reverse sm:gap-x-5">
              <div className="flex aspect-11/10 h-80 w-full items-center overflow-hidden border-none sm:w-auto lg:h-96 xl:h-auto xl:w-164 xl:items-start">
                <img
                  src="https://images.prismic.io/ulaman/ZpDw3R5LeNNTxF2w_ulaman-bali.jpg?auto=format,compress"
                  alt="ulaman bali map"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-smallest space-y-4 pt-7 sm:w-64 lg:w-1/3">
                <h3 className="heading display-3 text-secondary">
                  Tucked Within Majestic Balinese Nature.
                </h3>
                <p>
                  Strategically located near popular areas like Canggu and Ubud,
                  experience tranquil nature and luxury. With endless
                  activities, you'll never want to leave Ulaman.
                </p>
              </div>
            </section>
            <section className="pt-24">
              <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between">
                <div className="py-2.5">
                  <div className="max-w-lg">
                    <div>
                      <h6 className="display-6 text-24 text-secondary">
                        Get Notified On Our Offers
                      </h6>
                      <form
                        className="space-y-7 sm:flex-col"
                        name="newsletter-signup"
                      >
                        <input
                          type="hidden"
                          name="form-name"
                          value="newsletter-signup"
                        />
                        <p className="hidden">
                          <label>
                            {" "}
                            Don’t fill this out if you’re human:{" "}
                            <input name="bot-field" />
                          </label>
                        </p>
                        <label htmlFor="newsletter-name" className="sr-only">
                          {" "}
                          Name{" "}
                        </label>
                        <label htmlFor="newsletter-email" className="sr-only">
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="relative" autoComplete="name">
                          <input
                            type="text"
                            name="name"
                            id="newsletter-name"
                            placeholder="Your Name*"
                            required=""
                            className="input-field"
                          />

                          <span className="text-warning text-smaller sm:text-smallest dark:text-light absolute top-full left-0 p-1">
                            This field is required
                          </span>
                        </div>
                        <div
                          className="relative"
                          type="email"
                          autoComplete="email"
                        >
                          <input
                            className="input-field"
                            id="newsletter-email"
                            placeholder="Your Email*"
                            name="email"
                            required=""
                          />

                          <span className="text-warning text-smaller sm:text-smallest dark:text-light absolute top-full left-0 p-1">
                            Please enter a valid email address
                          </span>
                        </div>
                        <button
                          type="submit"
                          className="ui-underline-anim reverse text-light disabled:opacity-50 disabled:hover:before:scale-x-100"
                          disabled=""
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <nav className="pt-20 xl:pt-0">
                  <h6 className="display-6 text-secondary">Explore</h6>
                  <ul className="grid grid-cols-2 gap-x-12 gap-y-5 pt-7">
                    <li>
                      <Link
                        aria-current="page"
                        href="/"
                        className="router-link-active ui-underline-anim before:scale-x-100"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/rooms"
                        className="ui-underline-anim"
                      >
                        Villas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://earthbyulaman.com/"
                        className="ui-underline-anim"
                      >
                        Dining
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://riversidespabyulaman.com/"
                        className="ui-underline-anim"
                      >
                        Spa
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/retreats"
                        className="ui-underline-anim"
                      >
                        Retreats
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/activities"
                        className="ui-underline-anim"
                      >
                        Experiences
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/facilities"
                        className="ui-underline-anim"
                      >
                        Facilities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/ulaman-map"
                        className="ui-underline-anim"
                      >
                        Ulaman Map
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/about"
                        className="ui-underline-anim"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/blog"
                        className="ui-underline-anim"
                      >
                        Articles
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/contact"
                        className="ui-underline-anim"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ulamanbali.com/testimonials"
                        className="ui-underline-anim"
                      >
                        Video Testimonials
                      </Link>
                    </li>
                  </ul>
                </nav>
                <nav className="pt-16 xl:pt-0">
                  <h6 className="display-6 text-secondary">Connect</h6>
                  <ul className="grid grid-cols-2 gap-x-12 gap-y-5 pt-7">
                    <li>
                      <Link
                        href="https://wa.me/6281227142854"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="ui-underline-anim"
                      >
                        Whatsapp
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.google.com/maps/dir//Ulaman+Road,+Buwit,+Kediri,+Tabanan+Regency,+Bali+82121/@-8.5929565,115.048163,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23921369d5713:0x84f33e9385550fd4!2m2!1d115.1305649!2d-8.5929653?entry=ttu"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="ui-underline-anim"
                      >
                        Directions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Resort-Tabanan_Bali.html"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="ui-underline-anim"
                      >
                        TripAdvisor
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/ulamanbali"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="ui-underline-anim"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.facebook.com/UlamanBali/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="ui-underline-anim"
                      >
                        Facebook
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
          <section className="mt-24 mb-4 max-w-screen overflow-hidden">
            <div className="relative w-fit animate-[slide_60s_infinite_linear]">
              <ul className="flex w-max gap-x-16 pl-16 sm:gap-x-20 sm:pl-20 lg:gap-x-24 lg:pl-24">
                <li>
                  <div className="h-full">
                    <img
                      src="https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png?auto=format,compress"
                      alt="Destination deluxe ulaman bali"
                      className="h-11 w-auto lg:h-14 xl:h-16"
                    />
                  </div>
                </li>
                <li>
                  <div className="h-full">
                    <img
                      src="https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png?auto=format,compress"
                      alt="Unesco ulaman bali"
                      className="h-11 w-auto lg:h-14 xl:h-16"
                    />
                  </div>
                </li>
                <li>
                  <div className="h-full">
                    <img
                      src="https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png?auto=format,compress"
                      alt="Kohler bold design awards ulaman bali"
                      className="h-11 w-auto lg:h-14 xl:h-16"
                    />
                  </div>
                </li>
                <li>
                  <div className="h-full">
                    <img
                      src="https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png?auto=format,compress"
                      alt="Loop awards ulaman bali"
                      className="h-11 w-auto lg:h-14 xl:h-16"
                    />
                  </div>
                </li>
                <li>
                  <div className="h-full">
                    <img
                      src="https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png?auto=format,compress"
                      alt="Interior design confederation Singapore awards ulaman bali"
                      className="h-11 w-auto lg:h-14 xl:h-16"
                    />
                  </div>
                </li>
                <li>
                  <div className="h-full">
                    <img
                      src="https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png?auto=format,compress"
                      alt="NATIONAL GEOGRAPHIC FEATURED ULAMAN BALI"
                      className="h-11 w-auto lg:h-14 xl:h-16"
                    />
                  </div>
                </li>
                <li>
                  <div className="h-full">
                    <img
                      src="https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png?auto=format,compress"
                      alt="WORLD LUXURY HOTEL AWARDS ULAMAN BALI"
                      className="h-11 w-auto lg:h-14 xl:h-16"
                    />
                  </div>
                </li>
              </ul>
              <div className="absolute top-0 left-full flex pl-16 sm:pl-20 lg:pl-24">
                <ul className="flex h-full w-max gap-x-16 sm:gap-x-20 lg:gap-x-24">
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png?auto=format,compress"
                        alt="Destination deluxe ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png?auto=format,compress"
                        alt="Unesco ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png?auto=format,compress"
                        alt="Kohler bold design awards ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png?auto=format,compress"
                        alt="Loop awards ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png?auto=format,compress"
                        alt="Interior design confederation Singapore awards ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png?auto=format,compress"
                        alt="NATIONAL GEOGRAPHIC FEATURED ULAMAN BALI"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png?auto=format,compress"
                        alt="WORLD LUXURY HOTEL AWARDS ULAMAN BALI"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                </ul>
                <ul className="flex h-full w-max gap-x-16 pl-16 sm:gap-x-20 sm:pl-20 lg:gap-x-24 lg:pl-24">
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png?auto=format,compress"
                        alt="Destination deluxe ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png?auto=format,compress"
                        alt="Unesco ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png?auto=format,compress"
                        alt="Kohler bold design awards ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png?auto=format,compress"
                        alt="Loop awards ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png?auto=format,compress"
                        alt="Interior design confederation Singapore awards ulaman bali"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png?auto=format,compress"
                        alt="NATIONAL GEOGRAPHIC FEATURED ULAMAN BALI"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full">
                      <img
                        src="https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png?auto=format,compress"
                        alt="WORLD LUXURY HOTEL AWARDS ULAMAN BALI"
                        className="h-11 w-auto lg:h-14 xl:h-16"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <footer className="app-container pt-20">
            <nav>
              <ul className="flex flex-row flex-wrap justify-between gap-x-1 gap-y-4">
                <li>
                  <Link
                    href="https://ulamanbali.com/legal/terms"
                    className="text-smallest ui-underline-anim"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ulamanbali.com/legal/privacy-policy"
                    className="text-smallest ui-underline-anim"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ulamanbali.com/contact/ulaman-bookings"
                    className="text-smallest ui-underline-anim"
                  >
                    Ulaman Bookings
                  </Link>
                </li>

                <li>
                  <span className="text-smallest">
                    Kids under 6 are not advised.
                  </span>
                </li>
                <li>
                  <span className="text-smallest">
                    {" "}
                    © 2024-2025 Two Moons Studio for ulamanbali.com. All Rights
                    Reserved{" "}
                  </span>
                </li>
                <li className="order-3">
                  <Link
                    href="https://www.twomoonsstudio.com"
                    target="_blank"
                    className="text-smallest no-heart-color ui-underline-anim"
                  >
                    {" "}
                    Made With ❤︎ By{" "}
                    <span className="opacity-100">Two Moons Studio</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>
      <nav className="bg-secondary text-dark-emphasis max-w-screen overflow-hidden py-7">
        <div className="animate-slide flex w-max">
          <ul className="flex justify-between gap-x-9 pl-9 xl:gap-x-10 xl:pl-10">
            <li className="flex gap-x-9">
              <div>
                <span className="inline-block aspect-square w-2 rounded-full bg-current"></span>
              </div>
              <button>
                <span>The Avatar Experience</span>
                <span>&nbsp;|&nbsp;</span>
                <span>3 days 2 nights</span>
              </button>
            </li>
            <li className="flex hidden gap-x-9">
              <div>
                <span className="inline-block aspect-square w-2 rounded-full bg-current"></span>
              </div>
              <button>
                <span>The Ultimate Honeymoon</span>
                <span>&nbsp;|&nbsp;</span>
                <span>3 days 2 nights</span>
              </button>
            </li>
          </ul>
          <div className="absolute left-full flex hidden gap-x-9 pl-9 xl:gap-x-10 xl:pl-10">
            <ul className="flex w-max justify-between gap-x-9 xl:gap-x-10">
              <li className="flex gap-x-9">
                <div>
                  <span className="inline-block aspect-square w-2 rounded-full bg-current"></span>
                </div>
                <button>
                  <span>The Avatar Experience</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>3 days 2 nights</span>
                </button>
              </li>
              <li className="flex gap-x-9">
                <div>
                  <span className="inline-block aspect-square w-2 rounded-full bg-current"></span>
                </div>
                <button>
                  <span>The Ultimate Honeymoon</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>3 days 2 nights</span>
                </button>
              </li>
            </ul>
            <ul className="flex w-max min-w-[50vw] justify-between gap-x-9 xl:gap-x-10">
              <li className="flex gap-x-9">
                <div>
                  <span className="inline-block aspect-square w-2 rounded-full bg-current"></span>
                </div>
                <button>
                  <span>The Avatar Experience</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>3 days 2 nights</span>
                </button>
              </li>
              <li className="flex gap-x-9">
                <div>
                  <span className="inline-block aspect-square w-2 rounded-full bg-current"></span>
                </div>
                <button>
                  <span>The Ultimate Honeymoon</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>3 days 2 nights</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}
