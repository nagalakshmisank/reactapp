import React, { useState } from 'react';
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { MenuItem, Select } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from "@mui/material/Button";


const defaultValues = {
    name: "",
    age: "",
    gender: "",
    zone: "",
    qualification: "",
  };
  
const Form =() =>{
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
  


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
      };

     

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div style = {{marginLeft : "40%",}}>
        <h1 style={{color:"red", padding:"20px"}}>User Form</h1>
        <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}

            /> <br /> <br />
            <TextField
            id="age-input"
            name="age"
            label="Age"
            type="number"
            value={formValues.age}
            onChange={handleInputChange}

            /><br /> <br />
               <FormControl>
            <FormLabel>
                Gender
            </FormLabel>
            <RadioGroup
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              row

            >
                <FormControlLabel value="male" 
                    control={<Radio color = 'secondary'/>} label="Male" />
                <FormControlLabel value="female" 
                    control={<Radio color = 'secondary'/>} label="Female" />
                <FormControlLabel value="other" 
                    control={<Radio color = 'secondary'/>} label="Other" />
            </RadioGroup>
        </FormControl><br /> <br />
        <FormControl>
        <FormLabel>
                Zone
            </FormLabel>
            <Select
                style = {{width : 400,}}
              name="zone"
              value={formValues.zone}
              onChange={handleInputChange}
            >
              <MenuItem key="south" value="south">
                South
              </MenuItem>
              <MenuItem key="north" value="north">
                North
              </MenuItem>
              <MenuItem key="east" value="east">
                East
              </MenuItem>
              <MenuItem key="west" value="west">
                West
              </MenuItem>
            </Select>
          </FormControl><br /> <br />
          <FormGroup>
          <FormLabel>
                Qualification
            </FormLabel>
      <FormControlLabel control={<Checkbox               
            name="qualification"
            value="ug"
              onChange={handleInputChange} defaultChecked />} label="UG" />
      <FormControlLabel  control={<Checkbox name="qualification" value = "pg" onChange={handleInputChange}/>} label="PG" />
    </FormGroup>
    <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
           
            </div>
            </form>

            </div>
    )
}

export default Form;