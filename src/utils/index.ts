export const ENV = (key: string, def: string = "") => {
  const _key = `REACT_APP_${key}`;
  console.log(_key);
  return process.env[_key] || def;
};
