import React, { useState } from "react";

function extractTextFromChildren(children) {
  return React.Children.toArray(children)
    .map(child => {
      if (typeof child === "string" || typeof child === "number") {
        return child;
      } else if (React.isValidElement(child)) {
        return extractTextFromChildren(child.props.children);
      }
      return "";
    })
    .join("");
}

const TruncateText = ({ children, limit = 180 }) => {
  const [expanded, setExpanded] = useState(false);

  const plainText = extractTextFromChildren(children);

  const shouldTruncate = plainText.length > limit;

  return (
    <span>
      {expanded || !shouldTruncate ? children : plainText.slice(0, limit) + "... "}
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 underline text-sm ml-2"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </span>
  );
};

export default TruncateText;
