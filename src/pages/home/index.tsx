import React from "react";
import Navbar from "../../components/Navbar";
import CustomizedTables from "../../components/UserTable";
import SelectDepartment from "../../components/SelectDepartment";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <CustomizedTables />
      <SelectDepartment />
    </React.Fragment>
  );
}
