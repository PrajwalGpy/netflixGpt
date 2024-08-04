export const API__OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + import.meta.env.VITE_API_URL_TMDB_API_KEY,
  },
};

export const img_Cdn = "https://image.tmdb.org/t/p/w300/";
export const Api_Key = import.meta.env.VITE_API_URL_Groq_Api_Key;
