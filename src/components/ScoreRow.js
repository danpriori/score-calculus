import React, { Component } from 'react';
import Grow from '@material-ui/core/Grow';
import TableRow from '@material-ui/core/TableRow';

import { CustomTableCell } from '../styles/CustomTableCell';
import ItemThumb from './ItemThumb';


let open = true;

export default class ScoreRow extends Component {

    componentDidMount() {
        this.props.audio.play();
    }

    componentWillUnmount() {
    }

    render() {
      const item = this.props.item;
      const index = this.props.index;
      return (
        <Grow in={open}>
            <TableRow>
            <CustomTableCell align="center">
                <ItemThumb item={item} key={index} index={index} />
            </CustomTableCell>
            <CustomTableCell align="center">{item.qty}</CustomTableCell>
            <CustomTableCell align="center">{item.score + item.bonus}</CustomTableCell>
            </TableRow>
        </Grow>
      );
    }
  }