import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Websites' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'branding', name: 'Branding' },
  ];

  const projects = [
    {
      title: 'DasMaxxClothing.com',
      category: 'web',
      description: 'E-commerce platform for a modern clothing brand',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      tags: ['Shopify', 'E-commerce', 'AI Chatbot'],
    },
    {
      title: 'Portraits for Change',
      category: 'ai',
      description: 'Digital avatars for activist branding',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      tags: ['AI Art', 'Digital Portraits'],
    },
    {
      title: 'WellnessByRae.com',
      category: 'web',
      description: 'Personal wellness coach site with booking system',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
      tags: ['WordPress', 'Booking System'],
    },
    {
      title: 'MotivatorAI',
      category: 'ai',
      description: 'Social video reels for coaching content',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      tags: ['AI Video', 'Social Media'],
    },
    {
      title: 'BhaktiStore.in',
      category: 'web',
      description: 'India-based devotional product shop',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      tags: ['E-commerce', 'AI Upsell'],
    },
    {
      title: 'Brand Identity Package',
      category: 'branding',
      description: 'Complete branding solution for a tech startup',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      tags: ['Branding', 'Logo Design'],
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-gray-100 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and creative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 dark:bg-primary-500 text-white'
                  : 'bg-primary-50 dark:bg-dark-card text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
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
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-md font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 