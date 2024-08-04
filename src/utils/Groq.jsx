import Groq from "groq-sdk";
import { Api_Key } from "./constencs";

export const groq = new Groq({
  apiKey: Api_Key,
  dangerouslyAllowBrowser: true,
});
