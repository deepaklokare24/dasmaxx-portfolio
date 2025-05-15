import { motion } from 'framer-motion';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "They built my online clothing store and designed my ad videos too — I didn't know tech could look this good.",
      author: "A. R.",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      quote: "My business went from zero visibility to a complete brand presence. All I did was tell them my vision.",
      author: "J. V.",
      role: "Health Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      quote: "The AI-powered tools they implemented have saved us countless hours and improved our customer engagement.",
      author: "M. K.",
      role: "E-commerce Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary-50 dark:from-dark-card to-white dark:to-dark-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-gray-100 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience with DasMaxx AI Studio
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-card p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <svg
                    className="w-12 h-12 text-primary-200 dark:text-primary-900/20 mb-4 mx-auto md:mx-0"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-xl text-secondary-600 dark:text-gray-300 mb-6">
                    {testimonials[activeIndex].quote}
                  </p>
                  <div>
                    <div className="font-bold text-secondary-900 dark:text-gray-100">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-primary-600 dark:text-primary-400">{testimonials[activeIndex].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-dark-card shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-dark-card shadow-md hover:shadow-lg transition-shadow"
            >
              <svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex 
                    ? 'bg-primary-600 dark:bg-primary-400' 
                    : 'bg-primary-200 dark:bg-primary-900/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 