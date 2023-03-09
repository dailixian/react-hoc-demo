import { useEffect, useState } from "react";

type WithUrlConfig = {
  url: string;
  prop: string;
};

const withUrl = (config: WithUrlConfig) => (OldComp: React.ComponentType) => {
  return () => {
    //do logic
    const [data, setData] = useState([]);
    const props = { [config.prop]: data };
    useEffect(() => {
      fetch(config.url)
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Error");
          }

          return resp.json();
        })
        .then((data) => setData(data));
    }, []);
    return (
      <>
        <OldComp {...props} />
      </>
    );
  };
};

export default withUrl;
