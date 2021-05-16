import React, { Component } from "react";
import BulletNormal from './assets/images/bullet-normal.png';
import BulletChecked from './assets/images/bullet-checked.png';
import "./GroupList.css";

class GroupList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <ul className="groupListWrapper">
                <li>
                    <div className="groupItemWrapper">
                        <img src={BulletNormal} alt="normal todo" />
                        <span >This is task.aaa aaaaaaaa aaaa aaa</span>
                    </div>
                </li>
                <li>
                    <div className="groupItemWrapper">
                        <img src={BulletNormal} alt="normal todo" />
                        <span >This is task.</span>
                    </div>
                </li>
            </ul>
        );
    }
}

export default GroupList;