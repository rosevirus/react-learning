import React, {Component} from 'react'
import axios from 'axios'

class Movie extends Component{
    constructor(props){
        super(props);
        this.state={
            movie:[]
        }
    }
    componentWillMount() {
        var _this=this;
        axios.get("http://localhost:3000/jumal/rank.json").then(function (result) {
            console.log(result);
            _this.setState({movie:result.data});
        })
    }
    render() {
        const html=this.state.movie.map((m)=>
            <tr>
                <td>{m.rank}</td>
                <td>{m.title}</td>
            </tr>
        );
        return(
            <table className={"table table-bordered"}>
                <thead>
                <tr className={"success"}>
                    <th>순위</th>
                    <th>영화명</th>
                </tr>
                </thead>
                <tbody>
                {html}
                </tbody>
            </table>
        )
    }

}
export default Movie;