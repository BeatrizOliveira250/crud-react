import React, {useContext} from "react";
import { authContext } from "../contexts/AuthContext";


const Panel = () => {
  const { setAuthData, auth } = useContext(authContext);
  const onLogOut = () => {
    setAuthData(null);
  }
  return (
    <div
      className="content">
        <h1> {`Olá, ${auth.data}`} </h1>
        <button onClick={onLogOut}>
          Log out
        </button>
    </div>
  );
};
export default Panel;
