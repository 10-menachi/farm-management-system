import { useContext, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Skeleton from "../components/Skeleton";

const Dashboard = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <Skeleton />;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <NavBar logOut={handleLogout} />
    </>
  );
};

export default Dashboard;
