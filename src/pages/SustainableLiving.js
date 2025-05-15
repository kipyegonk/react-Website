import React from "react";

const SustainableLiving = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="block text-gray-500">ABOUT</span>
                <span className="block text-green-600">SUSTAINABLE LIVING</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Future Earth's approach to sustainable living combines affordable housing with 
                self-development opportunities to create thriving communities.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-200 h-64 md:h-96 rounded-lg flex items-center justify-center">
              [Sustainable Living Image]
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">PRODUCT INTRODUCTION</h2>
          <div className="space-y-8">
            <p className="text-lg text-center">
              To enable 'self-development' at scale so as to break the poverty cycle, Future
              Earth found its solution in the iRise Homes™ & Gardens initiative.
            </p>
            <p className="text-lg text-center">
              Future Earth builds affordable houses and delivers them with a variety of
              facilities that provide families the basic requirements and the tools for self-
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">OUR PARTNERS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Partner logos would go here */}
          <div className="bg-gray-200 h-24 flex items-center justify-center">Partner 1</div>
          <div className="bg-gray-200 h-24 flex items-center justify-center">Partner 2</div>
          <div className="bg-gray-200 h-24 flex items-center justify-center">Partner 3</div>
          <div className="bg-gray-200 h-24 flex items-center justify-center">Partner 4</div>
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HOME</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">OUR VISION / PROMISE</a></li>
              <li><a href="#" className="hover:text-green-400">BENEFITS</a></li>
              <li><a href="#" className="hover:text-green-400">PATHWAY</a></li>
              <li><a href="#" className="hover:text-green-400">ONGOING PROJECTS</a></li>
              <li><a href="#" className="hover:text-green-400">PARTNERS</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">SUSTAINABLE LIVING</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-400 font-semibold">ABOUT SUSTAINABLE LIVING</a></li>
              <li><a href="#" className="hover:text-green-400">PRODUCT INTRODUCTION</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">OUR STORY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">WHAT WE DO</a></li>
              <li><a href="#" className="hover:text-green-400">WHO WE ARE</a></li>
              <li><a href="#" className="hover:text-green-400">OUR PARTNERS</a></li>
              <li><a href="#" className="hover:text-green-400">NEWS UPDATES</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400">REGIONAL CONTACT US</a></li>
              <li><a href="#" className="hover:text-green-400">CONTACT US FORM</a></li>
            </ul>
            <div className="mt-4">
              <p>Future Earth, Suite 380</p>
              <p>1839 S Alma School Rd</p>
              <p>Mesa, AZ 85210 USA</p>
              <p className="mt-2">480 649 4127</p>
            </div>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              GET IN TOUCH
            </button>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-green-400">f</a>
              <a href="#" className="hover:text-green-400">¥</a>
              <a href="#" className="hover:text-green-400">in</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2021 Future Earth Sustainable Living</p>
        </div>
      </footer>
    </div>
  );
};

export default SustainableLiving;