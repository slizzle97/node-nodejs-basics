const parseArgs = () => {
  const args = process.argv.slice(2);

  const propValuePairs = args.reduce((acc, arg, index) => {
    if (arg.startsWith("--") && args[index + 1] !== undefined) {
      const propName = arg.slice(2);
      const value = args[index + 1];
      acc.push(`${propName} is ${value}`);
    }
    return acc;
  }, []);

  console.log(propValuePairs.join(", "));
};

parseArgs();
