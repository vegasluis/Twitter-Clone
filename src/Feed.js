import React from 'react'
import TweetBox from './TweetBox'

function Feed() {
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
        </div>
    )
}

export default Feed
