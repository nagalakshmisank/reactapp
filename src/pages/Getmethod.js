import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Snackbar} from '@mui/material';
import axios from 'axios'; 

const Getmethodupdate = () => {
   const [posts, setPosts] = useState([]);
   const [open, setOpen] = React.useState(false);
   const [opentoast, setOpentoast] = React.useState(false);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
      handleClickEvent();
        setOpen(false);
        
      };
      const handleCloseNo = () => {
          setOpen(false);
          
        };

      const handleToClose = (event, reason) => {
        if ("clickaway" === reason) return;
        setOpentoast(false);
      };
      
      const handleClickEvent = () => {
        setOpentoast(true);
      };

    const deleteRow = (id, e)=> {  

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)  
          .then(res => {  
            console.log(res);  
            const post = posts.filter(item => item.id !== id);  
            setPosts(post); 
            handleClose();
            alertmsg();
    
          })  
       
          const alertmsg = () =>{
             alert("deleted successfully"); 
          }
        
      } 
    
    
  

   return (  
    <>
    <div>  

      <table className="table table-bordered">  
          <thead>  
            <tr>  
                <th>ID</th>  
                <th>Title</th>  
                <th>Body</th>  
                <th>Action</th>  
            </tr>  
          </thead>  
  
          <tbody>  
            {posts.map((post) => (  
              <tr key = {post.id}>  
                <td>{post.id}</td>  
                <td>{post.title}</td>  
                <td>{post.body}</td>  
                <td>  
                  <button className="btn btn-danger" onClick={handleClickOpen} type="submit">Delete</button>  
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table> 
       
        <Dialog
        open={open}
        onClose={handleClickEvent}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Yes</Button>
          <Button onClick={handleCloseNo} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>

    </div>  
    <div style={{}}>

    <Snackbar
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      open={opentoast}
      autoHideDuration={5000}
      message="Data is deleted successfully"
      onClose={handleToClose}>

</Snackbar>

  </div>
  </>
  )  
}
    
export default Getmethodupdate;
