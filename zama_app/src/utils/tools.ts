export const checkUrlForm = (str: string) => {
  const expUrl = /^http[s]?\:\/\//i;
  return expUrl.test(str);
};
