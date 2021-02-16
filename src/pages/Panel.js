import React, {useContext} from "react";
import { authContext } from "../contexts/AuthContext";


const Panel = () => {
  const { setAuthData, auth } = useContext(authContext);
  const onLogOut = () => {
    setAuthData(null);
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
    >
      <div className="button">
        <h1 className="text-center"> {`Olá, ${auth.data}`} </h1>
        <button onClick={onLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
};
export default Panel;
