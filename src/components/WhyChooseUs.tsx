import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Enterprise-Grade Security",
      description: "Our solutions are built with security-first principles, ensuring your data and systems are protected at every level.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning-Fast Performance",
      description: "Optimized code and infrastructure ensure your applications run at peak performance, even under heavy load.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation-Driven",
      description: "We stay ahead of the curve, implementing cutting-edge technologies to give your business a competitive edge.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Dedicated Support",
      description: "Our team of experts is always ready to assist you, ensuring smooth operations and quick issue resolution.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white dark:from-dark-bg to-primary-50 dark:to-dark-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-gray-100 mb-4">
            Why Choose DasMaxx?
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-gray-100 mb-3">
                {reason.title}
              </h3>
              <p className="text-secondary-600 dark:text-gray-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-primary-600 dark:bg-primary-900/20 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white dark:text-gray-100 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-primary-100 dark:text-gray-300 mb-6">
                Let's discuss how our expertise can help you achieve your goals. Schedule a free consultation today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 rounded-md font-medium hover:bg-primary-50 dark:hover:bg-dark-card/80 transition-colors"
              >
                Schedule a Call
              </motion.button>
            </div>
            <div className="hidden md:block">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 