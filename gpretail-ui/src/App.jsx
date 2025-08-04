import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Link,
  useTheme,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";

const App = () => {
  const [store, setStore] = useState("");
  const theme = useTheme();

  useEffect(() => {
    document.title = "GP RETAILS";
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("/bg-login.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          boxShadow: 8,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <CardContent>
          <Box textAlign="center" mb={2}>
            <StoreIcon sx={{ fontSize: 50, color: "#1976d2" }} />
            <Typography
              variant="subtitle2"
              color={theme.palette.text.secondary}
            >
              🌤️ Good Afternoon
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Login to GPRETAIL
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" gap={2}>
            <FormControl fullWidth>
              <InputLabel>Select Store</InputLabel>
              <Select
                value={store}
                label="Select Store"
                onChange={(e) => setStore(e.target.value)}
              >
                <MenuItem value="Store 1">Store 1</MenuItem>
                <MenuItem value="Store 2">Store 2</MenuItem>
              </Select>
            </FormControl>

            <TextField label="Username" variant="outlined" fullWidth />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />

            <Button variant="contained" fullWidth size="large">
              Login
            </Button>

            <Box textAlign="center">
              <Link href="#" underline="hover" color="text.secondary">
                ❓ Forgot Password?
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;
