import React, {Component} from "react";
import TodoGroup from "./TodoGroup";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="todoListWrapper">
                <div className="todoListHeader">
                    <span className="line"></span>
                    <span className="title">Weekly TodoList</span>
                    <span className="line"></span>
                </div>
                <div className="todoGroupWrapper">
                    <TodoGroup name="Monday" />
                    <TodoGroup name="Tuesday" />
                    <TodoGroup name="Wednesday" />
                    <TodoGroup name="Thursday" />
                    <TodoGroup name="Friday" />
                    <TodoGroup name="Saturday" />
                    <TodoGroup name="Sunday" />
                    <TodoGroup name="Notes" />
                </div>
            </div>
        );
    }
}

export default TodoList;