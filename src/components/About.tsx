import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: 'Technical Excellence',
      description: 'We leverage cutting-edge technologies and best practices to deliver robust, scalable solutions.',
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: 'AI-First Approach',
      description: 'We integrate artificial intelligence to automate processes and enhance user experiences.',
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'User-Centric Design',
      description: 'Every solution is crafted with the end-user in mind, ensuring intuitive and engaging experiences.',
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: 'Business Impact',
      description: 'We focus on delivering measurable results that drive growth and efficiency for your business.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            About DasMaxx
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We are a team of passionate technologists and creative problem-solvers dedicated to transforming businesses through innovative software solutions. Our mission is to help companies thrive in the digital age by delivering cutting-edge technology that drives growth and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-500 dark:to-primary-300 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your business goals through innovative technology solutions.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 