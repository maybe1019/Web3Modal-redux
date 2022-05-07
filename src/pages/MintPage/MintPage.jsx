import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MintPage() {
  const web3 = useSelector((state) => state.web3Reducer.web3);

  useEffect(() => {
    console.log(web3)
  }, [web3])

  return (
    <div>
      {web3 ? "b" : "a"}
    </div>
  );
}
