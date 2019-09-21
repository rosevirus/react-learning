import React, {Component} from "react";

class App3 extends Component{
    constructor(props){
        super(props);
        console.log("constructor Call...")
    }
    componentWillMount() {
        console.log("component Call...")
    }
    render() {
        console.log("render Call...")
        return(
            <div>test</div>
        );
    }
    componentDidMount() {
        console.log("componentDidMount Call...")
    }
}

export default App3;
