import React from "react";

const ShareButtons = ({ post }) => {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.url)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(post.url)}&text=${encodeURIComponent(post.title)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + post.url)}`;

  return (
    <div className="flex space-x-2 mt-4">
      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Share on Facebook</button>
      </a>
      <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-2 bg-blue-400 text-white rounded-lg">Tweet</button>
      </a>
      <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Share on WhatsApp</button>
      </a>
    </div>
  );
};

export default ShareButtons;
