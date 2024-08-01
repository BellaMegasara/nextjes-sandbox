"use client"; // client component, not server rendered
import React from "react";
import { Box, Avatar, Tooltip } from "@mui/material";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
const LetterAvatar = ({ name }) => {
  const displayLetter = () => {
    if (!name) {
      return <NoAccountsIcon />;
    }
    return name.charAt(0).toUpperCase();
  };
  return (
    <Box>
      <Tooltip title={name ? name : "Not found"}>
        <Avatar sx={{ width: 30, height: 30 }}>{displayLetter()}</Avatar>
      </Tooltip>
    </Box>
  );
};
export default LetterAvatar;
