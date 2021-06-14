import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = (props) => {
    const [newP, setNewP] = useState(props.newPost);
    useEffect(() => {
        props.fetchPosts();
    }, []);

    useEffect(() => {
        if (props.newPost !== newP) {
            console.log(props.newPost);

            props.posts.unshift(props.newPost);
            console.log(props.posts);
            setNewP(props.newPost);
        }
    }, [props.newPost]);

    const postItems = props.posts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));
    return (
        <div>
            <h1 className="Post-header">Posts</h1>
            {postItems}
        </div>
    );
};

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
};
const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
