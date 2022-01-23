import { Modal, Box } from "@mui/material";
import ModifyContent from "./ModifyContent";

const ModifyContentModal = ({ isVisible, content, division, handleModal }) => {
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
        <h2>{division} 수정하기</h2>
        <ModifyContent
          content={content}
          handleModal={handleModal}
          division={division}
        />
      </Box>
    </Modal>
  );
};

export default ModifyContentModal;
