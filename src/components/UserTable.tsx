import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { JP_User } from "../types";
import getAllUsers from "../api";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { DataGrid } from "@mui/x-data-grid";
import { GridValueGetterParams } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "username", headerName: "Username", width: 200 },
  { field: "email", headerName: "E-mail", width: 300 },
  { field: "phone", headerName: "Phone No.", width: 200 },
  {
    field: "address.city",
    headerName: "Location",
    valueGetter: (params: GridValueGetterParams) => params.row.address.city,
    width: 200,
  },
  {
    field: "company.name",
    headerName: "Company",
    valueGetter: (params: GridValueGetterParams) => params.row.company.name,
    width: 200,
  },
];

export default function CustomizedTables() {
  const [users, setUsers] = useState<JP_User[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    setLoading(true);
    getAllUsers()
      .then((res) => {
        setUsers(res);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && (
        <Box
          sx={{
            display: "flex",
            height: 400,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>{error}</strong>
        </Alert>
      )}

      {!loading && !error && users && (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      )}
    </>
  );
}
