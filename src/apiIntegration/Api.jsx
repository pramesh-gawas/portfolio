export const SendMail = async (obj) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const url = `${baseUrl}/sendMail`;
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
    if (!result.ok) {
      throw new Error(`Server responded with status:${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Fetch Error", error);
    return null;
  }
};

export const GetProjects = async (url) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const config = {
    method: "GET",
    headers,
  };
  try {
    const result = await fetch(url, config);
    if (!result.ok) {
      throw new Error(`Server responded with status:${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Fetch Error", error);
    return null;
  }
};
