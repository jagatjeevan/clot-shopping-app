import withAuth from "./context/authContext";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";

const Home = (props) => {
  const { authContext } = props;
  const { state } = authContext;

  if (state.isLoggedIn) {
    return <Dashboard />;
  }

  return <Login />;
};

export default withAuth(Home);
