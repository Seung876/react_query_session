//Coin.tsx
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.2em;
  color: #333;
  font-weight: bold;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
`;

interface RouteParams {
  coinId: string; 
}
interface RouteState {
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  return (
    <Container>
    <Header>
      <Title>코인 {coinId}</Title>
      <br />
      이름 : {state?.name || "loading"}
      <br />
      symbol : {state?.symbol || "loading"}
      <br />
      순위 : {state?.rank || "loading"}
      <br />
      종류 : {state?.type || "loading"}
    </Header>
    {loading ? "Loading..." : null}
  </Container>
  );
}
export default Coin;