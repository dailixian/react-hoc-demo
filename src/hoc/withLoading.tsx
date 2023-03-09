import React from "react";

const withLoading = (prop: string) => (OldComp: React.ComponentType) => {
  return (props: any) => {
    const data = props[prop];
    console.log(data?.length);
    if (!data || data.length === 0) {
      return <h3>Loading... pls wait</h3>;
    }
    return <OldComp {...props}></OldComp>;
  };
};

export default withLoading;
