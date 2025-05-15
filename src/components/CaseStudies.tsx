import { motion } from 'framer-motion';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "Fashion Retailer",
      challenge: "Legacy system causing slow load times and poor user experience",
      solution: "Implemented a modern, cloud-native architecture with AI-powered recommendations",
      results: [
        "300% increase in page load speed",
        "45% growth in conversion rate",
        "60% reduction in server costs"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    },
    {
      title: "AI-Powered Customer Service",
      client: "Global E-commerce Platform",
      challenge: "High customer support volume and slow response times affecting customer satisfaction.",
      solution: "Implemented an AI-powered chatbot system with natural language processing and machine learning capabilities.",
      results: [
        "60% reduction in response time",
        "85% customer satisfaction rate",
        "40% cost reduction in support operations"
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623"
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-gray-100 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform their operations and achieve remarkable results
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`order-2 md:order-${index % 2 === 0 ? '1' : '2'}`}>
                <div className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={study.logo}
                      alt={study.client}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-gray-100">
                        {study.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400">{study.client}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-secondary-900 dark:text-gray-100 mb-2">Challenge</h4>
                      <p className="text-secondary-600 dark:text-gray-300">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-secondary-900 dark:text-gray-100 mb-2">Solution</h4>
                      <p className="text-secondary-600 dark:text-gray-300">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-secondary-900 dark:text-gray-100 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-secondary-600 dark:text-gray-300">
                            <svg
                              className="w-5 h-5 text-primary-600 dark:text-primary-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`order-1 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 dark:hover:bg-primary-500 transition-colors"
          >
            View All Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 