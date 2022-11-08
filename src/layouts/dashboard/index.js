import React from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { Nav_Buttons } from "../../data";
import Logo from "../../assets/images/logo.ico";
import { Gear } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import MaterialUISwitch from "../../components/MaterialUISwitch";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <Stack direction="row" spacing={0}>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          spacing={3}
          paddingBottom={4}
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                justifyContent: "space-between",
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt="logo" />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
              spacing={3}
            >
              {Nav_Buttons.map((item) =>
                item.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                    key={item.index}
                  >
                    <IconButton sx={{ width: "max-content", color: "#fff" }}>
                      {item.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => setSelected(item.index)}
                    sx={{ width: "max-content" }}
                    key={item.index}
                  >
                    {item.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(3)}
                  sx={{ width: "max-content" }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack spacing={4} alignItems="center">
            <MaterialUISwitch onChange={() => onToggleMode()} defaultChecked />
            <Avatar spacing={2} src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>

      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
