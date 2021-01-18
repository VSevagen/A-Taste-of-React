import styled from "@emotion/styled"
import React, {Component} from 'react'

const Button = styled.button`
width: 250px;
height: 250px;
background-color: ${props => props.color};
outline: none;
border: 0;
`;

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let colorArray = ['#7bc5db', '#fcba03', '#262521', '#eb4034', '#c7731a', '#d9d516', '#5ad916', '#14d99a', '#1480d9', '#1714d9', '#9b11d6', '#db0fac', '#db0b31']
        let index = Math.floor(Math.random()*13)
        console.log(index);

        this.setState({
            color: colorArray[index]
        })

    }

    render() {
        return(
            <Button onClick={this.handleClick} color={this.state.color}/>
        );
    }
}

export default Square;