const toCamelCase = (string) => {
  return string
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (m, c) => c.toLowerCase());
};

export default toCamelCase;
