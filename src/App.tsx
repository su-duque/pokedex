import { ThemeProvider, CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import theme from "./theme";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* It normalizes the HTML elements */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
