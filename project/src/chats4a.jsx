import { Box, Button, TextField } from "@mui/material";
import { NearMe } from "@mui/icons-material";
import { useState } from "react";
import Massage from "./massage";
// import axios from "axios"; 

const myArray = [];
/* 
const dataUser = await axios.get('http://localhost:8000/api/use-data', {
 
   headers: {
     Authorization: 'Bearer ' + localStorage.getItem('token'),
   }
}); */

 
//  let nameUser = dataUser.data.name
//  console.log(dataUser.data);
export default function Chats4a() {
  //  const myArray = [];

  const [massages, setMassages] = useState("");
  function sandMassage(e) {
    e.preventDefault();
    myArray.push(String(massages));



    setMassages("")

  }

  return (
    <div className=" flex justify-center items-center text-lg w-full max-h-full bg-primary-900">
      <Box className="container-chat">
        <div className="chat-screen">

          {myArray.map(e => {
            return <Massage massageSand={e} />
          })}
        </div>
        <form className="cont-sand" onSubmit={sandMassage}>

          <TextField
            id="outlined-basic"
            placeholder="Message...."
            type="text"
            dir="rtl"
            value={massages}

            onChange={(e) => setMassages(e.target.value)}
            variant="outlined"
            className="input-mass"
          />
          <Button type="submit" variant="contained" className="icon-sand">
            <NearMe />
          </Button>
        </form>
      </Box>
    </div>
  );
}
