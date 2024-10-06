const parseEnv = () => {
  const prefix = "RSS_";
  const envVars = Object.entries(process.env)
    .filter(([varKey]) => varKey.startsWith(prefix))
    .map(([envKey, envValue]) => `${envKey}=${envValue}`)
    .join("; ");
  console.log(envVars);
};
parseEnv();
