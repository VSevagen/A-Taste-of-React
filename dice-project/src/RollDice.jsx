import React, {Component} from 'react';
import Dice from './Dice'
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props){
        super(props);
        this.state = {die1: 'one', die2: 'one', rolling: false}
        this.roll = this.roll.bind(this);
    }

    roll() { 
       const newDie1 = this.props.sides[Math.floor(Math.random() *this.props.sides.length)];
       const newDie2 = this.props.sides[Math.floor(Math.random() *this.props.sides.length)];
       this.setState({die1: newDie1, die2: newDie2, rolling: true}); 
       setTimeout(()=> {
           this.setState({rolling: false});
       }, 1000);
    }


    render(){
        return(
            <div className="RollDice">
                <div>
                <Dice face={this.state.die1}></Dice>
                <Dice face={this.state.die2}></Dice>
                </div>
                <button disabled={this.state.rolling    } onClick={this.roll}>{this.state.rolling ? 'Rolling....' : 'Roll Dice!'}</button>
            </div>
        )
    }
}

export default RollDice;