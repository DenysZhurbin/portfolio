export const NODE_ENV = process.env.NODE_ENV ? "production" : "development";
export const isDevelopment = NODE_ENV === "development";
export const isLocal = process.env.TARGET === "local";
