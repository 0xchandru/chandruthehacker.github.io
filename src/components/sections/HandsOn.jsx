import React from "react";
import styled from "styled-components";
import htbImg from "../../assets/icons/htb_academy.webp";


const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BadgeContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .badgeImg{
    transition: .5s ease-in-out;
    border-radius: 15px;
    width: 330px;
    height: 90px;
    &:hover{
      transform: scale(1.13);
    }

    @media(max-width: 376px){
      width: 280px;
      height: auto;
    }
  }
`;



const HandsOn = ({ openModal, setOpenModal }) => {
  return (
    <Container id="HandsOn">
      <Wrapper>
        <Title>HandsOn</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Completed real-world cybersecurity labs on TryHackMe and HTB to practice SOC-level detection, log analysis, and threat investigation.
        </Desc>
        <BadgeContainer>
          <a href="https://tryhackme.com/p/chandruthehacker" target="_blank" rel="noreferrer" >
            <img src="https://tryhackme-badges.s3.amazonaws.com/chandruthehacker.png" alt="Tryhackme badge" className="badgeImg"/>
          </a>
          <a href="https://ctf.hackthebox.com/user/profile/settings/545795" target="_blank" rel="noreferrer">
            <img src={htbImg} alt="Hack The Box Profile" className="badgeImg"/>
          </a>
        </BadgeContainer>

        
      </Wrapper>
    </Container>
  );
};

export default HandsOn;
