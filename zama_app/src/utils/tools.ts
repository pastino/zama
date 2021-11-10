import moment from 'moment';
import queryString from 'query-string';

export const checkUrlForm = (str: string) => {
  const expUrl = /^http[s]?\:\/\//i;
  return expUrl.test(str);
};

export const transformTimes = (t: number) => {
  if (t && t < 3600) {
    return moment().startOf('day').seconds(t).format('mm:ss');
  }
  return moment().startOf('day').seconds(t).format('H:mm:ss');
};

export const timeConverter = time => {
  const splitTime = time?.split(':');
  if (splitTime?.length === 0) return 0;
  if (splitTime?.length === 2) {
    return Number(splitTime[0] * 60) + Number(splitTime[1]);
  }
  if (splitTime?.length === 1) {
    return Number(splitTime);
  }
  if (splitTime?.length === 3) {
    return (
      Number(splitTime[0] * 60 * 60) +
      Number(splitTime[1] * 60) +
      Number(splitTime[0])
    );
  }
};

export function getDataFromDeepLinkUrl(url: string) {
  let path = '';
  console.log(url);
  if (url.split('www.artkeykorea.com/').length > 1) {
    path = url.split('www.artkeykorea.com/')[1].split('?')[0];
  }
  const splitForQuery = url.split('?');
  const query = queryString.parse(splitForQuery[1]);

  return {path, query};
}
