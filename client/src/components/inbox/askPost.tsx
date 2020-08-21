import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getInboxPosts } from '../../app/actions/inbox';
import { Answer } from './controller/inbox';
import { getUserId } from '../profile/controller/Profile';
import { AskPostItemProps } from "./types/Inbox";
import './assets/css/inboxBody.css';

const AskPostItem = ({ text, _id, updatedAt }: AskPostItemProps) => {
    return <div key={_id} className='card m-3'>
        <div className='card-body'>
            <div>{text}</div>
            <div className='askPost-item-footer'>
                <span className='date'>{new Date(updatedAt).toLocaleDateString()}</span>
                <button className='btn btn-danger answer' onClick={Answer(_id)}>Answer ></button>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
}

const InboxPosts = ({ askPosts }: any) => {
    useEffect(() => {
        getInboxPosts(getUserId());
    }, []);
    return <>
        {
            (askPosts ? askPosts.posts.map(({_id, text, createdAt, updatedAt }: AskPostItemProps) => {
                return <AskPostItem key={_id} _id={_id} text={text} createdAt={createdAt} updatedAt={updatedAt}/>
            }): "")
        }
    </>
};

const mapStateToProps = (state: any) => {
  return {
      askPosts: state.Inbox.askPosts
  }
};

export default connect(mapStateToProps)(InboxPosts);