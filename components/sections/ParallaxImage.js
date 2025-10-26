export default function ParallaxImage() {
  return (
    <section className="aspect-screen sandikala-rounded-exception flex justify-center xl:aspect-auto xl:h-[150vh]">
      <div
        className="relative flex h-full w-1/2 justify-center overflow-hidden rounded-t-[50vw] rounded-b-none bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress')",
          width: "100%",
          borderRadius: "960px 960px 0px 0px",
        }}
      >
        <div className="h-screen w-screen rounded-none object-cover xl:absolute">
          <div
            className="h-full w-full"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, -1455.3px)",
              willChange: "transform",
            }}
            data-speed="0.01"
            data-lag="0"
          >
            <img
              src="https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress"
              alt="Ulaman Bali"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
