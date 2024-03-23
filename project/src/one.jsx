import { Select, FormControl, MenuItem, InputLabel, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Elemnts from "./Elemnts";

export default function One() {
  const [age, setAge] = useState(" ");
  const [show, setShow] = useState('اختيارالفرقة');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  useEffect(() => {
    age === "one"
      ? setShow(true)
      : age === "to"
        ? setShow(true)
        : age === "three"
          ? setShow(true)
          : setShow(false);
  }, [age]);

  return (
    <div className=" p-20  overflow-auto	" >
      <Box sx={{ minWidth: 120 }} className="drab-team">
        <FormControl fullWidth className="list">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="اختار الفرقة"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="one">one</MenuItem>
            <MenuItem value='to'>tow</MenuItem>
            <MenuItem value="three">Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className=" h-screen ">{show && <Elemnts numb={age} />}</div>
    </div>
  );
}
