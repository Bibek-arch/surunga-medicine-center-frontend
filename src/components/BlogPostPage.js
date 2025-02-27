// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import BlogPost from '../components/Shareblog';

// const BlogPostPage = () => {
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { id } = useParams(); // Get the `id` from the URL

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await fetch(`/api/blog/${id}/`); // Fetch blog post by ID
//                 const data = await response.json();
//                 setPost(data);
//             } catch (error) {
//                 console.error('Error fetching blog post:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPost();
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!post) {
//         return <div>Blog post not found.</div>;
//     }

//     return <BlogPost post={post} />;
// };

// export default BlogPostPage;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/Shareblog';

const BlogPostPage = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/blog/${id}/`); // Include trailing slash
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching blog post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Blog post not found.</div>;
    }

    return <BlogPost post={post} />;
};

export default BlogPostPage;