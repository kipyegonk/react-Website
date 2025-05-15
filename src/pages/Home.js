import React from "react";

const HomeScreen = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section with Green Background Image */}
      <section 
        className="relative py-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/green.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center">
          
          {/* Yellow Circle with House Image (Left Side) */}
          <div className="mb-10 md:mb-0 md:mr-12 flex-shrink-0 transform hover:scale-105 transition-transform">
            <div className="w-52 h-52 rounded-full bg-yellow-400 flex items-center justify-center ">
              <img 
                src="/house.png" 
                alt="iRise House" 
                className="w-90 h-90 object-contain"
              />
            </div>
          </div>
          
          {/* Text Content (*/}
          <div className="text-left text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="block">OUR VISION &</span>
              <span className="block">PROMISE</span>
            </h1>
            <p className="text-lg md:text-xl my-6 max-w-2xl">
              Our vision is to create self-sustaining, thriving communities in rural Africa and other
              marginalized parts of the world by introducing a model that allows for mass development.
            </p>
            <button className="bg-green-600 hover:bg-green-800 text-white px-8 py-3 rounded-full transition-colors shadow-lg">
              Scroll to Explore
            </button>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">BENEFITS</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          The iRise houses are affordable, simple-to-build with sustainable wood and powered by
          renewable solar energy. In addition, they come with the following benefits:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 font-bold text-xl mb-4">01</div>
            <p>The iRise housing structure can be mass-manufactured affordably</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 font-bold text-xl mb-4">02</div>
            <p>The house is portable to maintain resale value and make the house financially viable.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 font-bold text-xl mb-4">03</div>
            <p>The houses can be easily and quickly assembled on-site by inexperienced women and youth.</p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">ONGOING PROJECTS</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            For Future Earth to deliver thRight Side) e country's rural transformation agenda, GoMalawi and CDI are
            supporting the organization by providing them with 500,000 hectares of land for co-operative
            agriculture, sustainable reforestation, and the delivery of 500,000 homes. Here are the current
            projects we're working on:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">MALAWI PROJECT</h3>
              {/* Placeholder for image */}
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">Malawi Project Image</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">MOZAMBIGUE PROJECT</h3>
              {/* Placeholder for image */}
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">Mozambique Project Image</div>
            </div>
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
              <li><a href="#" className="hover:text-green-400">ABOUT SUSTAINABLE LIVING</a></li>
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
              <a href="#">f</a>
              <a href="#">¥</a>
              <a href="#">in</a>
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

export default HomeScreen;