import React, { useEffect } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { Radar } from 'lucide-react';

const radarSweep = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const radarPulse = keyframes`
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2.2); opacity: 0; }
`;

const PreloaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const RadarContainer = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
`;

const Ring = styled.div`
  border-radius: 50%;
  position: absolute;
`;

const OuterRing = styled(Ring)`
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.accent}33;
`;

const MiddleRing = styled(Ring)`
  top: 12px;
  bottom: 12px;
  left: 12px;
  right: 12px;
  border: 1px solid ${({ theme }) => theme.colors.accent}88;
`;

const InnerRing = styled(Ring)`
  top: 24px;
  bottom: 24px;
  left: 24px;
  right: 24px;
  border: 1px solid ${({ theme }) => theme.colors.accent}bb;
`;

const CenterDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const Sweep = styled.div`
  position: absolute;
  inset: 0;
  animation: ${radarSweep} 2s linear infinite;
`;

const SweepLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 2px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.accent},
    transparent
  );
  transform: translateY(-50%);
  transform-origin: left;
`;

const PulseRing = styled(Ring)`
  inset: 0;
  border: 1px solid ${({ theme }) => theme.colors.accent}99;
  animation: ${radarPulse} 2s ease-out infinite;
`;

const RadarIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FooterText = styled.div`
  position: absolute;
  bottom: 36px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.accent}aa;
  letter-spacing: 1px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const CyberPreloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <PreloaderWrapper>
      <Centered>
        <RadarContainer>
          <OuterRing />
          <MiddleRing />
          <InnerRing />
          <CenterDot />

          <Sweep>
            <SweepLine />
          </Sweep>

          {[...Array(3)].map((_, i) => (
            <PulseRing key={i} style={{ animationDelay: `${i * 0.5}s` }} />
          ))}

          <RadarIcon>
            <Radar size={28} color={theme.colors.accent} />
          </RadarIcon>
        </RadarContainer>
      </Centered>

      <FooterText>chandruthehacker</FooterText>
    </PreloaderWrapper>
  );
};

export default CyberPreloader;
