import React, { useEffect } from "react";
import Popover from "@mui/material/Popover";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BadgeIcon from '@mui/icons-material/Badge';
import { jwtDecode } from "jwt-decode";

export default function AccountPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const token = localStorage.getItem("auth-token");
  const decode = jwtDecode(token);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{cursor: 'pointer'}}>
      <PersonIcon
        sx={{
          fontSize: "40px",
          '&:hover': {
            color: 'rgb(148, 148, 148)',
          }
        }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <BadgeIcon sx={{ margin: "0px 10px" }} /> Foydalanuvchi Ismi:{" "}
          <Typography sx={{ marginLeft: "20px" }}>
            {decode.user.name}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <VerifiedUserIcon sx={{ margin: "0px 10px" }} /> Foydalanuvchi Idsi:{" "}
          <Typography sx={{ marginLeft: "20px" }}>{decode.user.id}</Typography>
        </Box>
      </Popover>
    </div>
  );
}
