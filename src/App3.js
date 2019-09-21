import React,{Component} from 'react'
import $ from 'jquery'
/*
     class A
     {
          public A(String name,int age,String addr)
          {
          }
     }

     new A("",30,"")
 */
class App3 extends Component{
   constructor(props)
   {
       // props = name={"홍길동"} age={"30"} addr={"서울"}
       super(props); // Component의 생성자 호출
       console.log("constructor Call...")
   }
   componentWillMount() {
       console.log("componentWillMount() Call..")
   }
    // UI 라이브러리
   render() {
       console.log("render() Call...")
       const html=this.props.music.map((m)=>(
           <tr>
               <td>{m.rank}</td>
               <td><img src={m.poster} width={"30"} height={"30"}/> </td>
               <td>{m.title}</td>
               <td>{m.singer}</td>
           </tr>
       ));
       return (
           <div>
               <table className={"table"}>
                   <tbody>
                   <input type={"text"} id={"keyword"} size={"20"} className={"input-sm"}/>
                   </tbody>
               </table>
               <table className={"table table-hover"} id={"user-table"}>
                   <thead>
                   <tr className={"danger"}>
                       <th>순위</th>
                       <th></th>
                       <th>노래명</th>
                       <th>가수명</th>
                   </tr>
                   </thead>
                   <tbody>
                   {html}
                   </tbody>
               </table>
           </div>
       )
   }
   componentDidMount() {
       console.log("componentDidMount()")
       $('#keyword').keyup(function () {
           var k = $(this).val();
           $('#user-table>tbody>tr').hide();
           var temp = $('#user-table>tbody>tr>td:nth-child(4n+3):contains("'+k+'")')
           $(temp).parent().show();
       })
   }
}

export default App3;