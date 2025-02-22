// // "use client"

// // import { useState } from "react"
// // import PropTypes from "prop-types"

// // const ShareButton = ({
// //   url,
// //   title,
// //   description,
// //   className = "",
// //   iconSize = "h-5 w-5",
// //   variant = "default", // 'default' | 'minimal' | 'rounded'
// // }) => {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
// //   const [isSharing, setIsSharing] = useState(false)


// //   // Social share URLs
// //   const shareUrls = {
// //     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
// //     twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
// //     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
// //     whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
   
// //   }

// //  // Handle share click
// //   const handleShare = (platform) => {
// //     window.open(shareUrls[platform], "_blank", "width=600,height=400")
// //     setIsDropdownOpen(false)
// //   }

// //   // Copy URL to clipboard
// //   const copyToClipboard = async () => {
// //     try {
// //       await navigator.clipboard.writeText(url)
// //       alert("Link copied to clipboard!")
// //       setIsDropdownOpen(false)
// //     } catch (err) {
// //       console.error("Failed to copy:", err)
// //     }
// //   }

// //   // SVG Icons
// //   const icons = {
// //     share: (
// //       <svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         fill="none"
// //         viewBox="0 0 24 24"
// //         strokeWidth={1.5}
// //         stroke="currentColor"
// //         className={iconSize}
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
// //         />
// //       </svg>
// //     ),
// //     facebook: (
// //       <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
// //         <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
// //       </svg>
// //     ),
// //     twitter: (
// //       <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
// //         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
// //       </svg>
// //     ),
// //     linkedin: (
// //       <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
// //         <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
// //       </svg>
// //     ),
// //     whatsapp: (
// //       <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
// //         <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
// //       </svg>
// //     ),
// //     copy: (
// //       <svg className={iconSize} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
// //         />
// //       </svg>
// //     ),
// //   }

// //   // Style variants
// //   const variants = {
// //     default: "bg-white border shadow-sm",
// //     minimal: "bg-transparent",
// //     rounded: "bg-white border shadow-sm rounded-full",
// //   }

// //   const buttonBaseClass = `
// //     relative
// //     inline-flex
// //     items-center
// //     justify-center
// //     px-4
// //     py-2
// //     text-sm
// //     font-medium
// //     text-gray-700
// //     hover:bg-gray-50
// //     focus:outline-none
// //     focus:ring-2
// //     focus:ring-offset-2
// //     focus:ring-blue-500
// //     ${variants[variant]}
// //     ${className}
// //   `

// //   const dropdownClass = `
// //     absolute
// //     right-0
// //     mt-2
// //     w-48
// //     rounded-md
// //     shadow-lg
// //     bg-white
// //     ring-1
// //     ring-black
// //     ring-opacity-5
// //     z-50
// //   `

// //   const dropdownItemClass = `
// //     flex
// //     items-center
// //     px-4
// //     py-2
// //     text-sm
// //     text-gray-700
// //     hover:bg-gray-100
// //     cursor-pointer
// //   `

// //   return (
// //       <div className="relative inline-flex items-center space-x-2">
// //       <button onClick={() => setIsSharing(!isSharing)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200" aria-label="Share">
// //       {isSharing ? "✖" : icons.share}
// //     </button>
// //     {isSharing && (
// //       <div className="flex items-center space-x-3">
// //         {Object.keys(shareUrls).map((platform) => (
// //           <button key={platform} onClick={() => handleShare(platform)} className="p-2 rounded-full hover:bg-gray-200" aria-label={`Share on ${platform}`}>
// //             {icons[platform] || platform.charAt(0).toUpperCase()}
// //           </button>
// //         ))}
// //         <button onClick={copyToClipboard} className="p-2 rounded-full hover:bg-gray-200" aria-label="Copy Link">
// //           📋
// //         </button>
// //       </div>
// //     )}

