import React, { Component } from "react";
import "./Saved.css";
import axios from "axios";

class Saved extends Component {
    componentDidMount = () => {
        axios.get("/api/saved").then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card">
                    <div className="card-header">
                        <i className="far fa-newspaper"></i> Saved Articles
                </div>
                    <div className="card-body">
                        <div>
                            <h1>{}</h1>
                            <a href=" #" target="_blank">Check More!</a>
                            <a href="# ">Delete</a>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        );
    }
}   

export default Saved;