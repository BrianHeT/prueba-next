import React from 'react';

const services = [
  { title: "Web Design", desc: "Desde el concepto hasta el lanzamiento, creamos sitios web impresionantes y centrados en el usuario que elevan tu marca y atraen a tu audiencia." },
  { title: "UI/UX Design", desc: "Desde el concepto hasta el lanzamiento, creamos sitios web impresionantes y centrados en el usuario que elevan tu marca y atraen a tu audiencia." },
  { title: "Responsive Design", desc: "Desde el concepto hasta el lanzamiento, creamos sitios web impresionantes y centrados en el usuario que elevan tu marca y atraen a tu audiencia." },
  { title: "Custom Development", desc: "Desde el concepto hasta el lanzamiento, creamos sitios web impresionantes y centrados en el usuario que elevan tu marca y atraen a tu audiencia." },
  {
    title: "Webflow",
    desc: "Aprovechamos el poder de Webflow para construir sitios web visualmente impresionantes y altamente funcionales sin escribir una sola línea de código.",
    imageUrl: "/images/webflow.png" 
  },
  {
    title: "E-commerce Solutions",
    desc: "Desarrollamos soluciones de comercio electrónico robustas y seguras que impulsan las ventas y mejoran la experiencia de compra en línea.",
    imageUrl: "/images/customDev.png" 
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="py-20 " >
      <div className="max-w-7xl mx-auto px-4 text-left">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">What WeDo</h2>

        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense">
          {services.map((service, index) => {
            
            const isWebflow = service.title === "Webflow";
            const isEcommerce = service.title === "E-commerce Solutions";

            
            let cardClasses = "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all flex flex-col h-full";

            
            if (isWebflow || isEcommerce) { 
              cardClasses += " md:col-span-2";
            }

            return (
              <div
                key={index}
                className={cardClasses}
              >
                
                {isWebflow || isEcommerce ? ( 
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full h-full">
                    <div className="flex-1 text-left"> 
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                    <div className="flex-1 w-full md:w-auto flex items-center justify-center"> 
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-auto rounded-lg object-cover" 
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/000000?text=Image+Error"; }} 
                      />
                    </div>
                  </div>
                ) : (
                  
                  <>
                    <div className="text-blue-500 text-3xl mb-4">💡</div> 
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}