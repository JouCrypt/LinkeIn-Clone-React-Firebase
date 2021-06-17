import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from './InputOption';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = ({name, description, mensaje, photoUrl}) => {
    return ( <div className="post">
        <div className="post_header">
            <Avatar/>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{mensaje}</p>
        </div>
        <div className="post_button">
            <InputOption Icon={ThumbUpAltOutlinedIcon} tittle="Like" color="gray"/>
            <InputOption Icon={ChatOutlinedIcon} tittle="Comentar" color="gray"/>
            <InputOption Icon={ShareOutlinedIcon} tittle="Compartir" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} tittle="Enviar" color="gray"/>
        </div>

    </div> );
}
 
export default Post;