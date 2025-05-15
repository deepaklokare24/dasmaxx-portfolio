import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaLightbulb } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-primary-50 dark:from-dark-bg dark:to-dark-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300">
              Transforming Ideas into Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              We craft innovative software solutions that drive business growth and deliver exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 dark:bg-dark-card dark:text-primary-400 dark:hover:bg-dark-card/80"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-dark-card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto dark:bg-primary-900/20">
                <FaRocket className="text-2xl text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">Quick turnaround times without compromising quality</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-dark-card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto dark:bg-primary-900/20">
                <FaChartLine className="text-2xl text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-400">Track record of successful project deliveries</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-dark-card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto dark:bg-primary-900/20">
                <FaLightbulb className="text-2xl text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Innovative Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">Cutting-edge technology and creative approaches</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center dark:border-gray-600">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-gray-400 rounded-full mt-2 dark:bg-gray-600"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 