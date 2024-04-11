import { ThemeProvider } from "./components/ThemeProvider";
import Rules from "./pages/rules";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Rules />
    </ThemeProvider>
  );
}

export default App;
