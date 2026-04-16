import React, { useEffect } from "react";
import styled from "styled-components";
import { GitHub, Close } from "@mui/icons-material";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  padding: 40px 16px 60px;
  backdrop-filter: blur(4px);
`;

const Modal = styled.div`
  width: 100%;
  max-width: 760px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  margin: auto;
`;

const Banner = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, ${({ theme }) => theme.card}, transparent);
  }

  @media (max-width: 600px) {
    height: 180px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Content = styled.div`
  padding: 28px 32px 32px;

  @media (max-width: 600px) {
    padding: 20px 20px 28px;
  }
`;

const TitleRow = styled.div`
  margin-bottom: 16px;
`;

const ProjectTitle = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 6px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CategoryBadge = styled.span`
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${({ $bg }) => $bg};
  color: ${({ $text }) => $text};
`;

const TagChip = styled.span`
  padding: 4px 10px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const TLDRBox = styled.div`
  background: ${({ theme }) => theme.accent}08;
  border: 1px solid ${({ theme }) => theme.accent}20;
  border-radius: 10px;
  padding: 16px 20px;
  margin: 20px 0;
`;

const TLDRLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const TLDRText = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const SectionBlock = styled.div`
  margin-bottom: 24px;
`;

const BlockTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ParagraphText = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const ApproachList = styled.ol`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ApproachItem = styled.li`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const ToolGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ToolBadge = styled.div`
  padding: 6px 14px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 600;
`;

const LogBlock = styled.pre`
  background: #0d0d0d;
  border: 1px solid rgba(0, 255, 136, 0.15);
  border-radius: 8px;
  padding: 16px;
  font-size: 12px;
  line-height: 1.6;
  color: #00ff88;
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`;

const ResultList = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ResultItem = styled.li`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
  margin: 20px 0;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
      background: ${theme.accent};
      color: #0a0a0a;
      &:hover { opacity: 0.85; }
    `
      : `
      background: transparent;
      border: 1.5px solid ${theme.cardBorder};
      color: ${theme.text_secondary};
      &:hover { border-color: ${theme.accent}60; color: ${theme.text_primary}; }
    `}
`;

const categoryConfig = {
  defensive: { label: "DEFENSIVE", bg: "rgba(0,136,255,0.85)", text: "#fff" },
  offensive: { label: "OFFENSIVE", bg: "rgba(255,68,68,0.85)", text: "#fff" },
  forensics: { label: "FORENSICS", bg: "rgba(255,170,0,0.85)", text: "#1a1a1a" },
  automation: { label: "AUTOMATION", bg: "rgba(0,255,136,0.85)", text: "#1a1a1a" },
};

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const close = () => setOpenModal({ state: false, project: null });

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpenModal({ state: false, project: null }); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpenModal]);

  if (!project) return null;

  const config = categoryConfig[project.category] || categoryConfig.defensive;
  const detail = project.detail || {};

  return (
    <Overlay onClick={close}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Banner>
          <img src={project.image} alt={project.title} />
          <CloseBtn onClick={close} aria-label="Close">
            <Close style={{ fontSize: 20 }} />
          </CloseBtn>
        </Banner>

        <Content>
          <TitleRow>
            <ProjectTitle>{project.title}</ProjectTitle>
            <BadgeRow>
              <CategoryBadge $bg={config.bg} $text={config.text}>
                {config.label}
              </CategoryBadge>
              {project.tags?.map((tag, i) => (
                <TagChip key={i}>{tag}</TagChip>
              ))}
            </BadgeRow>
          </TitleRow>

          {detail.tldr && (
            <TLDRBox>
              <TLDRLabel>TL;DR</TLDRLabel>
              <TLDRText>{detail.tldr}</TLDRText>
            </TLDRBox>
          )}

          <Divider />

          {detail.problem && (
            <SectionBlock>
              <BlockTitle>🎯 Problem</BlockTitle>
              <ParagraphText>{detail.problem}</ParagraphText>
            </SectionBlock>
          )}

          {detail.approach && detail.approach.length > 0 && (
            <SectionBlock>
              <BlockTitle>🔧 Approach</BlockTitle>
              <ApproachList>
                {detail.approach.map((step, i) => (
                  <ApproachItem key={i}>{step}</ApproachItem>
                ))}
              </ApproachList>
            </SectionBlock>
          )}

          {project.tags && project.tags.length > 0 && (
            <SectionBlock>
              <BlockTitle>🛠️ Tools & Tech</BlockTitle>
              <ToolGrid>
                {project.tags.map((tool, i) => (
                  <ToolBadge key={i}>{tool}</ToolBadge>
                ))}
              </ToolGrid>
            </SectionBlock>
          )}

          {detail.logs && (
            <SectionBlock>
              <BlockTitle>📋 Log Output</BlockTitle>
              <LogBlock>{detail.logs}</LogBlock>
            </SectionBlock>
          )}

          {detail.results && detail.results.length > 0 && (
            <SectionBlock>
              <BlockTitle>✅ Results</BlockTitle>
              <ResultList>
                {detail.results.map((r, i) => (
                  <ResultItem key={i}>{r}</ResultItem>
                ))}
              </ResultList>
            </SectionBlock>
          )}

          <ActionRow>
            {project.github && (
              <ActionBtn
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                $variant="primary"
              >
                <GitHub style={{ fontSize: 18 }} />
                View Code
              </ActionBtn>
            )}
            {project.blog && (
              <ActionBtn
                href={project.blog}
                target="_blank"
                rel="noopener noreferrer"
                $variant="secondary"
              >
                View Write-up ↗
              </ActionBtn>
            )}
          </ActionRow>
        </Content>
      </Modal>
    </Overlay>
  );
};

export default ProjectDetails;
