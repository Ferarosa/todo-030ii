import React, { Component } from "react";
import GroupList from "./GroupList";
import "./TodoGroup.css";

class TodoGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (e.key == "Enter") {
            const itemArray = this.state.items;

            if (this._inputElement.value !== "") {
                itemArray.push({
                    text: this._inputElement.value
                });

                this.setState({
                    items: itemArray
                });
            }

            this._inputElement.value = "";
        }
    }

    render() {
        return (
            <div className="groupWrapper">
                <div className="groupHeader">
                    <div className="title">{this.props.name}</div>
                    <div className="line"></div>
                </div>
                <div className="groupBody">
                    <div className="groupInputWrapper">
                        <input
                            type="text"
                            placeholder="Write and Press 'Enter'"
                            ref={(element) => this._inputElement = element}
                            onKeyPress={this.addItem}
                        ></input>
                    </div>
                    <GroupList items={this.state.items} />
                </div>
            </div>
        );
    }
}

export default TodoGroup;