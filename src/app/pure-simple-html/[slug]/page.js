'use client'
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = {
  'uniqueness': {
    title: "uniqueness. and why u shouldn't care what others think.",
    date: "03/2024",
    content: `why care so much about what others think? i think there's a certain beauty to doing stuff your own way. there's no kanye if he was copying another "kanye"; there's no picasso if he was afraid of how the world would think of "picasso".

i'm not some great visionary; i haven't made anything yet. but i will always pride myself on my ability to think differently. for me, joy lies in doing something that no one else is doing -- seeing something that no one else is seeing. there are TOO many people who only does what society wants them to do and to see what society wants them to see. 

having this ability to see is a really defining characteristic of all visionaries. what does it mean to be a visionary? is to see far? is to see wide? or is it to see something that's hidden to everyone else? humans have a tendency to assimilate to what's considered "normal" for the society. what is "normal"? as a society, we're told that "normal" is just what everyone else is doing; there's no predefined term for what being "normal" is. and more importantly, there's no reward for being "normal".

people def thought i was a little weird in high school tbh. not in a like a "i don't want to be your friend cause ur a weirdo" type of way, but more like a "hmmmmmmm, that's interesting" type of way. i'm honestly so fortunate to have grown up around people who really supported my thinking; my friends always considered what i had to say even if it was a little different, and i think they recognized my value as a someone who could always provide an additional opinion or a secondary voice to every idea they had. being in such a supportive enviornment really taught me that being unique and deviating from the norm should be celebrated; not shamed. 

priding yourself in being unique is what allows you to grow to fit YOUR mold, not society's mold for you. and connecting it back to the idea of visionaries and innovators, these people are what they are because they PRIDED themselves on their ability to see something that no one else saw; to grasp onto an idea when no one else even opened their palm. 
 `
  },
  'perception': {
    title: "perception. and why u should care what others think.",
    date: "03/2024",
    content: `the 2 greatest lessons i learned from speech and debate is 1) to smile 2) fake glasses. 

what? let me explain. 

you can tell a lot about a person based on how fast they walk, the way they talk, how they interact with you, do they smile at you, or do they frown, or whatever. every day, we subconsciously form countless perceptions about people based on these assumptions; a person who walks fast = busy/stressed. and we could use this to our advantage. by playing off of these preformed assumptions, we can "manipulate" people into forming a specific perception of us. (i am not advocating for the manipulation of people). going back to speech and debate, smiling = more charismatic, more confident, more engaging and more approachable. glasses = more knowledgeable and more trustworthy. before giving a speech, i purposely smile at the judges and subtly adjust my fake glasses so that i can display all of these traits before i even begin speaking. now do these strategies work at tournaments? i have no clue. but they def don't hurt. your words and your perceptions should push and pull on a person's thoughts, guiding them into a specific perception that you want to be perceived as. 

basically what im saying is that we are constantly being subconsciously judged by everyone at every second, so if we want someone to perceive you some way, you just have to subtly display all the characteristics associated with that perception. for example, if you want to be perceived as smart (but currently aren’t), you would hang out with people who are seen as knowledgeable or be able to bullshit lots of random jargon on advanced topics that you have no idea about. and being perceived as smart has lots of benefits: people respect you more, people want to come to you with ideas, your ego gets stroked, your god complex gets fed, etc. etc. lots of great things. 

and honestly, at the end of the day, it's up to you to decide if it's worth the effort to always try to play into this perception or just be yourself. there are times when you should be playing into this positive perception (in front of teachers, your gf's parents, etc.) and there are times when you should totally disregard what other people are thinking of you. 

and it's this balance of being yourself and playing into perceptions that i think everyone should learn to master. being able to subtly switch into a specific archetype to be perceived a specific way by someone can be super useful to get what you want (playing into the perception of a misunderstood genius who drives around Nissan even though he is a millionaire is what helped SBF raise $2 billion in investments for FTX), but it takes a lot of social intelligence, self awareness, research, and practice. it's why celebrities pay millions for pr teams every year. first you have to research and identify what archetype to fit into based on the target person (your girlfriend's dad might like someone who is very confident), and then you have to find out a subtle way to display all of those characteristics in order to be perceived that way (study up on his favorite sports teams so that you have something to talk about at dinner --> displays that you are talkative and isn't intimidated by his presence, etc.) at the end of the day, it's all a game. knowing people, reading people, manipulating people (again, not advocating for this), everything is just a game of people. 

writing this blog post feels seriously ingenuine because of the subject matter at hand, and if you really read all the way down here, i can assure you that this is not a ploy or anything.`
  },
  'regret': {
    title: "regret: how much we want it > how much effort we put in.",
    date: "04/2024",
    content: `regret builds character. regret builds character. 

i just received my college results, and i can't say that i am particularly ecstatic about my choices of colleges next fall (i do have some good ones + waitlists so we'll see). but neither am i particularly surprised. 

i was a slacker back in sophomore year; no clue what the heck i was doing back in zhong's calculus class. and even till this day, it's been my biggest regret that i didn't put in just a little more effort to get an A. but u can't change the past, and neither do i want to.

see, after zhong's calculus class, that feeling of regret made me promise myself to never slack off in a class again; to never procrastinate on hw, to never skip a textbook reading. this feeling of regret taught me that life moves on, and i had a choice to either sit and pity about my gpa or work my ass off trying to fix it. and it's this feeling of regret that i believe builds the most character in people.

we regret because we care. we wanted those results so badly, and yet, our effort simply didn't match up. this inequivalence is what causes us to feel regret: regret: how much we want it > how much effort we put in. 

i can't go back and change the past so that i can work harder in zhong's class and get into all the dream colleges i wanted to get into, but neither do i want to. i already know that this feeling of regret is going to change me so much, and in the long run, i WILL become a better person as a result of this no matter where i end up going to college.`
  },
  'summer': {
    title: "summer's end.",
    date: "07/2024",
    content: `this was probably the best summer of my life; i got to spend so much time with all of my friends and family before college probably one last time before the abyss of adulthood eventually swallows us all. 

here are the lessons i learned from this summer:

1. communication is so important for friendship. it's more than just talking; it's understanding.

2. our actions are a reflection of our thoughts. the words we say, the things we do, are all deeply reflective of, to some level, our fundamental thinking. this fundamental thinking is unique to us all, and no matter how hard we try to deny it or push it away. it always appears in the form of our actions.

3. cherish the moment. i think i spent so much time this summer, esp the end, worrying about the last time i'll see my friends again before they leave for college or wtv, and i felt like towards the end, i was always counting down days before they left. i was so worried about them leaving that i sometimes forgot to enjoy the time that we did spend together.`
  },
  'solitude': {
    title: "solitude and growth.",
    date: "09/2024",
    content: `being on the quarter system means that i'm alone while all my friends are gone and enjoying college. it's kind of crazy to me that most of them have already been in college for an entire month now. and in this solitude, I've really learned to enjoy my own company.

this is complete juxtaposition from summer when i was spending every second with friends, and now, when everyone's gone, it's made me realize that i kind of forgot to focus on ME for the last 3 months. thankfully, i think this last month has really made up for it.

I've been working like crazy recently; probably coding for at least 9 hours (?) a day. and through this solitude and work, I've realized that growth only happens during times of self reflection and solitude. sure, being around friends is fulfilling in a lot of senses, but true growth happens when you take time to just think about yourself. contextualize yourself within your environment and within your community, nd really see yourself grow and expaond to fit into it. 

for me at least, this contextualizing only occurs when i'm alone. now, i'm def not saying that my friends are a distraction, but i think being alone really brings out a different, and dare i say, better side of you. you're not looking to impress anyone; everything that you are doing is strictly for you. and when you direct this much focus to yourself, growth naturally follows along. the only plants that grow are the ones that you water. 

so really, it's a balance between watering the relationships with your friends and watering the plant of your own personal growth. and finding this balance is what makes us, us.`
  },
  'delusion':{
    title: "delusion as a visionary.",
      date: "10/2024",
      content: `visionaries don't see further or wider than anyone else; they just see what others don't. and in a sense, this is what being delusional means.

i'm going to sound like an obnoxious combination between kendrick lamar on 'pride' and sam altman starting a yc interview, but i hope to give you guys a new perspective into the "why" behind challenging society and the fundamental definition of being a visionary.

defined by the oxford english dictionary, delusion is the act of holding firm onto an idea despite "incontrovertible evidence to the contrary." but the psychological core of all visionaries that makes them so different than everyone else is their ability to see things that others miss; to grasp onto an idea when no one else even opened their palms. its their ability to always find a case against "incontrovertible evidence" that makes them fundamentally a visionary. see, this entire term of "incontrovertible evidence" just means evidence that is widely accepted and found within society today, but as i've done so many times in my previous blogs, i want to again make the case that the collective whole of society isn't always right. and a certain population of visionaries can always "take down" this collective whole.

now what does any of this even mean? 

visionaries always challenge preestablished notions despite there being "incontrovertible evidence". now keep in mind, visionaries can be anyone--doctors, lawyers, waitresses, government workers--anyone who has the ability to recognize the flaws in our society today. i am not saying that i think i'm a visionary; i haven't done anything yet. but being able to poke holes into society's fabric of right or wrong is such a powerful ability that i think everyone should develop. 

"incontrovertible evidence" is just notions that are widely accepted by society today: taxis are the best way for people to get around without a car, people live in hotels during vacations. but a visionary will always challenge this "incontrovertible evidence" because they look deeper into the "why" behind the things we do, even if it's something that has been preestablished for decades. behind the founders of uber and airbnb, they were just regular people who weren't afraid to challenge the way people transported without cars or the way people lived in temporary establishments, and by challenging these things, they were able to reinvent what we now consider as "incontrovertible evidence". uber and airbnb, are now seen as fundamental in our world today; they tore down preestablished notions to build up new ones. and in a couple of decades or centuries, this cycle will perpetually continue itself when others challenge these ideas. 

society works because there is a certain group of people who who will continually tear down old "inconvertible evidence" and build up new "inconvertible evidence". and this, as pointed out by the oxford dictionary, is just people being delusional.
`
  },
  'yes': {
    title: "say yes because the fear of missing out is too great.",
    date: "10/2024",
    content: `i wouldn't say that i have "fomo" (fear of missing out), but i think i'm very optimistic about the future. i say yes to things a lot because i always believe that by participating in something or by trying something new, something good is going to happen. even when this isn't the case for a lot of different things, this mindset has led me to unexpected adventures and connections that i never would have experienced otherwise.

some might call this naive or unrealistic, but i've found that maintaining this sense of possibility keeps life interesting. sure, not every new experience turns out to be life-changing or even particularly memorable, but the times when something magical does happen make all the other attempts worth it. 

i wanted to connect this idea to entrepreneurship tbh. i have many great ideas, and there's nothing i love more than to just hacking and playing around with each idea. im not physically "saying yes" or joining anything, but just this representation of WANTING to try everything out because you're scared that you'll miss out on something cool is something that really makes me, me.

i'm not entirely sure if this is a good trait or not; i think curiosity definitely is, but wanting to try everything does take quite a bit of time. don't get me wrong, i love coding, but this does get tiring at times when things always lead to dead ends. and the worst part is that, even when i know this project will lead to a dead end, i still follow the little glimpse of light at the end of the tunnel too eagerly.

i'm not really sure where i wanted to go with this blog tbh, but i think it was good getting this thought out of my brain. thank you guys for listening.`
  },
  'openai': {
    title: "the ethical tangent behind openai.",
    date: "10/2024",
    content: `the issue with openai isn't what most people think it is.

back in 2015, altman, then president of yc, sends musk an email stating that he wanted to "test the waters" with a new open artificial intelligence organization just days after musk tweets that he had a bad dream about google's deepmind. from the start, u can clearly tell that altman is a very planned and procedural person; deliberately emailing musk after his experience. now, does this actually mean anything, probably not, but it sets the tone for the type of organization that openai was set out to be. 

one that is supposed to be a polar opposite to google.

yet, today, altman is the same person trying to abolish openai's nonprofit organization status in replacement for a for-profit status, so on a deeper level, is this move preplanned or is it just a change of heart. honestly, i can see it both ways. after watching countless yc interviews, i've gathered that altman is an incredibly planned person, who, if he wanted to, could def pull this off. on the other hand, no one could've predicted this ai boom, and maybe altman was just in the perfect position to capitalize on this trend. 

but the bigger question is whether or not openai's current plans are "ethical", and how do we even describe what ethical means in such a conjuring time. this quarter, i'm currently taking an open-source cs class that discusses the question of ethics in artificial intelligence. one particular message that really stuck around with me was about on the ethics of using information online to train these huge llms. 


if i wrote a novel in 2005 and published the first chapter on my personal website as a preview, and then that chapter got scraped and used to train an ai that can now essentially replicate my writing style - is that ethical? i mean fundamentally, it feels a little wrong though, right? because this was my work, and if this llm were to ever reproduce something in my writing, it would be taking my creative advantage. even if something is technically accessible on the internet, there's a meaningful difference between content being findable and it being ethical to use in training data. and this is currently the line that openai sits on.

because we can all agree that openai is NOT open (even if they try so hard to say they are), but is it ethical for them to take all this data from various online sources to train their llms, and then try to sell off this llm to consumers? that's the real ethical question behind these gpts.`
  },
  'yc': {
    title: "yc as a reflection.",
    date: "11/2024",
    content: `the y.

no, not the ymca -- the y combinator. 

from brian chesky to brian armstrong (and, maybe one day, bryan hong), the y has been synonymous to startups, silicon valley, and entrepreneurship.

and this is what i wanted to talk about in this blog today. like many people, it's been my dream for quite a while to launch my own startup and disrupt and revolutionize an industry; unlike others, my main motivation isn't money. entrepreneurship to me is a form of creation; a creative and artistic value to society. 

i was never good at art; i had a couple years where i was semi-decent at the violin but nothing too special. which is strange, considering that one of my biggest strengths is my creativity. and ultimately, this is what entrepreneurship is for me; a creative outlet for me to solve problems. many people ask me if i enjoy coding, and the truth is, not enough for how much i code. and this is what's so surprising for people. i can code for 8, 9 hours a day without a break, but i do it not because i love communicating with my laptop, but rather, because coding is just another tool for creation. 

for every tech entrepreneur, there's two types of problems that we are constantly having to solve: the macro problem and the micro problem. for example, the current app that I've been playing around with is a housekeeping tool for hotels (macro issue), but on the micro side, i'm solving problems in my code and implementation (syntax errors or my inability to implement binary trees correctly), and i think i personally enjoy solving the macro issue a lot more than the micro issue. 

that brings me back to yc. yc really emphasizes the importance of technical founders because these are the people who are solving both the macro and micro issues in their startup. now don't get me wrong, i'm majoring in cs and math so technically im technical. but there's a whole different breed of technical when we talk about computer scientists who LOVE coding just to code. (i love coding to solve problems)

and in a sense, this is what entrepreneurship means to me. let's say that coding was never invented and instead of tech saas startups, our only medium to solving problems was manual labor: instead of google having access to the internet (internet was never invented in this world), we just had a bunch of really smart people answer our questions. i think for a decently sized population of people, this change would make them not want to pursue entrepreneurship anymore (they love CODING to code), but for me, it doesn't matter if it's manual labor, coding, math, chemistry equations -- i will always love entrepreneurship, no matter the medium, because i love solving problems.
`
  },
  'love': {
    title: "love, sacrifice, and my criticism of the work-life balance.",
    date: "12/2024",
    content: `the work-life balance is stupid.

this idea that we should split our time and energy between working and living seems so pessimistic because it forces us to associate working with negativity and living with positivity as a sort of balance; it's why friday evenings are heaven and sunday afternoons are hell.

instead, we should view work as an extension of living. love what you do and live with it every day. whether that's studying for your final exams or clocking in another day at the office; view every opportunity as a place to grow. when i stopped associating work with negativity and living with positivity, i saw my productivity increase in every aspect of my life. when it came to studying for exams, i consistently reminded myself that every piece of information i took in was going to be a part of me forever. if it was a cs or math class, i reiterated that by conquering this information, i would become such a better programmer or builder in the future. if the class wasn't a major class, i reminded myself that this was just a test of my discipline. during my workouts, rather than focusing on the strain or time spent, i reaffirm myself that every rep directly correlates to how much stronger i'll be. when attending meetings, rather than seeing them as obligations, i view them as opportunities to understand different perspectives and build meaningful connections.

by associating every "difficult" task i had to conquer in front of me with a positive reinforcement rather than just "work", i began to truly love what i do. 

and i think truly loving what you is what makes you productive. 

i recently had a discussion with a friend who said that how much we love someone is defined by how much we are willing to sacrifice for them, and this really stuck with me because it helped me understand the psychology behind the work-life balance and productivity. i consider love and sacrifice to be inverses; you sacrifice some things for other things we love: sacrifice = negative and love = positive. this ties into the concept of the work-life balance because society molds us to think that we have to sacrifice the things we love for work, and i think this mindset is what's stopping us from being maximally productive.

if we always think of work as this barrier to the things we love, then we will never love the work that we do because work = sacrifice = negative and everything else is the just the inverse of it, and if we will never love what we do, then we will never achieve 100% productivity. 

**you don't have to achieve 100% productivity every time you work; no one does. this blog was just a way for me to provide a pseudo-mathematical approach to the idea that the amount of love we have for the work we're doing has a positive correlation to the productivity of that work we are doing.`
  },
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