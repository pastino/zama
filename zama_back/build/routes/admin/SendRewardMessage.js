"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SendRewardMessage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // const data = [
        //   {
        //     id: 6962364,
        //     name: "JungChanJin",
        //     email: "warmjcj@naver.com",
        //     phoneNum: "01091268852",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7021568,
        //     name: "?????????",
        //     email: "huhsungwoo@gmail.com",
        //     phoneNum: "01071206982",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 7016325,
        //     name: "?????????",
        //     email: "parksw36@yahoo.co.kr",
        //     phoneNum: "01085733391",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6965894,
        //     name: "?????????",
        //     email: "kimhanna86@naver.com",
        //     phoneNum: "01063508331",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6961984,
        //     name: "?????????",
        //     email: "upt79@naver.com",
        //     phoneNum: "01087387613",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 6,
        //   },
        //   {
        //     id: 6970397,
        //     name: "015693",
        //     email: "fccowboy@naver.com",
        //     phoneNum: "01030431004",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6962999,
        //     name: "?????????",
        //     email: "sedanhana@naver.com",
        //     phoneNum: "01074887833",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6962033,
        //     name: "?????????",
        //     email: "ansugy2@naver.com",
        //     phoneNum: "01051812942",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6962166,
        //     name: "???????????????",
        //     email: "kemi0333@naver.com",
        //     phoneNum: "01037658958",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6962174,
        //     name: "SINSTB",
        //     email: "fauvesgirl@gmail.com",
        //     phoneNum: "01064290817",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6962474,
        //     name: "?????????",
        //     email: "poohju74@hotmail.com",
        //     phoneNum: "01063326084",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6962491,
        //     name: "Kwon",
        //     email: "	glory4u@msn.com",
        //     phoneNum: "01073721126",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6962497,
        //     name: "?????????",
        //     email: "coda2017@naver.com",
        //     phoneNum: "01086182006",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6962620,
        //     name: "?????????",
        //     email: "yujju__u@naver.com",
        //     phoneNum: "01021291115",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6962648,
        //     name: "??? ?????? ?????? ???",
        //     email: "hwclove@naver.com",
        //     phoneNum: "01044702005",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6963702,
        //     name: "?????????",
        //     email: "dhksgml1127@gmail.com",
        //     phoneNum: "01099821420",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6963753,
        //     name: "?????????",
        //     email: "evete81@naver.com",
        //     phoneNum: "01096340668",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6964006,
        //     name: "?????????",
        //     email: "shs@wadiz.kr",
        //     phoneNum: "01091660328",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6964095,
        //     name: "Min-hong Han",
        //     email: "minong815@gmail.com",
        //     phoneNum: "01090768715",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6964101,
        //     name: "?????????",
        //     email: "tndusdldi77@hanmail.net",
        //     phoneNum: "01062840831",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6964625,
        //     name: "?????????",
        //     email: "eyesul@naver.com",
        //     phoneNum: "01052221890",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6965045,
        //     name: "Jin Sung Lee",
        //     email: "jnsng@naver.com",
        //     phoneNum: "01048570255",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6965278,
        //     name: "?????????",
        //     email: "topaz1278@naver.com",
        //     phoneNum: "01092378273",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6965328,
        //     name: "(???)?????????????????????",
        //     email: "smartooth@smartooth.co",
        //     phoneNum: "01089008983",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6965395,
        //     name: "?????????",
        //     email: "jeros87@nate.com",
        //     phoneNum: "01072520413",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6966492,
        //     name: "?????????",
        //     email: "lllv_vlllo@naver.com",
        //     phoneNum: "01030630896",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6967673,
        //     name: "?????????",
        //     email: "gtw21k@naver.com",
        //     phoneNum: "01095597210",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6967927,
        //     name: "?????????",
        //     email: "oriass@naver.com",
        //     phoneNum: "01091351304",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6969138,
        //     name: "???????????????",
        //     email: "eunjin8504@naver.com",
        //     phoneNum: "01094031903",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6969271,
        //     name: "?????????",
        //     email: "hjjin1018@naver.com",
        //     phoneNum: "01039307613",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6969552,
        //     name: "W-Luke",
        //     email: "hy731@hanmail.net",
        //     phoneNum: "01047142556",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6971840,
        //     name: "?????????",
        //     email: "9751033@naver.com",
        //     phoneNum: "01025817125",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6972937,
        //     name: "?????????",
        //     email: "nc926@naver.com",
        //     phoneNum: "01073033888",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6974008,
        //     name: "??????",
        //     email: "nare5854@naver.com",
        //     phoneNum: "01033585654",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6974609,
        //     name: "?????????~???",
        //     email: "smjeh@hanmail.net",
        //     phoneNum: "01040038573",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6978513,
        //     name: "?????????",
        //     email: "honeybny@naver.com",
        //     phoneNum: "01085623660",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6978784,
        //     name: "?????????",
        //     email: "leejh831@nate.com",
        //     phoneNum: "01053155810",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6980666,
        //     name: "?????????",
        //     email: "hjyee06@gmail.com",
        //     phoneNum: "01043730957",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6980725,
        //     name: "Ji Eun OH",
        //     email: "sije0518@gmail.com",
        //     phoneNum: "01055792808",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6980982,
        //     name: "?????????",
        //     email: "82ham@naver.com",
        //     phoneNum: "01079202412",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6981806,
        //     name: "?????????",
        //     email: "yanina8316@gmail.com",
        //     phoneNum: "01053011527",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6981898,
        //     name: "?????????",
        //     email: "66june99@naver.com",
        //     phoneNum: "01073327194",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6983178,
        //     name: "?????????",
        //     email: "bugang2375@naver.com",
        //     phoneNum: "01039800329",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6984372,
        //     name: "?????????",
        //     email: "thatisgen@naver.com",
        //     phoneNum: "01031182435",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 6987505,
        //     name: "Goofy",
        //     email: "goofysun@naver.com",
        //     phoneNum: "01076071397",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6993231,
        //     name: "?????????",
        //     email: "allergy2love@naver.com",
        //     phoneNum: "01029505075",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6994219,
        //     name: "?????????",
        //     email: "jjongas2@naver.com",
        //     phoneNum: "01074508436",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6997050,
        //     name: "?????????",
        //     email: "dreambono@gmail.com",
        //     phoneNum: "01040263780",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6998579,
        //     name: "?????????",
        //     email: "yoonkyung727@naver.com",
        //     phoneNum: "01091372410",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 6999056,
        //     name: "SunjungPark",
        //     email: "psjaqua@gmail.com",
        //     phoneNum: "01091000535",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7000638,
        //     name: "??????",
        //     email: "jeymedia@naver.com",
        //     phoneNum: "01073540652",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7002615,
        //     name: "??????",
        //     email: "iehova68@naver.com",
        //     phoneNum: "01087197075",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7003859,
        //     name: "?????????",
        //     email: "rane0703@naver.com",
        //     phoneNum: "01067802605",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7008744,
        //     name: "??????",
        //     email: "sweetpea60@naver.com",
        //     phoneNum: "01032239366",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7009925,
        //     name: "?????????",
        //     email: "tjarlfl@naver.com",
        //     phoneNum: "01028522406",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7010799,
        //     name: "?????????",
        //     email: "gpdnjs1974@naver.com",
        //     phoneNum: "01033516506",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7011802,
        //     name: "????????????",
        //     email: "youth76@daum.net",
        //     phoneNum: "01076978920",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7017432,
        //     name: "?????????",
        //     email: "waffer76@gmail.com",
        //     phoneNum: "01064147613",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7021822,
        //     name: "?????????",
        //     email: "csh7327@hanmail.net",
        //     phoneNum: "01087397327",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7022569,
        //     name: "?????????",
        //     email: "kdy0800@naver.com",
        //     phoneNum: "01040884447",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7023016,
        //     name: "?????????",
        //     email: "jessica1032@kakao.com",
        //     phoneNum: "01037901032",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7023606,
        //     name: "??????",
        //     email: "tosilver72@naver.com",
        //     phoneNum: "01062142926",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7023699,
        //     name: "?????????",
        //     email: "serenodr@naver.com",
        //     phoneNum: "01033038018",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7023703,
        //     name: "?????????",
        //     email: "sjh70md@naver.com",
        //     phoneNum: "01063496768",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7029662,
        //     name: "Chan Ho Chong",
        //     email: "tochanho@gmail.com",
        //     phoneNum: "01032309626",
        //     tyep: "6?????? ????????? 3??????",
        //     count: 3,
        //   },
        //   {
        //     id: 7030493,
        //     name: "?????????",
        //     email: "jinydr@hanmail.net",
        //     phoneNum: "01037209128",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7038262,
        //     name: "joankim",
        //     email: "joankim08@gmail.com",
        //     phoneNum: "01033368973",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7055787,
        //     name: "Bianca",
        //     email: "ks1004i@naver.com",
        //     phoneNum: "01040087219",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7058692,
        //     name: "????????????",
        //     email: "lovejwjy@gmail.com",
        //     phoneNum: "01062790167",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7059958,
        //     name: "696,355",
        //     email: "yoenjung2@naver.com",
        //     phoneNum: "01042910305",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7067128,
        //     name: "-????????????",
        //     email: "leeya0906@naver.com",
        //     phoneNum: "01029886696",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7068883,
        //     name: "?????????",
        //     email: "xk8318@naver.com",
        //     phoneNum: "01030278627",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7083370,
        //     name: "??????(?????????)",
        //     email: "	livewire235@gmail.com",
        //     phoneNum: "01094257091",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7088490,
        //     name: "ham",
        //     email: "	hmlove2@naver.com",
        //     phoneNum: "01093193110",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7090114,
        //     name: "?????????",
        //     email: "	ahrtksla4604@naver.com",
        //     phoneNum: "01051184604",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7094683,
        //     name: "?????????",
        //     email: "	monica79@naver.com",
        //     phoneNum: "01092494804",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7096312,
        //     name: "?????????",
        //     email: "	haeahkim@naver.com",
        //     phoneNum: "01050365967",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        //   {
        //     id: 7098394,
        //     name: "?????????",
        //     email: "yotegi@naver.com",
        //     phoneNum: "01054360127",
        //     tyep: "6?????? ????????? 1??????",
        //     count: 1,
        //   },
        // ];
        //   const createVoucher = async () => {
        //     const voucherNumber = generateVoucherNum();
        //     const voucherRepository = getRepository(Voucher);
        //     await voucherRepository.save({
        //       voucherNumber,
        //       name: "6Month",
        //     });
        //     return voucherNumber;
        //   };
        //   for (let i = 0; i < data.length; i++) {
        //     console.log(data[i]);
        //     const messagehtml = `
        // ???????????????! ??????ZAMA?????????.
        // ???????????? ??????????????? ?????? ZAMA ????????? ????????? ????????????????????? ???????????? ???????????????.
        // ????????? ???????????? ???????????? ?????? ZAMA??? ???????????? ??????????????? ???????????? ?????? ????????? ????????????.
        // ??????(2022??? 1??? 3???)?????? ?????? ZAMA ????????? ???????????? ???????????? ??? ????????????.
        // ??????????????? ????????? ????????? ???????????? ?????? ???????????? ????????? ???????????? ?????????????????? ????????? ??????????????? ?????????.
        // ??????????????? 6?????? ???????????? ???????????? 7?????? ?????? ???????????? ??? ????????????.
        // ?????? ????????? ???????????? ???????????? ????????? ????????????????????????.(3?????? ?????? ?????? ??????)
        // ????????? ???????????? ?????? ?????? ZAMA?????? ?????? ?????? ?????????, ??????, ????????? ?????????????????? ??????????????? ???????????? ?????????????????????.
        // ??????????????? ????????? ??????.
        // * ??? ???????????? ????????? ????????? ?????????.
        // ??????????????? 010-3949-7613?????? ????????????????????????.
        // `;
        //     await sendSms({
        //       receivers: [data[i].phoneNum],
        //       message: messagehtml,
        //     });
        //     for (let j = 0; j < data[i].count; j++) {
        //       console.log(j);
        //       const voucherNum = await createVoucher();
        //       const messagehtml = `
        // ???????????????! ??????ZAMA?????????.
        // ?????? ??????????????? ??? ?????? ????????? ???????????? ?????? ??????????????????.
        // * ?????? ?????? ?????? *
        // ????????? ??????????????? zama ????????? ??????????????? ???????????? ???????????? ???????????? ??? ????????????.
        // - ????????????: ${voucherNum}
        // (3?????? ?????? ?????? 2022??? 3??? 31?????????)
        // android: https://play.google.com/store/apps/details?id=com.zama_app
        // ios: https://apps.apple.com/kr/app/zama-sleep/id1599709356
        // ???????????? ??????
        // 1. ???????????? ?????? ???????????? ??????
        // 2. ???????????? ?????? ???????????? ?????? ??????
        // 3. "????????? ????????????" ??????
        // 4. ???????????? ?????? ??? ??????
        // * ??? ???????????? ????????? ????????? ?????????.
        // ??????????????? 010-3949-7613?????? ????????????????????????.
        //   `;
        //       await sendSms({
        //         receivers: [data[i].phoneNum],
        //         message: messagehtml,
        //       });
        //     }
        //   }
        return [2 /*return*/, res.status(200).send({
                success: true,
            })];
    });
}); };
exports.default = SendRewardMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZFJld2FyZE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FkbWluL1NlbmRSZXdhcmRNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxpQkFBaUIsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOztRQUMxRCxpQkFBaUI7UUFDakIsTUFBTTtRQUNOLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0Isa0NBQWtDO1FBQ2xDLCtCQUErQjtRQUMvQiwyQkFBMkI7UUFDM0IsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxNQUFNO1FBQ04sbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixxQ0FBcUM7UUFDckMsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsT0FBTztRQUNQLE1BQU07UUFDTixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHFDQUFxQztRQUNyQywrQkFBK0I7UUFDL0IsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixPQUFPO1FBQ1AsTUFBTTtRQUNOLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUMvQiwyQkFBMkI7UUFDM0IsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxNQUFNO1FBQ04sbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixnQ0FBZ0M7UUFDaEMsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsT0FBTztRQUNQLE1BQU07UUFDTixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLG1DQUFtQztRQUNuQywrQkFBK0I7UUFDL0IsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixPQUFPO1FBQ1AsTUFBTTtRQUNOLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0NBQW9DO1FBQ3BDLCtCQUErQjtRQUMvQiwyQkFBMkI7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