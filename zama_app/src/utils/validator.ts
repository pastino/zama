export const NUMBER = /[0-9]/; // 숫자
export const ENGLISH = /[a-zA-Z]/; // 영어 문자
export const KOREAN = /[ㄱ-힣]/; // 한글 문자export const SPECIAL = /[~_{}$&+,:;=?@#|'<>.^*()%!-]/g; // 특수문자
export const LETTER = /[a-zA-Zㄱ-힣]/; // 영어, 한글 문자
export const EMAIL =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // 이메일
export const PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/; // 최소 하나의 문자 + 하나의 숫자 포함, 최소 8자리

export const userPhone = {
  required: '전화번호를 입력해주세요.',
  validate: (value: string) => {
    if (value.slice(0, 3) !== '010' || value.length !== 11) {
      return '전화번호를 다시 확인해 주세요.';
    }
  },
};

export const userEmail = {
  required: '이메일을 입력해주세요.',
  pattern: {
    value: EMAIL,
    message: '이메일 양식에 맞게 입력해주세요.',
  },
};
export const certNum = {
  required: '인증번호를 입력해주세요.',
};

export const password = {
  required: '비밀번호를 입력해주세요.',
  pattern: {
    value: PASSWORD,
    message: '비밀번호는 숫자, 영어 혼합 8자 이상으로 입력해 주세요.',
  },
};
export const name = {
  required: '이름을 입력해주세요.',
};
export const addressName = {
  required: '배송지명을 입력해주세요.',
};
export const receiverName = {
  required: '받는분 이름을 입력해주세요.',
};
export const address = {
  required: '주소를 입력해주세요.',
};
export const addressDetail = {
  required: '상세 주소를 입력해주세요.',
};
export const deliveryRequest = {
  required: '요청사항을 입력해주세요.',
};
export const ordererName = {
  required: '주문자명을 입력해주세요.',
};
export const cardNumber = {
  required: '카드번호을 입력해주세요.',
  validate: (value: string) => {
    if (value.length < 14) {
      return '카드번호를 다시 확인해 주세요.';
    }
  },
};
export const validDate = {
  required: '유효기간을 입력해주세요.',
  validate: (value: string) => {
    if (value.length !== 5) {
      return '양식을 확인해 주세요.';
    }
  },
};
export const cardPassword = {
  required: '비밀번호를 입력해주세요.',
  validate: (value: string) => {
    if (value.length !== 2) {
      return '양식을 확인해 주세요.';
    }
  },
};
export const idNumber = {
  required: '주민번호 또는 사업자번호를 입력해주세요.',
  validate: (value: string) => {
    if (value.length !== 6 && value.length !== 10) {
      return '주민번호 또는 사업자번호를 다시 확인해 주세요.';
    }
  },
};

export default {
  userPhone,
  userEmail,
  certNum,
  password,
  name,
  addressName,
  receiverName,
  address,
  addressDetail,
  deliveryRequest,
  ordererName,
  cardNumber,
  validDate,
  cardPassword,
  idNumber,
};
