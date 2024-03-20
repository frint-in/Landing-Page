import axios from "axios";

export async function getAllInterships() {
    try {
      const response = await axios.get(`https://api.frint.in/api/internship/all`);
      const data = response.data;
      return data;
    } catch (error) {
      throw error; 
    }
  }
  