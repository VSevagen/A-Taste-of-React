import styled from '@emotion/styled';
import './Dice.css'


function Dice(props) {
    return (
    <i className={`Dice fas fa-dice-${props.face}`}> </i>
)};

export default Dice;