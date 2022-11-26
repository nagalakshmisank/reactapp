import React from 'react'
import MyContext from './MyContext';
import MyButton from './MyButton';

class MyContextDemo extends React.Component {  
  render() {  
    return (  
      <MyContext.Provider value="Alert message">  
        <MyButton />  
      </MyContext.Provider>  
    );  
  }  
}  

export default MyContextDemo;