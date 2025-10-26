export default function MapDetails() {
  return (
    <section className="relative">
      <div className="mx-auto">
        <header className="mx-auto max-w-7xl space-y-4 px-6 lg:px-12">
          <div>
            <h3 className="heading display-3">
              Discover Ulaman <br />
              From Above
            </h3>
          </div>
          <div className="bg-primary text-secondary w-fit items-center gap-1.5 rounded-full p-2.5 pr-3 xl:flex">
            <span className="bg-secondary aspect-square w-2 rounded-full"></span>
            <span className="text-sm">Tap on an icon</span>
          </div>
          <div className="text-smaller text-primary block font-medium xl:hidden">
            <span> * Use your finger to navigate </span>
          </div>
        </header>
        <div className="flex items-center justify-center">
          <div
            id="scrollableDiv"
            className="hide-scrollbar lg:show-scrollbar relative h-full w-full overflow-x-auto"
          >
            <div className="relative mx-auto max-w-432 min-w-7xl">
              <div className="aspect-[14.8/10] whitespace-nowrap">
                <img
                  className="h-full w-full"
                  src="https://ulamanbali.com/_nuxt/ulaman.B-iYsIcw.jpg"
                  alt="map"
                  loading="lazy"
                />
              </div>
              <ul>
                <li>
                  <div
                    style={{ top: "8%", left: "56%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_oxZm069VX1y9A_Group6120.svg?auto=compress,format"
                        alt="tennis court"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Tennis Court
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "17%", left: "53%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_jWpm069VX1y4H_Group5988.svg?auto=compress,format"
                        alt="Ulaman gym"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Gym
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "24%", left: "33%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format"
                        alt="Lake"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Bio-Filtered Lake
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "13%", left: "56%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format"
                        alt="reception"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Reception
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "36%", left: "60%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                        alt="Accomodation"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Ulin Poolside
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "31%", left: "47%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format"
                        alt="riverside spa"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Tree House
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "37%", left: "41%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format"
                        alt="yoga shala"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Cliffside Yoga Shala
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "39%", left: "63%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                        alt="Accomodation"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Cocoon Jungle
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "26%", left: "10%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                        alt="Accomodation"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Grand Lagoon Villa with Pool
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "18%", left: "14%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                        alt="Accomodation"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Avatar Tree House
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "70%", left: "61%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg"
                        alt="reception"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Ulaman Hall
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "42%", left: "52%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format"
                        alt="earth restaurant"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        E.A.R.T.H Lounge &amp; Bar
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "30%", left: "28%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format"
                        alt="riverside spa"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Riverside Spa
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "37%", left: "36%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format"
                        alt="Lake"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Waterfall &amp; Waterfall Deck
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "46%", left: "71%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                        alt="Accomodation"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Jungle Garden Pool
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "38%", left: "54%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format"
                        alt="infinity pool"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        E.A.R.T.H Lounge Pool
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "12%", left: "65%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5pm069VX1y_y_Layer2.svg?auto=compress,format"
                        alt="giftshop"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Gift Shop
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "21%", left: "25%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                        alt="Accomodation"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Floating Lake
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "21%", left: "42%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format"
                        alt="earth restaurant"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        E.A.R.T.H Restaurant
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "23%", left: "48%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format"
                        alt="infinity pool"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Waterfall Infinity Pool
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    style={{ top: "57%", left: "65%" }}
                    className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
                  >
                    <div className="w-5 shrink-0">
                      <img
                        src="https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format"
                        alt="yoga shala"
                        loading="lazy"
                      />
                    </div>
                    <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
                      <span className="[.group.active_&amp;]:visible text-smaller invisible group-hover:visible">
                        Mandala Yoga Shala
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
