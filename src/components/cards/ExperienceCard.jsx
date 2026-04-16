import React from "react";
import styled, { useTheme } from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {Link} from "lucide-react";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme})=>theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const SubHeading = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  margin-top: 10px;
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-top: 0px;
`;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  font-size: 12px;
  font-weight: 400;
  user-select: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const CertLink = styled.a`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;


  .LinkLogo{
    width: 20px;
  }

  .LinkColor{
    color:rgb(0, 85, 255);
  }
`;


const ExperienceCard = ({ experience }) => {
  const theme = useTheme();

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.heading}
          style={{
            borderRadius: "50%",
            backgroundColor: "black",
          }}
          src={experience.img}
        />
      }
      contentStyle={{
        background: theme.card_bg, 
        color: theme.text_primary,
        boxShadow: "rgba(0, 54, 162, 0.5) 0px 4px 24px",
        border: `1px solid rgba(255, 255, 255, 0.125)`,
        borderRadius: "15px",
      }}
      contentArrowStyle={{
        borderRight: `8px solid ${theme.text_secondary}`,
      }}
      date={experience.date}
    >
      <Top>
        <Image src={experience.img} loading="lazy" alt={experience.heading} />
        <Body>
          {experience.cert_link ? (
          <CertLink href={experience.cert_link} target="_blank" rel="noopener noreferrer">
            <Heading className="LinkColor">{experience.heading}</Heading>
            <Link className="LinkLogo LinkColor" size={18} />
          </CertLink>
          ) : (
            <Heading>{experience.heading}</Heading>
          )}
          <SubHeading>{experience.sub_heading}</SubHeading>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        <Span>{experience.desc}</Span>
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience.skills.map((skill, index) => (
                  <Skill key={index}>{skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
