import styled from "styled-components";
import { SendMail } from "../apiIntegration/Api";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    text: "",
  });

  const handleSentMail = async (e) => {
    e.preventDefault();
    const objdata = {
      email: formData.email,
      obj: formData.text,
    };
    const { message, error } = await SendMail(objdata);

    if (message) {
      alert(message);
      setFormData({
        email: "",
        text: "",
      });
    } else {
      alert(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <ContactHeader>Contact</ContactHeader>
      <ContactMain>
        <Image>
          <img src="/avatar.jpg" alt="github_image" />
        </Image>
        <ContactDetail>
          <form onSubmit={handleSentMail}>
            <label htmlFor="email">Gmail</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="on"
              placeholder="Enter your email here"
              value={formData?.email}
              onChange={handleInputChange}
            />
            <label htmlFor="text">Text</label>
            <textarea
              rows={3}
              type="text"
              name="text"
              id="text"
              placeholder="Enter text message for me here"
              value={formData?.text}
              onChange={handleInputChange}
            />
            <button>Send</button>
            <SocialLinks>
              <a
                href="https://www.linkedin.com/in/pramesh-gawas-9470a7190/"
                target="_blank"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/pramesh-gawas" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                  alt="GitHub"
                />
              </a>
              <a
                target="_blank"
                href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=DmwnWrRqhsPbhnfQNBMrsmWRxCkXXtSLDZwMdWsfwmHNgVJPFrKXwnBTDWFLpbcVXGTgRKvZmRtL"
              >
                <img src="./gmail.png" alt="Gmail" />
              </a>
            </SocialLinks>
          </form>
        </ContactDetail>
      </ContactMain>
    </>
  );
};

const ContactHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 70px;
  font-weight: 700;
`;

const ContactMain = styled.div`
  gap: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  padding: 40px;
  min-height: 600px;
  background: linear-gradient(
    135deg,
    rgba(0, 141, 213, 0.05),
    rgba(0, 168, 232, 0.05)
  );
  border-radius: 25px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 0.8s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 760px;
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    height: 260px;
  }
`;
export const ContactDetail = styled.div`
  width: 50%;
  height: 300px;
  justify-content: center;
  input {
    width: 100%;
    height: 50px;
    font-size: 18px;
    border-radius: 25px;
    padding-left: 20px;
    border: 2px solid rgba(0, 141, 213, 0.3);
    background: var(--card-background);
    color: var(--text-color);
    transition: var(--transition);

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(0, 141, 213, 0.1);
    }
  }

  textarea {
    width: 100%;
    padding: 15px 20px;
    font-size: 18px;
    border-radius: 15px;
    border: 2px solid rgba(0, 141, 213, 0.3);
    background: var(--card-background);
    color: var(--text-color);
    max-height: 150px;
    transition: var(--transition);
    resize: vertical;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(0, 141, 213, 0.1);
    }
  }

  label {
    position: relative;
    top: 13px;
    left: 10px;
    font-size: 20px;
    background-color: var(--card-background);
    color: var(--text-color);
    border: none;
    border-radius: 5px;
    outline: none;
    padding-top: 2px;
    margin-left: 4px;
  }

  button {
    width: 100%;
    font-weight: 700;
    height: 40px;
    border-radius: 10px;
    background-color: var(--primary-color);
    color: var(--text-color);
    border: none;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--secondary-color);
    }
  }

  img {
    padding: 10px;
    width: auto;
    border-radius: 50%;
    background: var(--card-background);
    transition: var(--transition);
    box-shadow: var(--shadow);

    &:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow: var(--hover-shadow);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;

  a {
    img {
      background: var(--card-background);
      border-radius: 5px;
      padding: 15px;
      width: 80px;
      transition: var(--transition);
      box-shadow: var(--shadow);

      &:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: var(--hover-shadow);
      }
    }
  }
`;
