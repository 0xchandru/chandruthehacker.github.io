import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TRYHACKME_STATS, practicalExposure, practicalExposureConfig } from "../../data/constants";
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
  margin-bottom: 48px;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 6px;
    bottom: 24px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.accent}50,
      ${({ theme }) => theme.primary}20
    );
    border-radius: 2px;
  }
`;

const Entry = styled(motion.div)`
  position: relative;
  padding: 0 0 44px 24px;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -28px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
    border: 2px solid ${({ theme }) => theme.bg};
    box-shadow: 0 0 0 2px ${({ $color }) => $color}50;
  }
`;

const EntryCard = styled.div`
  position: relative;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.card},
    ${({ theme }) => theme.card_light}
  );
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 22px;
  padding: 30px;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.22);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent}, #00aaff, #00ff88);
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent}40;
    transform: translateY(-4px);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28);
  }
`;

const EntryTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 4px;
`;

const EntryLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const CategoryBadge = styled.span`
  padding: 4px 11px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  flex-shrink: 0;

  ${({ $type }) => {
    switch ($type) {
      case 'LAB':
        return `
          background: rgba(0, 255, 136, 0.1);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.25);
        `;
      case 'SIMULATION':
        return `
          background: rgba(0, 170, 255, 0.1);
          color: #00aaff;
          border: 1px solid rgba(0, 170, 255, 0.25);
        `;
      case 'COMPETITION':
        return `
          background: rgba(255, 68, 68, 0.1);
          color: #ff6060;
          border: 1px solid rgba(255, 68, 68, 0.25);
        `;
      default:
        return `
          background: rgba(255, 170, 0, 0.1);
          color: #ffaa00;
          border: 1px solid rgba(255, 170, 0, 0.25);
        `;
    }
  }}
`;

const EntryTitle = styled.h3`
  font-size: 23px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Platform = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
`;

const DateLine = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-family: monospace;
  white-space: nowrap;
  margin-top: 2px;
  flex-shrink: 0;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.78;
  color: ${({ theme }) => theme.text_primary};
  opacity: 0.9;
  margin: 14px 0 20px;
`;

const LiveRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
`;

const LiveStat = styled.div`
  min-width: 0;
  padding: 18px 18px 17px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.card_light},
    ${({ theme }) => theme.card}
  );
  border: 1px solid ${({ theme }) => theme.cardBorder};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.accent}14, 0 10px 20px rgba(0, 0, 0, 0.12);
`;

const LiveLabel = styled.p`
  margin: 0 0 6px;
  font-size: 10px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  font-weight: 800;
`;

const LiveValue = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
`;

const HighlightBlock = styled.div`
  margin-top: 14px;
  padding: 16px 16px 14px;
  border-radius: 18px;
  background: linear-gradient(180deg, ${({ theme }) => theme.card_light}, ${({ theme }) => theme.card});
  border: 1px solid ${({ theme }) => theme.cardBorder};
`;

const HighlightTitle = styled.p`
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.text_primary};
`;

const HighlightCaption = styled.p`
  margin: 0 0 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

const ToolRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`;

const ToolChip = styled.span`
  padding: 8px 12px;
  background: rgba(0, 255, 136, 0.08);
  border: 1px solid ${({ theme }) => theme.accent}2f;
  border-radius: 999px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
`;

const MoreChip = styled(ToolChip)`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_secondary};
  border-style: dashed;
  cursor: pointer;
  appearance: none;
  border-radius: 999px;
`;

const ToggleChip = styled(MoreChip)`
  background: ${({ theme }) => theme.accent};
  color: #0a0a0a;
  border-style: solid;
`;

const ProofLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 15px;
  border-radius: 999px;
  background: ${({ theme }) => theme.accent};
  color: #0a0a0a;
  text-decoration: none;
  font-size: 12px;
  font-weight: 800;
  margin-left: 4px;
  box-shadow: 0 12px 24px ${({ theme }) => theme.accent}44;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const PracticalExposure = () => {
  const [expandedItemIds, setExpandedItemIds] = useState({});
  const metricFormatter = new Intl.NumberFormat();

  const getMetricValue = (metricKey) => {
    const value = TRYHACKME_STATS[metricKey];
    if (value === null || value === undefined || value === "") {
      return "Unavailable";
    }

    return typeof value === "number" ? metricFormatter.format(value) : String(value);
  };

  const toggleExpanded = (itemId) => {
    setExpandedItemIds((current) => ({
      ...current,
      [itemId]: !current[itemId],
    }));
  };

  const getDisplayedMetric = (metric) => {
    return getMetricValue(metric.key);
  };

  return (
    <Section id="Exposure">
      <Inner
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <SectionTitle variants={fadeInUp}>{practicalExposureConfig.title}</SectionTitle>
        <SectionSubtitle variants={fadeInUp}>{practicalExposureConfig.subtitle}</SectionSubtitle>

        <Timeline>
          {practicalExposure.map((item, i) => (
            <Entry
              key={item.id || i}
              variants={fadeInUp}
              $color="#00ff88"
            >
              {(() => {
                const isExpanded = Boolean(expandedItemIds[item.id || i]);
                const focusAreas = item.focusAreas || item.tools || [];
                const visibleCount = practicalExposureConfig.focus.visibleCount;
                const visibleFocus = isExpanded ? focusAreas : focusAreas.slice(0, visibleCount);
                const hiddenCount = Math.max(focusAreas.length - visibleFocus.length, 0);
                const toggleLabel = isExpanded
                  ? practicalExposureConfig.focus.collapseLabel
                  : practicalExposureConfig.focus.expandLabel.replace("{count}", hiddenCount);

                return (
              <EntryCard>
                <EntryTop>
                  <EntryLeft>
                    <CategoryBadge $type={item.category}>{item.category}</CategoryBadge>
                    <EntryTitle>
                      {item.title}
                      {item.platform && (
                        <> — <Platform>{item.platform}</Platform></>
                      )}
                    </EntryTitle>
                  </EntryLeft>
                  <DateLine>{item.date}</DateLine>
                </EntryTop>

                <Description>{item.description}</Description>

                <LiveRow>
                  {practicalExposureConfig.metrics.map((metric) => (
                    <LiveStat key={metric.key}>
                      <LiveLabel>{metric.label}</LiveLabel>
                      <LiveValue>
                        {metric.key === "lastUpdated" && TRYHACKME_STATS.lastUpdated
                          ? new Date(TRYHACKME_STATS.lastUpdated).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })
                          : getDisplayedMetric(metric)}
                      </LiveValue>
                    </LiveStat>
                  ))}
                </LiveRow>

                <HighlightBlock>
                  <HighlightTitle>{practicalExposureConfig.focus.title}</HighlightTitle>
                  <HighlightCaption>{practicalExposureConfig.focus.caption}</HighlightCaption>
                  <ToolRow>
                    {visibleFocus.map((tool, j) => (
                      <ToolChip key={j}>{tool}</ToolChip>
                    ))}
                    {focusAreas.length > visibleCount && (
                      <ToggleChip type="button" onClick={() => toggleExpanded(item.id || i)}>
                        {toggleLabel}
                      </ToggleChip>
                    )}
                    {item.proof && (
                      <ProofLink
                        href={item.proof}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={practicalExposureConfig.proofAriaLabel}
                      >
                        {practicalExposureConfig.proofLabel}
                      </ProofLink>
                    )}
                  </ToolRow>
                </HighlightBlock>
              </EntryCard>
                );
              })()}
            </Entry>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
};

export default PracticalExposure;
