export default function Banner() {
  return (
    <>
      <div className="relative max-w-7xl mx-auto h-[500px] rounded-lg bg-gray-800 overflow-hidden mt-16">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover opacity-70"
        src="https://www.tastingtable.com/img/gallery/steakburger-vs-hamburger-whats-the-biggest-difference/l-intro-1686839258.jpg"
        alt="Forest"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="p-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Order your food now</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            Discover the beauty of nature with breathtaking landscapes and serene environments.
            Immerse yourself in the calm of the wilderness.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-100 text-black font-semibold rounded-md hover:bg-gray-200 transition">
            Learn More!
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
