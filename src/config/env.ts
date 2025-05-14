// const viteEnv =
//   typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : {};

// export const API =
//   // injected by DrivadoLoader in production
//   (window as any).DRIVADO_API ||
//   (window.parent as any)?.DRIVADO_API ||
//   viteEnv.VITE_DRIVADO_API ||
//   "";

// export const KEY =
//   (window as any).DRIVADO_KEY ||
//   (window.parent as any)?.DRIVADO_KEY ||
//   viteEnv.VITE_DRIVADO_KEY ||
//   "";

// export const EMAIL =
//   (window as any).DRIVADO_EMAIL ||
//   (window.parent as any)?.DRIVADO_EMAIL ||
//   viteEnv.VITE_DRIVADO_EMAIL ||
//   "";

// export const debugEnv = () => {
//   console.group("Drivado ENV");
//   console.log("API  :", API || "❌ missing");
//   console.log("KEY  :", KEY ? "✔︎ set" : "❌ missing");
//   console.log("EMAIL:", EMAIL || "❌ missing");
//   console.groupEnd();
// };