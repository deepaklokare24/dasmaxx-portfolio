import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does DasMaxx AI Studio offer?',
      answer: 'We offer a comprehensive range of services including AI-generated art and portraits, video creation, website design and development, e-commerce solutions, and brand development. Our team combines cutting-edge AI technology with creative expertise to deliver exceptional results.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: "Project timelines vary depending on the scope and complexity. A typical website project takes 2-4 weeks, while AI-generated content can be delivered within 1-2 weeks. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on your specific requirements. We offer competitive rates and can work with various budgets. Contact us for a free consultation and custom quote tailored to your needs.',
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, we provide comprehensive post-launch support including maintenance, updates, and technical assistance. We offer various support packages to ensure your digital assets continue to perform optimally.',
    },
    {
      question: 'How do you ensure the quality of AI-generated content?',
      answer: 'Our AI-generated content goes through a rigorous quality control process. Our team of experts reviews and refines all AI outputs to ensure they meet our high standards and align with your brand guidelines.',
    },
    {
      question: 'Can you help with existing projects or only new ones?',
      answer: 'We can help with both new projects and improvements to existing ones. Whether you need a complete overhaul or specific enhancements, our team can assess your current setup and provide tailored solutions.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-primary-50 dark:from-dark-card to-white dark:to-dark-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-gray-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
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
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="text-lg font-medium text-secondary-900 dark:text-gray-100 text-left">
                  {faq.question}
                </span>
                <motion.svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white dark:bg-dark-card mt-2 rounded-xl shadow-lg">
                      <p className="text-secondary-600 dark:text-gray-300">{faq.answer}</p>
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
          className="text-center mt-12"
        >
          <p className="text-secondary-600 dark:text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 dark:hover:bg-primary-500 transition-colors"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 