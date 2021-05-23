import React from "react";

const Postform = () => {
    return (
        <div>
            <h1 className="Post-header">Add Post</h1>
            <form>
                <div className="Form-element">
                    <label>Title: </label>
                    <br />
                    <input type="text" name="title" />
                </div>
                <div className="Form-element">
                    <label>Body: </label>
                    <br />
                    <textarea type="text" name="body" />
                </div>

                <button className="Form-element" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Postform;
