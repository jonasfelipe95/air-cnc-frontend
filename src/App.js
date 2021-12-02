import Router from "./router";
import AppProvider from "./context";

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
