import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const data= [
    {
        id:1,
        name:'Mike',
        roll: 16
    },
    {
        id:2,
        name: 'Luke',
        roll:101
    },
    {
        id:3,
        name:'Curie',
        roll:61
    },
    {
        id:4,
        name:'Asgard',
        roll:55
    },
    {
        id:5,
        name:'Tom',
        roll:19
    }


];

ReactDOM.render(<App data ={data} />, document.getElementById('root'));
registerServiceWorker();
