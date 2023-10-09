import { useState } from "react";
import { Button, TextField, Checkbox, Radio, Select  } from "@mui/material";
import "./Example.css";
import { pink } from "@mui/material/colors";

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
        <Checkbox sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },}}></Checkbox>
        <Radio  />
        <Select sx={{backgroundColor:"greenyellow"}}>
          <option value="fv">dfv</option>
        </Select>
      </form>
    </div>
  );
}
