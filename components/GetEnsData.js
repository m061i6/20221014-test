import { useProvider, useEnsName, useAccount } from "wagmi";
import { useEffect, useState } from "react";

const GetEnsData = () => {
  const { address } = useAccount();
  const { data: ensData, isError, isLoading } = useEnsName({
    address: address,
    chainId: 5,
    onSuccess(data) {
      console.log("Success", data);
    },
    onError: (err) => {
      console.log(err);
    }
  });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>address: {address}</div>
      <div>ENS: {ensData}</div>
    </div>
  );
};

export default GetEnsData;
