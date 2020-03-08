import React, { Component } from 'react';
import Grow from '@material-ui/core/Grow';

import { CustomItemThumb } from '../styles/CustomItemThumb';
import { colorList } from '../styles/colorList';

let open = true; 

export default class ItemThumb extends Component {
    
    colorMap(key) {
        return colorList[key];
    }

    render() {
        const item = this.props.item;
        const color = this.colorMap(item.label);
        return (
            <Grow in={open}    
                timeout={1000}
            >
                <CustomItemThumb style={{backgroundColor: color}}>
                    <div>
                        {item.label}
                    </div>
                </CustomItemThumb>
            </Grow>
        );
    }
}

