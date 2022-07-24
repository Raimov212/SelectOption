import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Button } from "reactstrap";

const ReactSelect = () => {
  const [options, setOptions] = useState([]);
  const [SelectObj, setSimesterObj] = useState({
    SelectId: "",
  });

  const handleOption = ({ target }) => {
    setSimesterObj((prev) => ({
      ...prev,
      SelectId: target.value,
    }));
  };

  useEffect(() => {
    getSimester();
  }, []);
  console.log(SelectObj);

  function getSimester() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      ReactSelect
      <Input
        type="select"
        name="select"
        style={{ width: "20rem" }}
        onChange={handleOption}
      >
        {options.map(({ id, name }, index) => (
          <option key={index} value={id}>
            {name}
          </option> 
        ))}
      </Input>
    </div>
  );
};

export default ReactSelect;
