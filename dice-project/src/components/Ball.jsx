import styled from "@emotion/styled"

const Num = styled.div`
background-color: tomato;
color: white;
font-size: 1.5em;
font-weight: bold;
padding-top: 0.75em;
display: inline-block;
width: 3em;
height: 2.25em;
text-align: center;
border-radius: 50%;
margin-right: 1.5em;
`;


const Ball = (props) => {
    return(
        <Num>{props.num}</Num>
    );
}

export default Ball;