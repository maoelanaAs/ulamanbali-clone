export default function ReviewDetails() {
  return (
    <section>
      <div
        className="relative outline-none"
        role="region"
        aria-roledescription="carousel"
        tabIndex="0"
      >
        <header className="container mx-auto px-32">
          <div className="space-y-9 border-b pb-8 sm:flex sm:items-start sm:justify-between sm:space-y-0">
            <div className="space-y-8">
              <div>
                <h3 className="heading display-3">
                  What Our Guests <br />
                  Have To Say About Us
                </h3>
              </div>
              <div className="text-smaller text-primary flex justify-between gap-11 sm:justify-start sm:gap-14">
                <div className="xl:flex xl:items-center xl:gap-2">
                  <span className="flex items-center justify-between gap-x-3">
                    <span className="text-small flex items-center">
                      <span>4.8&nbsp;</span>
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
                      <span>&nbsp;/</span>
                    </span>
                  </span>
                  <span className="sm:opacity-70">295 Tripadvisor Reviews</span>
                </div>
                <div className="xl:flex xl:items-center xl:gap-2">
                  <span className="flex items-center justify-between gap-x-3">
                    <span className="text-small flex items-center">
                      <span>4.7&nbsp;</span>
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
                      <span>&nbsp;/</span>
                    </span>
                  </span>
                  <span className="sm:opacity-70">742 Google Reviews</span>
                </div>
              </div>
            </div>
            <nav>
              <nav className="text-primary flex gap-5 outline-none sm:gap-3.5 lg:gap-6">
                <button
                  className="relative touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  disabled
                >
                  <div className="flex aspect-square rotate-180 items-center rounded-md border border-current p-0 px-6 text-current disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
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
                      className="lucide lucide-move-right-icon w-7 stroke-1"
                    >
                      <path d="M18 8L22 12L18 16"></path>
                      <path d="M2 12H22"></path>
                    </svg>
                  </div>
                </button>
                <button
                  className="text-primary relative touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  variant="outline"
                >
                  <div className="flex aspect-square items-center rounded-md border border-current p-0 px-6 text-current disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
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
                      className="lucide lucide-move-right-icon w-7 stroke-1"
                    >
                      <path d="M18 8L22 12L18 16"></path>
                      <path d="M2 12H22"></path>
                    </svg>
                  </div>
                </button>
              </nav>
            </nav>
          </div>
        </header>
        <div className="is-draggable overflow-hidden">
          <div
            className="-ml-4 flex"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <div
              role="group"
              aria-roledescription="slide"
              className="[&amp;.is-snapped]:opacity-100 is-snapped is-in-view min-w-0 shrink-0 grow-0 basis-full pl-4 transition-opacity duration-500"
            >
              <article className="container mx-auto space-y-5 px-32 pt-11 sm:flex sm:justify-between sm:gap-14 sm:space-y-0 xl:gap-44">
                <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-cols-[auto_auto] sm:grid-rows-[auto_1fr] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                  <h3 className="display-6 text-accent sm:text-vw-sm lg:text-largest order-first col-span-1 sm:order-0">
                    Alsana Trawally
                  </h3>
                  <h5 className="display-6 text-accent sm:text-vw-sm lg:text-largest order-last sm:order-0 sm:row-span-2">
                    "Best Experience In Bali."
                  </h5>
                  <span className="text-smallest order-1 block sm:order-0">
                    <span>June</span>&nbsp; <span>2024</span>
                  </span>
                </header>
                <div className="max-w-lg space-y-5 sm:w-1/2">
                  <div>
                    <p>
                      "
                      <em>
                        Best experience I had in Bali out of all the resorts
                        I've been to too,
                      </em>{" "}
                      customer service was impeccable and the staff were so
                      kind, Mr. Komang made sure we had accommodations and did
                      the best of his ability to make sure we had a warming
                      welcoming, it's unbelievable that everything is made of
                      bamboo"
                    </p>
                  </div>
                  <nav>
                    <a className="ui-underline-anim reverse btn-primary text-smaller inline-block"></a>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
