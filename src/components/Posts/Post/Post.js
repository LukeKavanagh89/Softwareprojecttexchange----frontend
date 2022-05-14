import React from "react";
import useStyles from './styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Event, EventMedia, EventContent, EventActions, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'monent';
import { deletePost, likePost, } from "../../../Actions/Posts";
import { useDispatch } from "react-redux";
import { PostAddOutlined } from "@material-ui/icons";
import user from "../../../../../server/models/user";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
const Post= ({ post, setCurrentId }) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('Account'));
    const dispatch = useDispatch();


    //implementing the users ability to like the event 
    const interested = () =>{
         if (post.intrested.length > 0) {
            return post.interested.find((interested) => interested === (user?.result?.googleId || user?.result?._id)) 
            ? (
                <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.interested.length > 2 ? `People Interested ${post.interested.length - 1} includes` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` } </>

            ):(
                <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.interested.length} {post.interested.length === 1 ? 'Like' : 'Likes'}</>
            
            );
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Interested</>;
    };

    return (


        <Event className={classes.event}>
            <EventMedia className={classes.media} image={post.selectedFile} title={post.selectedFile} />
            <div className={classes.overlay}>
                <Typography variant="h6>">{post.name}</Typography>
                <Typography variant="body2>">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            {(user?.result?.googleId === post?.Event || user?.result?._id === post?.Event ) && (


            <div className={classes.overlay2}>
                <Button 
                style={{color: 'green'}} 
                size="small"  
                onClick={() => setCurrentId(post_id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>

            </div>
            )}

            <div className={classes.details}>
            <Typography variant="body2" color ="textSecondary">{post.Actions.map((action) => `#${action}`)}</Typography>
            </div>
            <EventContent>
            <Typography className={classes.title} variant="h5>" gutterBottom>{post.title}</Typography>
            </EventContent>
            <EventContent>
            <Typography variant="body2" color="textSecondary" component="b"> {post.message}</Typography>
            </EventContent>
            
            <EventActions className={classes.EventActions}>
                
                <Button size="small"> color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post_id))}
                <ThumbUpAltIcon fontSize="small" />
                Interested
                {post.likeCount}
                <LikesCount />
                </Button>

                {(user?.result?.googleId === post?.Event || user?.result?._id === post?.Event ) && (
                <Button size="small"> color="primary" onClick={() => dispatch(deletePost(post_id))}
                <DeleteIcon fontSize="small" /> Terminate
                </Button>
                )}
            </EventActions>
        </Event>
    );
};

export default Post;