import React,{Component} from 'react'
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
               <table className={"table table-hover"}>
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
   }
}

export default App3;