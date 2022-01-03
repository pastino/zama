import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Voucher } from "../../entities/Voucher";
import { generateVoucherNum, sendSms } from "../../utils";

const SendRewardMessage = async (req: Request, res: Response) => {
  // const data = [
  //   {
  //     id: 6962364,
  //     name: "JungChanJin",
  //     email: "warmjcj@naver.com",
  //     phoneNum: "01091268852",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7021568,
  //     name: "허성우",
  //     email: "huhsungwoo@gmail.com",
  //     phoneNum: "01071206982",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 7016325,
  //     name: "박상욱",
  //     email: "parksw36@yahoo.co.kr",
  //     phoneNum: "01085733391",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6965894,
  //     name: "김한나",
  //     email: "kimhanna86@naver.com",
  //     phoneNum: "01063508331",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6961984,
  //     name: "김형진",
  //     email: "upt79@naver.com",
  //     phoneNum: "01087387613",
  //     tyep: "6개월 구독권 3계정",
  //     count: 6,
  //   },
  //   {
  //     id: 6970397,
  //     name: "015693",
  //     email: "fccowboy@naver.com",
  //     phoneNum: "01030431004",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6962999,
  //     name: "황하나",
  //     email: "sedanhana@naver.com",
  //     phoneNum: "01074887833",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6962033,
  //     name: "채안석",
  //     email: "ansugy2@naver.com",
  //     phoneNum: "01051812942",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6962166,
  //     name: "묘령의여인",
  //     email: "kemi0333@naver.com",
  //     phoneNum: "01037658958",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6962174,
  //     name: "SINSTB",
  //     email: "fauvesgirl@gmail.com",
  //     phoneNum: "01064290817",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6962474,
  //     name: "남영주",
  //     email: "poohju74@hotmail.com",
  //     phoneNum: "01063326084",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6962491,
  //     name: "Kwon",
  //     email: "	glory4u@msn.com",
  //     phoneNum: "01073721126",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6962497,
  //     name: "배지은",
  //     email: "coda2017@naver.com",
  //     phoneNum: "01086182006",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6962620,
  //     name: "이유주",
  //     email: "yujju__u@naver.com",
  //     phoneNum: "01021291115",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6962648,
  //     name: "꼰 규빈 규영 맘",
  //     email: "hwclove@naver.com",
  //     phoneNum: "01044702005",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6963702,
  //     name: "김완희",
  //     email: "dhksgml1127@gmail.com",
  //     phoneNum: "01099821420",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6963753,
  //     name: "이정은",
  //     email: "evete81@naver.com",
  //     phoneNum: "01096340668",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6964006,
  //     name: "신혜성",
  //     email: "shs@wadiz.kr",
  //     phoneNum: "01091660328",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6964095,
  //     name: "Min-hong Han",
  //     email: "minong815@gmail.com",
  //     phoneNum: "01090768715",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6964101,
  //     name: "이수연",
  //     email: "tndusdldi77@hanmail.net",
  //     phoneNum: "01062840831",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6964625,
  //     name: "이설희",
  //     email: "eyesul@naver.com",
  //     phoneNum: "01052221890",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6965045,
  //     name: "Jin Sung Lee",
  //     email: "jnsng@naver.com",
  //     phoneNum: "01048570255",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6965278,
  //     name: "토마토",
  //     email: "topaz1278@naver.com",
  //     phoneNum: "01092378273",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6965328,
  //     name: "(주)스마투스코리아",
  //     email: "smartooth@smartooth.co",
  //     phoneNum: "01089008983",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6965395,
  //     name: "정의석",
  //     email: "jeros87@nate.com",
  //     phoneNum: "01072520413",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6966492,
  //     name: "박지연",
  //     email: "lllv_vlllo@naver.com",
  //     phoneNum: "01030630896",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6967673,
  //     name: "김태완",
  //     email: "gtw21k@naver.com",
  //     phoneNum: "01095597210",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6967927,
  //     name: "조연정",
  //     email: "oriass@naver.com",
  //     phoneNum: "01091351304",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6969138,
  //     name: "또또나나야",
  //     email: "eunjin8504@naver.com",
  //     phoneNum: "01094031903",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6969271,
  //     name: "김혜진",
  //     email: "hjjin1018@naver.com",
  //     phoneNum: "01039307613",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6969552,
  //     name: "W-Luke",
  //     email: "hy731@hanmail.net",
  //     phoneNum: "01047142556",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6971840,
  //     name: "장정혜",
  //     email: "9751033@naver.com",
  //     phoneNum: "01025817125",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6972937,
  //     name: "박지훈",
  //     email: "nc926@naver.com",
  //     phoneNum: "01073033888",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6974008,
  //     name: "날래",
  //     email: "nare5854@naver.com",
  //     phoneNum: "01033585654",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6974609,
  //     name: "사랑해~♡",
  //     email: "smjeh@hanmail.net",
  //     phoneNum: "01040038573",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6978513,
  //     name: "노루샘",
  //     email: "honeybny@naver.com",
  //     phoneNum: "01085623660",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6978784,
  //     name: "이제희",
  //     email: "leejh831@nate.com",
  //     phoneNum: "01053155810",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6980666,
  //     name: "이효진",
  //     email: "hjyee06@gmail.com",
  //     phoneNum: "01043730957",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6980725,
  //     name: "Ji Eun OH",
  //     email: "sije0518@gmail.com",
  //     phoneNum: "01055792808",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6980982,
  //     name: "햄토리",
  //     email: "82ham@naver.com",
  //     phoneNum: "01079202412",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6981806,
  //     name: "배정희",
  //     email: "yanina8316@gmail.com",
  //     phoneNum: "01053011527",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6981898,
  //     name: "준준님",
  //     email: "66june99@naver.com",
  //     phoneNum: "01073327194",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6983178,
  //     name: "최진연",
  //     email: "bugang2375@naver.com",
  //     phoneNum: "01039800329",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6984372,
  //     name: "류제은",
  //     email: "thatisgen@naver.com",
  //     phoneNum: "01031182435",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 6987505,
  //     name: "Goofy",
  //     email: "goofysun@naver.com",
  //     phoneNum: "01076071397",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6993231,
  //     name: "김정근",
  //     email: "allergy2love@naver.com",
  //     phoneNum: "01029505075",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6994219,
  //     name: "박종화",
  //     email: "jjongas2@naver.com",
  //     phoneNum: "01074508436",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6997050,
  //     name: "장혜민",
  //     email: "dreambono@gmail.com",
  //     phoneNum: "01040263780",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6998579,
  //     name: "조윤경",
  //     email: "yoonkyung727@naver.com",
  //     phoneNum: "01091372410",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 6999056,
  //     name: "SunjungPark",
  //     email: "psjaqua@gmail.com",
  //     phoneNum: "01091000535",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7000638,
  //     name: "제휘",
  //     email: "jeymedia@naver.com",
  //     phoneNum: "01073540652",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7002615,
  //     name: "느리",
  //     email: "iehova68@naver.com",
  //     phoneNum: "01087197075",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7003859,
  //     name: "김혜란",
  //     email: "rane0703@naver.com",
  //     phoneNum: "01067802605",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7008744,
  //     name: "상큼",
  //     email: "sweetpea60@naver.com",
  //     phoneNum: "01032239366",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7009925,
  //     name: "쑤운채",
  //     email: "tjarlfl@naver.com",
  //     phoneNum: "01028522406",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7010799,
  //     name: "김혜원",
  //     email: "gpdnjs1974@naver.com",
  //     phoneNum: "01033516506",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7011802,
  //     name: "부향싯ㄴ",
  //     email: "youth76@daum.net",
  //     phoneNum: "01076978920",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7017432,
  //     name: "박태진",
  //     email: "waffer76@gmail.com",
  //     phoneNum: "01064147613",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7021822,
  //     name: "주상희",
  //     email: "csh7327@hanmail.net",
  //     phoneNum: "01087397327",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7022569,
  //     name: "김동엽",
  //     email: "kdy0800@naver.com",
  //     phoneNum: "01040884447",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7023016,
  //     name: "김수빈",
  //     email: "jessica1032@kakao.com",
  //     phoneNum: "01037901032",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7023606,
  //     name: "이은",
  //     email: "tosilver72@naver.com",
  //     phoneNum: "01062142926",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7023699,
  //     name: "김덕만",
  //     email: "serenodr@naver.com",
  //     phoneNum: "01033038018",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7023703,
  //     name: "석정호",
  //     email: "sjh70md@naver.com",
  //     phoneNum: "01063496768",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7029662,
  //     name: "Chan Ho Chong",
  //     email: "tochanho@gmail.com",
  //     phoneNum: "01032309626",
  //     tyep: "6개월 구독권 3계정",
  //     count: 3,
  //   },
  //   {
  //     id: 7030493,
  //     name: "진용탁",
  //     email: "jinydr@hanmail.net",
  //     phoneNum: "01037209128",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7038262,
  //     name: "joankim",
  //     email: "joankim08@gmail.com",
  //     phoneNum: "01033368973",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7055787,
  //     name: "Bianca",
  //     email: "ks1004i@naver.com",
  //     phoneNum: "01040087219",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7058692,
  //     name: "티거티거",
  //     email: "lovejwjy@gmail.com",
  //     phoneNum: "01062790167",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7059958,
  //     name: "696,355",
  //     email: "yoenjung2@naver.com",
  //     phoneNum: "01042910305",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7067128,
  //     name: "-쁘띠쁘띠",
  //     email: "leeya0906@naver.com",
  //     phoneNum: "01029886696",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7068883,
  //     name: "쿠로로",
  //     email: "xk8318@naver.com",
  //     phoneNum: "01030278627",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7083370,
  //     name: "따라(이샛별)",
  //     email: "	livewire235@gmail.com",
  //     phoneNum: "01094257091",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7088490,
  //     name: "ham",
  //     email: "	hmlove2@naver.com",
  //     phoneNum: "01093193110",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7090114,
  //     name: "한유리",
  //     email: "	ahrtksla4604@naver.com",
  //     phoneNum: "01051184604",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7094683,
  //     name: "정지윤",
  //     email: "	monica79@naver.com",
  //     phoneNum: "01092494804",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7096312,
  //     name: "김해아",
  //     email: "	haeahkim@naver.com",
  //     phoneNum: "01050365967",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  //   {
  //     id: 7098394,
  //     name: "남정운",
  //     email: "yotegi@naver.com",
  //     phoneNum: "01054360127",
  //     tyep: "6개월 구독권 1계정",
  //     count: 1,
  //   },
  // ];

  const data = [
    {
      id: 6962364,
      name: "김태준",
      email: "joon500006@gmail.com",
      phoneNum: "01056843712",
      tyep: "6개월 구독권 1계정",
      count: 1,
    },
    {
      id: 6962364,
      name: "김테스",
      email: "joon500006@gmail.com",
      phoneNum: "01056843712",
      tyep: "6개월 구독권 1계정",
      count: 3,
    },
    {
      id: 6962364,
      name: "김수진",
      email: "joon500006@gmail.com",
      phoneNum: "01039497613",
      tyep: "6개월 구독권 1계정",
      count: 1,
    },
  ];

  const createVoucher = async () => {
    const voucherNumber = generateVoucherNum();
    const voucherRepository = getRepository(Voucher);
    await voucherRepository.save({
      voucherNumber,
      name: "6Month",
    });
    return voucherNumber;
  };

  for (let i = 0; i < data.length; i++) {
    const messagehtml = `
안녕하세요! 자마ZAMA입니다.
오랫동안 기다리셨던 자마 ZAMA 어플이 드디어 서포트님들에게 선보이게 되었습니다.
와디즈 크라우드 펀딩으로 자마 ZAMA의 첫걸음에 동참해주신 여러분께 깊은 감사를 드립니다.

오늘(2020년 1월 3일)부터 자마 ZAMA 앱에서 리워드를 사용하실 수 있습니다.
처음인만큼 부족한 부분을 점검하기 위해 한달간은 테스트 기간으로 서포터님들께 무료로 제공하려고 합니다.

구입해주신 6개월 바우처를 사용하면 7개월 동안 이용하실 수 있습니다. 
쿠폰 번호는 신청하신 수량만큼 문자로 전달드리겠습니다.(3개월 이 쿠폰 사용)

편안한 잠자리를 위한 자마 ZAMA만의 잠이 오는 이야기, 음악, 소리로 서포터님들을 두근거리는 마음으로 찾아뵙겠습니다.

자마코리아 김수진 드림.

* 본 연락처는 개발자 연락처 입니다.
문의사항은 010-3949-7613으로 연락부탁드립니다.
`;
    await sendSms({
      receivers: [data[i].phoneNum],
      message: messagehtml,
    });

    for (let j = 0; j < data[i].count; j++) {
      const voucherNum = await createVoucher();
      const messagehtml = `
안녕하세요! 자마ZAMA입니다.

앱을 다운받으신 후 아래 쿠폰을 이용하여 사용 부탁드립니다. 

* 쿠폰 사용법 *
아래의 쿠폰번호를 zama 앱에서 입력하시면 컨텐츠를 자유롭게 이용하실 수 있습니다.
- 쿠폰번호: ${voucherNum}
(3개월 이내 사용 2020년 3월 31일까지)

android: https://play.google.com/store/apps/details?id=com.zama_app
ios: https://apps.apple.com/kr/app/zama-sleep/id1599709356

쿠폰사용 방법
1. 홈화면의 우측 메뉴버튼 클릭
2. 프리미엄 회원 신청하기 버튼 클릭
3. "리워드 사용하기" 클릭
4. 쿠폰번호 입력 후 완료

* 본 연락처는 개발자 연락처 입니다.
문의사항은 010-3949-7613으로 연락부탁드립니다.
  `;

      await sendSms({
        receivers: [data[i].phoneNum],
        message: messagehtml,
      });
    }
  }

  return res.status(200).send({
    success: true,
  });
};

export default SendRewardMessage;
