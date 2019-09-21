import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App4 from './App4';
import * as serviceWorker from './serviceWorker';
/*
      JavaScript
      ==========
       var
       const : 상수형변수
       let : 지역변수

       function display()
       {
            var a=10;
            if(a==10)
            {
                var b=20;
            }
            alert("b="+b);
       }
 */
ReactDOM.render( <App4 />,
    document.getElementById('root'));
// App() =>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
