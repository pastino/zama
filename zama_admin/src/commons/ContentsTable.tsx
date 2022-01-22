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
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { State } from "src/redux";

const ContentsTable = ({ division }) => {
  const size = 12;

  const dispatch = useDispatch();

  const { getContents } = useAdministratorAPI();
  const { storyList, songList, asmrList } = useSelector(
    (state: State) => state.contents
  );

  const { audios, totalCount, page } =
    division === "Story"
      ? storyList
      : division === "Song"
      ? songList
      : division === "ASMR"
      ? asmrList
      : { audios: [], totalCount: 0, page: 1 };

  const handleGetAudios = async () => {
    try {
      await getContents({
        division,
        page,
        size,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handlePageChange = (_, value) => {
    switch (division) {
      case "Story":
        dispatch({
          type: "SET_STORY",
          payload: { storyList: { ...storyList, page: value } },
        });
        break;
      case "Song":
        dispatch({
          type: "SET_SONG",
          payload: { songList: { ...songList, page: value } },
        });
        break;
      case "ASMR":
        dispatch({
          type: "SET_ASMR",
          payload: { asmrList: { ...asmrList, page: value } },
        });
        break;
    }
  };

  useEffect(() => {
    handleGetAudios();
  }, [page]);

  return (
    <div>
      <TableContainer
        style={{
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <Pagination
          count={Math.ceil(totalCount / size)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
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
