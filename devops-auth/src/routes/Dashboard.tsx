import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const auth = useAuth();
  const goTo = useNavigate();

  function handleLogout() {
    auth.logout();
    goTo("/login");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
