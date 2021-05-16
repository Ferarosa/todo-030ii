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
                <div className="todoGrid">
                    <div className="todoGridItem">
                        <TodoGroup name="Monday" />
                    </div>
                    <div className="todoGridItem">
                        <TodoGroup name="Tuesday" />
                    </div>
                    <div className="todoGridItem">
                        <TodoGroup name="Wednesday" />
                    </div>
                    <div className="todoGridItem">
                        <TodoGroup name="Thursday" />
                    </div>
                    <div className="todoGridItem">
                        <TodoGroup name="Friday" />
                    </div>
                    <div className="todoGridItem">
                        <TodoGroup name="Saturday" />
                    </div>
                    <div className="todoGridItem">
                        <TodoGroup name="Sunday" />
                    </div>
                    <div className="todoGridItem">
                        <TodoGroup name="Notes" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;