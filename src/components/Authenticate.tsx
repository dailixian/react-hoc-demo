const Authenticate = ({ children }: any) => {
  const isAuthenticated = JSON.parse(
    sessionStorage.getItem("isAuthenticated") ?? "false"
  );

  if (!isAuthenticated) {
    return <h2>Log in required!</h2>;
  }

  return <>{children}</>;
};

export default Authenticate;
