import React from 'react';
import './assets/css/inboxBody.css';
import InboxPosts from "./askPost";

const InboxBody = () => {
    return <div className='container inbox'>
        <div className='row'>
            <div className='col-7'>
                <InboxPosts />
            </div>
            <div className='col'>

            </div>
        </div>
    </div>
};

export default InboxBody;