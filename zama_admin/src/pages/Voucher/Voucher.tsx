import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination } from "@mui/material";
import useVoucherAPI from "src/api/useVoucherAPI";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import moment from "moment";
import CreateVoucherModal from "./CreateVoucherModal";

const Voucher = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [vouchers, setVouchers] = useState([]);
  const [checked, setChecked] = useState<number[]>([]);
  const size = 12;
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  const { getVouchers, createVoucher } = useVoucherAPI();

  const handleGetVouchers = async () => {
    const { vouchers, totalCount } = await getVouchers({ page, size });
    setVouchers(vouchers);
    setTotalCount(totalCount);
  };

  const handleCreateVoucher = async (type) => {
    try {
      await createVoucher(type);
      handleGetVouchers();
      setIsVisible(!isVisible);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteAudios = () => {};

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  const handleCheck = (id: number) => {
    if (checked.includes(id)) {
      const filteredChecked = checked.filter((check) => check !== id);
      setChecked(filteredChecked);
    } else {
      setChecked([...checked, id]);
    }
  };

  useEffect(() => {
    handleGetVouchers();
  }, []);

  useEffect(() => {
    handleGetVouchers();
  }, [page]);

  return (
    <main style={{ marginBottom: 30 }}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginRight: 30,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <Button
            onClick={handleDeleteAudios}
            style={{ width: 100, marginRight: 10 }}
            disabled={!checked.length}
            variant="contained"
          >
            삭제
          </Button> */}

          <Button
            onClick={() => setIsVisible(!isVisible)}
            style={{ width: 100 }}
            variant="contained"
          >
            생성
          </Button>
        </div>
      </section>
      <TableContainer
        style={{
          padding: "10px 10px 50px 10px",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell>Select</StyledTableCell> */}
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="left">name</StyledTableCell>
              <StyledTableCell align="left">voucherNumber</StyledTableCell>
              <StyledTableCell align="left">available</StyledTableCell>
              <StyledTableCell align="left">createAt</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vouchers.map((row: any) => (
              <StyledTableRow key={row.id}>
                {/* <StyledTableCell component="th" scope="row" align="left">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCheck(row.id)}
                  >
                    {checked.includes(row.id) ? (
                      <ImCheckboxChecked size={18} />
                    ) : (
                      <ImCheckboxUnchecked size={18} />
                    )}
                  </div>
                </StyledTableCell> */}
                <StyledTableCell component="th" scope="row" align="left">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.voucherNumber}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.available ? "사용가능" : "사용완료"}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {moment(row.createAt).format("YYYY-MM-DD")}
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
      <CreateVoucherModal
        isVisible={isVisible}
        handleCreate={handleCreateVoucher}
        handleModal={() => setIsVisible(!isVisible)}
      />
    </main>
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

export default Voucher;
