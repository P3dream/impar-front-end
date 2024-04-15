import { HomePage } from "./pages/home/home";
import { AppProvider } from "./providers/appProvider";

export const App = () => {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
};

export default App;
