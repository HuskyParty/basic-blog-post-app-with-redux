import { React, useState } from "react";

const Postform = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: title,
            body: body,
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
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

export default Postform;
