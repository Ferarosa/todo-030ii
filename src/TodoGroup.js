import React, { Component } from "react";
import GroupList from "./GroupList";
import "./TodoGroup.css";

class TodoGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="groupWrapper">
                <div className="groupHeader">{this.props.name}</div>
                <div className="line"></div>
                <GroupList/>
                <div className="groupInputWrapper">
                    <input 
                        type="text"
                        placeholder="Write and Press 'Enter'"
                        onKeyPress={console.log('asdf')}
                    ></input>
                </div>
            </div>
        );
    }
}

export default TodoGroup;