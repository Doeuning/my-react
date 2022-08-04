import React from "react";

function GuestGreeting() {
  return <div>please sign up.</div>;
}

function UserGreeting(props) {
  return (
    <div>
      Hi {props.name}, it's {props.count} time to see you.
    </div>
  );
}

function Greeting(props) {
  return props.userInfo.loggedIn ? (
    <UserGreeting name={props.userInfo.name} count={props.userInfo.count} />
  ) : (
    <GuestGreeting />
  );
}

function Condition(props) {
  const userInfo = {
    loggedIn: false,
    name: "Barbara",
    count: 12,
  };
  return (
    <div>
      <Greeting userInfo={userInfo} />
    </div>
  );
}

export default Condition;
