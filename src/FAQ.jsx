import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown, ChevronUp } from "lucide-react";

function TruncateText({ children, maxLines = 6 }) {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = children?.toString().split(" ").length > 80;

  return (
    <div className="relative">
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden prose prose-sky max-w-none text-lg font-sans text-sky-900 ${
          expanded || !shouldTruncate
            ? "line-clamp-none"
            : `line-clamp-${maxLines}`
        }`}
      >
        {children}
      </div>
      {shouldTruncate && (
        <button
          className="mt-2 text-blue-600 hover:underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [error, setError] = useState(null);

  const fetchFaqData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/faqs?populate=*");
      const data = await response.json();
      const faqs = data?.data || [];
      setFaqData(faqs);
    } catch (err) {
      console.error("Failed to fetch FAQ data:", err);
      // setError("");
      setError("Failed to load FAQs.");
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const renderAnswer = (description) => {
    return (
      <TruncateText>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
      </TruncateText>
    );
  };

  return (
    <div className="mx-15 max-w px-4 py-8">
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!error && faqData.length === 0 && (
        <p className="text-center text-sky-700">Loading FAQs...</p>
      )}

      {faqData.map((faqGroup, groupIndex) =>
        faqGroup?.FAQ?.map((faqItem, itemIndex) => {
          const subjectTitle = faqItem.SubjectTitle || "No Title";
          const description = faqItem.description || "";
          const globalIndex = `${groupIndex}-${itemIndex}`;
          const isExpanded = expandedIndex === globalIndex;

          return (
            <div
              key={faqItem.id}
              className="border-b border-gray-300 pb-4 mb-4 overflow-hidden transition-all duration-500 ease-in-out"
            >
              <button
                onClick={() => toggleExpand(globalIndex)}
                className="flex items-center justify-between w-full text-left font-semibold text-sky-800 text-xl hover:text-sky-600 focus:outline-none cursor-pointer"
              >
                {subjectTitle}
                {isExpanded ? <ChevronUp /> : <ChevronDown />}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? "opacity-100 mt-3" : "opacity-0 h-0"
                }`}
              >
                {isExpanded && renderAnswer(description)}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FAQ;
