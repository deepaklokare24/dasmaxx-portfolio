import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaTag, 
  FaArrowRight,
  FaCode,
  FaRobot,
  FaMobileAlt,
  FaChartLine
} from 'react-icons/fa';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { name: 'All', icon: <FaCode className="w-5 h-5" /> },
    { name: 'Development', icon: <FaCode className="w-5 h-5" /> },
    { name: 'AI & ML', icon: <FaRobot className="w-5 h-5" /> },
    { name: 'Mobile', icon: <FaMobileAlt className="w-5 h-5" /> },
    { name: 'Business', icon: <FaChartLine className="w-5 h-5" /> },
  ];

  const posts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain software applications.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: {
        name: 'Alex Thompson',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
      category: 'AI & ML',
    },
    {
      title: 'Building Scalable Cloud Infrastructure',
      excerpt: 'Best practices for designing and implementing cloud infrastructure that grows with your business.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      date: 'March 12, 2024',
      readTime: '7 min read',
      author: {
        name: 'Sarah Chen',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
      category: 'Development',
    },
    {
      title: 'Mobile App Development Trends 2024',
      excerpt: 'Discover the latest trends and technologies shaping the future of mobile application development.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      date: 'March 10, 2024',
      readTime: '6 min read',
      author: {
        name: 'Michael Rodriguez',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      },
      category: 'Mobile',
    },
  ];

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in technology and software development
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
          {filteredPosts.map((post, index) => (
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
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {post.author.name}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                    {post.category}
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    Read More
                    <FaArrowRight className="w-4 h-4" />
                  </a>
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
            href="#"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 