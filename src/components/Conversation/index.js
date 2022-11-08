import React from "react";
import {
  Stack,
  Box,
  Avatar,
  Badge,
  Typography,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { styled, useTheme } from "@mui/material/styles";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";

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

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: "12px 0",
  },
}));

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height="100%" maxHeight={"100vh"} width={"auto"}>
      {/* chat header */}
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor: theme.palette.mode === "light"
          ? "#F8FAFF"
          : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "100%", width: "100%" }}
        >
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar
                alt={faker.name.fullName()}
                src={faker.image.avatar()}
                sx={{ width: 40, height: 40 }}
              />
            </StyledBadge>
          </Box>
          <Stack spacing={0.2} direction="column" justifyContent="center">
            <Typography variant="h6" fontWeight="bold">
              {faker.name.firstName()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Online
            </Typography>
          </Stack>
          <Stack direction="row" alignItems={"center"} spacing={3}>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      {/* msg */}
      <Box width="100%" sx={{ flexGrow: 1, backgroundColor: theme.palette.mode === "light"
          ? "#fff"
          : theme.palette.background.default, }}>

    </Box>
      {/* chat footer */}
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor: theme.palette.mode === "light"
          ? "#F8FAFF"
          : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <StyledInput
            fullWidth
            placeholder="Write a message..."
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <IconButton>
                  <LinkSimple />
                </IconButton>
              ),
              endAdornment: (
                <IconButton>
                  <Smiley />
                </IconButton>
              ),
            }}
          />
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1.5,
              backgroundColor: theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <PaperPlaneTilt color="#FFF" />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversation;
