import AboutUs from "@/components/sections/AboutUs";
import { HeroText } from "@/components/sections/HeroText";
import HeroVideo from "@/components/sections/HeroVideo";
import RoomTypes from "@/components/sections/RoomTypes";
import CtaBook from "@/components/sections/CtaBook";
import ParallaxImage from "@/components/sections/ParallaxImage";
import PackageTypes from "@/components/sections/PackageTypes";
import RetreatsIntro from "@/components/sections/RetreatsIntro";
import SpaVideo from "@/components/sections/SpaVideo";
import CtaResto from "@/components/sections/CtaResto";
import ImagePanels from "@/components/sections/ImagePanels";
import MapDetails from "@/components/sections/MapDetails";
import ReviewDetails from "@/components/sections/ReviewDetails";
import ExperienceCatalogs from "@/components/sections/ExperienceCatalogs";
import WeeklySchedules from "@/components/sections/WeeklySchedules";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <div className="space-y-36 sm:space-y-28 lg:space-y-40 xl:space-y-36">
      <HeroVideo />
      <HeroText />
      <AboutUs />
      <RoomTypes />
      <CtaBook />
      <ParallaxImage />
      <PackageTypes />
      <RetreatsIntro />
      <SpaVideo />
      <CtaResto />
      <ImagePanels />
      <MapDetails />
      <ReviewDetails />
      <ExperienceCatalogs />
      <WeeklySchedules />
      <CtaFinal />
    </div>
  );
}
// <section>
//   <div className="relative rounded-none">
//     <div className="aspect-auto w-full">
//       <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/60"></div>
//       <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
//         <iframe
//           id="ytplayer"
//           className="pointer-events-none absolute top-0 left-0 h-full w-full"
//           type="text/html"
//           src="https://www.youtube.com/embed/pqkVOxt7Tk4?autoplay=1&cc_load_policy=1&controls=0&disablekb=1&enablejsapi=1&fs=0&loop=0&iv_load_policy=3"
//           allowFullScreen=""
//         ></iframe>
//         <div className="">
//           <img
//             src="https://images.prismic.io/ulaman/ZiO2APPdc1huKpxk_eco-resort-bali.jpg?auto=format,compress"
//             alt="“Experience sustainable luxury amidst Bali’s lush jungle at Ulaman Eco Luxury Retreat #EcoLuxury"
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// <section className="container mx-auto">
//   <div className="mx-auto max-w-152 space-y-5 sm:space-y-6 xl:max-w-176 xl:space-y-5">
//     <div className="space-y-em text-center">
//       <h2 className="font-americana text-primary text-[1.875rem] leading-tight sm:text-[2.1875rem] lg:text-[2.5rem]">
//         Nestled among the rice fields and coconut trees of Tabanan, Ulaman
//         is only 20 minutes away from the vibrant town of Canggu.
//       </h2>
//     </div>
//   </div>
// </section>
// <section className="container mx-auto px-6 lg:px-32">
//   <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-11 lg:justify-between lg:gap-20 xl:gap-32">
//     <div className="w-full items-center xl:max-w-lg">
//       <div className="aspect-10/13 sm:aspect-10/14">
//         <figure className="group relative h-full w-full overflow-hidden rounded-tl-xl rounded-br-xl border-0 object-cover">
//           <div className="rounded-tl-xl rounded-br-xl">
//             <div className="absolute inset-0 flex justify-center rounded-tl-xl rounded-br-xl">
//               <div className="h-full w-full overflow-hidden rounded-tl-xl rounded-br-xl">
//                 <img
//                   src="https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress"
//                   alt="Ulaman Bali"
//                   className="h-full w-full rounded-tl-xl rounded-br-xl object-cover"
//                   loading="lazy"
//                 />
//               </div>
//               <nav className="absolute inset-x-3.5 bottom-5 flex items-center justify-between">
//                 <button
//                   className="text-secondary bg-secondary/40 flex aspect-square w-14 rotate-180 items-center justify-center border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0"
//                   disabled
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-move-right-icon w-6 stroke-1"
//                   >
//                     <path d="M18 8L22 12L18 16"></path>
//                     <path d="M2 12H22"></path>
//                   </svg>
//                 </button>
//                 <nav>
//                   <ul className="flex gap-2">
//                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full transition-opacity duration-300 hover:opacity-100"></li>
//                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
//                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
//                   </ul>
//                 </nav>
//                 <button className="text-secondary bg-secondary/40 flex aspect-square w-14 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-move-right-icon w-6 stroke-1"
//                   >
//                     <path d="M18 8L22 12L18 16"></path>
//                     <path d="M2 12H22"></path>
//                   </svg>
//                 </button>
//               </nav>
//             </div>
//           </div>
//         </figure>
//       </div>
//     </div>
//     <div className="relative w-full xl:max-w-xl">
//       <div className="space-y-9 lg:space-y-5 xl:space-y-9">
//         <h5 className="font-americana text-primary text-[1.5rem] leading-snug sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.625rem]">
//           An award-winning eco-luxury resort offering a unique hideaway
//           experience. Embrace authenticity, balance, and harmony with
//           nature in a healing, luxurious environment.
//         </h5>
//         <p className="font-extralight">
//           We believe nature and luxury can coexist. Ulaman Eco Luxury
//           Resort offers{" "}
//           <em>
//             a secluded, lush haven with luxurious amenities and impeccable
//             service
//           </em>
//           . Immerse yourself in traditional Balinese culture and leave
//           feeling renewed, all while minimizing your ecological footprint.
//           Recharge your mind, body, and soul in this unique holistic
//           retreat.
//         </p>
//         <p>
//           <a
//             href="/about"
//             className="text-primary inline-block"
//             data-path="/about"
//           >
//             <span className="uppercase">About Us</span>
//           </a>
//         </p>
//       </div>
//     </div>
//   </div>
// </section>
// <section className="space-y-10 sm:space-y-11 lg:space-y-16">
//   <header className="container mx-auto">
//     <div className="mx-auto max-w-125 space-y-5 sm:space-y-6 lg:max-w-160 xl:space-y-5">
//       <div className="space-y-em text-center">
//         <h4 className="font-americana text-primary text-[1.75rem] leading-snug sm:text-[1.625rem] lg:text-[1.875rem]">
//           Discover cozy elegance, where tranquility meets Bali’s serene
//           beauty.
//         </h4>
//       </div>
//       <section className="pr-0!important">
//         <div className="relative flex outline-none sm:gap-9 lg:gap-20 2xl:gap-52">
//           <nav className="hidden pt-32 sm:block lg:pt-52">
//             <nav className="text-primary flex flex-col gap-5 sm:gap-3.5 lg:gap-6">
//               <button
//                 className="static w-16 touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 lg:w-20"
//                 disabled
//               >
//                 <div className="flex aspect-square w-full rotate-180 items-center justify-center rounded border border-current">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-move-right-icon w-7 stroke-1"
//                   >
//                     <path d="M18 8L22 12L18 16"></path>
//                     <path d="M2 12H22"></path>
//                   </svg>
//                 </div>
//               </button>
//               <button
//                 className="text-primary static w-16 touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 lg:w-20"
//                 variant="outline"
//               >
//                 <div className="flex aspect-square w-full items-center justify-center rounded border border-current">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-move-right-icon w-7 stroke-1"
//                   >
//                     <path d="M18 8L22 12L18 16"></path>
//                     <path d="M2 12H22"></path>
//                   </svg>
//                 </div>
//               </button>
//             </nav>
//           </nav>
//           <div className="flex-1 overflow-hidden">
//             <div className="overflow-hidden">
//               <div className="-ml-4 flex">
//                 <div className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 last:pr-6 sm:pl-7">
//                   <a href="/rooms/floating-lake">
//                     <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
//                       <div className="w-88 space-y-4 lg:w-md">
//                         <figure className="group relative aspect-10/14 overflow-hidden rounded-md xl:aspect-10/13">
//                           <div>
//                             <div className="absolute inset-0 flex justify-center rounded-md">
//                               <div className="h-full w-full overflow-hidden rounded-md">
//                                 <img
//                                   src="https://images.prismic.io/ulaman/ZjNQMkMTzAJOCfIQ_best-resort-ulaman.jpg?auto=format,compress"
//                                   alt="lake villa drone shot"
//                                   className="h-full w-full rounded-md object-cover"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <nav className="absolute inset-x-3.5 bottom-5 flex items-center justify-between">
//                                 <button
//                                   className="text-secondary bg-secondary/40 flex aspect-square w-14 rotate-180 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0"
//                                   disabled
//                                 >
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="lucide lucide-move-right-icon w-6 stroke-1"
//                                   >
//                                     <path d="M18 8L22 12L18 16"></path>
//                                     <path d="M2 12H22"></path>
//                                   </svg>
//                                 </button>
//                                 <nav>
//                                   <ul className="flex gap-2">
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full transition-opacity duration-300 hover:opacity-100"></li>
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
//                                   </ul>
//                                 </nav>
//                                 <button className="text-secondary bg-secondary/40 flex aspect-square w-14 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="lucide lucide-move-right-icon w-6 stroke-1"
//                                   >
//                                     <path d="M18 8L22 12L18 16"></path>
//                                     <path d="M2 12H22"></path>
//                                   </svg>
//                                 </button>
//                               </nav>
//                             </div>
//                           </div>
//                         </figure>
//                         <footer className="space-y-4">
//                           <header className="space-y-2.5 lg:space-y-3.5">
//                             <h3 className="font-americana text-primary text-[1.5rem] leading-tight sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.625rem]">
//                               Floating Lake
//                             </h3>
//                             <div className="mt-3 pr-4 xl:pr-20">
//                               <p className="text-base font-extralight">
//                                 A <em>luxurious</em>{" "}
//                                 <em>floating villa </em>on Ulaman's
//                                 bio-filtered lake.
//                               </p>
//                             </div>
//                           </header>
//                           <nav>
//                             <span className="text-primary uppercase">
//                               Discover
//                             </span>
//                           </nav>
//                         </footer>
//                       </div>
//                     </article>
//                   </a>
//                 </div>
//                 <div className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 last:pr-6 sm:pl-7">
//                   <a href="/rooms/cocoan-jungle">
//                     <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
//                       <div className="w-88 space-y-4 lg:w-md">
//                         <figure className="group relative aspect-10/14 overflow-hidden rounded-md xl:aspect-10/13">
//                           <div>
//                             <div className="absolute inset-0 flex justify-center rounded-md">
//                               <div className="h-full w-full overflow-hidden rounded-md">
//                                 <img
//                                   src="https://images.prismic.io/ulaman/ZjHaf0MTzAJOCdga_ulaman-eco-retreat.jpg?auto=format,compress"
//                                   alt="cocoon upper deluxe"
//                                   className="h-full w-full rounded-md object-cover"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <nav className="absolute inset-x-3.5 bottom-5 flex items-center justify-between">
//                                 <button
//                                   className="text-secondary bg-secondary/40 flex aspect-square w-14 rotate-180 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0"
//                                   disabled
//                                 >
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="lucide lucide-move-right-icon w-6 stroke-1"
//                                   >
//                                     <path d="M18 8L22 12L18 16"></path>
//                                     <path d="M2 12H22"></path>
//                                   </svg>
//                                 </button>
//                                 <nav>
//                                   <ul className="flex gap-2">
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full transition-opacity duration-300 hover:opacity-100"></li>
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
//                                   </ul>
//                                 </nav>
//                                 <button className="text-secondary bg-secondary/40 flex aspect-square w-14 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="lucide lucide-move-right-icon w-6 stroke-1"
//                                   >
//                                     <path d="M18 8L22 12L18 16"></path>
//                                     <path d="M2 12H22"></path>
//                                   </svg>
//                                 </button>
//                               </nav>
//                             </div>
//                           </div>
//                         </figure>
//                         <footer className="space-y-4">
//                           <header className="space-y-2.5 lg:space-y-3.5">
//                             <h3 className="font-americana text-primary text-[1.5rem] leading-tight sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.625rem]">
//                               Floating Lake
//                             </h3>
//                             <div className="mt-3 pr-4 xl:pr-20">
//                               <p className="text-base font-extralight">
//                                 A <em>luxurious</em>{" "}
//                                 <em>floating villa </em>on Ulaman's
//                                 bio-filtered lake.
//                               </p>
//                             </div>
//                           </header>
//                           <nav>
//                             <span className="text-primary uppercase">
//                               Discover
//                             </span>
//                           </nav>
//                         </footer>
//                       </div>
//                     </article>
//                   </a>
//                 </div>
//                 <div className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 last:pr-6 sm:pl-7">
//                   <a href="/rooms/floating-lake">
//                     <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
//                       <div className="w-88 space-y-4 lg:w-md">
//                         <figure className="group relative aspect-10/14 overflow-hidden rounded-md xl:aspect-10/13">
//                           <div>
//                             <div className="absolute inset-0 flex justify-center rounded-md">
//                               <div className="h-full w-full overflow-hidden rounded-md">
//                                 <img
//                                   src="https://images.prismic.io/ulaman/ZjNQMkMTzAJOCfIQ_best-resort-ulaman.jpg?auto=format,compress"
//                                   alt="lake villa drone shot"
//                                   className="h-full w-full rounded-md object-cover"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               <nav className="absolute inset-x-3.5 bottom-5 flex items-center justify-between">
//                                 <button
//                                   className="text-secondary bg-secondary/40 flex aspect-square w-14 rotate-180 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0"
//                                   disabled
//                                 >
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="lucide lucide-move-right-icon w-6 stroke-1"
//                                   >
//                                     <path d="M18 8L22 12L18 16"></path>
//                                     <path d="M2 12H22"></path>
//                                   </svg>
//                                 </button>
//                                 <nav>
//                                   <ul className="flex gap-2">
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full transition-opacity duration-300 hover:opacity-100"></li>
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
//                                     <li className="bg-secondary aspect-square w-3 cursor-pointer rounded-full opacity-50 transition-opacity duration-300 hover:opacity-100"></li>
//                                   </ul>
//                                 </nav>
//                                 <button className="text-secondary bg-secondary/40 flex aspect-square w-14 items-center justify-center rounded-md border border-current backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100 xl:disabled:opacity-0">
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="lucide lucide-move-right-icon w-6 stroke-1"
//                                   >
//                                     <path d="M18 8L22 12L18 16"></path>
//                                     <path d="M2 12H22"></path>
//                                   </svg>
//                                 </button>
//                               </nav>
//                             </div>
//                           </div>
//                         </figure>
//                         <footer className="space-y-4">
//                           <header className="space-y-2.5 lg:space-y-3.5">
//                             <h3 className="font-americana text-primary text-[1.5rem] leading-tight sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.625rem]">
//                               Floating Lake
//                             </h3>
//                             <div className="mt-3 pr-4 xl:pr-20">
//                               <p className="text-base font-extralight">
//                                 A <em>luxurious</em>{" "}
//                                 <em>floating villa </em>on Ulaman's
//                                 bio-filtered lake.
//                               </p>
//                             </div>
//                           </header>
//                           <nav>
//                             <span className="text-primary uppercase">
//                               Discover
//                             </span>
//                           </nav>
//                         </footer>
//                       </div>
//                     </article>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   </header>
// </section>
// <section className="container mx-auto">
//   <div className="mx-auto max-w-125 space-y-5 sm:space-y-6 lg:max-w-160 xl:space-y-5">
//     <div className="text-center">
//       <h4 className="font-americana text-primary text-[1.75rem] leading-snug sm:text-[1.625rem] lg:text-[1.875rem]">
//         Experience a blend of nature, comfort and luxury like never
//         before.
//       </h4>
//     </div>
//     <ul className="text-primary flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8">
//       <li>
//         <button className="uppercase">Book Your Stay</button>
//       </li>
//     </ul>
//   </div>
// </section>
// <section className="flex aspect-auto justify-center xl:h-[150vh]">
//   <div className="relative flex h-full w-1/2 justify-center overflow-hidden rounded-t-[50vw] rounded-b-none bg-cover bg-center bg-no-repeat">
//     <div className="h-screen w-screen rounded-none object-cover xl:absolute">
//       <div className="h-full w-full">
//         <img
//           src="https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress"
//           alt="Ulaman Bali"
//           loading="lazy"
//           className="h-full w-full object-cover"
//         />
//       </div>
//     </div>
//   </div>
// </section>
// <section className="space-y-11 lg:space-y-16">
//   <header>
//     <div className="dark:prose-headings:text-light dark:prose-p:text-light mx-auto max-w-[24.35rem] space-y-5 sm:space-y-6 lg:max-w-120 xl:space-y-5">
//       <div className="text-center">
//         <h4 className="font-americana text-primary text-[1.75rem] leading-snug sm:text-[1.625rem] lg:text-[1.875rem]">
//           Book one of our special packages for a getaway you’ll never
//           forget.
//         </h4>
//       </div>
//     </div>
//   </header>
//   <section className="pr-0! sm:container sm:max-w-none">
//     <div className="relative flex items-center outline-none sm:gap-9 lg:gap-20 2xl:gap-52">
//       <nav className="hidden sm:block">
//         <nav className="text-primary flex flex-col gap-5 sm:gap-3.5 lg:gap-6">
//           <button
//             className="static w-16 touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 lg:w-20"
//             disabled
//           >
//             <div className="flex aspect-square w-full rotate-180 items-center justify-center rounded border border-current">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-move-right-icon w-7 stroke-1"
//               >
//                 <path d="M18 8L22 12L18 16"></path>
//                 <path d="M2 12H22"></path>
//               </svg>
//             </div>
//           </button>
//           <button
//             className="text-primary static w-16 touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 lg:w-20"
//             variant="outline"
//             disabled
//           >
//             <div className="flex aspect-square w-full items-center justify-center rounded border border-current">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-move-right-icon w-7 stroke-1"
//               >
//                 <path d="M18 8L22 12L18 16"></path>
//                 <path d="M2 12H22"></path>
//               </svg>
//             </div>
//           </button>
//         </nav>
//       </nav>
//       <div className="flex-1 overflow-hidden">
//         <div className="overflow-hidden">
//           <div className="-ml-4 flex">
//             <div className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 sm:pl-10 sm:last:pr-10 lg:pl-18 lg:last:pr-18">
//               <article className="-mr-4 cursor-pointer space-y-5 pt-2.5 pl-6 group-last:pr-6 sm:mr-0 sm:px-0">
//                 <div className="aspect-[10/10.6] w-86 sm:w-72 lg:w-86">
//                   <img
//                     src="https://images.prismic.io/ulaman/Zjrn-kMTzAJOCn4c_eco-luxury-hotel-bali.jpg?auto=format,compress"
//                     alt="drone shot of lake and sky villa at ulaman bali"
//                     className="relative z-10 h-full w-full rounded-lg object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//                 <footer className="space-y-4">
//                   <h6 className="bg-primary/10 inline-block items-center rounded px-3 py-2 text-[.8125rem] leading-none font-extralight">
//                     3 Days / 2 Nights
//                   </h6>
//                   <footer className="space-y-3 sm:space-y-3.5 lg:space-y-3">
//                     <h3 className="font-americana text-primary text-[1.5rem] leading-tight sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.625rem]">
//                       The Avatar Experience
//                     </h3>
//                     <nav>
//                       <span className="text-primary uppercase">
//                         Discover
//                       </span>
//                     </nav>
//                   </footer>
//                 </footer>
//               </article>
//             </div>
//             <div className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 sm:pl-10 sm:last:pr-10 lg:pl-18 lg:last:pr-18">
//               <article className="-mr-4 cursor-pointer space-y-5 pt-2.5 pl-6 group-last:pr-6 sm:mr-0 sm:px-0">
//                 <div className="aspect-[10/10.6] w-86 sm:w-72 lg:w-86">
//                   <img
//                     src="https://images.prismic.io/ulaman/ZjebwkMTzAJOCiml_Ulaman-eco-retreat.jpg?auto=format,compress"
//                     alt="best romantic honeymoons getaway in ulaman bali"
//                     className="relative z-10 h-full w-full rounded-lg object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//                 <footer className="space-y-4">
//                   <h6 className="bg-primary/10 inline-block items-center rounded px-3 py-2 text-[.8125rem] leading-none font-extralight">
//                     3 Days / 2 Nights
//                   </h6>
//                   <footer className="space-y-3 sm:space-y-3.5 lg:space-y-3">
//                     <h3 className="font-americana text-primary text-[1.5rem] leading-tight sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.625rem]">
//                       The Ultimate Honeymoon
//                     </h3>
//                     <nav>
//                       <span className="text-primary uppercase">
//                         Discover
//                       </span>
//                     </nav>
//                   </footer>
//                 </footer>
//               </article>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </section>
// <section className="mt-28!">
//   <div className="relative container flex aspect-auto w-full max-w-screen items-center justify-center overflow-hidden sm:aspect-auto sm:min-h-[90vh] xl:max-w-none">
//     <div className="pointer-events-none absolute z-10 flex h-full w-full items-center justify-center py-14 2xl:py-0">
//       <figure className="absolute aspect-10/14 w-96">
//         <img
//           src="https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress"
//           alt="Reiki Healing"
//           className="relative top-10 -right-20 h-full w-full rotate-4 rounded-md object-cover"
//           loading="lazy"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transform: "translate(460.8px) rotate(8deg)",
//           }}
//         />
//       </figure>
//       <figure className="absolute aspect-10/14 w-96">
//         <img
//           src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
//           alt="Ulaman Retreats"
//           className="relative -top-10 -left-20 h-full w-full -rotate-4 rounded-md object-cover"
//           loading="lazy"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transform: "translate(-460.8px) rotate(-8deg)",
//           }}
//         />
//       </figure>
//     </div>
//     <div className="max-w-md space-y-5">
//       <div className="max-w-92 space-y-5 text-center lg:max-w-lg">
//         <h4 className="font-americana text-primary text-[1.75rem] leading-snug sm:text-[1.625rem] lg:text-[1.875rem]">
//           Discover your path to wellness and growth.
//         </h4>
//         <p>
//           At Ulaman we redefine luxury as an experience that not only
//           pampers the senses but also nurtures the soul. Nestled in
//           pristine nature, our eco-luxury retreat offers a sanctuary for
//           healing and transformation. With personalized programs
//           year-round, enjoy dedicated attention and care, immersing
//           yourself in relaxation, rejuvenation, or profound inner change
//           through meticulously curated activities and treatments.
//           <em>Your transformative journey begins here.</em>
//         </p>
//       </div>
//       <ul className="text-primary flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8">
//         <li className="inline-block">
//           <a href="/retreats" className="text-primary uppercase">
//             Learn More
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </section>
// <section
//   data-slice-type="text_behind_image"
//   data-slice-variation="video"
//   className="relative flex items-center justify-center overflow-hidden"
// >
//   <ul className="absolute h-auto w-full">
//     <li
//       className="font-americana text-primary flex min-w-full space-y-3.5 text-[5.625rem] leading-none whitespace-nowrap opacity-10 even:justify-end sm:space-y-5 sm:text-[7.5rem] lg:space-y-3 lg:text-[9.375rem] xl:space-y-2.5 xl:text-[12.875rem]"
//       style={{
//         translate: "none",
//         rotate: "none",
//         scale: "none",
//         transform: "translate3d(312.75px, 0px, 0px)",
//       }}
//     >
//       Balance - Relaxation
//     </li>
//     <li
//       className="font-americana text-primary flex min-w-full space-y-3.5 text-[5.625rem] leading-none whitespace-nowrap opacity-10 even:justify-end sm:space-y-5 sm:text-[7.5rem] lg:space-y-3 lg:text-[9.375rem] xl:space-y-2.5 xl:text-[12.875rem]"
//       style={{
//         translate: "none",
//         rotate: "none",
//         scale: "none",
//         transform: "translate3d(-312.75px, 0px, 0px)",
//       }}
//     >
//       Renewal - Healing
//     </li>
//   </ul>
//   <div className="relative w-full cursor-pointer">
//     <div>
//       <div className="flex justify-center">
//         <div className="relative flex h-[90vw] max-w-[65vw] items-center justify-center overflow-hidden rounded-t-[500px] transition-all duration-1000 sm:h-[74vw] sm:max-w-[53vw] xl:h-[49vw] xl:max-w-[37vw]">
//           <div className="relative aspect-18/10 h-full">
//             <video
//               muted
//               playsInline=""
//               loop=""
//               poster="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
//               preload="auto"
//               className="h-full w-full rounded-lg object-cover"
//             >
//               <source src="https://ulaman.cdn.prismic.io/ulaman/ZnDvD5m069VX10t2_spa.mp4" />
//               <source src="https://ulaman.cdn.prismic.io/ulaman/ZnDvnJm069VX10uC_spa.webm" />
//               <img
//                 src="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
//                 alt="riverside"
//                 loading="lazy"
//               />
//             </video>
//             <div className="text-secondary absolute right-36 bottom-5 inline-block sm:right-40 xl:right-16 xl:bottom-16">
//               <a
//                 href="https://riversidespabyulaman.com/"
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 className="font-normal uppercase"
//               >
//                 Visit Spa Website
//               </a>
//             </div>
//           </div>
//           <div className="bg-primary/60 text-secondary absolute bottom-5 left-5 flex items-center gap-2 rounded-full px-3 py-2">
//             <span className="inline-block aspect-square w-2.5 rounded-full bg-current"></span>
//             <span>Play Video</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// <section
//   data-slice-type="call_to_action"
//   data-slice-variation="default"
//   className="container mx-auto -mb-18! sm:-mb-14! lg:-mb-20! xl:-mb-18!"
// >
//   <div className="mx-auto max-w-125 space-y-5 sm:space-y-6 lg:max-w-160 xl:space-y-5">
//     <div className="space-y-em text-center" id="cta-9-text-block">
//       <h4 className="font-americana text-primary text-[1.75rem] leading-snug sm:text-[1.625rem] lg:text-[1.875rem]">
//         A world-class gastronomic journey where nature’s finest
//         ingredients meet culinary craftsmanship.
//       </h4>
//     </div>
//     <ul className="text-primary flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8">
//       <li className="cta-buttons inline-block">
//         <a
//           href="https://earthbyulaman.com/"
//           className="font-normal uppercase"
//         >
//           Visit The Website
//         </a>
//       </li>
//     </ul>
//   </div>
// </section>
// <section
//   data-slice-type="image_panel"
//   data-slice-variation="withLabels"
//   className="mt-36"
// >
//   <ul className="flex gap-1.5 px-1.5 sm:px-6 lg:gap-3.5 lg:px-9 xl:gap-5 xl:px-5">
//     <li className="group aspect-10/16 w-1/2 overflow-hidden sm:aspect-10/14 sm:w-1/3">
//       <figure className="relative h-full w-full">
//         <img
//           src="https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress"
//           alt="farm to table at Ulaman Bali"
//           data-speed="0.6"
//           loading="lazy"
//           className="h-full w-full scale-125 rounded-lg object-cover"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transform: "translate(0px, -129.8px) scale(1.25, 1.25)",
//             willChange: "transform",
//           }}
//           data-lag="0"
//         />
//         <figcaption className="absolute inset-x-0 bottom-10 flex justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//           <span className="bg-secondary/90 inline-block rounded px-3 py-2 text-[.8125rem] leading-none capitalize">
//             Ulaman Salad
//           </span>
//         </figcaption>
//       </figure>
//     </li>
//     <li className="group aspect-10/16 w-1/2 overflow-hidden sm:aspect-10/14 sm:w-1/3">
//       <figure className="relative h-full w-full">
//         <img
//           src="https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress"
//           alt="Chef Arik by Ulaman Bali"
//           data-speed="0.6"
//           loading="lazy"
//           className="h-full w-full scale-125 rounded-lg object-cover"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transform: "translate(0px, -129.8px) scale(1.25, 1.25)",
//             willChange: "transform",
//           }}
//           data-lag="0"
//         />
//         <figcaption className="absolute inset-x-0 bottom-10 flex justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//           <span className="bg-secondary/90 inline-block rounded px-3 py-2 text-[.8125rem] leading-none capitalize">
//             Our Chef: Arik
//           </span>
//         </figcaption>
//       </figure>
//     </li>
//     <li className="group hidden aspect-10/16 w-1/2 overflow-hidden sm:block sm:aspect-10/14 sm:w-1/3">
//       <figure className="relative h-full w-full">
//         <img
//           src="https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress"
//           alt="Earth Restaurant By Ulaman"
//           data-speed="0.6"
//           loading="lazy"
//           className="h-full w-full scale-125 rounded-lg object-cover"
//           style={{
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transform: "translate(0px, -129.8px) scale(1.25, 1.25)",
//             willChange: "transform",
//           }}
//           data-lag="0"
//         />
//         <figcaption className="absolute inset-x-0 bottom-10 flex justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//           <span className="bg-secondary/90 inline-block rounded px-3 py-2 text-[.8125rem] leading-none capitalize">
//             E.A.R.T.H Restaurant
//           </span>
//         </figcaption>
//       </figure>
//     </li>
//   </ul>
// </section>
// <section
//   data-slice-type="map_of_ulaman"
//   data-slice-variation="default"
//   className="relative"
// >
//   <div className="mx-auto">
//     <header className="mx-auto max-w-7xl space-y-4 px-6 lg:px-12">
//       <div>
//         <h3 className="font-americana text-primary text-[1.75rem] leading-snug sm:text-[1.625rem] lg:text-[2.1875rem]">
//           Discover Ulaman <br />
//           From Above
//         </h3>
//       </div>
//       <div className="bg-primary text-secondary w-fit items-center gap-1.5 rounded-full p-2.5 pr-3 xl:flex">
//         <span className="bg-secondary aspect-square w-2 rounded-full"></span>
//         <span> Tap on an icon </span>
//       </div>
//       <div className="text-primary-darker font-primary block text-sm xl:hidden">
//         <span> * Use your finger to navigate </span>
//       </div>
//     </header>
//     <div className="flex items-center justify-center">
//       <div
//         id="scrollableDiv"
//         className="hide-scrollbar lg:show-scrollbar relative h-full w-full overflow-x-auto"
//       >
//         <div className="relative mx-auto max-w-432 min-w-7xl">
//           <div className="aspect-[14.8/10] whitespace-nowrap">
//             <img
//               className="h-full w-full"
//               src="https://ulamanbali.com/_nuxt/ulaman.B-iYsIcw.jpg"
//               alt="map"
//               loading="lazy"
//             />
//           </div>
//           <ul>
//             <li>
//               <div
//                 style={{ top: "8%", left: "56%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_oxZm069VX1y9A_Group6120.svg?auto=compress,format"
//                     alt="tennis court"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Tennis Court
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "17%", left: "53%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_jWpm069VX1y4H_Group5988.svg?auto=compress,format"
//                     alt="Ulaman gym"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Gym
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "24%", left: "33%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format"
//                     alt="Lake"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Bio-Filtered Lake
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "13%", left: "56%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format"
//                     alt="reception"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Reception
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "36%", left: "60%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
//                     alt="Accomodation"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Ulin Poolside
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "31%", left: "47%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format"
//                     alt="riverside spa"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Tree House
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "37%", left: "41%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format"
//                     alt="yoga shala"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Cliffside Yoga Shala
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "39%", left: "63%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
//                     alt="Accomodation"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Cocoon Jungle
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "26%", left: "10%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
//                     alt="Accomodation"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Grand Lagoon Villa with Pool
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "18%", left: "14%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
//                     alt="Accomodation"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Avatar Tree House
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "70%", left: "61%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg"
//                     alt="reception"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Ulaman Hall
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "42%", left: "52%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format"
//                     alt="earth restaurant"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     E.A.R.T.H Lounge &amp; Bar
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "30%", left: "28%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format"
//                     alt="riverside spa"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Riverside Spa
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "37%", left: "36%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format"
//                     alt="Lake"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Waterfall &amp; Waterfall Deck
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "46%", left: "71%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
//                     alt="Accomodation"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Jungle Garden Pool
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "38%", left: "54%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format"
//                     alt="infinity pool"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     E.A.R.T.H Lounge Pool
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "12%", left: "65%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5pm069VX1y_y_Layer2.svg?auto=compress,format"
//                     alt="giftshop"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Gift Shop
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "21%", left: "25%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
//                     alt="Accomodation"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Floating Lake
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "21%", left: "42%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format"
//                     alt="earth restaurant"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     E.A.R.T.H Restaurant
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "23%", left: "48%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format"
//                     alt="infinity pool"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Waterfall Infinity Pool
//                   </span>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <div
//                 style={{ top: "57%", left: "65%" }}
//                 className="group text-14 bg-secondary active-class:gap-3 active-class:z-10 text-primary active-class:bg-primary active-class:text-secondary absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center rounded-full px-2 transition-colors duration-300 hover:z-20 hover:gap-3"
//               >
//                 <div className="w-5 shrink-0">
//                   <img
//                     src="https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format"
//                     alt="yoga shala"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="[.group.active_&amp;]:max-w-[200px] w-full max-w-0 overflow-hidden font-medium whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px]">
//                   <span className="[.group.active_&amp;]:visible invisible text-sm group-hover:visible">
//                     Mandala Yoga Shala
//                   </span>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// <section data-slice-type="reviews_section" data-slice-variation="default">
//   <div
//     className="relative outline-none"
//     role="region"
//     aria-roledescription="carousel"
//     tabIndex="0"
//   >
//     <header className="container mx-auto px-6 lg:px-32">
//       <div className="space-y-9 border-b pb-8 sm:flex sm:items-start sm:justify-between sm:space-y-0">
//         <div className="space-y-8">
//           <div>
//             <h3 className="font-americana text-primary text-[1.75rem] leading-snug sm:text-[1.625rem] lg:text-[2.1875rem]">
//               What Our Guests <br />
//               Have To Say About Us
//             </h3>
//           </div>
//           <div className="text-primary flex justify-between gap-11 text-sm sm:justify-start sm:gap-14">
//             <div className="xl:flex xl:items-center xl:gap-2">
//               <span className="flex items-center justify-between gap-x-3">
//                 <span className="flex items-center text-[.9375rem]">
//                   <span>4.8&nbsp;</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-star-icon aspect-square w-3.5 fill-current stroke-none"
//                   >
//                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//                   </svg>
//                   <span>&nbsp;/</span>
//                 </span>
//               </span>
//               <span className="sm:opacity-70">
//                 295 Tripadvisor Reviews
//               </span>
//             </div>
//             <div className="xl:flex xl:items-center xl:gap-2">
//               <span className="flex items-center justify-between gap-x-3">
//                 <span className="flex items-center text-[.9375rem]">
//                   <span>4.7&nbsp;</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-star-icon aspect-square w-3.5 fill-current stroke-none"
//                   >
//                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//                   </svg>
//                   <span>&nbsp;/</span>
//                 </span>
//               </span>
//               <span className="sm:opacity-70">742 Google Reviews</span>
//             </div>
//           </div>
//         </div>
//         <nav>
//           <nav className="text-primary flex gap-5 outline-none sm:gap-3.5 lg:gap-6">
//             <button
//               className="relative touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
//               disabled
//             >
//               <div className="flex aspect-square rotate-180 items-center rounded-md border border-current p-0 px-6 text-current disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-move-right-icon w-7 stroke-1"
//                 >
//                   <path d="M18 8L22 12L18 16"></path>
//                   <path d="M2 12H22"></path>
//                 </svg>
//               </div>
//             </button>
//             <button
//               className="text-primary relative touch-manipulation p-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
//               variant="outline"
//             >
//               <div className="flex aspect-square items-center rounded-md border border-current p-0 px-6 text-current disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-move-right-icon w-7 stroke-1"
//                 >
//                   <path d="M18 8L22 12L18 16"></path>
//                   <path d="M2 12H22"></path>
//                 </svg>
//               </div>
//             </button>
//           </nav>
//         </nav>
//       </div>
//     </header>
//     <div className="is-draggable overflow-hidden">
//       <div
//         className="-ml-4 flex"
//         style={{ transform: "translate3d(0px, 0px, 0px)" }}
//       >
//         <div
//           role="group"
//           aria-roledescription="slide"
//           className="min-w-0 shrink-0 grow-0 basis-full pl-4 transition-opacity duration-500"
//         >
//           <article className="container mx-auto space-y-5 px-6 pt-11 sm:flex sm:justify-between sm:gap-14 sm:space-y-0 lg:px-32 xl:gap-44">
//             <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-cols-[auto_auto] sm:grid-rows-[auto_1fr] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
//               <h3 className="font-americana text-accent order-first col-span-1 text-[1.25rem] leading-snug sm:order-0 sm:text-[2.083vw] lg:text-[1.25rem]">
//                 Alsana Trawally
//               </h3>
//               <h5 className="font-americana text-accent order-last text-[1.25rem] leading-snug sm:order-0 sm:row-span-2 sm:text-[2.083vw] lg:text-[1.25rem]">
//                 "Best Experience In Bali."
//               </h5>
//               <span className="order-1 block text-sm sm:order-0">
//                 <span>June</span>&nbsp; <span>2024</span>
//               </span>
//             </header>
//             <div className="max-w-lg space-y-5 sm:w-1/2">
//               <div>
//                 <p className="font-normal">
//                   "
//                   <em>
//                     Best experience I had in Bali out of all the resorts
//                     I've been to too,
//                   </em>{" "}
//                   customer service was impeccable and the staff were so
//                   kind, Mr. Komang made sure we had accommodations and did
//                   the best of his ability to make sure we had a warming
//                   welcoming, it's unbelievable that everything is made of
//                   bamboo"
//                 </p>
//               </div>
//               <nav>
//                 <a className="ui-underline-anim reverse btn-primary inline-primary text-sm"></a>
//               </nav>
//             </div>
//           </article>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// <section
//   data-slice-type="experiences_catalog"
//   data-slice-variation="allExperiencesCollage"
// >
//   <div>
//     <div>
//       <div className="space-y-5 sm:space-y-2.5 lg:space-y-7 xl:space-y-5">
//         <div>
//           <figure className="xl:column columns-2 gap-1.5 space-y-2 md:columns-3 md:gap-2">
//             <div className="aspect-10/14 sm:aspect-10/19 lg:aspect-10/14 xl:aspect-[10/12.5]">
//               <div className="relative h-full w-full overflow-hidden rounded-md">
//                 <article className="block h-full w-full cursor-pointer overflow-hidden rounded-md">
//                   <img
//                     src="https://images.prismic.io/ulaman/ZnWOMpbWFbowew-3_eco-reosrt.jpg?auto=format,compress"
//                     alt="girl playing tennis"
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />
//                   <footer className="absolute right-2.5 bottom-2.5 left-2.5">
//                     <h6 className="bg-secondary/40 text-secondary text-xm inline-block w-fit max-w-full rounded px-3 py-1 text-[.8125rem] leading-tight font-medium backdrop-blur-3xl xl:text-sm">
//                       Private Tennis Coach
//                     </h6>
//                   </footer>
//                 </article>
//               </div>
//             </div>
//             <div className="aspect-10/13 sm:aspect-10/16 lg:aspect-10/12 xl:aspect-[10/9.5]">
//               <div className="relative h-full w-full overflow-hidden rounded-md">
//                 <article className="block h-full w-full cursor-pointer overflow-hidden rounded-md">
//                   <img
//                     src="https://images.prismic.io/ulaman/ZoDImh5LeNNTwp39_restaurant.jpg?auto=format,compress"
//                     alt="earth dining space"
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />
//                   <footer className="absolute right-2.5 bottom-2.5 left-2.5">
//                     <h6 className="bg-secondary/40 text-secondary text-xm inline-block w-fit max-w-full rounded px-3 py-1 text-[.8125rem] leading-tight font-medium backdrop-blur-3xl xl:text-sm">
//                       Romantic 5-Star Culinary Experience by Ulaman's
//                       Natural Waterfalls!
//                     </h6>
//                   </footer>
//                 </article>
//               </div>
//             </div>
//             <div className="aspect-[10.8/10] sm:aspect-10/15 lg:aspect-[10.7/10] xl:aspect-10/9">
//               <div className="relative h-full w-full overflow-hidden rounded-md">
//                 <article className="block h-full w-full cursor-pointer overflow-hidden rounded-md">
//                   <img
//                     src="https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress"
//                     alt="Yoga Shala at Ulaman Eco Luxury Retreat: Bamboo sanctuary for yoga, meditation, and wellness in Bali’s lush nature."
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />
//                   <footer className="absolute right-2.5 bottom-2.5 left-2.5">
//                     <h6 className="bg-secondary/40 text-secondary text-xm inline-block w-fit max-w-full rounded px-3 py-1 text-[.8125rem] leading-tight font-medium backdrop-blur-3xl xl:text-sm">
//                       Private Yoga Session (Hatha, Yin or Fly High Yoga)
//                     </h6>
//                   </footer>
//                 </article>
//               </div>
//             </div>
//             <div className="aspect-[10.3/10] sm:aspect-10/20 lg:aspect-[10/16.7] xl:aspect-10/13">
//               <div className="relative h-full w-full overflow-hidden rounded-md">
//                 <article className="block h-full w-full cursor-pointer overflow-hidden rounded-md">
//                   <img
//                     src="https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress"
//                     alt="bed decorations"
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />
//                   <footer className="absolute right-2.5 bottom-2.5 left-2.5">
//                     <h6 className="bg-secondary/40 text-secondary text-xm inline-block w-fit max-w-full rounded px-3 py-1 text-[.8125rem] leading-tight font-medium backdrop-blur-3xl xl:text-sm">
//                       Romantic Bed Decorations
//                     </h6>
//                   </footer>
//                 </article>
//               </div>
//             </div>
//             <div className="aspect-[10/15.5] sm:aspect-[10/19.5] lg:aspect-10/14 xl:aspect-[10/12.5]">
//               <div className="relative h-full w-full overflow-hidden rounded-md">
//                 <article className="block h-full w-full cursor-pointer overflow-hidden rounded-md">
//                   <img
//                     src="https://images.prismic.io/ulaman/ZoZc3h5LeNNTwyC-_luxury-resort-bali.jpg?auto=format,compress"
//                     alt="helicopter flight"
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />
//                   <footer className="absolute right-2.5 bottom-2.5 left-2.5">
//                     <h6 className="bg-secondary/40 text-secondary text-xm inline-block w-fit max-w-full rounded px-3 py-1 text-[.8125rem] leading-tight font-medium backdrop-blur-3xl xl:text-sm">
//                       VIP Airport Transfers via Helicopter
//                     </h6>
//                   </footer>
//                 </article>
//               </div>
//             </div>
//             <div className="aspect-10/11 sm:aspect-[10/15.5] lg:aspect-10/12 xl:aspect-[10/9.5]">
//               <div className="relative h-full w-full overflow-hidden rounded-md">
//                 <article className="block h-full w-full cursor-pointer overflow-hidden rounded-md">
//                   <img
//                     src="https://images.prismic.io/ulaman/ZlbDa6WtHYXtT4F-_eco-hotel-bali.jpg?auto=format,compress"
//                     alt="balloons and bed decoration"
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />
//                   <footer className="absolute right-2.5 bottom-2.5 left-2.5">
//                     <h6 className="bg-secondary/40 text-secondary text-xm inline-block w-fit max-w-full rounded px-3 py-1 text-[.8125rem] leading-tight font-medium backdrop-blur-3xl xl:text-sm">
//                       Balloons and Sparkles
//                     </h6>
//                   </footer>
//                 </article>
//               </div>
//             </div>
//           </figure>
//         </div>
//         <nav className="text-center">
//           <a href="/activities" className="text-primary uppercase">
//             Discover All Experiences
//           </a>
//         </nav>
//       </div>
//     </div>
//   </div>
// </section>
// <section
//   data-slice-type="experiences_catalog"
//   data-slice-variation="activitiesTimetable"
// >
//   <div>
//     <div>
//       <div>
//         <div className="mx-auto pl-4 text-center">
//           <div className="top-0 left-0 mx-auto max-w-295 2xl:max-w-360">
//             <header>
//               <div className="space-y-4 pb-16">
//                 <h2 className="font-americana text-primary text-[1.875rem] leading-tight sm:text-[2.1875rem] lg:text-[2.5rem]">
//                   Weekly Schedule
//                 </h2>
//                 <p>Advanced Booking Is Recommended</p>
//               </div>
//             </header>
//             <div className="relative overflow-auto">
//               <div className="grid w-max grid-cols-[5rem_repeat(7,1fr)] gap-0 sm:w-auto">
//                 <div className="border-primary/50 bg-secondary sticky left-0 z-10 border border-x-0 border-t-0 p-6 tracking-wider"></div>

