import React, { Component } from 'react';

import { CustomItem } from '../styles/CustomItem';
import { colorList } from '../styles/colorList';
import { addScore } from "../redux/actions/actions";

export default class Item extends Component {
    
    handleSubmission = (e) => {
        e.preventDefault();
        addScore(e.currentTarget.getAttribute("value"));
        this.props.audio.play();
    }

    colorMap(key) {
        return colorList[key];
    }

    render() {
        const item = this.props.item;
        const color = this.colorMap(item.label);
        return (
            <CustomItem onClick={this.handleSubmission.bind(this)} value={item.label} variant="contained" style={{backgroundColor: color}}>
                <div>
                    {item.label}
                </div>
            </CustomItem>
        );
    }
}

