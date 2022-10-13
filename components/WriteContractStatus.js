import { useContractWrite } from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/contract";
import { Form, Row, Col, Button } from "react-bootstrap";

const ContractStatus = () => {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "toggle",
    chainId: 5
  });
  return (
    <>
      <Button disabled={!write} onClick={() => write?.()}>
        toggle
      </Button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data.hash)}</div>}
    </>
  );
};

export default ContractStatus;
