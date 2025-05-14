import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      category: 'Creative & AI-Powered Services',
      items: [
        {
          title: 'AI-Generated Portraits & Art',
          description: 'Stylized or hyper-realistic digital portraits for branding, avatars, or gifting.',
          icon: '🎨',
        },
        {
          title: 'AI-Generated Video Creation',
          description: 'Short-form, promo, and social media videos using AI tools blended with human editing.',
          icon: '🎥',
        },
        {
          title: 'Resume + Personal Branding',
          description: 'AI-enhanced resumes, personal landing pages, and LinkedIn optimization.',
          icon: '📝',
        },
        {
          title: 'Content Automation',
          description: 'Flyers, blog posts, ad copy, and email templates using customized AI prompts.',
          icon: '🤖',
        },
      ],
    },
    {
      category: 'Website & E-Commerce Services',
      items: [
        {
          title: 'Website Design & Setup',
          description: 'One-page or multi-page sites for portfolios, personal brands, or services.',
          icon: '🌐',
        },
        {
          title: 'E-Commerce Development',
          description: 'Full online store setup with product catalog, payment gateway, and shipping.',
          icon: '🛍️',
        },
        {
          title: 'AI-Enhanced Site Tools',
          description: 'Live chatbots, product description automation, and smart SEO optimization.',
          icon: '⚡',
        },
        {
          title: 'Maintenance & Support',
          description: 'Monthly updates, uptime monitoring, and content refresh services.',
          icon: '🔧',
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Comprehensive digital solutions powered by cutting-edge AI technology
          </p>
        </motion.div>

        {services.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-8">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-secondary-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 