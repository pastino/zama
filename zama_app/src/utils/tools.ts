import moment from 'moment';

export const checkUrlForm = (str: string) => {
  const expUrl = /^http[s]?\:\/\//i;
  return expUrl.test(str);
};

export const transformTimes = (t: number) => {
  if (t < 3600) {
    return moment().startOf('day').seconds(t).format('mm:ss');
  }
  return moment().startOf('day').seconds(t).format('H:mm:ss');
};
