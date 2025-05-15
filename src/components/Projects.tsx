import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaGlobe, 
  FaRobot, 
  FaPalette, 
  FaMobileAlt, 
  FaShoppingCart
} from 'react-icons/fa';

const Projects = () => {
  const [activeCategory] = useState('all');

  const categories = [
    { name: 'All', icon: <FaGlobe className="w-5 h-5" /> },
    { name: 'Web Development', icon: <FaGlobe className="w-5 h-5" /> },
    { name: 'AI Solutions', icon: <FaRobot className="w-5 h-5" /> },
    { name: 'Mobile Apps', icon: <FaMobileAlt className="w-5 h-5" /> },
    { name: 'E-commerce', icon: <FaShoppingCart className="w-5 h-5" /> },
    { name: 'Branding', icon: <FaPalette className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Enterprise-grade analytics solution with machine learning capabilities',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      category: 'AI Solutions',
      tags: ['AI', 'Analytics', 'Machine Learning'],
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern online store with advanced features and seamless UX',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      category: 'E-commerce',
      tags: ['E-commerce', 'Web Development', 'UX Design'],
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and user-friendly banking application for iOS and Android',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      category: 'Mobile Apps',
      tags: ['Mobile', 'FinTech', 'Security'],
    },
    {
      title: 'Corporate Website Redesign',
      description: 'Complete overhaul of company website with modern design',
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd',
      category: 'Web Development',
      tags: ['Web Design', 'Branding', 'UX'],
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management system with predictive analytics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
      category: 'AI Solutions',
      tags: ['AI', 'Supply Chain', 'Predictive Analytics'],
    },
    {
      title: 'Smart Healthcare Platform',
      description: 'AI-driven healthcare management system with patient analytics',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      category: 'AI Solutions',
      tags: ['AI', 'Healthcare', 'Data Analytics'],
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm"
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
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 