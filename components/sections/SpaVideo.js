export default function SpaVideo() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      <ul className="absolute h-auto w-full">
        <li
          className="font-americana text-primary flex min-w-full space-y-3.5 text-[90px] leading-none whitespace-nowrap opacity-10 even:justify-end sm:space-y-5 sm:text-[120px] lg:space-y-3 lg:text-[150px] xl:space-y-2.5 xl:text-[206px]"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(466.674px, 0px, 0px)",
          }}
        >
          Balance - Relaxation
        </li>
        <li
          className="font-americana text-primary flex min-w-full space-y-3.5 text-[90px] leading-none whitespace-nowrap opacity-10 even:justify-end sm:space-y-5 sm:text-[120px] lg:space-y-3 lg:text-[150px] xl:space-y-2.5 xl:text-[206px]"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(-429.495px, 0px, 0px)",
          }}
        >
          Renewal - Healing
        </li>
      </ul>
      <div className="relative w-full cursor-pointer">
        <div>
          <div className="flex justify-center">
            <div className="relative flex h-[90vw] max-w-[65vw] items-center justify-center overflow-hidden rounded-t-[500px] transition-all duration-1000 sm:h-[74vw] sm:max-w-[53vw] xl:h-[49vw] xl:max-w-[37vw]">
              <div className="relative aspect-18/10 h-full">
                <video
                  muted=""
                  playsInline=""
                  loop=""
                  poster="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
                  preload="auto"
                  className="h-full w-full rounded-lg object-cover"
                >
                  <source src="https://ulaman.cdn.prismic.io/ulaman/ZnDvD5m069VX10t2_spa.mp4" />
                  <source src="https://ulaman.cdn.prismic.io/ulaman/ZnDvnJm069VX10uC_spa.webm" />
                  <img
                    src="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
                    alt="riverside"
                    loading="lazy"
                  />
                </video>
              </div>
              <div className="badge glass bg-primary/60 text-secondary text-large absolute bottom-5 left-5 flex items-center gap-2 rounded-full">
                <span className="inline-block aspect-square w-2.5 rounded-full bg-current"></span>
                <span>Play Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
