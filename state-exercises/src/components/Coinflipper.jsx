import React from 'react';
import Coin from './Coin';

class Coinflipper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonPressed: false,
            surface:0,
            tries:0,
            heads:0,
            tails:0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
       let num = (Math.round(Math.random()))
       console.log(num);

       // Show coin only once "Generate" button is pressed
       this.setState({isButtonPressed: true})

       // Surface will determine what face to show, heads or tails
        this.setState(prevState => {
            return {surface: num}
        })

        // if 1 is obtained, heads will be incremented
       this.setState(prevState => {
           return {heads: num ? prevState.heads + 1: prevState.heads}
       })

       // if 0 is obtained, tails will be incremented
       this.setState(prevState => {
        return {tails: num ? prevState.tails: prevState.tails + 1}
        })

        // will increment everytime "Generate" is pressed
        this.setState(prevState => {
            return {tries : prevState.tries + 1}
        })
    }

    render() {
        return(
            <div>
                <h1>Coin flipper challenge</h1>
                {/* <Coin surface={this.state.surface}/> */}
                <div>
                    {this.state.isButtonPressed && <Coin surface={this.state.surface}/>}
                </div>
                <button onClick={this.handleClick}>Generate</button>
                <h3>There have been {this.state.tries} tries. {this.state.heads} heads and {this.state.tails} tails have been seen.</h3>
            </div>
        );
    }
}

export default Coinflipper;