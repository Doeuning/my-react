import { useState } from "react";
function Password() {
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(`length: ${e.target.value.length}`);
  };
  return (
    <>
      <label>password</label>
      <input type="password" onChange={handlePasswordChange} />
    </>
  );
}

export default Password;
