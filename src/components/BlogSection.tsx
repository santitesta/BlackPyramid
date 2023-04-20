// components/BlogSection.js
import React from "react";

const BlogCard = ({ image, title, description, date }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{date}</p>
    <p>{description}</p>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      title: "Blog Post 1",
      description:
        "A brief summary or description of the content in Blog Post 1.",
      date: "April 1, 2023",
    },
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      title: "Blog Post 2",
      description:
        "A brief summary or description of the content in Blog Post 2.",
      date: "April 10, 2023",
    },
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      title: "Blog Post 3",
      description:
        "A brief summary or description of the content in Blog Post 3.",
      date: "April 15, 2023",
    },
  ];

  return (
    <section className="py-16" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-lg">
            Stay up to date with the latest news and updates from our startup.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