//                 <div className="border-primary/50 tracking-none bg-secondary text-primary min-w-30 border border-t-0 border-r-0 p-6 text-xs font-normal lg:text-sm">
//                   Monday
//                 </div>
//                 <div className="border-primary/50 tracking-none bg-secondary text-primary min-w-30 border border-t-0 border-r-0 p-6 text-xs font-normal lg:text-sm">
//                   Tuesday
//                 </div>
//                 <div className="border-primary/50 tracking-none bg-secondary text-primary min-w-30 border border-t-0 border-r-0 p-6 text-xs font-normal lg:text-sm">
//                   Wednesday
//                 </div>
//                 <div className="border-primary/50 tracking-none bg-secondary text-primary min-w-30 border border-t-0 border-r-0 p-6 text-xs font-normal lg:text-sm">
//                   Thursday
//                 </div>
//                 <div className="border-primary/50 tracking-none bg-secondary text-primary min-w-30 border border-t-0 border-r-0 p-6 text-xs font-normal lg:text-sm">
//                   Friday
//                 </div>
//                 <div className="border-primary/50 tracking-none bg-secondary text-primary min-w-30 border border-t-0 border-r-0 p-6 text-xs font-normal lg:text-sm">
//                   Saturday
//                 </div>
//                 <div className="border-primary/50 tracking-none bg-secondary text-primary min-w-30 border border-t-0 border-r-0 p-6 text-xs font-normal lg:text-sm">
//                   Sunday
//                 </div>

