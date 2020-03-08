import React, { Component } from 'react';
import UIfx from 'uifx';

import { CustomButton } from '../styles/CustomButton';
import { removeAllScore } from "../redux/actions/actions";
import closeAudio from '../assets/close.mp3';

const close = new UIfx(closeAudio,{ volume: 0.4 });

export default class Button extends Component {
    handleSubmission = (e) => {
        e.preventDefault();
        removeAllScore();
        close.play();
    }

    render() {
        
        const label = this.props.label;
        return (
            <CustomButton onClick={this.handleSubmission.bind(this)} variant="contained" color="primary">
                {label}
            </CustomButton>
        );
    }
  }