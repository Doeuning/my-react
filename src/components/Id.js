import { useState } from "react";
function Id() {
  const [id, setId] = useState("");
  const handleIdChange = (e) => {
    setId(e.target.value);
    console.log(`length: ${e.target.value.length}`);
  };
  return (
    <>
      <label>id</label>
      <input type="text" onChange={handleIdChange} />
    </>
  );
}

export default Id;
