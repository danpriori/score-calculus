import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import { BonusesContainer } from '../styles/BonusesContainer';

export default class Bonuses extends Component {
    render() {
        const bonuses = this.props.bonuses;
        return (
            <BonusesContainer>
                <Grid item xs={12} container >
                    <Grid item xs={6}>
                        Bonuses
                    </Grid>
                    <Grid item xs={6}>
                        {bonuses}
                    </Grid>
                </Grid>
            </BonusesContainer>
        );
    }
  }