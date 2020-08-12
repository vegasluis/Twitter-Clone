import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName,
    userName,
    verified,
    text,
    image,
    avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src='https://pbs.twimg.com/profile_images/1080307398936473601/6PQTcqJy_400x400.jpg'></Avatar>
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Luis Ruiz {" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className='post__badge' /> @vegasluis
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a Twitter Clone with React JS</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/hMKjvTYlSaFCU/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
