import React, { useState } from "react";
import TimelineTweet from "../TimelineTweet/TimelineTweet";

import { useSelector } from "react-redux";
import axios from "axios";
import './MainTweet.css'

const MainTweet = () => {
  const [tweetText, setTweetText] = useState("");

  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post("/tweets", {
        userId: currentUser._id,
        description: tweetText,
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-tweet-container">
      {currentUser && (
        <p className="font-bold pl-2 my-2">@{currentUser.username}</p>
      )}

      <form className="tweet-form">
        <textarea
          onChange={(e) => setTweetText(e.target.value)}
          type="text"
          placeholder="What's happening"
          maxLength={280}
          className="tweet-input"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="tweet-button"
        >
          Tweet
        </button>
      </form>
      <TimelineTweet />
    </div>
  );
};

export default MainTweet;
