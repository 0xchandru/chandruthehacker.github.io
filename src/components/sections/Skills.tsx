import styled from "styled-components";
import { motion } from "framer-motion";
import { skills } from "../../data/constants";
import { fadeInUp, staggerContainer } from "../../utils/motion";

const Section = styled.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  background: ${({ theme }: any) => theme.bgLight}10;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }: any) => theme.text_primary};
  margin-bottom: 8px;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 16px;
  color: ${({ theme }: any) => theme.text_secondary};
  margin-bottom: 40px;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }: any) => theme.card};
  border: 1px solid ${({ theme }: any) => theme.cardBorder};
  border-radius: 12px;
  padding: 22px;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }: any) => theme.accent}30;
    transform: translateY(-3px);
  }
`;

const CardTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }: any) => theme.accent};
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }: any) => theme.cardBorder};
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const SkillChip = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 11px;
  background: ${({ theme }: any) => theme.card_light};
  border: 1px solid ${({ theme }: any) => theme.cardBorder};
  border-radius: 6px;
  font-size: 12px;
  color: ${({ theme }: any) => theme.text_secondary};
  font-weight: 500;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }: any) => theme.accent}40;
    color: ${({ theme }: any) => theme.text_primary};
  }

  svg {
    flex-shrink: 0;
    width: 15px;
    height: 15px;
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
          Hands-on tools and techniques from lab work, projects, and certifications.
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
