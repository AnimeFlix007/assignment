import React from "react";
import Navbar from "../../components/Navbar";
import CustomizedTables from "../../components/UserTable";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <CustomizedTables />
    </React.Fragment>
  );
}
