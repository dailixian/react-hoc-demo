import React from "react";

const withAuth = (OldComp: React.ComponentType) => {
  return (props: any) => {
    //logic
    const isAuthenticated = JSON.parse(sessionStorage.getItem("isAuthenticated") ?? "false");

    if (!isAuthenticated) {
      return <h2>Log in required!</h2>;
    }

    return <OldComp {...props}></OldComp>;
  };
};

export default withAuth;
