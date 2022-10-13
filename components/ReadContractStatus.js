import { useContractRead, useAccount, useContractEvent } from "wagmi";
import { useEffect, useState } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/contract";
import { Form, Row, Col, Button } from "react-bootstrap";

const ContractStatus = () => {
  const { address } = useAccount();
  const { data, refetch } = useContractRead({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "nowStatus",
    chainId: 5
  });
  useContractEvent({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    eventName: "changeStatus",
    listener: (event) => {
      console.log(event);
      refetch();
    }
  });
  return (
    <>
      <h3>合約狀況:{data && <pre>{data.toString()}</pre>}</h3>
    </>
  );
};

export default ContractStatus;
