const Banner = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Left Content Area */}
        <div className="max-w-xl">
          {/* Two-tone Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.15]">
            Build Your Ideal{" "}
            <span className="text-brand-gradient block sm:inline">
              Development Stack
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
