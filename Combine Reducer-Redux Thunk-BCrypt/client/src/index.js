import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {thunk} from "redux-thunk";

  let initiaiStore = {
    userDetails:{},
  }

  let reducer = (updatedStore = initiaiStore,dispatchedObj)=>{
    console.log("Inside Reducer");
  
     if(dispatchedObj.type === "login"){
      return {...updatedStore,userDetails:dispatchedObj.data};
     };

    return updatedStore;
  };

  let tasksreducer = (updatedStore = initiaiStore,dispatchedObj)=>{
    console.log("Inside Reducer");
  
     if(dispatchedObj.type === "addTask"){
      return {...updatedStore,userDetails:dispatchedObj.data};
     }else if(dispatchedObj.type === "submitTask"){
      return {...updatedStore,userDetails:dispatchedObj.data};
     }else if(dispatchedObj.type === "deleteTask"){
      return {...updatedStore,userDetails:dispatchedObj.data};
     }
    return updatedStore;
  };

  let leavesreducer = (updatedStore = initiaiStore,dispatchedObj)=>{
    console.log("Inside Reducer");
  
     if(dispatchedObj.type === "applyLeave"){
      return {...updatedStore,userDetails:dispatchedObj.data};
     }else if(dispatchedObj.type === "cancelLeave"){
      return {...updatedStore,userDetails:dispatchedObj.data};
     }else if(dispatchedObj.type === "extendLeave"){
      return {...updatedStore,userDetails:dispatchedObj.data};
     }
    return updatedStore;
  };


  let store = createStore(combineReducers({reducer,tasksreducer,leavesreducer}), applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
