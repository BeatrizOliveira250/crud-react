import React from "react";
import { Button } from "react-bootstrap";

const Panel = () => {
  const onLogOut = () => {
    console.log('LogOut pressed.'); // we will change it later
  }
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 300 }}>
        <h1 className="text-center"> Hello, user </h1>
        <Button
          variant="primary"
          type="button"
          className="w-100 mt-3 border-radius"
          onClick={onLogOut}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Panel;
