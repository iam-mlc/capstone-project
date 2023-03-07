const nameToURL = (name) => {
  const lowercase = name.toLowerCase();
  const url = lowercase.replace(/\s+/g, "-");

  return url;
};

const names = [
  { name: "Home" },
  { name: "About" },
  { name: "Menu" },
  { name: "Reservations" },
  { name: "Order online" },
  { name: "Login" },
];

const links = names.map((item) => {
  return {
    ...item,
    id: item.name,
    url: nameToURL(item.name) === "home" ? "/" : nameToURL(item.name),
  };
});

export default links;
