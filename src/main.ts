const hello = (name: string) => {
  return `Hello there, ${name}!`;
};

const fillTemplate = import("./template-parser").then(
  (module) => module.fillTemplate
);
export { hello, fillTemplate };
