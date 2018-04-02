class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "Initial text"};
    }
    update(e)
    {
        this.setState({text: e.target.value})
    }
    render() {
        return(
            <div>
                <h1>State Example</h1>
                <h2>{this.state.text}</h2>
                <input type="text" onChange={this.update.bind(this)}/>
            </div>
        );
    }

}


ReactDOM.render(
    <AppComponent />,
    document.getElementById('root')
);