// //       {isDropdownOpen && (
// //         <>
// //           <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
// //           <div className={dropdownClass}>
// //             <div className="py-1" role="menu">
// //               <button onClick={() => handleShare("facebook")} className={dropdownItemClass}>
// //                 <span className="text-blue-600">{icons.facebook}</span>
// //                 <span className="ml-3">Facebook</span>
// //               </button>
// //               <button onClick={() => handleShare("twitter")} className={dropdownItemClass}>
// //                 <span className="text-blue-400">{icons.twitter}</span>
// //                 <span className="ml-3">Twitter</span>
// //               </button>
// //               <button onClick={() => handleShare("linkedin")} className={dropdownItemClass}>
// //                 <span className="text-blue-700">{icons.linkedin}</span>
// //                 <span className="ml-3">LinkedIn</span>
// //               </button>
// //               <button onClick={() => handleShare("whatsapp")} className={dropdownItemClass}>
// //                 <span className="text-green-500">{icons.whatsapp}</span>
// //                 <span className="ml-3">WhatsApp</span>
// //               </button>
// //               <button onClick={() => handleShare("telegram")} className={dropdownItemClass}>
// //                 <span className="text-blue-500">{icons.telegram}</span>
// //                 <span className="ml-3">Telegram</span>
// //               </button>
// //               <button onClick={() => handleShare("email")} className={dropdownItemClass}>
// //                 <span className="text-gray-600">{icons.email}</span>
// //                 <span className="ml-3">Email</span>
// //               </button>
// //               <button onClick={copyToClipboard} className={dropdownItemClass}>
// //                 <span className="text-gray-600">{icons.copy}</span>
// //                 <span className="ml-3">Copy link</span>
// //               </button>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   )
// // }

// // ShareButton.propTypes = {
// //   url: PropTypes.string.isRequired,
// //   title: PropTypes.string.isRequired,
// //   description: PropTypes.string,
// //   className: PropTypes.string,
// //   iconSize: PropTypes.string,
// //   variant: PropTypes.oneOf(["default", "minimal", "rounded"]),
// // }

// // export default ShareButton
// "use client";

// import { useState } from "react";
// import PropTypes from "prop-types";

// const ShareButton = ({
//   url,
//   title,
//   description,
//   className = "",
//   iconSize = "h-5 w-5",
//   variant = "default", // 'default' | 'minimal' | 'rounded'
// }) => {
//   const [isSharing, setIsSharing] = useState(false);

//   // Social share URLs
//   const shareUrls = {
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
//     twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
//     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
//     whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
//   };

//   // Handle share click
//   const handleShare = (platform) => {
//     window.open(shareUrls[platform], "_blank", "width=600,height=400");
//     setIsSharing(false);
//   };

//   // Copy URL to clipboard
//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(url);
//       alert("Link copied to clipboard!");
//       setIsSharing(false);
//     } catch (err) {
//       console.error("Failed to copy:", err);
//     }
//   };

//   // SVG Icons
//   const icons = {
//     share: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className={iconSize}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
//         />
//       </svg>
//     ),
//     facebook: (
//       <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
//         <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//       </svg>
//     ),
//     twitter: (
//       <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
//         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//       </svg>
//     ),
//     linkedin: (
//       <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
//         <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//       </svg>
//     ),
//     whatsapp: (
//       <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
//         <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
//       </svg>
//     ),
//     copy: (
//       <svg className={iconSize} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
//         />
//       </svg>
//     ),
//   };

//   // Style variants
//   const variants = {
//     default: "bg-white border shadow-sm",
//     minimal: "bg-transparent",
//     rounded: "bg-white border shadow-sm rounded-full",
//   };

//   const buttonBaseClass = `
//     relative
//     inline-flex
//     items-center
//     justify-center
//     px-4
//     py-2
//     text-sm
//     font-medium
//     text-gray-700
//     hover:bg-gray-50
//     focus:outline-none
//     focus:ring-2
//     focus:ring-offset-2
//     focus:ring-blue-500
//     ${variants[variant]}
//     ${className}
//   `;

//   return (
//     <div className="relative inline-flex items-center space-x-2">
//       <button
//         onClick={() => setIsSharing(!isSharing)}
//         className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
//         aria-label="Share"
//       >
//         {isSharing ? "✖" : icons.share}
//       </button>
//       {isSharing && (
//         <div className="flex items-center space-x-3">
//           {Object.keys(shareUrls).map((platform) => (
//             <button
//               key={platform}
//               onClick={() => handleShare(platform)}
//               className="p-2 rounded-full hover:bg-gray-200"
//               aria-label={`Share on ${platform}`}
//             >
//               {icons[platform] || platform.charAt(0).toUpperCase()}
//             </button>
//           ))}
//           <button
//             onClick={copyToClipboard}
//             className="p-2 rounded-full hover:bg-gray-200"
//             aria-label="Copy Link"
//           >
//             📋
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// ShareButton.propTypes = {
//   url: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   className: PropTypes.string,
//   iconSize: PropTypes.string,
//   variant: PropTypes.oneOf(["default", "minimal", "rounded"]),
// };

// export default ShareButton;

// "use client";

