const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api/v1';

const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
};

export const getUsers = async () => {
  return await fetchData(`${BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const createUser = async (name, email, password, phone) => {
  return await fetchData(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, email, password, phone }),
  });
};
