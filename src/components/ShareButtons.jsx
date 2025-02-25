// import React from 'react';

// const ShareButtons = ({ url, title, image }) => {
//   // Function to share on Facebook
//   const shareOnFacebook = () => {
//     window.open(
//       `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
//       'facebook-share-dialog',
//       'width=800,height=600'
//     );
//   };

//   // Function to share on Twitter
//   const shareOnTwitter = () => {
//     window.open(
//       `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
//       'twitter-share-dialog',
//       'width=800,height=600'
//     );
//   };

//   // Function to share on LinkedIn
//   const shareOnLinkedIn = () => {
//     window.open(
//       `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
//       'linkedin-share-dialog',
//       'width=800,height=600'
//     );
//   };

//   return (
//     <div className="flex space-x-4">
//       <button
//         onClick={shareOnFacebook}
//         className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
//         aria-label="Share on Facebook"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//         </svg>
//       </button>
//       <button
//         onClick={shareOnTwitter}
//         className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
//         aria-label="Share on Twitter"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M22 5.924a8.3 8.3 0 0 1-2.356.646 4.1 4.1 0 0 0 1.804-2.27 8.2 8.2 0 0 1-2.606.996 4.1 4.1 0 0 0-7.1 2.81 4.1 4.1 0 0 0 .105.936 11.6 11.6 0 0 1-8.46-4.29 4.1 4.1 0 0 0 1.27 5.49 4.1 4.1 0 0 1-1.858-.514v.052a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.08.143 4.1 4.1 0 0 1-.772-.072 4.1 4.1 0 0 0 3.83 2.85 8.2 8.2 0 0 1-5.1 1.76 8.2 8.2 0 0 1-.977-.057 11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.178-.004-.356-.012-.532A8.3 8.3 0 0 0 22 5.924z" />
//         </svg>
//       </button>
//       <button
//         onClick={shareOnLinkedIn}
//         className="text-blue-700 hover:text-blue-900 transition-colors duration-200"
//         aria-label="Share on LinkedIn"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.73a1.77 1.77 0 1 1 0-3.54 1.77 1.77 0 0 1 0 3.54zM20 19h-3v-5.6c0-1.36-.026-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.7H9V8h3v1.56h.04c.5-.95 1.7-1.9 3.5-1.9 3.7 0 4.46 2.45 4.46 5.63V19z" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default ShareButtons;

import React from 'react';

const ShareButtons = ({ url, title, image }) => {
  // Function to share on Facebook
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      'facebook-share-dialog',
      'width=800,height=600'
    );
  };

  // Function to share on Twitter
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      'twitter-share-dialog',
      'width=800,height=600'
    );
  };

  // Function to share on LinkedIn
  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      'linkedin-share-dialog',
      'width=800,height=600'
    );
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={shareOnFacebook}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        aria-label="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </button>
      <button
        onClick={shareOnTwitter}
        className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
        aria-label="Share on Twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5.924a8.3 8.3 0 0 1-2.356.646 4.1 4.1 0 0 0 1.804-2.27 8.2 8.2 0 0 1-2.606.996 4.1 4.1 0 0 0-7.1 2.81 4.1 4.1 0 0 0 .105.936 11.6 11.6 0 0 1-8.46-4.29 4.1 4.1 0 0 0 1.27 5.49 4.1 4.1 0 0 1-1.858-.514v.052a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.08.143 4.1 4.1 0 0 1-.772-.072 4.1 4.1 0 0 0 3.83 2.85 8.2 8.2 0 0 1-5.1 1.76 8.2 8.2 0 0 1-.977-.057 11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.178-.004-.356-.012-.532A8.3 8.3 0 0 0 22 5.924z" />
        </svg>
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="text-blue-700 hover:text-blue-900 transition-colors duration-200"
        aria-label="Share on LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.73a1.77 1.77 0 1 1 0-3.54 1.77 1.77 0 0 1 0 3.54zM20 19h-3v-5.6c0-1.36-.026-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.7H9V8h3v1.56h.04c.5-.95 1.7-1.9 3.5-1.9 3.7 0 4.46 2.45 4.46 5.63V19z" />
        </svg>
      </button>
    </div>
  );
};

export default ShareButtons;