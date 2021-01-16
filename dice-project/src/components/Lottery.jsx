import styled from '@emotion/styled'
import React from 'react';
import Ball from './Ball'

class Lottery extends React.Component {

    static defaultProps= {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = {nums: Array.from({length: this.props.maxBalls})};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    this.setState(curState => ({
        nums: curState.nums.map(n => Math.floor(Math.random()*this.props.maxNum) + 1)
    }))
    }

    render() {
        return(
            <div>
            <h1>{this.props.title} </h1>
            
            {
                this.state.nums.map( n => <Ball num={n}/>)
            }

            <div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
            </div>

        );
    }
}


export default Lottery;