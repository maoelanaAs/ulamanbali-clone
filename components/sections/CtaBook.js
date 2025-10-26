export default function CtaBook() {
  return (
    <section className="container mx-auto px-32">
      <div className="mx-auto max-w-125 space-y-5 sm:space-y-6 lg:max-w-160 xl:space-y-5">
        <div className="space-y-em text-center" id="cta-4-text-block">
          <h4 className="heading display-4">
            Experience a blend of nature, comfort and luxury like never before.
          </h4>
        </div>
        <ul className="text-primary flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8">
          <li className="cta-buttons inline-block">
            <button className="ui-underline-anim reverse btn-primary">
              Book Your Stay
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
