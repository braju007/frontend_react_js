import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './../css/Accordion.css';

const items = [
  {
    title: 'JavaScript Basics',
    content: 'Learn variables, functions, and loops in JavaScript.',
  },
  {
    title: 'React.js Overview',
    content: 'Understand components, state, and props in React.',
  },
  {
    title: 'Node.js',
    content: 'Basics of server-side development with Node.js.',
  },
  {
    title: 'Full-Stack Development',
    content: 'Build full-stack apps with React and Node.js.',
  },
];

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!items || items.length === 0) {
    return <div>No items available</div>;
  }
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-title"
            onClick={() => handleToggle(index)}
            aria-expanded={activeIndex === index}
          >
            {item.title}
            {activeIndex === index ? (
              <FaChevronUp style={{ float: 'right' }} />
            ) : (
              <FaChevronDown style={{ float: 'right' }} />
            )}
          </button>
          {activeIndex === index && (
            <div className="accordion-conent">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
