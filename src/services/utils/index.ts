export const wait = async (delay: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
