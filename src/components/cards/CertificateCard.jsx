import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: 1s ease;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &:hover {
    transform: translateY(-10px);
  }
  @media(max-width: 350px){
  width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 0 5px ${({ theme }) => theme.primary};
`;

const Details = styled.div`
  padding: 4px;
  padding-top: 15px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px;
  margin-top: 8px;
`;

const ViewButton = styled.a`
  display: inline-block;
  margin: 16px 0 4px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`;

const CertificateCard = ({ certificate, setOpenModal }) => {
  return (
    <Card>
      <Image src={certificate.image} alt={certificate.title} />
      <Details>
        <Title>{certificate.title}</Title>
        <Description>{certificate.description}</Description>
        <Date>{certificate.date}</Date>       
        {certificate.link && (
          <ViewButton href={certificate.link} target="_blank" onClick={(e) => e.stopPropagation()}>
            View Certificate🔗
          </ViewButton>
        )}
      </Details>
    </Card>
  );
};

export default CertificateCard;
