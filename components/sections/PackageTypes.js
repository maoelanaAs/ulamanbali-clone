export default function PackageTypes() {
  return (
    <section className="space-y-11 lg:space-y-16">
      <header>
        <div className="mx-auto max-w-[24.35rem] space-y-5 sm:space-y-6 lg:max-w-120 xl:space-y-5">
          <div
            className="space-y-em text-center"
            id="undefinedcta-titile-6-text-block"
          >
            <h4 className="heading display-4">
              Book one of our special packages for a getaway you’ll never
              forget.
            </h4>
          </div>
        </div>
      </header>
      <section className="sm:app-container pr-0! sm:max-w-none">
        <div
          className="relative flex items-center outline-none sm:gap-9 lg:gap-20 2xl:gap-52"
          role="region"
          aria-roledescription="carousel"
          tabIndex="0"
        >
          <nav className="hidden sm:block">
            <nav className="text-primary flex flex-col gap-5 sm:gap-3.5 lg:gap-6">
              <button
                className="static w-16 touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 lg:w-20"
                disabled
              >
                <div className="flex aspect-square w-full rotate-180 items-center justify-center rounded border border-current">
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
                className="text-primary static w-16 touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 lg:w-20"
                variant="outline"
                disabled
              >
                <div className="flex aspect-square w-full items-center justify-center rounded border border-current">
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
          <div className="flex-1 overflow-hidden">
            <div className="overflow-hidden">
              <div className="-ml-4 flex">
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 sm:pl-10 sm:last:pr-10 lg:pl-18 lg:last:pr-18"
                >
                  <article className="-mr-4 cursor-pointer space-y-5 pt-2.5 pl-6 group-last:pr-6 sm:mr-0 sm:px-0">
                    <div className="floating-element-decoration aspect-[10/10.6] w-86 sm:w-72 lg:w-86">
                      <img
                        src="https://images.prismic.io/ulaman/Zjrn-kMTzAJOCn4c_eco-luxury-hotel-bali.jpg?auto=format,compress"
                        alt="drone shot of lake and sky villa at ulaman bali"
                        className="relative z-10 h-full w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    </div>
                    <footer className="space-y-4">
                      <h6 className="badge text-smallest glass bg-primary/10">
                        3&nbsp;Days / 2&nbsp;Nights
                      </h6>
                      <footer className="space-y-3 sm:space-y-3.5 lg:space-y-3">
                        <h3 className="display-5 leading-tight">
                          The Avatar Experience
                        </h3>
                        <nav>
                          <span className="ui-underline-anim reverse btn-primary lg:text-smaller">
                            Discover
                          </span>
                        </nav>
                      </footer>
                    </footer>
                  </article>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 sm:pl-10 sm:last:pr-10 lg:pl-18 lg:last:pr-18"
                >
                  <article className="-mr-4 cursor-pointer space-y-5 pt-2.5 pl-6 group-last:pr-6 sm:mr-0 sm:px-0">
                    <div className="floating-element-decoration aspect-[10/10.6] w-86 sm:w-72 lg:w-86">
                      <img
                        src="https://images.prismic.io/ulaman/ZjebwkMTzAJOCiml_Ulaman-eco-retreat.jpg?auto=format,compress"
                        alt="best romantic honeymoons getaway in ulaman bali"
                        className="relative z-10 h-full w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    </div>
                    <footer className="space-y-4">
                      <h6 className="badge text-smallest glass bg-primary/10">
                        3&nbsp;Days / 2&nbsp;Nights
                      </h6>
                      <footer className="space-y-3 sm:space-y-3.5 lg:space-y-3">
                        <h3 className="display-5 dark:text-light leading-tight">
                          The Ultimate Honeymoon
                        </h3>
                        <nav>
                          <span className="ui-underline-anim reverse btn-primary dark:text-light lg:text-smaller">
                            Discover
                          </span>
                        </nav>
                      </footer>
                    </footer>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
