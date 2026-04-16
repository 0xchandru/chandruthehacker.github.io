import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Bio } from "../../data/constants";
import {
  GitHub, WhatsApp, Phone as PhoneIcon,
  Email as GmailIcon, Telegram as TelegramIcon,
  LinkedIn as LinkedInIcon, Twitter as TwitterIcon,
} from "@mui/icons-material";

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const email = Bio.gmail;
const subject = "Opportunity for Chandraprakash";
const body = "Hi Chandraprakash,";

const mobileHref = `mailto:${email}`;
const desktopHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const Section = styled.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 8px;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin: 0 0 36px;
  max-width: 480px;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 40px;
  width: 100%;
`;

const QuickBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg {
    font-size: 20px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent}50;
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-2px);
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;

  svg {
    font-size: 20px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent}50;
    color: ${({ theme }) => theme.accent};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.cardBorder};
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: "or send a message";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.bg};
    padding: 0 16px;
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary};
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FormTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 4px;
  text-align: center;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ $hasError, theme }) =>
    $hasError ? "#ff4444" : theme.cardBorder};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent}60;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ $hasError, theme }) =>
    $hasError ? "#ff4444" : theme.cardBorder};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 120px;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.6;
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent}60;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 13px;
  background: ${({ theme }) => theme.accent};
  color: #0a0a0a;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(:disabled) {
    opacity: 0.88;
  }
`;

const Spinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-top-color: #0a0a0a;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const FormMsg = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $type }) => ($type === "error" ? "#ff6060" : "#00ff88")};
  margin: 0;
`;

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageType, setFormMessageType] = useState("");
  const [errors, setErrors] = useState({ from_email: false, from_name: false, message: false });

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage("");

    const { from_email, from_name, message } = form.current.elements;
    const newErrors = {
      from_email: !from_email.value.trim() || !/\S+@\S+\.\S+/.test(from_email.value),
      from_name: !from_name.value.trim(),
      message: !message.value.trim(),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      setFormMessage("Please fill in all required fields correctly.");
      setFormMessageType("error");
      return;
    }

    setIsSending(true);
    try {
      const result = await emailjs.sendForm(
        "service_j8n2w7r",
        "template_k34okyh",
        form.current,
        "CPqsd_WoFyuxo09lw"
      );

      if (result.text === "OK") {
        setFormMessage("Message sent successfully!");
        setFormMessageType("success");
        form.current.reset();
        setErrors({ from_email: false, from_name: false, message: false });
        setTimeout(() => setFormMessage(""), 5000);
      } else {
        throw new Error("Send failed");
      }
    } catch {
      setFormMessage("Failed to send. Please reach out via LinkedIn or email directly.");
      setFormMessageType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="Contact">
      <Inner>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Open to SOC Analyst and security operations roles. Feel free to reach out.
        </SectionSubtitle>

        <QuickLinks>
          <QuickBtn
            href={isMobile ? mobileHref : desktopHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GmailIcon /> Email Me
          </QuickBtn>
          <QuickBtn href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon /> LinkedIn
          </QuickBtn>
          <QuickBtn href={`tel:${Bio.phone}`}>
            <PhoneIcon /> Call
          </QuickBtn>
        </QuickLinks>

        <SocialRow>
          <SocialIcon href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHub />
          </SocialIcon>
          <SocialIcon href={Bio.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon href={Bio.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <TelegramIcon />
          </SocialIcon>
          <SocialIcon href={Bio.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsApp />
          </SocialIcon>
        </SocialRow>

        <Divider />

        <Form onSubmit={handleSubmit} ref={form}>
          <FormTitle>Send a Message</FormTitle>

          {formMessage && <FormMsg $type={formMessageType}>{formMessage}</FormMsg>}

          <Row>
            <Input
              placeholder="Your Name *"
              name="from_name"
              $hasError={errors.from_name}
              onChange={() => clearError("from_name")}
            />
            <Input
              placeholder="Your Email *"
              name="from_email"
              type="email"
              $hasError={errors.from_email}
              onChange={() => clearError("from_email")}
            />
          </Row>
          <Input placeholder="Subject" name="subject" />
          <Textarea
            placeholder="Your message *"
            name="message"
            rows={5}
            $hasError={errors.message}
            onChange={() => clearError("message")}
          />
          <SubmitBtn type="submit" disabled={isSending}>
            {isSending ? <Spinner /> : "Send Message"}
          </SubmitBtn>
        </Form>
      </Inner>
    </Section>
  );
};

export default Contact;