// import { useState } from "react";
// import PropTypes from "prop-types";

// const ShareButton = ({ slug, title,imageUrl, className = "" }) => {
//   const [isSharing, setIsSharing] = useState(false);

//   const shareUrl = `https://surungamedicine.com.np/blog/preview/${slug}/`;

//   // Social Media Share Links
//   const shareUrls = {
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
//     twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
//     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
//     whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`,
//     instagram: `https://www.instagram.com/`, // Instagram does not allow direct sharing, users can copy the link
//   };

//   // Open Share Link
//   const handleShare = (platform) => {
//     if (platform === "instagram") {
//       alert("Instagram does not support direct link sharing. Copy the link and share it in your story or bio.");
//     } else {
//       window.open(shareUrls[platform], "_blank", "width=600,height=400");
//     }
//   };

//   // Copy URL to Clipboard
//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(shareUrl);
//       alert("Share URL copied to clipboard!");
//     } catch (err) {
//       console.error("Failed to copy:", err);
//     }
//   };

//   return (
//     <div className={`relative inline-flex items-center space-x-2 ${className}`}>
//       <button
//         onClick={() => setIsSharing(!isSharing)}
//         className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
//         aria-label="Share"
//       >
//         {isSharing ? "✖" : "🔗"} {/* Toggle between Share icon and Close */}
//       </button>

//       {isSharing && (
//         <div className="flex items-center space-x-3">
//           <button onClick={() => handleShare("facebook")} className="p-2 rounded-full hover:bg-gray-200" aria-label="Share on Facebook">📘</button>
//           <button onClick={() => handleShare("twitter")} className="p-2 rounded-full hover:bg-gray-200" aria-label="Share on Twitter">🐦</button>
//           <button onClick={() => handleShare("linkedin")} className="p-2 rounded-full hover:bg-gray-200" aria-label="Share on LinkedIn">💼</button>
//           <button onClick={() => handleShare("whatsapp")} className="p-2 rounded-full hover:bg-gray-200" aria-label="Share on WhatsApp">📱</button>
//           <button onClick={() => handleShare("instagram")} className="p-2 rounded-full hover:bg-gray-200" aria-label="Share on Instagram">📸</button>
//           <button onClick={copyToClipboard} className="p-2 rounded-full hover:bg-gray-200" aria-label="Copy Link">📋</button>
//         </div>
//       )}
//     </div>
//   );
// };

// ShareButton.propTypes = {
//   slug: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   className: PropTypes.string,
// };

// export default ShareButton;



// import Head from "next/head"
// import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
// import Button from "../components/Button"

// const BlogPost = ({ post }) => {
//   // You can replace this with your actual blog post data
//   const defaultPost = {
//     title: "Understanding Common Health Issues",
//     excerpt: "Learn about preventive healthcare and common medical conditions...",
//     content: "Full blog post content here...",
//     slug: "understanding-health-issues",
//     image: "/blog-cover-image.jpg", // Replace with your image path
//     clinicName: "Health & Wellness Clinic",
//     clinicUrl: "https://your-clinic-domain.com",
//   }

//   // Use provided post data or fallback to default
//   const blogPost = post || defaultPost

//   // Construct URLs for sharing
//   const siteUrl = "https://your-clinic-domain.com" // Replace with your domain
//   const fullUrl = `${siteUrl}/blog/${blogPost.slug}`
//   const encodedUrl = encodeURIComponent(fullUrl)
//   const encodedTitle = encodeURIComponent(blogPost.title)

//   // Social share URLs
//   const shareUrls = {
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
//     twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
//     linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
//   }

//   // Handle social media sharing
//   const handleShare = (platform) => {
//     const url = shareUrls[platform]
//     window.open(url, "_blank", "width=600,height=400")
//   }

//   // Handle native share if available
//   const handleNativeShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: blogPost.title,
//           text: blogPost.excerpt,
//           url: fullUrl,
//         })
//       } catch (error) {
//         console.log("Error sharing:", error)
//       }
//     }
//   }

//   return (
//     <>
//       <Head>
//         {/* Basic Meta Tags */}
//         <title>
//           {blogPost.title} | {blogPost.clinicName}
//         </title>
//         <meta name="description" content={blogPost.excerpt} />

//         {/* Open Graph Meta Tags for Facebook */}
//         <meta property="og:type" content="article" />
//         <meta property="og:title" content={blogPost.title} />
//         <meta property="og:description" content={blogPost.excerpt} />
//         <meta property="og:image" content={`${siteUrl}${blogPost.image}`} />
//         <meta property="og:url" content={fullUrl} />
//         <meta property="og:site_name" content={blogPost.clinicName} />

