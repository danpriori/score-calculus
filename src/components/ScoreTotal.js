import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import { ScoreTotalContainer } from '../styles/ScoreTotalContainer';
import Button from './Button';

export default class ScoreTotal extends Component {
    render() {
        const total = this.props.total;
        return (
            <ScoreTotalContainer>
                <Grid item xs={12} container justify="center">
                    <Grid item xs={3}>
                        Total
                    </Grid>
                    <Grid item xs={3}>
                        {total}
                    </Grid>
                    <Grid item xs={6}>
                        <Button label='New Game'/>
                    </Grid>
                </Grid>
            </ScoreTotalContainer>
        );
    }
  }