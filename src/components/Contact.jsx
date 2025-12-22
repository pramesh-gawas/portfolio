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
          <a href="https://github.com/pramesh-gawas">
            <img src="/avatar.jpg" alt="github_image" />
          </a>
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
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://www.linkedin.com/in/pramesh-gawas-9470a7190/"
                target="_blank"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </a>
              <a href="https://github.com/pramesh-gawas" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </a>
            </div>
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
  font-weight: 600;
`;

export const ContactMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  padding: 20px;
`;

export const Image = styled.div`
  img {
    width: 80%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const ContactDetail = styled.div`
  width: 50%;
  height: 300px;
  margin-right: 30px;

  input {
    width: 100%;
    height: 50px;
    font-size: 18px;
    border-radius: 10px;
    padding-left: 5px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    padding-left: 10px;
    max-height: 150px;
  }

  label {
    position: relative;
    top: 13px;
    left: 10px;
    font-size: 20px;
    background-color: white;
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
    background-color: #008dd5;
  }

  img {
    padding: 10px;
    width: 80px;
  }
`;
