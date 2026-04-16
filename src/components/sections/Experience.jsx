import React, {Suspense} from "react";
import styled from "styled-components";
import { experience } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const ExperienceCard = React.lazy(() => import("../cards/ExperienceCard"));

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
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

const StyledVerticalTimeline = styled(VerticalTimeline)`
  &::before {
    background: ${({ theme }) => theme.text_secondary} !important;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc style={{ marginBottom: "40px" }}>
          My education has been a experience of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <StyledVerticalTimeline
          style={{ maxHeight: "80vh", overflowY: "auto", scrollBehavior: "smooth" }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {experience.map((item, index) => (
              <ExperienceCard key={index} experience={item} />
            ))}
          </Suspense>
        </StyledVerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default React.memo(Experience);
