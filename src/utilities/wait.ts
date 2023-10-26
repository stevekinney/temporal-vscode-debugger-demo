export const wait = async <T = unknown>(value: T, ms = 500): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return value;
};
