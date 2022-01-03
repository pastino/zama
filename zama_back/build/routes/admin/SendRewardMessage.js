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
var typeorm_1 = require("typeorm");
var Voucher_1 = require("../../entities/Voucher");
var utils_1 = require("../../utils");
var SendRewardMessage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, createVoucher, i, messagehtml, j, voucherNum, messagehtml_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = [
                    {
                        id: 6962364,
                        name: "JungChanJin",
                        email: "warmjcj@naver.com",
                        phoneNum: "01091268852",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7021568,
                        name: "허성우",
                        email: "huhsungwoo@gmail.com",
                        phoneNum: "01071206982",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 7016325,
                        name: "박상욱",
                        email: "parksw36@yahoo.co.kr",
                        phoneNum: "01085733391",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6965894,
                        name: "김한나",
                        email: "kimhanna86@naver.com",
                        phoneNum: "01063508331",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6961984,
                        name: "김형진",
                        email: "upt79@naver.com",
                        phoneNum: "01087387613",
                        tyep: "6개월 구독권 3계정",
                        count: 6,
                    },
                    {
                        id: 6970397,
                        name: "015693",
                        email: "fccowboy@naver.com",
                        phoneNum: "01030431004",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6962999,
                        name: "황하나",
                        email: "sedanhana@naver.com",
                        phoneNum: "01074887833",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6962033,
                        name: "채안석",
                        email: "ansugy2@naver.com",
                        phoneNum: "01051812942",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6962166,
                        name: "묘령의여인",
                        email: "kemi0333@naver.com",
                        phoneNum: "01037658958",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6962174,
                        name: "SINSTB",
                        email: "fauvesgirl@gmail.com",
                        phoneNum: "01064290817",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6962474,
                        name: "남영주",
                        email: "poohju74@hotmail.com",
                        phoneNum: "01063326084",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6962491,
                        name: "Kwon",
                        email: "	glory4u@msn.com",
                        phoneNum: "01073721126",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6962497,
                        name: "배지은",
                        email: "coda2017@naver.com",
                        phoneNum: "01086182006",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6962620,
                        name: "이유주",
                        email: "yujju__u@naver.com",
                        phoneNum: "01021291115",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6962648,
                        name: "꼰 규빈 규영 맘",
                        email: "hwclove@naver.com",
                        phoneNum: "01044702005",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6963702,
                        name: "김완희",
                        email: "dhksgml1127@gmail.com",
                        phoneNum: "01099821420",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6963753,
                        name: "이정은",
                        email: "evete81@naver.com",
                        phoneNum: "01096340668",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6964006,
                        name: "신혜성",
                        email: "shs@wadiz.kr",
                        phoneNum: "01091660328",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6964095,
                        name: "Min-hong Han",
                        email: "minong815@gmail.com",
                        phoneNum: "01090768715",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6964101,
                        name: "이수연",
                        email: "tndusdldi77@hanmail.net",
                        phoneNum: "01062840831",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6964625,
                        name: "이설희",
                        email: "eyesul@naver.com",
                        phoneNum: "01052221890",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6965045,
                        name: "Jin Sung Lee",
                        email: "jnsng@naver.com",
                        phoneNum: "01048570255",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6965278,
                        name: "토마토",
                        email: "topaz1278@naver.com",
                        phoneNum: "01092378273",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6965328,
                        name: "(주)스마투스코리아",
                        email: "smartooth@smartooth.co",
                        phoneNum: "01089008983",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6965395,
                        name: "정의석",
                        email: "jeros87@nate.com",
                        phoneNum: "01072520413",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6966492,
                        name: "박지연",
                        email: "lllv_vlllo@naver.com",
                        phoneNum: "01030630896",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6967673,
                        name: "김태완",
                        email: "gtw21k@naver.com",
                        phoneNum: "01095597210",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6967927,
                        name: "조연정",
                        email: "oriass@naver.com",
                        phoneNum: "01091351304",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6969138,
                        name: "또또나나야",
                        email: "eunjin8504@naver.com",
                        phoneNum: "01094031903",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6969271,
                        name: "김혜진",
                        email: "hjjin1018@naver.com",
                        phoneNum: "01039307613",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6969552,
                        name: "W-Luke",
                        email: "hy731@hanmail.net",
                        phoneNum: "01047142556",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6971840,
                        name: "장정혜",
                        email: "9751033@naver.com",
                        phoneNum: "01025817125",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6972937,
                        name: "박지훈",
                        email: "nc926@naver.com",
                        phoneNum: "01073033888",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6974008,
                        name: "날래",
                        email: "nare5854@naver.com",
                        phoneNum: "01033585654",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6974609,
                        name: "사랑해~♡",
                        email: "smjeh@hanmail.net",
                        phoneNum: "01040038573",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6978513,
                        name: "노루샘",
                        email: "honeybny@naver.com",
                        phoneNum: "01085623660",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6978784,
                        name: "이제희",
                        email: "leejh831@nate.com",
                        phoneNum: "01053155810",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6980666,
                        name: "이효진",
                        email: "hjyee06@gmail.com",
                        phoneNum: "01043730957",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6980725,
                        name: "Ji Eun OH",
                        email: "sije0518@gmail.com",
                        phoneNum: "01055792808",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6980982,
                        name: "햄토리",
                        email: "82ham@naver.com",
                        phoneNum: "01079202412",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6981806,
                        name: "배정희",
                        email: "yanina8316@gmail.com",
                        phoneNum: "01053011527",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6981898,
                        name: "준준님",
                        email: "66june99@naver.com",
                        phoneNum: "01073327194",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6983178,
                        name: "최진연",
                        email: "bugang2375@naver.com",
                        phoneNum: "01039800329",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6984372,
                        name: "류제은",
                        email: "thatisgen@naver.com",
                        phoneNum: "01031182435",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 6987505,
                        name: "Goofy",
                        email: "goofysun@naver.com",
                        phoneNum: "01076071397",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6993231,
                        name: "김정근",
                        email: "allergy2love@naver.com",
                        phoneNum: "01029505075",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6994219,
                        name: "박종화",
                        email: "jjongas2@naver.com",
                        phoneNum: "01074508436",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6997050,
                        name: "장혜민",
                        email: "dreambono@gmail.com",
                        phoneNum: "01040263780",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6998579,
                        name: "조윤경",
                        email: "yoonkyung727@naver.com",
                        phoneNum: "01091372410",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 6999056,
                        name: "SunjungPark",
                        email: "psjaqua@gmail.com",
                        phoneNum: "01091000535",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7000638,
                        name: "제휘",
                        email: "jeymedia@naver.com",
                        phoneNum: "01073540652",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7002615,
                        name: "느리",
                        email: "iehova68@naver.com",
                        phoneNum: "01087197075",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7003859,
                        name: "김혜란",
                        email: "rane0703@naver.com",
                        phoneNum: "01067802605",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7008744,
                        name: "상큼",
                        email: "sweetpea60@naver.com",
                        phoneNum: "01032239366",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7009925,
                        name: "쑤운채",
                        email: "tjarlfl@naver.com",
                        phoneNum: "01028522406",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7010799,
                        name: "김혜원",
                        email: "gpdnjs1974@naver.com",
                        phoneNum: "01033516506",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7011802,
                        name: "부향싯ㄴ",
                        email: "youth76@daum.net",
                        phoneNum: "01076978920",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7017432,
                        name: "박태진",
                        email: "waffer76@gmail.com",
                        phoneNum: "01064147613",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7021822,
                        name: "주상희",
                        email: "csh7327@hanmail.net",
                        phoneNum: "01087397327",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7022569,
                        name: "김동엽",
                        email: "kdy0800@naver.com",
                        phoneNum: "01040884447",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7023016,
                        name: "김수빈",
                        email: "jessica1032@kakao.com",
                        phoneNum: "01037901032",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7023606,
                        name: "이은",
                        email: "tosilver72@naver.com",
                        phoneNum: "01062142926",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7023699,
                        name: "김덕만",
                        email: "serenodr@naver.com",
                        phoneNum: "01033038018",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7023703,
                        name: "석정호",
                        email: "sjh70md@naver.com",
                        phoneNum: "01063496768",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7029662,
                        name: "Chan Ho Chong",
                        email: "tochanho@gmail.com",
                        phoneNum: "01032309626",
                        tyep: "6개월 구독권 3계정",
                        count: 3,
                    },
                    {
                        id: 7030493,
                        name: "진용탁",
                        email: "jinydr@hanmail.net",
                        phoneNum: "01037209128",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7038262,
                        name: "joankim",
                        email: "joankim08@gmail.com",
                        phoneNum: "01033368973",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7055787,
                        name: "Bianca",
                        email: "ks1004i@naver.com",
                        phoneNum: "01040087219",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7058692,
                        name: "티거티거",
                        email: "lovejwjy@gmail.com",
                        phoneNum: "01062790167",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7059958,
                        name: "696,355",
                        email: "yoenjung2@naver.com",
                        phoneNum: "01042910305",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7067128,
                        name: "-쁘띠쁘띠",
                        email: "leeya0906@naver.com",
                        phoneNum: "01029886696",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7068883,
                        name: "쿠로로",
                        email: "xk8318@naver.com",
                        phoneNum: "01030278627",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7083370,
                        name: "따라(이샛별)",
                        email: "	livewire235@gmail.com",
                        phoneNum: "01094257091",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7088490,
                        name: "ham",
                        email: "	hmlove2@naver.com",
                        phoneNum: "01093193110",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7090114,
                        name: "한유리",
                        email: "	ahrtksla4604@naver.com",
                        phoneNum: "01051184604",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7094683,
                        name: "정지윤",
                        email: "	monica79@naver.com",
                        phoneNum: "01092494804",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7096312,
                        name: "김해아",
                        email: "	haeahkim@naver.com",
                        phoneNum: "01050365967",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                    {
                        id: 7098394,
                        name: "남정운",
                        email: "yotegi@naver.com",
                        phoneNum: "01054360127",
                        tyep: "6개월 구독권 1계정",
                        count: 1,
                    },
                ];
                createVoucher = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var voucherNumber, voucherRepository;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                voucherNumber = utils_1.generateVoucherNum();
                                voucherRepository = typeorm_1.getRepository(Voucher_1.Voucher);
                                return [4 /*yield*/, voucherRepository.save({
                                        voucherNumber: voucherNumber,
                                        name: "6Month",
                                    })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, voucherNumber];
                        }
                    });
                }); };
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < data.length)) return [3 /*break*/, 8];
                console.log(data[i]);
                messagehtml = "\n\uC548\uB155\uD558\uC138\uC694! \uC790\uB9C8ZAMA\uC785\uB2C8\uB2E4.\n\uC624\uB7AB\uB3D9\uC548 \uAE30\uB2E4\uB9AC\uC168\uB358 \uC790\uB9C8 ZAMA \uC5B4\uD50C\uC774 \uB4DC\uB514\uC5B4 \uC11C\uD3EC\uD2B8\uB2D8\uB4E4\uC5D0\uAC8C \uC120\uBCF4\uC774\uAC8C \uB418\uC5C8\uC2B5\uB2C8\uB2E4.\n\uC640\uB514\uC988 \uD06C\uB77C\uC6B0\uB4DC \uD380\uB529\uC73C\uB85C \uC790\uB9C8 ZAMA\uC758 \uCCAB\uAC78\uC74C\uC5D0 \uB3D9\uCC38\uD574\uC8FC\uC2E0 \uC5EC\uB7EC\uBD84\uAED8 \uAE4A\uC740 \uAC10\uC0AC\uB97C \uB4DC\uB9BD\uB2C8\uB2E4.\n\n\uC624\uB298(2022\uB144 1\uC6D4 3\uC77C)\uBD80\uD130 \uC790\uB9C8 ZAMA \uC571\uC5D0\uC11C \uB9AC\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\uCC98\uC74C\uC778\uB9CC\uD07C \uBD80\uC871\uD55C \uBD80\uBD84\uC744 \uC810\uAC80\uD558\uAE30 \uC704\uD574 \uD55C\uB2EC\uAC04\uC740 \uD14C\uC2A4\uD2B8 \uAE30\uAC04\uC73C\uB85C \uC11C\uD3EC\uD130\uB2D8\uB4E4\uAED8 \uBB34\uB8CC\uB85C \uC81C\uACF5\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4.\n\n\uAD6C\uC785\uD574\uC8FC\uC2E0 6\uAC1C\uC6D4 \uBC14\uC6B0\uCC98\uB97C \uC0AC\uC6A9\uD558\uBA74 7\uAC1C\uC6D4 \uB3D9\uC548 \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \n\uCFE0\uD3F0 \uBC88\uD638\uB294 \uC2E0\uCCAD\uD558\uC2E0 \uC218\uB7C9\uB9CC\uD07C \uBB38\uC790\uB85C \uC804\uB2EC\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.(3\uAC1C\uC6D4 \uC774\uB0B4 \uCFE0\uD3F0 \uC0AC\uC6A9)\n\n\uD3B8\uC548\uD55C \uC7A0\uC790\uB9AC\uB97C \uC704\uD55C \uC790\uB9C8 ZAMA\uB9CC\uC758 \uC7A0\uC774 \uC624\uB294 \uC774\uC57C\uAE30, \uC74C\uC545, \uC18C\uB9AC\uB85C \uC11C\uD3EC\uD130\uB2D8\uB4E4\uC744 \uB450\uADFC\uAC70\uB9AC\uB294 \uB9C8\uC74C\uC73C\uB85C \uCC3E\uC544\uBD59\uACA0\uC2B5\uB2C8\uB2E4.\n\n\uC790\uB9C8\uCF54\uB9AC\uC544 \uAE40\uC218\uC9C4 \uB4DC\uB9BC.\n\n* \uBCF8 \uC5F0\uB77D\uCC98\uB294 \uAC1C\uBC1C\uC790 \uC5F0\uB77D\uCC98 \uC785\uB2C8\uB2E4.\n\uBB38\uC758\uC0AC\uD56D\uC740 010-3949-7613\uC73C\uB85C \uC5F0\uB77D\uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.\n";
                return [4 /*yield*/, utils_1.sendSms({
                        receivers: [data[i].phoneNum],
                        message: messagehtml,
                    })];
            case 2:
                _a.sent();
                j = 0;
                _a.label = 3;
            case 3:
                if (!(j < data[i].count)) return [3 /*break*/, 7];
                console.log(j);
                return [4 /*yield*/, createVoucher()];
            case 4:
                voucherNum = _a.sent();
                messagehtml_1 = "\n\uC548\uB155\uD558\uC138\uC694! \uC790\uB9C8ZAMA\uC785\uB2C8\uB2E4.\n\n\uC571\uC744 \uB2E4\uC6B4\uBC1B\uC73C\uC2E0 \uD6C4 \uC544\uB798 \uCFE0\uD3F0\uC744 \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4. \n\n* \uCFE0\uD3F0 \uBC1C\uAE09 \uB0B4\uC6A9 *\n\uC544\uB798\uC758 \uCFE0\uD3F0\uBC88\uD638\uB97C zama \uC571\uC5D0\uC11C \uC785\uB825\uD558\uC2DC\uBA74 \uCEE8\uD150\uCE20\uB97C \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\n- \uCFE0\uD3F0\uBC88\uD638: " + voucherNum + "\n\n(3\uAC1C\uC6D4 \uC774\uB0B4 \uC0AC\uC6A9 2022\uB144 3\uC6D4 31\uC77C\uAE4C\uC9C0)\n\nandroid: https://play.google.com/store/apps/details?id=com.zama_app\nios: https://apps.apple.com/kr/app/zama-sleep/id1599709356\n\n\uCFE0\uD3F0\uC0AC\uC6A9 \uBC29\uBC95\n1. \uD648\uD654\uBA74\uC758 \uC6B0\uCE21 \uBA54\uB274\uBC84\uD2BC \uD074\uB9AD\n2. \uD504\uB9AC\uBBF8\uC5C4 \uD68C\uC6D0 \uC2E0\uCCAD\uD558\uAE30 \uBC84\uD2BC \uD074\uB9AD\n3. \"\uB9AC\uC6CC\uB4DC \uC0AC\uC6A9\uD558\uAE30\" \uD074\uB9AD\n4. \uCFE0\uD3F0\uBC88\uD638 \uC785\uB825 \uD6C4 \uC644\uB8CC\n\n* \uBCF8 \uC5F0\uB77D\uCC98\uB294 \uAC1C\uBC1C\uC790 \uC5F0\uB77D\uCC98 \uC785\uB2C8\uB2E4.\n\uBB38\uC758\uC0AC\uD56D\uC740 010-3949-7613\uC73C\uB85C \uC5F0\uB77D\uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.\n  ";
                return [4 /*yield*/, utils_1.sendSms({
                        receivers: [data[i].phoneNum],
                        message: messagehtml_1,
                    })];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                j++;
                return [3 /*break*/, 3];
            case 7:
                i++;
                return [3 /*break*/, 1];
            case 8: return [2 /*return*/, res.status(200).send({
                    success: true,
                })];
        }
    });
}); };
exports.default = SendRewardMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZFJld2FyZE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FkbWluL1NlbmRSZXdhcmRNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUNBQXdDO0FBQ3hDLGtEQUFpRDtBQUNqRCxxQ0FBMEQ7QUFFMUQsSUFBTSxpQkFBaUIsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFDcEQsSUFBSSxHQUFHO29CQUNYO3dCQUNFLEVBQUUsRUFBRSxPQUFPO3dCQUNYLElBQUksRUFBRSxhQUFhO3dCQUNuQixLQUFLLEVBQUUsbUJBQW1CO3dCQUMxQixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLEtBQUssRUFBRSxDQUFDO3FCQUNUO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxPQUFPO3dCQUNYLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSxzQkFBc0I7d0JBQzdCLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixJQUFJLEVBQUUsYUFBYTt3QkFDbkIsS0FBSyxFQUFFLENBQUM7cUJBQ1Q7b0JBQ0Q7d0JBQ0UsRUFBRSxFQUFFLE9BQU87d0JBQ1gsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLHNCQUFzQjt3QkFDN0IsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLElBQUksRUFBRSxhQUFhO3dCQUNuQixLQUFLLEVBQUUsQ0FBQztxQkFDVDtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsT0FBTzt3QkFDWCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsc0JBQXNCO3dCQUM3QixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLEtBQUssRUFBRSxDQUFDO3FCQUNUO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxPQUFPO3dCQUNYLElBQUksRUFBRSxL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