import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function PopUpModal({ open, handleClose, img, widthType }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  //   console.log("props2", prop2);

  // console.log("SAASDASDAS", widthType);
  // const widthSwitch = (widthType) => {
  //   debugger;
  //   switch (widthType) {
  //     case "site_map":
  //       return 800;

  //     default:
  //       return 1100;
  //   }
  // };

  function widthSwitch(img) {
    switch (img) {
      case "site_map":
        return "40%";
        break;
      default:
        return 1200;
    }
  }

  const imageWidth = widthSwitch(widthType);

  console.log("IMG");
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
            width: imageWidth,
            visibility: "visible",
          }}
          src={img}
        />
      </Modal>
    </div>
  );
}
