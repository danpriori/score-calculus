import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

import { Header } from '../styles/Header';
import { SummaryContainer } from '../styles/SummaryContainer';
import { HeaderBox } from '../styles/HeaderBox';

import Bonuses from "./Bonuses";
import ScoreTable from "./ScoreTable";
import ScoreTotal from "./ScoreTotal";
import { addScore, removeAllScore, getScores} from "../redux/actions/actions";

class ScorePanel extends Component {

  render() {

    const items = this.props.items;

    const counts = {};
    const filteredItems = {};
    const itemList = [];
    let totalBonus = 0;
    let totalScore = 0;

    this.props.scores.forEach((item, index) => {
        counts[item.label] = (counts[item.label] || 0) + 1;
        
        let itemData = items.filter(function(e) {
            return e.label === item.label;
        })[0];

        let data = {};
        data.label = itemData.label;
        data.qty = counts[itemData.label];
        data.score = data.qty * itemData.score;
        data.bonus = itemData.threshold ? itemData.score * Math.floor(data.qty / itemData.threshold) * itemData.amountMore : 0;

        filteredItems[itemData.label] = data; // way to override if it exists already
    });

    Object.entries(filteredItems).forEach((item, index) => {
        itemList.push(item); // add item into an array
        totalBonus += item[1].bonus;
        totalScore += item[1].score + item[1].bonus;
    });

    return (
      <Box>
        <HeaderBox>
            <Header>
                Player Items
            </Header>
        </HeaderBox>
        <ScoreTable items={itemList} />
        <SummaryContainer>
            <Bonuses bonuses={totalBonus} />
            <ScoreTotal total={totalScore} />
        </SummaryContainer>
      </Box>
    );
  }
}


  
const mapStateToProps = state => {
    return {
      scores: state.scores
    }
  }
  
  const mapDispatchToProps = { addScore, removeAllScore, getScores }
  
  ScorePanel.contextTypes = {
    store: PropTypes.object
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ScorePanel);
