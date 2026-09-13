const Banner = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.15]">
            Build Your Ideal{" "}
            <span className="text-brand-gradient block sm:inline">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="bg-brand-gradient text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-sm hover:opacity-95 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center"
            >
              Explore Technologies
            </a>

            <button
              type="button"
              className="border border-gray-200 bg-white text-gray-700 text-sm sm:text-base font-medium px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;