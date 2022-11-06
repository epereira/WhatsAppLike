 import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({id, name, img, msg, time, unread, online}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: 70,
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
        alignItems: "center",
        justifyContent: "space-between",
      }}
      p={2}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
         
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant={online ? 'dot' : 'standard'}
          >
            <Avatar alt={name} src={img} />
          </StyledBadge>
          <Stack spacing={0.3}>
            <Typography variant="subtitle2" fontWeight={600}>
              {name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge badgeContent={unread} color="primary"></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.background.paper, 0.75),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },

    borderRadius: 20,
    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
  },
}));

const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack direction="column" p={3} spacing={2} sx={{height: '100vh'}}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "Search" }}
            />
          </Search>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          letterSpacing={1.5}
        >
          <ArchiveBox size={24} />
          <Button>Archive</Button>
        </Stack>
        <Divider />
        <Stack spacing={2} direction="column" sx={{flexGrow: 1, overflow: 'scroll', height: '100%'}}>
          <Stack spacing={2}>
            <Stack direction="row">
              <Typography variant="h6" color={"#676767"}>
                Pinned 
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ({ChatList.filter((chat) => chat.pinned).length})
              </Typography>
            </Stack>
            {ChatList.filter((chat) => chat.pinned).map((chat) => {
              return <ChatElement {...chat} />
            })}
          </Stack>
          <Stack spacing={2} direction="column">
            <Stack direction="row" mt={2}>
              <Typography variant="h6" color={"#676767"}>
                All chats
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ({ChatList.filter((chat) => !chat.pinned).length})
              </Typography>
            </Stack>
            {ChatList.filter((chat) => !chat.pinned).map((chat) => {
              return <ChatElement {...chat} />
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
