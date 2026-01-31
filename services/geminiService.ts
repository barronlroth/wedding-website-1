import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';
// Initialize AI only if key exists to prevent immediate crashes in dev if missing, 
// though robust error handling is in component.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const askConcierge = async (question: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key is missing. The concierge is currently on break.");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I apologize, I couldn't quite catch that. Could you ask again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("I'm having a little trouble connecting to my planner details right now.");
  }
};
