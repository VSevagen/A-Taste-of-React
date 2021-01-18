import Square from './Square'

const Zone = () => {
    let colorArray = ['#7bc5db', '#fcba03', '#262521', '#eb4034', '#c7731a', '#d9d516', '#5ad916', '#14d99a', '#1480d9', '#1714d9', '#9b11d6', '#db0fac', '#db0b31']
    let index = Math.floor(Math.random()*13)
    return(
        <div>
            {colorArray.map((i) => (
                <Square color={colorArray[Math.floor(Math.random()*13)]}/>
            ))}
        </div>
    );
}

export default Zone;