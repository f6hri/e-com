export default function HeroSection() {
  return (
    <section className="relative">
      <img src="/stock/tv.jpg" width="100%" alt="tv" />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center">
        <div className="ml-32 max-w-[450px]">
          <h2 className="text-4xl font-bold">4K UHD T.V</h2>
          <p className="my-2 text-md leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus fuga officia quaerat, exercitationem enim porro.
          </p>
          <button className="px-9 py-3 bg-blue-500 rounded-md text-white font-semibold mt-4">
            Satın Al
          </button>
        </div>
      </div>
    </section>
  );
}
