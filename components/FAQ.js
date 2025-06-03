import React, { useState } from "react";

const faqData = [
  {
    question: "How can I contact Inkyy Team?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    question: "What services do you offer?",
    answer: "lorem",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "lorem",
  },
  {
    question: " How long does it take to design and develop a website?",
    answer:
      "lorem",
  },
  {
    question: "Do you require a deposit for projects?",
    answer: "lorem",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section 
      className="py-16 bg-gray-100" // Añadido el fondo de la sección
      aria-label="Frequently Asked Questions section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex lg:flex-row flex-col items-start gap-12"> {/* Contenedor general consistente */}
        {/* Título alineado a la izquierda */}
        <div className="lg:w-1/4 mb-8 lg:mb-0"> 
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-left"> {/* Clase de título consistente */}
            Frequently Asked <br /> Questions
          </h2>
          {/* Puedes añadir un texto introductorio aquí si lo deseas, similar a la sección de pricing */}
          {/* <p className="text-gray-700 text-lg leading-relaxed">
               Here are some common questions we get. Feel free to reach out if you have more.
          </p> */}
        </div>

        {/* Preguntas a la derecha */}
        <div className="lg:w-3/4 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md"> {/* Fondo, bordes redondeados y sombra de card */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition"
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                <span className="text-2xl text-indigo-600">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-lg leading-relaxed bg-white border-t"> {/* Texto consistente */}
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;