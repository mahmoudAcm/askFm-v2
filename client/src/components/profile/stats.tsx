import React from 'react';
import './assets/css/stats.css' ;
import { connect } from "react-redux";

interface StatsProps {
    count: number
}

const StatsPosts = ({ count }: StatsProps) => (
   <div className='stats'>
        <div className='statsCircle-posts'>
            <i className="fa fa-comment" aria-hidden="true"> </i>
        </div>
        <span className='stats-post-count'>{ count }</span>
        <span className='stats-name'>Posts</span>
   </div>   
);

const StatsFollower = ({ count }: StatsProps) => (
    <div className='stats'>
        <div className='statsCircle-followers'>
        <i className="fa fa-hospital-o" aria-hidden="true"> </i>
        </div>
        <span className='stats-follower-count'>{ count }</span>
        <span className='stats-name'>Follower</span>
    </div>   
);

const StatsLikes = ({ count }: StatsProps) => (
    <div className='stats'>
        <div className='statsCircle-likes'>
        <i className="fab fa-heart-o" aria-hidden="true"> </i>
        </div>
        <span className='stats-like-count'>{ count }</span>
        <span className='stats-name'>Likes</span>
    </div>   
);

interface MainStatsProps {
    likes: number,
    posts: number,
    followers: number
}

const StatsBody = ({ likes, posts, followers }: MainStatsProps) => {
    return (
        <>
            <div className='col-3 profile-stats'>
                <StatsPosts count={posts}/>
            </div>    
            <div className='col-3 profile-stats'>
                <StatsLikes count={likes}/>
            </div>
            <div className='col-3 profile-stats'>
                <StatsFollower count={followers}/>
            </div> 
        </>
    );
}

const mapStateToProps = (state: any) => {
     return {
        likes: 0,
        posts: state.Inbox.askPosts.posts.length,
        followers: 0
     }
};

export const Stats = connect(mapStateToProps)(StatsBody);