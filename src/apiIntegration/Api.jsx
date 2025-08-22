export const SendMail = async (obj) => {
  const url = "https://portfolio-backend-79t2.onrender.com/sendMail";

  const headers = {
    "Content-Type": "application/json",
  };

  const config = {
    method: "POST",
    headers,
    body: JSON.stringify(obj),
  };
  try {
    const result = await fetch(url, config);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};
