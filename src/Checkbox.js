import React, { Component } from "react";
import BulletNormal from './assets/images/bullet-normal.png';
import BulletChecked from './assets/images/bullet-checked.png';

class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const { checked, onClick } = this.props;
        onClick(!checked);
    }


    render() {
        return (
            <img
                src={this.props.checked ? BulletChecked : BulletNormal}
                onClick={this.handleClick}
                alt="todo item"
            />
        );
    }
}

export default Checkbox;