import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src= 'https://pbs.twimg.com/profile_images/1080307398936473601/6PQTcqJy_400x400.jpg'/>
          <input placeholder="What's happening?" type="text"/>
        </div>
        <input
          className="tweet__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

