import React from "react";
import styled from "styled-components";
import { GitHub } from "@mui/icons-material";

const categoryConfig = {
  defensive: { label: "DEFENSIVE", bg: "rgba(0,136,255,0.85)", text: "#fff", border: "#0088ff" },
  offensive: { label: "OFFENSIVE", bg: "rgba(255,68,68,0.85)", text: "#fff", border: "#ff4444" },
  forensics: { label: "FORENSICS", bg: "rgba(255,170,0,0.85)", text: "#1a1a1a", border: "#ffaa00" },
  tools: { label: "TOOLS", bg: "rgba(0,255,136,0.85)", text: "#062b18", border: "#00ff88" },
  labs: { label: "LABS", bg: "rgba(170,120,255,0.85)", text: "#fff", border: "#aa78ff" },
  ai: { label: "AI", bg: "rgba(255,82,154,0.85)", text: "#fff", border: "#ff529a" },
  other: { label: "OTHER", bg: "rgba(153,153,153,0.85)", text: "#fff", border: "#999999" },
};

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 340px;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  border-left: 4px solid ${({ $borderColor }) => $borderColor || "transparent"};

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $borderColor }) => $borderColor || "#00ff88"};
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 188px;

  &:hover img {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
`;

const CategoryOverlay = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  min-height: 24px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  background: ${({ $bg }) => $bg};
  color: ${({ $text }) => $text};
`;

const CategoryOverlayRow = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
`;

const Body = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.3;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
  margin: -4px 0 0;
`;

const Summary = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ToolRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const ToolChip = styled.span`
  padding: 3px 9px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 4px;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const MetricRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const MetricBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.accent}0a;
  border: 1px solid ${({ theme }) => theme.accent}25;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  font-family: monospace;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 4px;
`;

const ActionBtn = styled.button`
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
      background: ${theme.accent};
      color: #0a0a0a;
      &:hover { opacity: 0.85; }
    `
      : `
      background: ${theme.card_light};
      color: ${theme.text_secondary};
      border: 1px solid ${theme.cardBorder};
      &:hover { border-color: ${theme.accent}60; color: ${theme.text_primary}; }
    `}
`;

const ProjectCard = ({ project, setOpenModal }) => {
  const categories =
    Array.isArray(project.categories) && project.categories.length > 0
      ? project.categories
      : project.category
      ? [project.category]
      : ["other"];

  const primaryCategory = categories[0];
  const config = categoryConfig[primaryCategory] || categoryConfig.other;

  const handleGithub = (e) => {
    e.stopPropagation();
    if (project.github) {
      window.open(project.github, "_blank", "noopener noreferrer");
    }
  };

  return (
    <Card
      $borderColor={config.border}
      onClick={() => setOpenModal({ state: true, project })}
    >
      <ImageWrapper>
        <Img src={project.image} alt={project.title} loading="lazy" />
        <CategoryOverlayRow>
          {categories.map((category) => {
            const categoryMeta = categoryConfig[category] || categoryConfig.other;
            return (
              <CategoryOverlay key={category} $bg={categoryMeta.bg} $text={categoryMeta.text}>
                {categoryMeta.label}
              </CategoryOverlay>
            );
          })}
        </CategoryOverlayRow>
      </ImageWrapper>

      <Body>
        <div>
          <Title>{project.title}</Title>
          {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
        </div>

        <Summary>{project.summary}</Summary>

        <ToolRow>
          {project.tags?.slice(0, 5).map((tag, i) => (
            <ToolChip key={i}>{tag}</ToolChip>
          ))}
        </ToolRow>

        {project.metrics && project.metrics.length > 0 && (
          <MetricRow>
            {project.metrics.map((m, i) => (
              <MetricBadge key={i}>
                {m.value} <span style={{ fontWeight: 400, opacity: 0.75 }}>{m.label}</span>
              </MetricBadge>
            ))}
          </MetricRow>
        )}

        <ActionRow>
          {project.github && (
            <ActionBtn $variant="secondary" onClick={handleGithub}>
              <GitHub style={{ fontSize: 16 }} />
              GitHub
            </ActionBtn>
          )}
          <ActionBtn $variant="primary" onClick={() => setOpenModal({ state: true, project })}>
            Details →
          </ActionBtn>
        </ActionRow>
      </Body>
    </Card>
  );
};

export default ProjectCard;
