import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout, AuthLayout } from "./layouts";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import { ProfileServices } from "./services/ProfileServices";
import { cookies } from "./services/config";
import LoadComponent from "./widgets/load";

function App() {
  const profileServices = new ProfileServices();

  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const token = cookies?.token ?? "";

    if (token === "" || token === undefined) {
      setUser(null);
    } else {
      const res = await profileServices.getProfile();
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
    }

    setLoading(false);
  }

  if (loading)
    return (
      <div className="h-screen w-full">
        <LoadComponent />
      </div>
    );
  else if (user == null)
    return (
      <Routes>
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
      </Routes>
    );
  else if (user) {
    return (
      <Routes>
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    );
  } else {
    return <h1>Something Wrong!</h1>;
  }
}

export default App;
