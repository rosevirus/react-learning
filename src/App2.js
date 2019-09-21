import React,{Component} from  'react';

/* React 라이브러리
    class App React.Component {
    }
    index.js ~
    new app2() => <app2/>

    ReactDOM.render(<App />, document.getElementById('root'));

    1. constructor() 생성자 > 메모리
    2. componentWillMount() render() 전에 호출
    3. render() XML => HTML 변환
    4. componentDidMount() 완료 window.onload

    innerHTML
    JSX

    최상위 루트 / 계층구조

*/
class App2 extends  Component{
    //속성값, 변수 , 이벤트
    constructor(props){
        super(props);
    }
    componentWillMount() {

    }
    render() {
        //JSX
        return  (
            <div>
            <ol>
                <li>홍길동</li>
                <li>심청이</li>
                <li>박문수</li>
            </ol>
            <ul>
                <li>홍길동</li>
                <li>심청이</li>
                <li>박문수</li>
            </ul>
            </div>
        );
    }
    componentDidMount() {

    }
}
export default  App2;