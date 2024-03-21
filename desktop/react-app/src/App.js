import { HashRouter } from "react-router-dom";
import AppRouter from "./routes";
import { useContext, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Context } from "./index";

function App() {
  const { admin } = useContext(Context);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      admin.setAdmin(true);
      setIsAuth(true);
    }
    setLoading(false);
  }, [admin]);

  if (loading) {
    return <CircularProgress variant="determinate" value={loading} />;
  }

  return (
    <HashRouter>
      <AppRouter isAuth={isAuth}/>
    </HashRouter>
  );
}

export default App;
