import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import "./settings.css";

export const Settings = () => {
  const { setToken } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setToken(null);
    navigate("/");
  };

  const style = {
    width: "20%",
    padding: "10px",
    marginTop: "40px",
    color: "#fff",
    backgroundColor: "red",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };
  const styleTitle = {
    marginTop: "30px",
  };

  return (
    <div className="container">
      <h3 className="title" style={styleTitle}>
        Akkountdan Chiqish
      </h3>
      <button style={style} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};
