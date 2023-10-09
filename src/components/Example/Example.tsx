import { useState } from "react";
import { Button, TextField, Checkbox, Radio, Select  } from "@mui/material";
import "./Example.css";

export function Example() {
  const [inputText, setInputText] = useState("");

  const handleButtonClick = () => {
    const inputElement = document.getElementById('inputText') as HTMLInputElement;
    if (inputElement) {
      setInputText(inputElement.value);
    }
  };

  return (
    <div id="main">
      <h1>{inputText}</h1>
      <form>
        <Button variant="contained" onClick={handleButtonClick}>
          Display Text
        </Button>
        <TextField sx={{backgroundColor:"greenyellow"}} variant="filled" id="inputText" />
        <Checkbox sx={{color: "blue",'&.Mui-checked': { color: "pink"}}}></Checkbox>
        <Radio sx={{ fontSize: "90px"}} ></Radio>
        <Select sx={{backgroundColor:"greenyellow"}}>
          <option value="fv">dfv</option>
        </Select>
      </form>
    </div>
  );
}
