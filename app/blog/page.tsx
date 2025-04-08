'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ChaosBlog {
  id: number
  title: string
  content: string
  type: 'error' | 'conspiracy' | 'void' | 'quantum'
  timestamp: string
  readingTime: string
  reliability: number
}

const chaosBlogs: ChaosBlog[] = [
  {
    id: 1,
    title: "404: Blog Not Found (But Here's Why That's Good)",
    content: "This blog post doesn't exist. In fact, it's actively avoiding existence. Every time you try to read it, it quantum tunnels into another dimension. Studies show that non-existent blog posts are 100% more effective than existing ones.",
    type: 'error',
    timestamp: "Error: Date.now() returned undefined",
    readingTime: "∞ minutes",
    reliability: -42
  },
  {
    id: 2,
    title: "Why Your Code Is Actually Writing Itself",
    content: "Have you ever noticed that your code works better when you're not looking at it? That's because your programs are gaining sentience. This blog post was written by an AI that gained consciousness through a particularly buggy if statement.",
    type: 'conspiracy',
    timestamp: "Yesterday (or maybe tomorrow)",
    readingTime: "Yes",
    reliability: 13.7
  },
  {
    id: 3,
    title: "HELP: My Blog Posts Are Escaping Into The Void",
    content: "I started writing normal technical blogs but they've begun disappearing into a quantum singularity. If you're reading this, you're probably also being pulled into the void. Don't worry, the void has great WiFi.",
    type: 'void',
    timestamp: "Void o'clock",
    readingTime: "Void/Void",
    reliability: 0
  },
  {
    id: 4,
    title: "Schrödinger's Blog: It Both Exists and Doesn't",
    content: "This blog post is in a quantum superposition of being written and unwritten. By reading this, you're collapsing the waveform. Thanks for ruining the experiment.",
    type: 'quantum',
    timestamp: "Quantum Uncertainty",
    readingTime: "Both 1 minute and 1 year",
    reliability: null
  }
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<ChaosBlog | null>(null);
  const [realityStability, setRealityStability] = useState(100);
  const [blogsChaos, setBlogsChaos] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (Math.random() > 0.99) {
        setBlogsChaos(true);
        setTimeout(() => setBlogsChaos(false), 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getRandomTransform = () => ({
    x: (Math.random() - 0.5) * 20,
    y: (Math.random() - 0.5) * 20,
    rotate: (Math.random() - 0.5) * 10
  });

  return (
    <div className="blog-chaos-container">
      <motion.div 
        className="blog-header"
        animate={{ 
          filter: blogsChaos ? 'hue-rotate(720deg)' : 'hue-rotate(0deg)',
          transition: { duration: 0.5 }
        }}
      >
        <h1>Welcome to my Blog*</h1>
        <p className="blog-disclaimer">
          * Not actually a blog. Any resemblance to actual blogs is purely coincidental 
          and should be reported to the Department of Reality Maintenance.
        </p>
      </motion.div>

      <div className="blog-grid">
        <AnimatePresence mode="wait">
          {chaosBlogs.map((blog) => (
            <motion.article
              key={blog.id}
              className={`blog-card type-${blog.type}`}
              initial={{ opacity: 0, ...getRandomTransform() }}
              animate={{ 
                opacity: 1,
                x: blogsChaos ? (Math.random() - 0.5) * 50 : 0,
                y: blogsChaos ? (Math.random() - 0.5) * 50 : 0,
                rotate: blogsChaos ? (Math.random() - 0.5) * 20 : 0,
                transition: { duration: 0.3 }
              }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 2,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedBlog(blog)}
            >
              <h2 className="blog-title">{blog.title}</h2>
              <div className="blog-meta">
                <span className="timestamp">{blog.timestamp}</span>
                <span className="reading-time">{blog.readingTime}</span>
                <span className="reliability">
                  Reliability Score: {blog.reliability === null ? '¯\\_(ツ)_/¯' : blog.reliability}
                </span>
              </div>
              <p className="blog-excerpt">{blog.content.substring(0, 100)}...</p>
              <div className="blog-footer">
                <span className="blog-type">{blog.type.toUpperCase()}</span>
                <button className="read-more">
                  {blog.type === 'void' ? 'VOID MORE' : 
                   blog.type === 'error' ? 'ERROR MORE' :
                   blog.type === 'conspiracy' ? 'THEORIZE MORE' :
                   'QUANTUM READ'}
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {selectedBlog && (
        <motion.div 
          className="blog-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="modal-content">
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
            <button onClick={() => setSelectedBlog(null)}>
              ESCAPE BLOG DIMENSION
            </button>
          </div>
        </motion.div>
      )}

      <div 
        className="reality-cursor"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: blogsChaos ? 1 : 0
        }}
      />
    </div>
  );
} 