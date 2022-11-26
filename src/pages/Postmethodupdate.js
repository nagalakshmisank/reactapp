
import React, { useState } from 'react';
import {Snackbar} from '@mui/material';



const Postmethod = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: data.title,
    body: data.body,
    userId: parseInt(data.userId),
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
        

    
    const handleChange = (event) => {
        event.persist();
        setData((data)=>({
            data,
            [event.target.name]:event.target.value,
        }))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        Postmethod();
        console.log(data);

    }

    const handleToClose = (event, reason) => {
      if ("clickaway" === reason) return;
      setOpen(false);
    };
    
    const handleClickEvent = () => {
      setOpen(true);
    };


    return (
      <>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder='title' onChange = {handleChange}></input><br />
                <input type="text" name="body" placeholder='body' onChange = {handleChange}></input><br />
                <input type="number" name="userId" placeholder='userId' onChange = {handleChange}></input><br />
                <input type="button" value="Submit" onClick={handleClickEvent}></input>

            </form>
                       
            </div>
                <div style={{}}>

                <Snackbar
                  anchorOrigin={{
                    horizontal: "left",
                    vertical: "bottom",
                  }}
                  open={open}
                  autoHideDuration={5000}
                  message="Your data is posted successfully"
                  onClose={handleToClose}>

  </Snackbar>

              </div>
              </>
    );

       
}
export default Postmethod;