//         {/* Twitter Card Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={blogPost.title} />
//         <meta name="twitter:description" content={blogPost.excerpt} />
//         <meta name="twitter:image" content={`${siteUrl}${blogPost.image}`} />
//       </Head>

//       <article className="max-w-3xl mx-auto px-4 py-8">
//         {/* Blog Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
//           <p className="text-gray-600">{blogPost.excerpt}</p>
//         </div>

//         {/* Blog Cover Image */}
//         <div className="mb-8 rounded-lg overflow-hidden">
//           <img src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} className="w-full h-auto object-cover" />
//         </div>

//         {/* Blog Content */}
//         <div className="prose max-w-none mb-8">{blogPost.content}</div>

//         {/* Share Section */}
//         <div className="border-t pt-6">
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <span className="text-sm font-medium">Share this article:</span>

//             {/* Social Share Buttons */}
//             <div className="flex gap-2">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => handleShare("facebook")}
//                 aria-label="Share on Facebook"
//               >
//                 <Facebook className="h-4 w-4" />
//               </Button>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => handleShare("twitter")}
//                 aria-label="Share on Twitter"
//               >
//                 <Twitter className="h-4 w-4" />
//               </Button>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => handleShare("linkedin")}
//                 aria-label="Share on LinkedIn"
//               >
//                 <Linkedin className="h-4 w-4" />
//               </Button>

//               {/* Native Share Button (Mobile) */}
//               {navigator?.share && (
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={handleNativeShare}
//                   aria-label="Share using device options"
//                 >
//                   <Share2 className="h-4 w-4" />
//                 </Button>
//               )}
//             </div>
//           </div>

//           {/* Clinic Attribution */}
//           <div className="mt-6 text-sm text-gray-600">
//             Originally published by{" "}
//             <a href={blogPost.clinicUrl} className="text-primary hover:underline">
//               {blogPost.clinicName}
//             </a>
//           </div>
//         </div>
//       </article>
//     </>
//   )
// }

// export default BlogPost

// import { Helmet } from "react-helmet" // Install with: npm install react-helmet
// import Button from "./Button"
// // Install icons with: npm install lucide-react
// import c from '../assets/checkup/c1.jpeg'
// import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"

// const BlogPost = ({ post }) => {
//   // You can replace this with your actual blog post data
//   const defaultPost = {
//     title: "Understanding Common Health Issues",
//     excerpt: "Learn about preventive healthcare and common medical conditions...",
//     content: "Full blog post content here...",
//     slug: "understanding-health-issues",
//     image: c, // Replace with your image path
//     clinicName: "Smc",
//     clinicUrl: "https://surungamedicine.com.np",
//   }

//   // Use provided post data or fallback to default
//   const blogPost = post || defaultPost

