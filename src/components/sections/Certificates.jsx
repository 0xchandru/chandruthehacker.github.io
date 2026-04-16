import React from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants";
import CertificateCard from "../cards/CertificateCard";

const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
  @media (max-width: 370px) {
    padding: 0 15px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const CardContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const Certificates = ({ openModal, setOpenModal }) => {
  return (
    <Container id="Certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Certified in threat detection, log analysis, and SOC operations through hands-on labs and industry-recognized credentials.        
        </Desc>
        <CardContainer>
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
