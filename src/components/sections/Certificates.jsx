import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { certificates } from "../../data/constants";
import CertificateCard from "../cards/CertificateCard";
import { fadeInUp, staggerContainer } from "../../utils/motion";

const Section = styled.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bgLight}20;
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
  max-width: 600px;
`;

const Stack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
`;

const Certificates = () => {
  return (
    <Section id="Certificates">
      <Inner
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <SectionTitle variants={fadeInUp}>Certifications</SectionTitle>
        <SectionSubtitle variants={fadeInUp}>
          Industry-recognized credentials in threat detection, log analysis, and SOC operations.
        </SectionSubtitle>

        <Stack variants={staggerContainer}>
          {certificates.map((cert) => (
            <motion.div key={cert.id} variants={fadeInUp}>
              <CertificateCard certificate={cert} />
            </motion.div>
          ))}
        </Stack>
      </Inner>
    </Section>
  );
};

export default Certificates;
