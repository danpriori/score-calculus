import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

import { CustomGrid } from '../styles/CustomGrid';
import ScorePanel from './ScorePanel';
import ItemsPanel from './ItemsPanel';
import { addScore, removeAllScore, getScores} from "../redux/actions/actions";

class MainContainer extends Component {
    render() {
        let items = this.props.items;
        return (
            <CustomGrid item xs={12} container justify="center">
                <Grid item xs={6}>
                    <ItemsPanel items={items} />
                </Grid>
                <Grid item xs={6}>
                    <ScorePanel items={items} />
                </Grid>
            </CustomGrid>
        );
    }
}
const mapStateToProps = state => {
    return {
      scores: state.scores
    }
  }
  
const mapDispatchToProps = { addScore, removeAllScore, getScores }
  
MainContainer.contextTypes = {
    store: PropTypes.object
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);

