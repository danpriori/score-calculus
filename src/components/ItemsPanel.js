import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

import { Header } from '../styles/Header';
import { HeaderBox } from '../styles/HeaderBox';
import ItemsList from './ItemsList';

export default class ItemsPanel extends Component {
    render() {
        let items = this.props.items;

        return (
            <Box>
                <HeaderBox>
                    <Header>
                    Score Points
                    </Header>
                </HeaderBox>
                <ItemsList style={{ overflowY: 'auto' }} items={items} />
            </Box>           
        );
    }
}
