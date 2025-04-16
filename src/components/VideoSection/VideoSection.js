import React from 'react';
import './videosection.css';

const VideoSection = () => {
  const videos = [
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/why you should code tn.png`,
      title: "Why Learn To Code in 2025",
      description: "Explore the importance of coding in today's digital world and why it's a skill worth learning.",
      link: "https://youtu.be/kqKqQCXeAJ0?si=DWyoGhJrnusvfQPn",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/best way to learn to code tn.png`,
      title: "The Best Way to Learn Code for FREE | Ultimate Guide for Beginners 2025",
      description: "Discover free resources and strategies to kickstart your coding journey this year.",
      link: "https://youtu.be/Ns7azNXlv-Q?si=KyJlbcUmL8f4Ztn0",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/Christmas tree tn.png`,
      title: "How Developers put up their Christmas tree | Javascript 2024",
      description: "A fun take on how developers bring coding into their holiday celebrations.",
      link: "https://youtu.be/bpvK2wVqkds?si=98jy9aRTHCZf1Wxr",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/Christmas countdown tn.png`,
      title: "How to Make a Christmas Countdown for Your Website | HTML, CSS & JavaScript Tutorial 2024",
      description: "Learn to create a festive countdown timer for your website with this step-by-step tutorial.",
      link: "https://youtu.be/kZpAoofkohg?si=5DRFF2LzLxoROL7F",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/snow animation tn.png`,
      title: "How to Create a Realistic Snowfall Animation | Full Tutorial with HTML, CSS & JavaScript",
      description: "A complete guide to adding a magical snowfall effect to your website.",
      link: "https://youtu.be/9FAb5ZTrrjo?si=KHK9Vun5pgpnWlXT",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/password generator tn.png`,
      title: "Build a Strong Password Generator in JavaScript | Full Tutorial 2025",
      description: "Secure your online accounts with this JavaScript password generator tutorial.",
      link: "https://youtu.be/tje6ykT-9p4?si=UL8EUwKq6wUGN5_d",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/food diary tn.png`,
      title: "Create a Dynamic Food & Movement Tracker App | HTML, CSS & JavaScript Tutorial 2025",
      description: "Track your daily food intake and exercise with this dynamic app tutorial.",
      link: "https://youtu.be/a5aJnROdSwU",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/essential methods tn.png`,
      title: "13  Array Methods You Should Know | JavaScript 2025",
      description: "13 essential JavaScript array methods that every developer should know",
      link: "https://youtu.be/ybkbspsq8qU",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/Search Array methods tn.png`,
      title: "Master JavaScript Array Search Methods",
      description: "We’ll break down essential array search methods like find(), filter(), and more.",
      link: "https://youtu.be/p-5_NZA-HMY",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/higher-order VS callback tn.png`,
      title: "JavaScript Callback Functions VS Higher Order functions",
      description: " In this video, I break down these concepts in a simple, fun way—using clear examples.",
      link: "https://youtu.be/FMEbM4CieJk",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/Exploding heart tn.png`,
      title: "Animated EXPLODING Heart Tutorial | HTML5 Canvas and Javascript",
      description: "Not all coding projects have to be boring, this one starts with a BANG! ",
      link: "https://youtu.be/Le-R0H6EReU",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/Is DeepSeek Reliable for coding.png`,
      title: "Is DeepSeek Reliable For Coding?",
      description: " In this video, I delve into all aspects of DeepSeek, the AI chatbot making waves in the coding scene.",
      link: "https://youtu.be/86eQMLOgSgw",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/Do while loops tn.png`,
      title: "Do While Loops Explained | JavaScript",
      description: "A do...while loop is a special type of loop in JavaScript that always runs at least once before checking the condition.",
      link: "https://youtu.be/9-Dy1ZQytN0",
    },
    {
      thumbnail: `${process.env.PUBLIC_URL}/images/For loops tn.png`,
      title: "For Loops Explained | JavaScript",
      description: "Today, we’re diving into one of the first loops you’ll encounter in JavaScript—the for loop!",
      link: "https://youtu.be/53RwFSVD9b8?si=34iWNWLDds86Gins",
    },
  ];
  

  return (
    <div className="video-section-container" id="video-section">
      <div id="video-text">
             <p><span className="highlight-red"> immerse</span> yourself in the coding <span className="highlight-teal">community</span> with our diverse range of videos.
             </p></div>
      <br></br>
      <div id="video-container">
        {videos.map((video, index) => (
          <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="video-card">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <p className="video-title">{video.title}</p>
            <p className="video-description">{video.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
