'use client'
import React from 'react';
import Link from 'next/link';

export default function Writing() {
  const blogs = [
    {
      title: "uniqueness. and why u shouldn't care what others think.",
      date: "03/2024",
      slug: "uniqueness"
    },
    {
      title: "perception. and why u should care what others think.",
      date: "03/2024",
      slug: "perception"
    },
    {
      title: "regret: how much we want it > how much effort we put in.",
      date: "04/2024",
      slug: "regret"
    },
    {
      title: "a psychoanalysis of cowboyhongs, alter egos, and graduations.",
      date: "05/2024",
      slug: "cowboyhong"
    },
    {
      title: "summer's end.",
      date: "07/2024",
      slug: "summer"
    },
    {
      title: "solitude and growth.",
      date: "09/2024",
      slug: "solitude"
    },
    {
      title: "delusion as a visionary.",
      date: "10/2024",
      slug: "delusion"
    },
    {
      title: "say yes because the fear of missing out is too great.",
      date: "10/2024",
      slug: "yes"
    },
    {
      title: "open...ai?",
      date: "10/2024",
      slug: "openai"
    },
    {
      title: "yc.",
      date: "10/2024",
      slug: "yc"
    },
    {
      title: "to love is to sacrifice.",
      date: "11/2024",
      slug: "love"
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="writing-container">
        <div className="content">
          <h1><b>pure. simple. html.</b></h1> 
          <p><b>a stylistic juxtaposition to the <Link href='/'>home</Link> page.</b></p>
          <div className="blog-list">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-entry">
                <h2>
                  <Link href={`/pure-simple-html/${blog.slug}`} style={{ color: 'black', textDecoration: 'underline' }}>
                    {blog.title}
                  </Link>
                </h2>
                <p className="description">{blog.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          background-color: #FFFFFF;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          background-color: #FFFFFF;
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          margin: 0;
          padding: 0;
        }

        .writing-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: 'Times New Roman', Times, serif;
        }

        .content {
          margin: 0;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-weight: normal;
        }

        .blog-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }

        .blog-entry {
          margin-bottom: 1rem;
        }

        .blog-entry h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: normal;
        }

        .blog-entry h2 a {
          color: #000;
          text-decoration: none;
        }

        .blog-entry h2 a:hover {
          text-decoration: underline;
        }

        .date {
          color: #666;
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .description {
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .writing-container {
            padding: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          .blog-entry h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}