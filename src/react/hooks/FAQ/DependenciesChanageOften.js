import React, { useEffect, useRef } from "react";

const DependenciesChanageOften = (props) => {
  const latestProps = useRef(props);
  useEffect(() => {
    latestProps.current = props;
  });
  useEffect(() => {
    function tick() {
      console.log(latestProps.current);
    }
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <div>test</div>;
};

export default DependenciesChanageOften;
