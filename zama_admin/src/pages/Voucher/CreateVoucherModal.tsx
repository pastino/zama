import {
  Modal,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

const CreateVoucherModal = ({ isVisible, handleModal, handleCreate }) => {
  const [value, setValue] = useState<any>("1Month");

  return (
    <Modal
      hideBackdrop
      open={isVisible}
      onClose={handleModal}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          pt: 2,
          px: 4,
          pb: 3,
        }}
      >
        <h2>Voucher 생성하기</h2>
        <div>
          <FormControl fullWidth style={{ marginTop: 20 }}>
            <InputLabel id="demo-simple-select-label">type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Free"
              onChange={(e) => setValue(e.target.value)}
            >
              <MenuItem value={"1Month"}>1Month</MenuItem>
              <MenuItem value={"3Month"}>3Month</MenuItem>
              <MenuItem value={"6Month"}>6Month</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        >
          <Button
            onClick={handleModal}
            style={{ width: 100 }}
            variant="contained"
          >
            취소
          </Button>
          <Button
            onClick={() => handleCreate(value)}
            style={{ width: 100, marginLeft: 20 }}
            variant="contained"
          >
            생성
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateVoucherModal;
