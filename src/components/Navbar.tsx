import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { UserContextState } from "../context/UserContext";

export default function Navbar() {
  const ctx = useContext(UserContextState);
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/vite.svg" alt="logo" />
        <span style={{ fontWeight: "600", fontSize: "1.5rem" }}>VITE + TS</span>
      </div>
      <Button
        variant="outlined"
        color="error"
        startIcon={<LogoutIcon fontSize="small" />}
        onClick={() => ctx.logOutHandler()}
      >
        LogOut
      </Button>
    </header>
  );
}
