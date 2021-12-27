import { useEffect, useState } from "react";
import useAdministratorAPI from "src/api/useAdministratorAPI";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useWindowSize from "src/hooks/useWindowSize";
import { HEADER_HEIGHT } from "src/styles/sizes";

const ContentsTable = ({ division }) => {
  const { height } = useWindowSize();
  const [audios, setAudios] = useState([]);
  const { getStories } = useAdministratorAPI();

  const handleGetAudios = async () => {
    try {
      const { success, audios } = await getStories(division);
      if (success) {
        setAudios(audios);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetAudios();
  }, []);

  return (
    <div>
      <TableContainer
        style={{
          height: height - HEADER_HEIGHT - 20,
          padding: "10px 10px 50px 10px",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="left">Type</StyledTableCell>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Free</StyledTableCell>
              <StyledTableCell align="left">Voice</StyledTableCell>
              <StyledTableCell align="left">Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {audios.map((row: any) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="left">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.division}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.free ? "Yes" : "No"}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.voiceGender}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.time}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default ContentsTable;