//   // Construct URLs for sharing
//   const siteUrl = "https://surungamedicine.com.np" // Replace with your domain
//   const fullUrl = `${siteUrl}/blog/${blogPost.slug}`
//   const encodedUrl = encodeURIComponent(fullUrl)
//   const encodedTitle = encodeURIComponent(blogPost.title)
//  const image = encodeURIComponent(`${siteUrl}${blogPost.image}`)
//   // Social share URLs
//   const shareUrls = {
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&image=${image}`,
//     twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
//     linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
//   }

//   // Handle social media sharing
//   const handleShare = (platform) => {
//     const url = shareUrls[platform]
//     window.open(url, "_blank", "width=600,height=400")
//   }

//   // Handle native share if available
//   const handleNativeShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: blogPost.title,
//           text: blogPost.excerpt,
//           url: fullUrl,
//         })
//       } catch (error) {
//         console.log("Error sharing:", error)
//       }
//     }
//   }

//   return (
//     <>
//       <Helmet>
//         {/* Basic Meta Tags */}
//         <title>
//           {blogPost.title} | {blogPost.clinicName}
//         </title>
//         <meta name="description" content={blogPost.excerpt} />

//         {/* Open Graph Meta Tags for Facebook */}
//         <meta property="og:type" content="article" />
//         <meta property="og:title" content={blogPost.title} />
//         <meta property="og:description" content={blogPost.excerpt} />
//         <meta property="og:image" content={`${siteUrl}${blogPost.image}`} />
//         <meta property="og:url" content={fullUrl} />
//         <meta property="og:site_name" content={blogPost.clinicName} />

//         {/* Twitter Card Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={blogPost.title} />
//         <meta name="twitter:description" content={blogPost.excerpt} />
//         <meta name="twitter:image" content={`${siteUrl}${blogPost.image}`} />
//       </Helmet>

//       <article className="max-w-3xl mx-auto px-4 py-8">
//         {/* Blog Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
//           <p className="text-gray-600">{blogPost.excerpt}</p>
//         </div>

//         {/* Blog Cover Image */}
//         <div className="mb-8 rounded-lg overflow-hidden">
//           <img src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} className="w-full h-auto object-cover" />
//         </div>

//         {/* Blog Content */}
//         <div className="prose max-w-none mb-8">{blogPost.content}</div>

//         {/* Share Section */}
//         <div className="border-t pt-6">
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <span className="text-sm font-medium">Share this article:</span>

//             {/* Social Share Buttons */}
//             <div className="flex gap-2">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => handleShare("facebook")}
//                 aria-label="Share on Facebook"
//               >
//                 <Facebook className="h-4 w-4" />
//               </Button>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => handleShare("twitter")}
//                 aria-label="Share on Twitter"
//               >
//                 <Twitter className="h-4 w-4" />
//               </Button>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => handleShare("linkedin")}
//                 aria-label="Share on LinkedIn"
//               >
//                 <Linkedin className="h-4 w-4" />
//               </Button>

//               {/* Native Share Button (Mobile) */}
//               {navigator?.share && (
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={handleNativeShare}
//                   aria-label="Share using device options"
//                 >
//                   <Share2 className="h-4 w-4" />
//                 </Button>
//               )}
//             </div>
//           </div>

//           {/* Clinic Attribution */}
//           <div className="mt-6 text-sm text-gray-600">
//             Originally published by{" "}
//             <a href={blogPost.clinicUrl} className="text-primary hover:underline">
//               {blogPost.clinicName}
//             </a>
//           </div>
//         </div>
//       </article>
//     </>
//   )
// }

// export default BlogPost

// import { Helmet } from "react-helmet"
// import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
// import c1 from '../assets/checkup/c1.jpeg'

// const BlogPost = ({ post }) => {
//   // You can replace this with your actual blog post data
//   const blogPost = {
//     title: "Understanding Common Health Issues",
//     excerpt: "Learn about preventive healthcare and common medical conditions...",
//     content: "Full blog post content here...",
//     slug: "understanding-health-issues",
//     image: c1, // Replace with your image path
//   }
//   // Use provided post data or fallback to default
//   // const blogPost = post || defaultPost

//   // Your website URL - replace with your actual domain
//   const siteUrl = "https://surungamedicine.com.np"
//   const fullUrl = `${siteUrl}/blog/${blogPost.slug}`
//   const fullImageUrl = blogPost.image? blogPost.image : `${siteUrl}${blogPost.image}`

//   // Social share URLs with blog-specific content
//   const shareUrls = {
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}&image=${encodeURIComponent(fullImageUrl)}`,
//     twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(blogPost.title)}`,
//     linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(blogPost.title)}&summary=${encodeURIComponent(blogPost.excerpt)}`,
//   }

//   // Handle social media sharing
//   const handleShare = (platform) => {
//     const url = shareUrls[platform]
//     window.open(url, "_blank", "width=600,height=400")
//   }

//   // Handle native share if available
//   const handleNativeShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: blogPost.title,
//           text: blogPost.excerpt,
//           url: fullUrl,
//         })
//       } catch (error) {
//         console.log("Error sharing:", error)
//       }
//     }
//   }

//   return (
//     <>
//       {/* Dynamic meta tags that will override the ones in index.html */}
//       <Helmet>
//         {/* Override basic meta tags */}
//         <title>{`${blogPost.title} - Surunga Medicine Center`}</title>
//         <meta name="description" content={blogPost.excerpt} />

//         {/* Override Open Graph meta tags */}
//         <meta property="og:title" content={blogPost.title} />
//         <meta property="og:description" content={blogPost.excerpt} />
//         <meta property="og:image" content={fullImageUrl} />
//         <meta property="og:url" content={fullUrl} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Surunga Medicine Center" />

//         {/* Override Twitter Card meta tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={blogPost.title} />
//         <meta name="twitter:description" content={blogPost.excerpt} />
//         <meta name="twitter:image" content={fullImageUrl} />
//       </Helmet>

//       <article className="max-w-3xl mx-auto px-4 py-8">
//         {/* Blog Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
//           <p className="text-gray-600">{blogPost.excerpt}</p>
//         </div>

