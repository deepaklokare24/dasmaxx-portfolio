import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaCode, 
  FaRobot, 
  FaMobileAlt, 
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaUsers
} from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does JDMaxx offer?',
      answer: 'JDMaxx offers a comprehensive range of services including custom software development, AI & machine learning solutions, mobile app development, web development, cloud services, and digital transformation consulting. We specialize in creating innovative, scalable, and secure solutions for businesses of all sizes.',
      icon: <FaCode className="w-6 h-6 text-primary-600 dark:text-primary-400" />
    },
    {
      question: 'How does JDMaxx approach AI implementation?',
      answer: 'Our AI implementation process begins with a thorough analysis of your business needs and data infrastructure. We then design and develop custom AI solutions that integrate seamlessly with your existing systems. Our approach focuses on practical, business-value-driven AI applications that deliver measurable results.',
      icon: <FaRobot className="w-6 h-6 text-primary-600 dark:text-primary-400" />
    },
    {
      question: 'What is your mobile app development process?',
      answer: 'Our mobile app development process follows a structured approach: 1) Requirements gathering and analysis, 2) UI/UX design, 3) Development and testing, 4) Deployment and maintenance. We ensure high-quality, scalable, and user-friendly mobile applications that work across all major platforms.',
      icon: <FaMobileAlt className="w-6 h-6 text-primary-600 dark:text-primary-400" />
    },
    {
      question: 'How do you ensure project success?',
      answer: 'We ensure project success through our proven methodology: clear communication, regular progress updates, agile development practices, thorough testing, and continuous client collaboration. Our experienced team maintains high standards of quality and delivers projects on time and within budget.',
      icon: <FaChartLine className="w-6 h-6 text-primary-600 dark:text-primary-400" />
    },
    {
      question: 'What security measures do you implement?',
      answer: 'Security is our top priority. We implement industry-standard security measures including data encryption, secure coding practices, regular security audits, and compliance with international security standards. Our solutions are designed with security-first principles to protect your data and systems.',
      icon: <FaShieldAlt className="w-6 h-6 text-primary-600 dark:text-primary-400" />
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. A typical project can range from 2-3 months for smaller applications to 6-12 months for complex enterprise solutions. We provide detailed project timelines during the initial consultation and maintain regular updates throughout development.',
      icon: <FaClock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team options. Pricing is determined based on project scope, complexity, and requirements. We provide detailed quotes and ensure transparency in all financial aspects of the project.',
      icon: <FaDollarSign className="w-6 h-6 text-primary-600 dark:text-primary-400" />
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance services. This includes regular updates, bug fixes, performance optimization, and technical support. We offer various support packages to ensure your systems continue to run smoothly after deployment.',
      icon: <FaUsers className="w-6 h-6 text-primary-600 dark:text-primary-400" />
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-dark-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {faq.icon}
                  <h3 className="text-lg font-semibold text-left text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <FaChevronUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 dark:bg-dark-card/50 rounded-b-xl">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 