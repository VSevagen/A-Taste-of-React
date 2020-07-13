class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machine!</h1>
                <Machines s1="x" s2="y" s3="z" />
                <Machines s1="x" s2="x" s3="x" />
            </div> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));