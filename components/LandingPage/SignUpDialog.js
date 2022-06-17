import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import HubspotForm from "react-hubspot-form";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Typography} from "@mui/material";
import {Grid} from "@mui/material";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUpDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    props.setOpenDialog(false);
  };
  return (
    <>
      <Dialog
        TransitionComponent={Transition}
        open={props.openDialog}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth = {"md"}
        fullWidth = {true}
      >
          <div style = {{position: "absolute", top: "0", right: "0"}}>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
            </div>

        <DialogContent>
          <div style= {{marginTop: "20px"}}>
          <HubspotForm
            portalId="25493478"
            formId="d327e4ae-4b33-4b00-932f-6b8bcff1d296"
            onSubmit={() => console.log("Submit!")}
            onReady={(form) => console.log("Form ready!")}
            loading={<div>Loading...</div>}
          />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