//         {/* Blog Cover Image */}
//         <div className="mb-8 rounded-lg overflow-hidden">
//           <img src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} className="w-full h-auto object-cover" />
//         </div>

//         {/* Blog Content */}
//         <div className="prose max-w-none mb-8">{blogPost.content}</div>

//         {/* Share Section */}
//         <div className="border-t pt-6">
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <span className="text-sm font-medium">Share this article:</span>

//             {/* Social Share Buttons */}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleShare("facebook")}
//                 className="p-2 rounded-full hover:bg-gray-100"
//                 aria-label="Share on Facebook"
//               >
//                 <Facebook className="h-5 w-5" />
//               </button>

//               <button
//                 onClick={() => handleShare("twitter")}
//                 className="p-2 rounded-full hover:bg-gray-100"
//                 aria-label="Share on Twitter"
//               >
//                 <Twitter className="h-5 w-5" />
//               </button>

//               <button
//                 onClick={() => handleShare("linkedin")}
//                 className="p-2 rounded-full hover:bg-gray-100"
//                 aria-label="Share on LinkedIn"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </button>

//               {/* Native Share Button (Mobile) */}
//               {navigator?.share && (
//                 <button
//                   onClick={handleNativeShare}
//                   className="p-2 rounded-full hover:bg-gray-100"
//                   aria-label="Share using device options"
//                 >
//                   <Share2 className="h-5 w-5" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </article>
//     </>
//   )
// }

// // export default BlogPost
// import { Helmet } from "react-helmet"
// import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
// import c1 from '../assets/checkup/c1.jpeg'
// const BlogPost = ({ post }) => {
//   // You can replace this with your actual blog post data
//   const defaultPost = {
//     title: "Understanding Common Health Issues",
//     excerpt: "Learn about preventive healthcare and common medical conditions...",
//     content: "Full blog post content here...",
//     slug: "understanding-health-issues",
//     image:c1,
//   }

//   // Use provided post data or fallback to default
//   const blogPost = defaultPost

//   // Your website URL - replace with your actual domain
//   const siteUrl = window.location.origin // This will get your current domain
//   const fullUrl = `${siteUrl}/blog/${blogPost.slug}`
//   const fullImageUrl = blogPost.image.startsWith("http") ? blogPost.image : `${siteUrl}${blogPost.image}`

//   // Social share URLs with blog-specific content
//   const shareUrls = {
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}&image=${encodeURIComponent(fullImageUrl)}`,
//     twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(blogPost.title)}`,
//     linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(blogPost.title)}&summary=${encodeURIComponent(blogPost.excerpt)}`,
//   }

//   // Handle social media sharing
//   const handleShare = (platform) => {
//     const url = shareUrls[platform]
//     window.open(url, "_blank", "width=600,height=400")
//   }

//   // Handle native share if available
//   const handleNativeShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: blogPost.title,
//           text: blogPost.excerpt,
//           url: fullUrl,
//         })
//       } catch (error) {
//         console.log("Error sharing:", error)
//       }
//     }
//   }

//   // Create a script element for structured data
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: blogPost.title,
//     description: blogPost.excerpt,
//     image: fullImageUrl,
//     author: {
//       "@type": "Organization",
//       name: "Surunga Medicine Center",
//     },
//     publisher: {
//       "@type": "Organization",
//       name: "Surunga Medicine Center",
//       logo: {
//         "@type": "ImageObject",
//         url: `${siteUrl}/logo.png`,
//       },
//     },
//     url: fullUrl,
//   }

//   return (
//     <>
//       <Helmet>
//         {/* Remove existing meta tags first */}
//         <meta property="og:title" content="" />
//         <meta property="og:description" content="" />
//         <meta property="og:image" content="" />
//         <meta property="og:url" content="" />
//         <meta property="og:type" content="" />
//         <meta name="twitter:card" content="" />
//         <meta name="twitter:title" content="" />
//         <meta name="twitter:description" content="" />
//         <meta name="twitter:image" content="" />

//         {/* Add new meta tags */}
//         <title>{`${blogPost.title} - Surunga Medicine Center`}</title>
//         <meta name="description" content={blogPost.excerpt} />

//         {/* OpenGraph tags */}
//         <meta property="og:title" content={blogPost.title} />
//         <meta property="og:description" content={blogPost.excerpt} />
//         <meta property="og:image" content={fullImageUrl} />
//         <meta property="og:url" content={fullUrl} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Surunga Medicine Center" />

