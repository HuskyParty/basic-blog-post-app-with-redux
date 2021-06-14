import { React, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

const PostForm = (props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: title,
            body: body,
        };
        setTitle("");
        setBody("");
        props.createPost(post);
    };
    return (
        <div>
            <h1 className="Post-header">Add Post</h1>
            <form onSubmit={onSubmit}>
                <div className="Form-element">
                    <label>Title: </label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="Form-element">
                    <label>Body: </label>
                    <br />
                    <textarea
                        type="text"
                        name="body"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </div>

                <button className="Form-element" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
