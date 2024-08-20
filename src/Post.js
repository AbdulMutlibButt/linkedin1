import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className='Post'>
            <div className='Post__header'>
                <Avatar />
                <div className='Post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='Post__body'>
                <p>{message}</p>
            </div>
            <div className='Post__buttons'>
                <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
                <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlined} title="Share" color="gray" />
                <InputOption Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post