//         {/* Twitter Card tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={blogPost.title} />
//         <meta name="twitter:description" content={blogPost.excerpt} />
//         <meta name="twitter:image" content={fullImageUrl} />

//         {/* Add structured data */}
//         <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
//       </Helmet>

//       <article className="max-w-3xl mx-auto px-4 py-8">
//         {/* Blog Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
//           <p className="text-gray-600">{blogPost.excerpt}</p>
//         </div>

//         {/* Blog Cover Image */}
//         <div className="mb-8 rounded-lg overflow-hidden">
//           <img src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} className="w-full h-auto object-cover" />
//         </div>

//         {/* Blog Content */}
//         <div className="prose max-w-none mb-8">{blogPost.content}</div>

//         {/* Share Section */}
//         <div className="border-t pt-6">
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <span className="text-sm font-medium">Share this article:</span>

//             {/* Social Share Buttons */}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleShare("facebook")}
//                 className="p-2 rounded-full hover:bg-gray-100"
//                 aria-label="Share on Facebook"
//               >
//                 <Facebook className="h-5 w-5" />
//               </button>

//               <button
//                 onClick={() => handleShare("twitter")}
//                 className="p-2 rounded-full hover:bg-gray-100"
//                 aria-label="Share on Twitter"
//               >
//                 <Twitter className="h-5 w-5" />
//               </button>

//               <button
//                 onClick={() => handleShare("linkedin")}
//                 className="p-2 rounded-full hover:bg-gray-100"
//                 aria-label="Share on LinkedIn"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </button>

//               {/* Native Share Button (Mobile) */}
//               {navigator?.share && (
//                 <button
//                   onClick={handleNativeShare}
//                   className="p-2 rounded-full hover:bg-gray-100"
//                   aria-label="Share using device options"
//                 >
//                   <Share2 className="h-5 w-5" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </article>
//     </>
//   )
// }

// export default BlogPost

// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

// const BlogPost = ({ 
//   title = "Blog Post Title", 
//   description = "Blog post description or excerpt...", 
//   image = "/default-image.jpg",
//   slug = "blog-post",
//   content = "Blog post content...",
//   tags = [] // optional array of tags/keywords
// }) => {
//   // Get the full URLs
//   const siteUrl = window.location.origin;
//   const fullUrl = `${siteUrl}/blog/${slug}`;
//   const fullImageUrl = image?.startsWith('http') ? image : `${siteUrl}${image}`;

//   // Prepare sharing URLs
//   const shareUrls = {
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
//     twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}${tags.length ? '&hashtags=' + tags.join(',') : ''}`,
//     linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`
//   };

//   // Handle social media sharing
//   const handleShare = (platform) => {
//     const url = shareUrls[platform];
//     const windowWidth = 600;
//     const windowHeight = 400;
//     const windowLeft = (window.innerWidth - windowWidth) / 2;
//     const windowTop = (window.innerHeight - windowHeight) / 2;
    
//     window.open(
//       url,
//       'share-dialog',
//       `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop},menubar=no,toolbar=no,status=no`
//     );
//   };

//   // Handle native share if available (mobile devices)
//   const handleNativeShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title,
//           text: description,
//           url: fullUrl,
//         });
//       } catch (error) {
//         console.log('Error sharing:', error);
//       }
//     }
//   };

//   // Styles object to keep the component self-contained
//   const styles = {
//     container: "max-w-3xl mx-auto px-4 py-8",
//     header: "mb-8",
//     title: "text-4xl font-bold mb-4",
//     description: "text-gray-600",
//     imageContainer: "mb-8 rounded-lg overflow-hidden",
//     image: "w-full h-auto object-cover",
//     content: "prose max-w-none mb-8",
//     shareContainer: "border-t pt-6 mt-8",
//     shareWrapper: "flex flex-col sm:flex-row items-center gap-4",
//     shareText: "text-sm font-medium",
//     buttonContainer: "flex gap-3",
//     shareButton: "p-2 rounded-full hover:bg-gray-100 transition-colors",
//   };

//   return (
//     <article className={styles.container}>
//       {/* Meta tags for social sharing */}
//       <Helmet>
//         {/* Basic Meta Tags */}
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta name="keywords" content={tags.join(', ')} />

//         {/* OpenGraph Meta Tags */}
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="og:image" content={fullImageUrl} />
//         <meta property="og:url" content={fullUrl} />
//         <meta property="og:type" content="article" />

//         {/* Twitter Card Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={title} />
//         <meta name="twitter:description" content={description} />
//         <meta name="twitter:image" content={fullImageUrl} />
//       </Helmet>

