import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  return (
    <label>
      Stateful Input:
      <input value={value} onChange={handleChangeValue} />
    </label>
  );
}

export default Input;
