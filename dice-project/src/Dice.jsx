import styled from '@emotion/styled'
import React from 'react'

const Icon = styled.i`
font-size: 200px;
margin: 0.5em;
`;

const Button = styled.button`
    background-color: gray;
    padding: 15px 30px;
    color: white;
    font-size: 20px;
    border: 0;
    outline: none;
    border-radius: 15px;
`;

const Array = ['one', 'two', 'three', 'four', 'five', 'six']


class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 'one',
            num2: 'one',
            isToggle: false
        }
        this.handleclick = this.handleclick.bind(this);
    }

    handleclick(e) {
        let rand1=Math.floor(Math.random()*6)
        let rand2=Math.floor(Math.random()*6)
        this.setState({
            num1: Array[rand1],
            num2: Array[rand2],
            isToggle: true
        })

        setTimeout (() => {
            this.setState({isToggle: false})
        }, 1000)
    }


    render() {

        
        return(
            <div>
                <Icon className={`fas fa-dice-${this.state.num1}`}></Icon>
                <Icon className={`fas fa-dice-${this.state.num2}`}></Icon>
                <div>
                    <Button onClick={this.handleclick} disabled={this.state.isToggle ? true: false}>
                        {this.state.isToggle ? "Rolling...": "Roll Dice ! "}
                    </Button>
                </div>
            </div>
        );
    }
}

export default Dice;