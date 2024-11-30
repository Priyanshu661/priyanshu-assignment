// MUI Imports
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CustomButton from "./CustomButton";

// Vars

const CustomModal = ({
  open,
  handleClose,
  action,
  actionButtonText = "Save",
  handleCloseText = "Close",
  title,
  children,
  maxWidth,
  disabled = false,
  error = "",
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          maxWidth: maxWidth ? maxWidth : "sm",
        },
      }}
    >
      <DialogTitle variant="h4" className="flex flex-col gap-2">
        {title}
      </DialogTitle>
      <DialogContent className="overflow-visible pbs-0 sm:pli-16">
        {children}
      </DialogContent>
      <DialogActions className="justify-between">
        <div>
          {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
        <div className="flex gap-4">
          {handleClose && (
            <CustomButton variant="text" color="primary" onClick={handleClose}>
              {handleCloseText}
            </CustomButton>
          )}
          {action && (
            <CustomButton
              variant="contained"
              color="primary"
              onClick={action}
              disabled={disabled}
            >
              {actionButtonText}
            </CustomButton>
          )}
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
