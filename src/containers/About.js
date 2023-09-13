

import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '@material-ui/core/Button';

import { getHighScore } from '../config/SaveScore';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class About extends Component {

    render() {

        return (
            <div className={css(styles.container)}>
                <h1 style={{ color: 'red' }}>{`Current Score : ${this.props.score !== undefined ? this.props.score : 0}`}</h1>
                <h1 style={{ color: 'blue' }}>{`High Score: ${getHighScore()}`}</h1>
            </div>
        );
    }
}




