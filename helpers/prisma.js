// TODO: This method probably could be helpful in the future.
export const prismaExclude = (user, keys) => {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key))
  );
};
