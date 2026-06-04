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
  max-width: 640px;
`;

const Card = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 18px;
  padding: 30px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  max-width: 760px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.accent},
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.accent}
    );
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent}30;
    transform: translateY(-4px);
    box-shadow: 0 22px 44px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 24px;
  }
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 84px;
  height: 84px;
  border-radius: 14px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.accent}20;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
`;

const Info = styled.div`
  flex: 1;
  min-width: 0;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;

const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background: ${({ $accent, theme }) => ($accent ? `${theme.accent}18` : theme.card_light)};
  color: ${({ $accent, theme }) => ($accent ? theme.accent : theme.text_secondary)};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

const Degree = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 8px;

  @media (max-width: 560px) {
    font-size: 21px;
  }
`;

const Institution = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  margin: 0 0 8px;
`;

const Period = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-family: monospace;
  margin: 0 0 18px;
  letter-spacing: 0.4px;
`;

const HighlightsLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin: 0 0 12px;
`;

const HighlightList = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 560px) {
    gap: 7px;
  }
`;

const HighlightItem = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_secondary};
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
          Academic foundation in computer science with cybersecurity focus and completed graduation.
        </SectionSubtitle>

        <Card variants={fadeInUp}>
          <LogoWrapper>
            {education.img ? (
              <Logo src={education.img} alt={education.institution} />
            ) : (
              <span style={{ fontSize: 28 }}>🎓</span>
            )}
          </LogoWrapper>

          <Info>
            <MetaRow>
              <MetaChip $accent>Cybersecurity Focus</MetaChip>
              <MetaChip>{education.status}</MetaChip>
            </MetaRow>
            <Degree>{education.degree}</Degree>
            <Institution>
              {education.institution} • CGPA {education.cgpa}
            </Institution>
            <Period>
              {education.period}
            </Period>

            <HighlightsLabel>Key Areas</HighlightsLabel>
            <HighlightList>
              {(education.relevantCoursework || []).map((item, i) => (
                <HighlightItem key={i}>{item}</HighlightItem>
              ))}
            </HighlightList>
          </Info>
        </Card>
      </Inner>
    </Section>
  );
};

export default Education;
