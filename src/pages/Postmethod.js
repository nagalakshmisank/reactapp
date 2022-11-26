import { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
//import axios from "axios";

function Postmethod() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setuserId] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
          userId: userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      
      });
      let data = await res.json();
      console.log(data)
      if (data) {

        setTitle("");
        setBody("");
        setuserId("")
        setMessage("User created successfully");
      
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div style = {{marginLeft : "40%",}}>
        <h1>Post Request</h1>
        <TextField
          color="secondary"
          id="name-input"
          label="Title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />
        <TextField
        color="secondary"
          id="name-input"
          name="body"
          type="text"
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        /><br /><br />
        <TextField
        color="secondary"
          id="userId-input"
          name="userId"
          type="text"
          label="userId"
          value={userId}
          placeholder="userId"
          onChange={(e) => setuserId(e.target.value)}
        /><br /><br />

        <Button variant="contained" color="secondary" type="submit">Submit</Button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        </div>
      </form>
    </div>
  );
}

export default Postmethod;