const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://elevated-design-ql3wkfxyp-the-orange-dot.vercel.app/";
