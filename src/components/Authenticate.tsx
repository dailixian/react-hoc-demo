import LoginForm from "./LoginForm";

const Authenticate = ({ children }: any) => {
  const isAuthenticated = JSON.parse(
    sessionStorage.getItem("isAuthenticated") ?? "false"
  );

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <>{children}</>;
};

export default Authenticate;
