import moment from 'moment';
import queryString from 'query-string';
import ImageSize from 'react-native-image-size';

export const checkUrlForm = (str: string) => {
  const expUrl = /^http[s]?\:\/\//i;
  return expUrl.test(str);
};

export const transformTimes = (t: number) => {
  if (!t) return;
  if (t && t < 3600) {
    return moment().startOf('day').seconds(t).format('mm:ss');
  }
  return moment().startOf('day').seconds(t).format('H:mm:ss');
};

export const transformStringTimes = (t: number) => {
  if (!t) return;
  if (t && t < 3600) {
    return moment().startOf('day').seconds(t).format('m분');
  }
  return moment().startOf('day').seconds(t).format('H시간 m분');
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

export const getDataFromDeepLinkUrl = (url: string) => {
  let path = '';

  if (url.split('www.artkeykorea.com/').length > 1) {
    path = url.split('www.artkeykorea.com/')[1].split('?')[0];
  }
  const splitForQuery = url.split('?');
  const query = queryString.parse(splitForQuery[1]);

  return {path, query};
};

export const checkSubscriber = () => {};

export async function handleGetImageData(uri, widthSize) {
  try {
    const {width, height} = await ImageSize.getSize(uri);
    const ratio = width / height;
    return {uri, width: widthSize, height: widthSize / ratio};
  } catch (error) {
    console.log(error);
    return {uri, width: 0, height: 0};
  }
}
