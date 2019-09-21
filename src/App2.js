import React,{Component} from 'react'
/*
      import React from 'react'
      class App2 extends React.Component{
      }

      => 실행순서
      index.js
      ReactDOM.render(<App />, document.getElementById('root'));
      new App2() => <App2/>

      => App2
      1) constructor() : 생성자 호출 => 메모리에 저장
      2) componentWillMount()  => render() 전에 호출
      3) render() => XML=>HTML로 변환
      4) componentDidMount() => 완료 (window.onload)
      ============================================== 컴포넌트 실행

      => HTML에 innerHTML 수행
      <div id="root"></div>

      사용법
      JSX => javascript+XML => XML을 번역(파싱)
      ===
       1) 최상위 루트가 필요하다 (계층구조)
          <div>aaa</div>
          <div>bbb</div>  ===> error => DOM

          <App2 name="홍길동"/>  function disp(name)   => disp("홍길동")
 */
// React 라이브러리 설정
class App2 extends Component{
    // 속성값 받기 , 변수선언 , 이벤트 등록
  constructor(props){
      super(props); // 속성값 읽기
  }
  // 서버에서 들어오는 값 (외부)
  componentWillMount() {
  }
  // 받은 값을 출력 => HTML ==> 실제 HTML에서 출력
    /*
          <ol>
           <li>홍길동</li>
           <li>심청이</li>
           <li>박문수</li>
          </ol>
     */
  render() {
      // JSX
      /*
            1) 전체를 감싸는 태그 : 최상위 태그
            2) 태그는 소문자 (대소문자 소문자 구분)
               => 사용자 정의 태그는 대소문 시작 (<App2 />)
            3) 여는태그 닫는 태그가 동일
               <a><b><c></b></c></a> (Error)
               <a><b><c></c></b></a>
            4) 속성값
               <a href=""> => ""을 사용한다
            5) 외부 css => <a class=""> => <a className="">
            5-1) 내부 css => <a style={{fontSize:"10px"}}>

            6) 데이터가 많은 경우
               ================ 루프 (for) => map()
            7) 람다식 (화살표함수)
               function display()
               {
                   return ""
               }

               ()=>{}

               map(function(){
                   return ""
               })

               map(()=>{
               })
       */
      /*React.createElement("ol",null,
                              React.createElement("li",null,"홍길동"),
                              React.createElement("li",null,"박문수"),
                              React.createElement("li",null,"심청이")*/
      return (
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

              )
  }
  // onload => Jquery연동 , 서버종료
  componentDidMount() {
  }
}
export default  App2;
