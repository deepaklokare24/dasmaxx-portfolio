import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaRobot, 
  FaMobileAlt, 
  FaShoppingCart, 
  FaChartLine, 
  FaServer,
  FaCloud,
  FaShieldAlt
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'Tailored solutions built with modern technologies to meet your specific business needs.',
      category: 'Development'
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes and provide data-driven insights.',
      category: 'AI'
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      category: 'Development'
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with advanced features and seamless payment integration.',
      category: 'Development'
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: 'Business Intelligence',
      description: 'Data analytics and visualization tools to drive informed decision-making.',
      category: 'AI'
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Secure and scalable cloud solutions for optimal performance.',
      category: 'Infrastructure'
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: 'DevOps & Automation',
      description: 'Streamlined development workflows and automated deployment pipelines.',
      category: 'Infrastructure'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      category: 'Infrastructure'
    }
  ];

  const categories = ['All', 'Development', 'AI', 'Infrastructure'];

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 