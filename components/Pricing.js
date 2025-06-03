import React from "react";

const Pricing = () => {
  return (
    <section
      className="py-16 bg-gray-100"
      aria-label="Pricing and Services section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Pricing</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Choose the best plan that fits your needs and budget. We offer great
              value with premium support.
            </p>
          </div>

          <div className="bg-indigo-600 text-white rounded-2xl shadow-md p-6 max-w-sm lg:max-w-none mx-auto lg:mx-0">
            <h4 className="text-xl font-semibold mb-5">Let's schedule a meeting</h4>
            <button
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-full"
              aria-label="Schedule Meeting"
            >
              Schedule Meeting
            </button>
          </div>
        </div>

        <div className="lg:w-2/3"> 
          <div className="bg-white rounded-2xl shadow-md p-8 h-full flex flex-col justify-between"> 
            <div> 
             
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Unlimited Services</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8"> 
                Enjoy all the benefits with no limits on requests.
              </p>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 text-lg mb-8"> 
                
                <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited requests</p>
                <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited revisions</p>
                <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated support</p>
                <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Fast turnaround</p>
                <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Brand guidelines</p>
                <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Source files included</p>
              </div>
            </div>

            
            <div className="self-end mt-auto"> 
                <p className="text-gray-600 mb-2">Starting at</p>
                <div className="flex items-baseline mb-2">
                <span className="text-5xl font-extrabold text-gray-900">$3,250</span>
                <span className="text-2xl font-semibold text-gray-600">/mo</span>
                </div>
                {/* Opcional: una flecha a la derecha como en el diseño. Puedes usar un SVG */}
                <svg className="w-6 h-6 text-indigo-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;