import React, { Component } from 'react';
import UIfx from 'uifx';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { ContentContainer } from '../styles/ContentContainer';
import { CustomTableCell } from '../styles/CustomTableCell';
import { CustomTableContainer } from '../styles/CustomTableContainer';
import ScoreRow from './ScoreRow';
import showAudio from '../assets/show.mp3';

const show = new UIfx(showAudio,{ volume: 0.4 });


export default class ScoreTable extends Component {
    render() {
      const rows = [];
      const items = this.props.items;
      
      items.forEach((item, index) => {
          rows.push(
            <ScoreRow
                item={item[1]} key={index} index={index} audio={show}
            />
        );
      });

      return (
        <ContentContainer>
          <CustomTableContainer >
            <Table stickyHeader aria-label="sticky table" >
              <TableHead>
                <TableRow>
                    <CustomTableCell align="center">Item</CustomTableCell>
                    <CustomTableCell align="center">Qty</CustomTableCell>
                    <CustomTableCell align="center">Score</CustomTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>{rows}</TableBody>
            </Table>
          </CustomTableContainer>
        </ContentContainer>
      );
  }
}
