import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import {Route , Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { Toaster } from "react-hot-toast";
import Summary from "./Pages/Summary";
import ChatBot from "./Pages/Chatbot";
import JsConverter from "./Pages/JsConverter";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Navbar />
    <Toaster />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/register' element = {<Register />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/js-converter"element={<JsConverter />} />
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
