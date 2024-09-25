import React from 'react'
import PostStatsLikes from './PostStatsLikes'
import PostStatsComments from './PostsStatsComments'
import PostStatsRetweets from './PostStatsRetweets'
import PostStatsIcon from './PostsStatsIcon'

import './post-stats.css'

type Stats = {
    likes: number,
    retweets: number,
    comments: number,
    stats: number,
}

const PostStats: React.FC<Stats> = ({ likes, retweets, stats, comments }) => {
    return (
        <div className='post-stats-container'>
            <div className='post-stats'>
                <PostStatsComments />
                <p>{comments} </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PostStatsRetweets />
                <p >{retweets} </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PostStatsLikes />
                <p >{likes} </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PostStatsIcon />
                <p >{stats} </p>
            </div>
        </div >
    )
}

export default PostStats