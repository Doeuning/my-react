import { useState } from "react";

function Forms(){
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [usable, setUsable] = useState(false);
    const handleChangeId = (e) => {
        if (e.target.value) {
            setUserId(e.target.value);
            handleState()
        }
    }
    const handleChangePw = (e) => {
        if (e.target.value) {
            setUserPw(e.target.value);
            handleState()
        }
    }
    const handleState = () => {
        if (userId && userPw) {
            setUsable(true);
        } else {
            setUsable(false);
        }
    }
    const handleDisabled = () => {
        console.log(usable)
        if (usable) return true;
    }
    return (
        <>
            <input type="text" onChange={handleChangeId}/>
            <input type="password" onChange={handleChangePw}/>
            <button type="button" className={handleDisabled}>전송</button>
        </>
    );
    
}

export default Forms;