import React, {ChangeEvent} from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {ActionsTypes, PostMessageType, ProfilePageType} from '../../../../redux/state';
import { profileActions } from '../../../../redux/profile_reducer';


type MyPostsPropsType = {
    postsMessagesData: Array<PostMessageType>
    newPostText: string
    addPost: () => void
    newPostTextChange: (text: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.postsMessagesData
        .map((post: PostMessageType) => <Post message={post.message} likesCounter={post.likesCounter}/>)

    const onAddPost = () => {
        props.addPost()
    }
    const onPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostTextChange(e.currentTarget.value)
    }

    return (
        <div>
            <header className={s.header}>My Posts</header>
            <div className={s.newPost}>
                <textarea value={props.newPostText}
                          onChange={onPostTextChange}/>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.postsArea}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts