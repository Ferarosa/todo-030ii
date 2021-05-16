import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "./GroupList.css";

class GroupList extends Component {
    constructor(props) {
        super(props);
    }

    handleCheckboxClick = (currentKey, newChecked) => {
        const { items, onTodoChange } = this.props;
        // const currentItem = [...items].filter(({ key }) => key === currentKey)[0];
        const [currentItem] = [...items].filter(({ key }) => key === currentKey);
        const otherItems = [...items].filter(({ key }) => key !== currentKey);
        const newItem = {
            ...currentItem,
            isCompleted: newChecked,
        };

        onTodoChange([...otherItems, newItem]);

    //     const listItems = [...this.props.items];
    //     listItems.forEach((item, index) => {
    //         if (item.key == key) {
    //             listItems[index].isCompleted = !item.isCompleted;
    //         }
    //     });
    }

    render() {
        const items = this.props.items;
        const listItems = items.map((item) => 
            <li key={item.key}>
                <div className="groupItemWrapper">
                    <Checkbox
                        checked={item.isCompleted}
                        onClick={(checked) => {
                            this.handleCheckboxClick(item.key, checked);
                        }} />
                    <span>{item.text}</span>
                </div>
            </li>
        );

        return (
            <ul className="groupListWrapper">
                {listItems}
            </ul>
        );
    }
}

export default GroupList;