//                 <div className="grid-row group contents">
//                   <div className="border-primary/50 bg-secondary text-primary sticky left-0 z-10 border border-x-0 border-t-0 pt-8 align-middle text-xs font-normal tracking-wider opacity-100 group-last:border-b-0 lg:text-sm">
//                     7 AM
//                   </div>

//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#d7debf",
//                         height: "4rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Yoga (All Levels)
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#d7debf",
//                         height: "4rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Yoga (All Levels)
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#d7debf",
//                         height: "4rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Yoga (All Levels)
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#d7debf",
//                         height: "4rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Yoga (All Levels)
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#d7debf",
//                         height: "4rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Yoga (All Levels)
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#d7debf",
//                         height: "4rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Yoga (All Levels)
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#d7debf",
//                         height: "4rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Yoga (All Levels)
//                     </h4>
//                   </div>
//                 </div>
//                 <div className="grid-row group contents">
//                   <div className="border-primary/50 bg-secondary text-primary sticky left-0 z-10 border border-x-0 border-t-0 pt-8 align-middle text-xs font-normal tracking-wider opacity-100 group-last:border-b-0 lg:text-sm">
//                     12 PM
//                   </div>

//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#ced5ce",
//                         height: "5.5rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Sound Healing
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#ced5ce",
//                         height: "5.5rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Sound Healing
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#ced5ce",
//                         height: "5.5rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Sound Healing
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#ced5ce",
//                         height: "5.5rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Sound Healing
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#ced5ce",
//                         height: "5.5rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Sound Healing
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#ced5ce",
//                         height: "5.5rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Sound Healing
//                     </h4>
//                   </div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0">
//                     <h4
//                       className="pointer-events-auto absolute m-auto flex cursor-pointer items-center rounded-md p-1 pl-2 text-left text-sm font-normal transition-opacity duration-300 hover:opacity-80"
//                       style={{
//                         backgroundColor: "#ced5ce",
//                         height: "5.5rem",
//                         marginTop: "0rem",
//                         width: "90%",
//                         left: "5%",
//                       }}
//                     >
//                       Sound Healing
//                     </h4>
//                   </div>
//                 </div>
//                 <div className="grid-row group contents">
//                   <div className="border-primary/50 bg-secondary text-primary sticky left-0 z-10 border border-x-0 border-t-0 pt-8 align-middle text-xs font-normal tracking-wider opacity-100 group-last:border-b-0 lg:text-sm">
//                     1 PM
//                   </div>

