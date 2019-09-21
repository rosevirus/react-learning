import React, {Component} from 'react'
import Movie from "./Movie";
import Reserve from "./Reserve";
import BoxOffiece from "./BoxOffice";
class App4 extends Component {
    render() {
        return(
            <div className={"text-center"}>
                <div>
                    <img src={"https://source.unsplash.com/1920x720/weekly?film"} />
                </div>
                <div className={"row"}>
                    <div className={"col-sm-4"}>
                      <h3>영화 순위</h3>
                      <Movie/>
                    </div>
                    <div className={"col-sm-4"}>
                      <h3>박스오피스 순위</h3>
                      <BoxOffiece/>
                    </div>
                    <div className={"col-sm-4"}>
                      <h3>예매율 순위</h3>
                      <Reserve/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App4;