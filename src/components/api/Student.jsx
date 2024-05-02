import axios from "axios";

export async function getAllInterships() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/api/internship/all`);
      const data = response.data;
      return data;
    } catch (error) {
      throw error; 
    }
  }
  