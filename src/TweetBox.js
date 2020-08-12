import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase'


function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e=> {
    e.preventDefault();

    db.collection('posts').add({
      displayName:"Luis Ruiz",
      username: "VegasLuis_",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1080307398936473601/6PQTcqJy_400x400.jpg",
    })

    setTweetImage("");
    setTweetMessage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src='https://pbs.twimg.com/profile_images/1080307398936473601/6PQTcqJy_400x400.jpg' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text" />
        </div>
        <input
          className="tweet__imageInput"
          value = {tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

