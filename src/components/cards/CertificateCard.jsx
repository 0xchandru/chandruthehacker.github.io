import React from "react";
import styled from "styled-components";
import { Verified } from "@mui/icons-material";

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.accent}30;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.card_light};
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
`;

const CertImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

const Body = styled.div`
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

const Issuer = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 9px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;

  ${({ $status }) =>
    $status === "VERIFIED"
      ? `
      background: rgba(0, 255, 136, 0.1);
      color: #00ff88;
      border: 1px solid rgba(0, 255, 136, 0.25);
    `
      : `
      background: rgba(255, 170, 0, 0.1);
      color: #ffaa00;
      border: 1px solid rgba(255, 170, 0, 0.25);
    `}
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.35;
`;

const DateLine = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-family: monospace;
  margin: 0;
`;

const SkillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
`;

const SkillChip = styled.span`
  padding: 3px 8px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 4px;
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const VerifyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  transition: opacity 0.2s ease;
  margin-top: 4px;

  &:hover {
    opacity: 0.75;
    text-decoration: underline;
  }
`;

const CertificateCard = ({ certificate }) => {
  return (
    <Card>
      <ImageBlock>
        <CertImg src={certificate.image} alt={certificate.title} loading="lazy" />
      </ImageBlock>

      <Body>
        <TopRow>
          <Issuer>{certificate.issuer}</Issuer>
          <StatusBadge $status={certificate.status}>
            {certificate.status === "VERIFIED" && (
              <Verified style={{ fontSize: 10 }} />
            )}
            {certificate.status}
          </StatusBadge>
        </TopRow>

        <Title>{certificate.title}</Title>
        <DateLine>Issued {certificate.date}</DateLine>

        {certificate.skills && certificate.skills.length > 0 && (
          <SkillRow>
            {certificate.skills.slice(0, 4).map((skill, i) => (
              <SkillChip key={i}>{skill}</SkillChip>
            ))}
          </SkillRow>
        )}

        {certificate.link && (
          <VerifyLink
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify Credential ↗
          </VerifyLink>
        )}
      </Body>
    </Card>
  );
};

export default CertificateCard;
