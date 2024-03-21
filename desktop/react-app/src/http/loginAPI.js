import jwt_decode from "jwt-decode";

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001/api/v1';

export const login = async (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    redirect: 'follow',
  };

  try {
    const response = await fetch(`${BASE_URL}/auth/login`, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data || 'Something went wrong when trying to log in');
    }

    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  } catch (error) {
    console.error('Error authorization:', error.message);
    throw error;
  }
};
