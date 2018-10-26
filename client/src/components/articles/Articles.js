import React from "react";
import "./Articles.css";
import axios from "axios";

const Articles = (props) => {
    const addToFav = (title, url) => {
        console.log(title)
        console.log(url)
        axios.post("/api/saved", {title: title, url: url}).then(res => console.log(res));
    }

    console.log("PROPS", props);
    return(
        <div>
            <br></br>
            <div className="card">
                <div className="card-header">
                <i className="far fa-newspaper"></i> Top Articles
                </div>
                <div className="card-body">
                    <div>
                        <h1>{props.title}</h1>
                        <a href={props.url} target="_blank">Check More!</a>
                        <button onClick={() => addToFav(props.title, props.url)}>Add To Favorites</button>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
}   

export default Articles;