import {FormEvent} from "react";

export const Answer = (postId: string) => {
    return (e: FormEvent<any>) => {
        console.log(postId);
        alert(postId);
    }
};

