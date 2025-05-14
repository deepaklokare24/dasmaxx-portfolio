import { motion } from 'framer-motion';
import { useState } from 'react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Technology' },
    { id: 'design', name: 'Design & Branding' },
    { id: 'business', name: 'Business & Strategy' },
  ];

  const posts = [
    {
      title: 'The Future of AI in Creative Industries',
      category: 'ai',
      excerpt: 'Exploring how artificial intelligence is revolutionizing creative workflows and artistic expression.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: {
        name: 'Sarah Chen',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
    },
    {
      title: 'Building a Strong Brand Identity in the Digital Age',
      category: 'design',
      excerpt: 'Learn how to create a memorable brand presence that resonates with your target audience.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      date: 'March 10, 2024',
      readTime: '4 min read',
      author: {
        name: 'Michael Rodriguez',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
    },
    {
      title: 'E-commerce Trends to Watch in 2024',
      category: 'business',
      excerpt: 'Discover the latest trends shaping the future of online retail and customer experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      date: 'March 5, 2024',
      readTime: '6 min read',
      author: {
        name: 'Emily Thompson',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      },
    },
  ];

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Explore our thoughts on AI, design, and business strategy
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
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-secondary-900">{post.author.name}</div>
                    <div className="text-sm text-secondary-500">{post.date}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-secondary-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-600">{post.readTime}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-600 font-medium hover:text-primary-700"
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.article>
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
            className="px-8 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 