//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0"></div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0"></div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0"></div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0"></div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0"></div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0"></div>
//                   <div className="border-primary/50 pointer-events-none relative h-20 border border-t-0 border-r-0 p-2 group-last:border-b-0"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <footer className="container mx-auto mt-10 flex justify-between px-32 text-sm sm:mt-11 lg:mt-10">
//           <nav>
//             <a
//               href="https://drive.google.com/file/d/1HOiTV2UmmH4joOGKhwJhYdPIeN3Y9NfK/view"
//               rel="noopener noreferrer"
//               target="_blank"
//               className="text-primary font-normal uppercase"
//             >
//               Download PDF
//             </a>
//           </nav>
//         </footer>
//       </div>
//     </div>
//   </div>
// </section>
// <section
//   data-slice-type="call_to_action"
//   data-slice-variation="default"
//   className="container mx-auto"
// >
//   <div className="mx-auto max-w-[24.35rem] space-y-5 sm:space-y-6 lg:max-w-120 xl:space-y-5">
//     <div className="space-y-em text-center" id="cta-15-text-block">
//       <h4 className="font-americana text-primary text-[1.75rem] leading-snug sm:text-[1.625rem] lg:text-[1.875rem]">
//         Reconnect With Yourself In Luxurious Comfort.
//       </h4>
//     </div>
//     <ul className="text-primary flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8">
//       <li className="cta-buttons inline-block">
//         <button className="text-base font-normal uppercase">
//           Book Your Stay
//         </button>
//       </li>
//     </ul>
//   </div>
// </section>
