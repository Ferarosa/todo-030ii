import { sortBy } from 'lodash';
import React, { Component } from "react";
import GroupList from "./GroupList";
import "./TodoGroup.css";

class TodoGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        // this.addItem = this.addItem.bind(this); // arrow 함수로 대체
        // this.handleTodoChange = this.handleTodoChange.bind(this); // arrow 함수로 대체
    }

    addItem = (e) => {
        if (e.key === "Enter") {
            const itemArray = this.state.items;

            if (this._inputElement.value !== "") {
                itemArray.push({
                    key: Date.now(),
                    text: this._inputElement.value,
                    isCompleted: false
                });

                this.handleTodoChange(itemArray);
            }

            this._inputElement.value = "";
        }
    }

    handleTodoChange = (itemArray) => {
        this.setState({
            items: sortBy(itemArray, 'key')
        });
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
                    <GroupList items={this.state.items} onTodoChange={this.handleTodoChange} /> {/* 추후 리덕스에서 적용 */}
                </div>
            </div>
        );
    }
}

export default TodoGroup;