import React from "react";
import MyContext from "./MyContext";


class ThemedButton extends React.Component {
    static contextType = MyContext;
    render() {
      return (
        <div classsName= "contextheading">
          <h1 style = {{marginLeft : "40%", padding: "10px", marginTop : "5%", color:"red"}}>Context</h1>
          <h2 style = {{marginLeft : "40%", padding: "10px", marginBottom : "5%"}}>Please click to see alert</h2>
      <button style = {{marginLeft : "43%",marginBottom : "20%",backgroundColor: "green", padding: "10px"}}
      onClick={(value) => alert(this.context)}>Welcome</button>  
      </div>
      );
    }
  }

  export default ThemedButton;