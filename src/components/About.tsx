import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge AI solutions',
      icon: '🚀',
    },
    {
      title: 'Excellence',
      description: 'Delivering premium quality in every project',
      icon: '⭐',
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparent practices',
      icon: '🤝',
    },
    {
      title: 'Growth',
      description: 'Continuous learning and improvement',
      icon: '📈',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-gray-100 mb-4">
            About DasMaxx AI Studio
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            Founded by a U.S. Army veteran and seasoned tech professional, we're passionate about
            transforming businesses through innovative AI solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 dark:bg-primary-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-secondary-900 dark:text-gray-100">
              Our Mission
            </h3>
            <p className="text-secondary-600 dark:text-gray-300">
              At DasMaxx AI Studio, we're dedicated to empowering businesses with cutting-edge
              AI solutions that drive growth and innovation. Our team combines technical expertise
              with creative thinking to deliver exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 dark:bg-dark-card p-4 rounded-lg">
                <div className="text-primary-600 dark:text-primary-400 font-bold">100+</div>
                <div className="text-sm text-secondary-600 dark:text-gray-300">Happy Clients</div>
              </div>
              <div className="bg-primary-50 dark:bg-dark-card p-4 rounded-lg">
                <div className="text-primary-600 dark:text-primary-400 font-bold">200+</div>
                <div className="text-sm text-secondary-600 dark:text-gray-300">Projects Delivered</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-secondary-900 dark:text-gray-100 mb-2">{value.title}</h4>
              <p className="text-secondary-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 