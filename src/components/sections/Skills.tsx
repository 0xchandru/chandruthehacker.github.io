import styled from "styled-components";
import { motion } from "framer-motion";
import { skills } from "../../data/constants";
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

const SkillsGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 24px;
  width: calc(50% - 10px);
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent}30;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillChip = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 13px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent}40;
    color: ${({ theme }) => theme.text_primary};
  }

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
`;

const Skills = () => {
  return (
    <Section id="Skills">
      <Inner
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <SectionTitle variants={fadeInUp}>Skills</SectionTitle>
        <SectionSubtitle variants={fadeInUp}>
          Hands-on tools and techniques from 3+ years of lab work, projects, and certifications.
        </SectionSubtitle>

        <SkillsGrid variants={staggerContainer}>
          {skills.map((group, i) => (
            <SkillCard key={i} variants={fadeInUp}>
              <CardTitle>{group.title}</CardTitle>
              <SkillList>
                {group.skills.map((skill, j) => (
                  <SkillChip key={j}>
                    {skill.icon}
                    <span>{skill.name}</span>
                  </SkillChip>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Inner>
    </Section>
  );
};

export default Skills;
