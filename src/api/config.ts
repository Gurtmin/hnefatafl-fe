export const API_BASE = import.meta.env.VITE_API_BASE;

if (!API_BASE) {
  throw new Error("❌ VITE_BACKEND_URL není definován. Přidej ho do .env nebo Netlify environment variables.");
}
export default {
  API_BASE,
};

