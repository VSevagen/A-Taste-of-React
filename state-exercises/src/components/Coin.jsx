import styled from '@emotion/styled'
import Tails from '../tails.jpg'
import Head from '../heads.webp'

const Image = styled.img`
width: 10%;
`;

const Coin = (props) => {
    return(
        <div>
            {props.surface ? <Image src={Head}/> : <Image src={Tails}/>}
        </div>
    );
}

export default Coin;