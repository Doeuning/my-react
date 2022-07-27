import { useState } from "react";
import Id from "./Id";
import Password from "./Password";

function Forms() {
  function handleLoginClick() {}
  return (
    <>
      <Id />
      <Password />
      <button type="button" disabled={true} onClick={handleLoginClick}>
        로그인
      </button>
    </>
  );
}

export default Forms;
