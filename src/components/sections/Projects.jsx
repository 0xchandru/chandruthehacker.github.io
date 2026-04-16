import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import { staggerContainer, fadeInUp } from "../../utils/motion";

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
  margin-bottom: 32px;
  max-width: 600px;
`;

const FilterRow = styled(motion.div)`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const FilterBtn = styled.button`
  padding: 7px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid
    ${({ $active, theme }) => ($active ? theme.accent : theme.cardBorder)};
  background: ${({ $active, theme }) =>
    $active ? `${theme.accent}18` : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.accent : theme.text_secondary};

  &:hover {
    border-color: ${({ theme }) => theme.accent}80;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const CardGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const filters = [
  { label: "All", value: "all" },
  { label: "Defensive", value: "defensive" },
  { label: "Forensics", value: "forensics" },
  { label: "Automation", value: "automation" },
];

const Projects = ({ openModal, setOpenModal }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <Section id="Projects">
      <Inner
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <SectionTitle variants={fadeInUp}>Projects</SectionTitle>
        <SectionSubtitle variants={fadeInUp}>
          Real security tools built from scratch — detection systems, forensic analyzers, and automation scripts.
        </SectionSubtitle>

        <FilterRow variants={fadeInUp}>
          {filters.map((f) => (
            <FilterBtn
              key={f.value}
              $active={activeFilter === f.value}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </FilterBtn>
          ))}
        </FilterRow>

        <CardGrid variants={staggerContainer}>
          {filtered.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </motion.div>
          ))}
        </CardGrid>
      </Inner>
    </Section>
  );
};

export default Projects;
