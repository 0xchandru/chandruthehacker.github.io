import React from "react";
import styled from "styled-components";
import { Verified } from "@mui/icons-material";

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.accent}40;
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.cardBorder};
`;

const CertImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  min-width: 0;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
  flex-wrap: wrap;
`;

const IssuerLine = styled.div``;

const Issuer = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 2px 0 0;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;

  ${({ $status }) =>
    $status === "VERIFIED"
      ? `
      background: rgba(0, 255, 136, 0.1);
      color: #00ff88;
      border: 1px solid rgba(0, 255, 136, 0.3);
    `
      : `
      background: rgba(255, 170, 0, 0.1);
      color: #ffaa00;
      border: 1px solid rgba(255, 170, 0, 0.3);
    `}
`;

const Date = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  font-family: monospace;
  margin: 4px 0 10px;
`;

const SkillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

const SkillChip = styled.span`
  padding: 3px 9px;
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

  &:hover {
    opacity: 0.75;
    text-decoration: underline;
  }
`;

const CertificateCard = ({ certificate }) => {
  return (
    <Card>
      <ImageWrapper>
        <CertImg src={certificate.image} alt={certificate.issuer} loading="lazy" />
      </ImageWrapper>

      <Info>
        <TopRow>
          <IssuerLine>
            <Issuer>{certificate.issuer}</Issuer>
            <Title>{certificate.title}</Title>
          </IssuerLine>
          <StatusBadge $status={certificate.status}>
            {certificate.status === "VERIFIED" && (
              <Verified style={{ fontSize: 12 }} />
            )}
            {certificate.status}
          </StatusBadge>
        </TopRow>

        <Date>Issued {certificate.date}</Date>

        {certificate.skills && certificate.skills.length > 0 && (
          <SkillRow>
            {certificate.skills.map((skill, i) => (
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
      </Info>
    </Card>
  );
};

export default CertificateCard;
