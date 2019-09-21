import React, {Component} from 'react'
import axios from 'axios'

class BoxOffiece extends Component{
    constructor(props){
        super(props);
        this.state={
            movie:[]
        }
    }
    componentWillMount() {
        axios.get("http://localhost:3000/jumal/box.json").then(function (result) {
            console.log(result);
        })
    }
    render() {
        return(
            <div></div>
        )
    }

}
export default BoxOffiece;