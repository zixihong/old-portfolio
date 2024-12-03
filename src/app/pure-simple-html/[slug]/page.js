'use client'
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = {
  'perception': {
    title: "perception. and why u should care what others think.",
    date: "03/2024",
    content: `the 2 greatest lessons i learned from speech and debate is 1) to smile 2) fake glasses. 

what? let me explain. 

you can tell a lot about a person based on how fast they walk, the way they talk, how they interact with you, do they smile at you, or do they frown, or whatever. every day, we subconsciously form countless perceptions about people based on these assumptions; a person who walks fast = busy/stressed. and we could use this to our advantage. by playing off of these preformed assumptions, we can "manipulate" people into forming a specific perception of us. (i am not advocating for the manipulation of people). going back to speech and debate, smiling = more charismatic, more confident, more engaging and more approachable. glasses = more knowledgeable and more trustworthy. before giving a speech, i purposely smile at the judges and subtly adjust my fake glasses so that i can display all of these traits before i even begin speaking. now do these strategies work at tournaments? i have no clue. but they def don't hurt. your words and your perceptions should push and pull on a person's thoughts, guiding them into a specific perception that you want to be perceived as. 

basically what im saying is that we are constantly being subconsciously judged by everyone at every second, so if we want someone to perceive you some way, you just have to subtly display all the characteristics associated with that perception. for example, if you want to be perceived as smart (but currently aren’t), you would hang out with people who are seen as knowledgeable or be able to bullshit lots of random jargon on advanced topics that you have no idea about. and being perceived as smart has lots of benefits: people respect you more, people want to come to you with ideas, your ego gets stroked, your god complex gets fed, etc. etc. lots of great things. 

and honestly, at the end of the day, it's up to you to decide if it's worth the effort to always try to play into this perception or just be yourself. there are times when you should be playing into this positive perception (in front of teachers, your gf's parents, etc.) and there are times when you should totally disregard what other people are thinking of you. 

and it's this balance of being yourself and playing into perceptions that i think everyone should learn to master. being able to subtly switch into a specific archetype to be perceived a specific way by someone can be super useful to get what you want (playing into the perception of a misunderstood genius who drives around Nissan even though he is a millionaire is what helped SBF raise $2 billion in investments for FTX), but it takes a lot of social intelligence, self awareness, research, and practice. it's why celebrities pay millions for pr teams every year. first you have to research and identify what archetype to fit into based on the target person (your girlfriend's dad might like someone who is very confident), and then you have to find out a subtle way to display all of those characteristics in order to be perceived that way (study up on his favorite sports teams so that you have something to talk about at dinner --> displays that you are talkative and isn't intimidated by his presence, etc.) at the end of the day, it's all a game. knowing people, reading people, manipulating people (again, not advocating for this), everything is just a game of people. 

writing this blog post feels seriously ingenuine because of the subject matter at hand, and if you really read all the way down here, i can assure you that this is not a ploy or anything. please give me feedback. goodbye.`
  },
  'uniqueness': {
    title: "uniqueness. and why u shouldn't care what others think.",
    date: "03/2024",
    content: `a direct juxtaposition to my previous post.`
  }
};

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="page-wrapper">
        <div className="writing-container">
          <Link href="/pure-simple-html" style={{ color: 'black', textDecoration: 'none' }}>
            ← back
          </Link>
          <p style={{ marginTop: '2rem' }}>Post not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="writing-container">
        <Link href="/pure-simple-html" style={{ color: 'black', textDecoration: 'none' }}>
          ← back
        </Link>
        <article>
          <h1>{post.title}</h1>
          <p className="date">{post.date}</p>
          <div className="content">{post.content}</div>
        </article>
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

        h1 {
          font-size: 2rem;
          margin: 2rem 0 1rem 0;
          font-weight: bold;
          color: black;
        }

        .date {
          margin-bottom: 2rem;
        }

        .content {
          line-height: 1.6;
          white-space: pre-wrap;
          color: black;
        }

        article {
          margin-top: 2rem;
        }

      `}</style>
    </div>
  );
}