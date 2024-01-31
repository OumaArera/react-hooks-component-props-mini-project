import React from "react";

const Article = ({ title, date, preview }) => {
  const itemDate = date || "January 1, 1970";

  // Calculate the number of emojis based on reading time
  const minutesToRead = Math.ceil(preview.split(" ").length / 200); // Assuming 200 words per minute

  const coffeeCups = "☕️".repeat(Math.ceil(minutesToRead / 5));
  const bentoBoxes = "🍱".repeat(Math.ceil(minutesToRead / 10));

  const readingTime = minutesToRead <= 30 ? coffeeCups : bentoBoxes;

  return (
    <article>
      <h3>{title}</h3>
      <small>{itemDate}</small>
      <p>{preview}</p>
      <small>{readingTime} {minutesToRead} min read</small>
    </article>
  );
};

export default Article;
