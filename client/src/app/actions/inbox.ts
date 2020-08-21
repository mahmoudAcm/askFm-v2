import authService from '../../components/auth/authService';
import store from '../store';

export const getInboxPosts = (id: any) => {
    authService.get(`askPosts/${id}`).then(res => res.json())
        .then(data => {
            console.log(data);
            store.dispatch({
                type: "inbox/askPosts",
                askPosts: data
            });
        }).catch( err => {

    });
};