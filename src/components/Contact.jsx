import styled from "styled-components";

export const Contact = () => {
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
          <label htmlFor="email">Gmail</label>
          <input type="email" name="email" id="" autoComplete="on" />
          <label htmlFor="text">Text</label>
          <textarea rows={3} type="text" name="text" id="" />
          <button>Sent</button>
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
`;

export const Image = styled.div`
  img {
    width: 80%;
    height: 100%;
  }
`;
export const ContactDetail = styled.div`
  width: 50%;
  height: 300px;
  margin-right: 30px;

  input {
    width: 100%;
    font-size: 18px;
    border-radius: 10px;
    padding-left: 5px;
  }

  textarea {
    width: 100%;
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
    outline: none;
    padding-top: 2px;
    margin-left: 4px;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 10px;
  }
`;
