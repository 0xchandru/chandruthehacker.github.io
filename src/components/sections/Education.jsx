import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { education } from "../../data/constants";
import { fadeInUp, staggerContainer } from "../../utils/motion";

const Section = styled.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  padding: 32px;
  display: flex;
  gap: 28px;
  align-items: flex-start;
  max-width: 720px;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent}40;
    transform: translateY(-3px);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`;

const LogoFallback = styled.div`
  font-size: 28px;
`;

const Info = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
`;

const Institution = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
  margin-bottom: 4px;
`;

const Period = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  font-family: monospace;
`;

const CourseLabel = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Chip = styled.span`
  padding: 5px 12px;
  background: ${({ theme }) => theme.accent}10;
  border: 1px solid ${({ theme }) => theme.accent}22;
  border-radius: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const Education = () => {
  return (
    <Section id="Education">
      <Inner
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionTitle variants={fadeInUp}>Education</SectionTitle>
        <SectionSubtitle variants={fadeInUp}>
          Academic foundation in computer science with cybersecurity focus.
        </SectionSubtitle>

        <Card variants={fadeInUp}>
          <LogoWrapper>
            {education.img ? (
              <Logo src={education.img} alt={education.institution} />
            ) : (
              <LogoFallback>🎓</LogoFallback>
            )}
          </LogoWrapper>

          <Info>
            <Degree>{education.degree}</Degree>
            <Institution>{education.institution}</Institution>
            <Period>{education.period}</Period>
            <CourseLabel>Relevant Coursework</CourseLabel>
            <ChipRow>
              {education.relevantCoursework.map((course, i) => (
                <Chip key={i}>{course}</Chip>
              ))}
            </ChipRow>
          </Info>
        </Card>
      </Inner>
    </Section>
  );
};

export default Education;