//       {/* Blog Header */}
//       <div className={styles.header}>
//         <h1 className={styles.title}>{title}</h1>
//         <p className={styles.description}>{description}</p>
//       </div>

//       {/* Blog Cover Image */}
//       <div className={styles.imageContainer}>
//         <img
//           src={image || "/placeholder.svg"}
//           alt={title}
//           className={styles.image}
//         />
//       </div>

//       {/* Blog Content */}
//       <div className={styles.content}>
//         {content}
//       </div>

//       {/* Share Section */}
//       <div className={styles.shareContainer}>
//         <div className={styles.shareWrapper}>
//           <span className={styles.shareText}>Share this article:</span>
          
//           <div className={styles.buttonContainer}>
//             {/* Facebook */}
//             <button
//               onClick={() => handleShare('facebook')}
//               className={styles.shareButton}
//               aria-label="Share on Facebook"
//               style={{ color: '#1877F2' }}
//             >
//               <Facebook className="h-5 w-5" />
//             </button>
            
//             {/* Twitter */}
//             <button
//               onClick={() => handleShare('twitter')}
//               className={styles.shareButton}
//               aria-label="Share on Twitter"
//               style={{ color: '#1DA1F2' }}
//             >
//               <Twitter className="h-5 w-5" />
//             </button>
            
//             {/* LinkedIn */}
//             <button
//               onClick={() => handleShare('linkedin')}
//               className={styles.shareButton}
//               aria-label="Share on LinkedIn"
//               style={{ color: '#0A66C2' }}
//             >
//               <Linkedin className="h-5 w-5" />
//             </button>

//             {/* Native Share Button (Mobile) */}
//             {navigator?.share && (
//               <button
//                 onClick={handleNativeShare}
//                 className={styles.shareButton}
//                 aria-label="Share using device options"
//                 style={{ color: '#666666' }}
//               >
//                 <Share2 className="h-5 w-5" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default BlogPost;
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Facebook, Twitter, Linkedin, Share2, Link2 } from 'lucide-react';

const BlogPost = ({ 
  title = "Blog Post Title", 
  description = "Blog post description or excerpt...", 
  image = "/default-image.jpg",
  slug = "blog-post",
  content = "Blog post content...",
  tags = [] // optional array of tags/keywords
}) => {
  const [showPreview, setShowPreview] = useState(false);
  
  // Get the full URLs
  const siteUrl = window.location.origin;
  const fullUrl = `${siteUrl}/blog/${slug}`;
  const fullImageUrl = image?.startsWith('http') ? image : `${siteUrl}${image}`;

  // Prepare sharing URLs
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}${tags.length ? '&hashtags=' + tags.join(',') : ''}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`
  };

  // Handle social media sharing
  const handleShare = (platform) => {
    setShowPreview(true); // Show preview before sharing
    const url = shareUrls[platform];
    const windowWidth = 600;
    const windowHeight = 400;
    const windowLeft = (window.innerWidth - windowWidth) / 2;
    const windowTop = (window.innerHeight - windowHeight) / 2;
    
    window.open(
      url,
      'share-dialog',
      `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop},menubar=no,toolbar=no,status=no`
    );
  };

  // Handle native share if available (mobile devices)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: fullUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  // Copy link to clipboard
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl} />
      </Helmet>

      {/* Share Preview Dialog */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Share Post</h3>
              <button 
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            {/* Preview Card */}
            <div className="p-4">
              <div className="border rounded-lg overflow-hidden">
                <img 
                  src={image || "/placeholder.svg"} 
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="text-gray-500 text-sm">{siteUrl}</p>
                  <h4 className="font-semibold mt-1">{title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{description}</p>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="p-4 bg-gray-50">
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 rounded-full bg-[#1877F2] text-white hover:bg-opacity-90"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 rounded-full bg-[#0A66C2] text-white hover:bg-opacity-90"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>

                <button
                  onClick={copyLink}
                  className="p-2 rounded-full bg-gray-600 text-white hover:bg-opacity-90"
                  aria-label="Copy link"
                >
                  <Link2 className="h-5 w-5" />
                </button>

                {navigator?.share && (
                  <button
                    onClick={handleNativeShare}
                    className="p-2 rounded-full bg-gray-600 text-white hover:bg-opacity-90"
                    aria-label="More share options"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Trigger Button */}
      <button
        onClick={() => setShowPreview(true)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Share2 className="h-5 w-5" />
        Share this post
      </button>
    </div>
  );
};

export default BlogPost;
