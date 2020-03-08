import React, { Component } from 'react';
import UIfx from 'uifx';

import { ContentContainer } from '../styles/ContentContainer';
import Item from './Item';
import clickAudio from '../assets/click.mp3';

const click = new UIfx(clickAudio,{ volume: 0.2 });

export default class ItemsList extends Component {

    render() {
        const rows = [];
        this.props.items.forEach((item, index) => {
            rows.push(
                <Item
                    item={item} key={index} index={index} audio={click}
                />
            );
        });
        return (
            <ContentContainer>
                {rows}
            </ContentContainer>
        );
    }
}
