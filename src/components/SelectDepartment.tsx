/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { departmentData } from "../mocks/DepartmentData";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Data {
  department: string;
  sub_departments: string[];
  // so that Sub departments can be expanded and collapsed 
  expand: boolean;
  // dep_checked: boolean;
  checked: boolean[];
}

export default function SelectDepartment() {
  const [data, setData] = React.useState<Data[]>(
    departmentData.map((ele) => ({
      ...ele,
      expand: true,
      checked: Array(ele.sub_departments.length).fill(false),
      // dep_checked: false,
    }))
  );

  const handleSubDepartmentChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    department: string
  ) => {
    const { checked } = event.target;
    let tempDepartments: Data[] = [];
    tempDepartments = data.map((ele) =>
      ele.department === department
        ? {
            ...ele,
            checked: ele.checked.map((item, idx) =>
              idx === index ? checked : item
            ),
          }
        : ele
    );
    // tempDepartments = tempDepartments.map((ele) =>
    //   ele.department === department
    //     ? {
    //         ...ele,
    //         dep_checked: ele.checked.includes(false) ? false : true,
    //       }
    //     : ele
    // );

    setData(tempDepartments);
  };
  const handleDepartmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked, name } = event.target;
    console.log(checked, name);
    let tempDepartments: Data[] = [];
    tempDepartments = data.map((ele) =>
      ele.department === name
        ? {
            ...ele,
            checked: Array(ele.sub_departments.length).fill(checked),
            // dep_checked: checked,
          }
        : ele
    );
    setData(tempDepartments);
  };

  const expandHandler = (department: string) => {
    const selectedDepartment = data.map((ele) =>
      ele.department === department ? { ...ele, expand: !ele.expand } : ele
    );
    console.log(selectedDepartment);

    setData(selectedDepartment);
  };

  return (
    <div>
      {data.map((ele) => {
        return (
          <React.Fragment key={ele.department}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {ele.expand ? (
                <IconButton onClick={() => expandHandler(ele.department)}>
                  <KeyboardArrowUpIcon />
                </IconButton>
              ) : (
                <IconButton onClick={() => expandHandler(ele.department)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    name={ele.department}
                    onChange={handleDepartmentChange}
                    checked={ele.checked.includes(false) ? false : true}
                  />
                }
                label={ele.department}
              />
            </Box>
            {ele.expand && (
              <Box sx={{ ml: 8, display: "flex", flexDirection: "column" }}>
                {ele.sub_departments.map((item, idx) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={item}
                        onChange={(e) => handleSubDepartmentChange(e, idx, ele.department)}
                        checked={ele.checked[idx]}
                      />
                    }
                    label={item}
                    name={item}
                    key={item}
                  />
                ))}
              </Box>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
