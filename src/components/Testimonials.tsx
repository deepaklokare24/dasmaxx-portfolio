import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "JDMaxx transformed our business with their AI solutions. The team's expertise and dedication to delivering high-quality results exceeded our expectations. Their innovative approach helped us achieve significant improvements in efficiency and customer satisfaction.",
      author: "Sarah Johnson",
      role: "CTO, TechInnovate Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5
    },
    {
      quote: "Working with JDMaxx on our mobile app development was a game-changer. Their attention to detail, technical expertise, and commitment to deadlines made the entire process smooth and successful. The end result was exactly what we needed.",
      author: "Michael Chen",
      role: "Product Director, MobileFirst Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5
    },
    {
      quote: "The AI-powered analytics platform developed by JDMaxx has revolutionized our data processing capabilities. Their team's deep understanding of both technology and business needs resulted in a solution that perfectly aligns with our goals.",
      author: "Emily Rodriguez",
      role: "Data Science Lead, AnalyticsPro",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      rating: 5
    },
    {
      quote: "JDMaxx's cloud infrastructure solutions have significantly improved our system's reliability and scalability. Their proactive approach to security and performance optimization has made a substantial impact on our operations.",
      author: "David Kim",
      role: "Infrastructure Manager, CloudScale Tech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5
    },
    {
      quote: "The e-commerce platform developed by JDMaxx has helped us achieve remarkable growth in online sales. Their understanding of user experience and technical implementation was outstanding. A truly professional team to work with.",
      author: "Lisa Thompson",
      role: "E-commerce Director, RetailPlus",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      rating: 5
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <FaQuoteLeft className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-3" />
                  <p className="text-base text-gray-700 dark:text-gray-200 italic line-clamp-4">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-dark-card shadow-md hover:shadow-lg transition-all duration-300 text-primary-600 dark:text-primary-400"
              aria-label="Previous testimonials"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2 items-center">
              {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-primary-600 dark:bg-primary-400 w-6'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-dark-card shadow-md hover:shadow-lg transition-all duration-300 text-primary-600 dark:text-primary-400"
              aria-label="Next testimonials"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 