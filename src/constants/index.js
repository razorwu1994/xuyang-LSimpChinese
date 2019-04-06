export const S3Left = ["扌", "氵", "忄", "目", "贝", "钅"];
export const S3Right = [
  "丸",
  "彐",
  "乇",
  "工",
  "广",
  "勺",
  "卂",
  "昜",
  "山",
  "干",
  "也",
  "叉",
  "川",
  "凡",
  "千",
  "土",
  "反",
  "化",
  "勾",
  "冈",
  "月",
  "乌",
  "内"
];

export const S4Right = [
  "殳",
  "支",
  "爪",
  "仓",
  "夫",
  "巴",
  "凶",
  "太",
  "区",
  "木",
  "历",
  "井",
  "公",
  "不",
  "长",
  "尤",
  "凶",
  "中",
  "分",
  "眉",
  "看",
  "冘",
  "乏"
];

export const S5Right = [
  "令",
  "另",
  "立",
  "兰",
  "用",
  "母",
  "写",
  "世",
  "发",
  "目",
  "可",
  "平",
  "去",
  "台",
  "白",
  "术",
  "幼",
  "末",
  "民",
  "龙",
  "玄",
  "央",
  "虫",
  "弗",
  "代",
  "戋",
  "卯",
  "甲",
  "失"
];
export const S6Right = [
  "穵",
  "共",
  "军",
  "寺",
  "圭",
  "当",
  "州",
  "羊",
  "先",
  "西",
  "尧",
  "兆",
  "动",
  "旬",
  "厌",
  "㐫",
  "艮",
  "牟",
  "米",
  "匡",
  "有",
  "任",
  "各",
  "庄",
  "戎",
  "次",
  "夹",
  "交",
  "岂",
  "吕",
  "失",
  "同"
];

export const S7Right = [
  "闵",
  "束",
  "弟",
  "每",
  "吾",
  "兑",
  "来",
  "佥",
  "完",
  "肖",
  "夋"
];

export const S8Right = ["易", "者", "武", "咅", "尚", "卖"];

export const SPACE_KEY = 32;
export const LEFT = 0,
  RIGHT = 1;
export const MAX_PHASE = 3;
export const CHAR_MAP = {
  S3Left: {
    S3Right: [
      [0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 12],
      [5, 11, 12, 13, 14, 15],
      [],
      [],
      []
    ],
    S4Right: [
      [0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17],
      [8, 18, 19, 20, 21, 22],
      [14, 22, 23, 24, 25],
      [7, 25, 26, 27, 28, 29]
    ],
    S5Right: [
      [0, 1, 2, 3, 4, 5],
      [2, 6, 7, 8, 9, 10],
      [0, 11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20, 21],
      [13, 22, 23, 24, 25, 26],
      [0, 26, 27, 28]
    ],
    S6Right: [
      [0, 1, 2, 3, 4, 5],
      [1, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16],
      [4, 11, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25],
      [16, 27, 28, 29, 30, 31]
    ],
    S7Right: [[], [], [0, 1, 2, 3, 4, 5], [2, 6, 7, 8, 9, 10], [], []],
    S8Right: [[], [], [], [], [0, 1, 2, 3, 4, 5], []]
  }
};
export const RIGHT_MAP = {
  3: { name: `S3Right`, value: S3Right },
  4: { name: `S4Right`, value: S4Right },
  5: { name: `S5Right`, value: S5Right },
  6: { name: `S6Right`, value: S6Right },
  7: { name: `S7Right`, value: S7Right },
  8: { name: `S8Right`, value: S8Right }
};
export const HANZI_MAP = {
  S3Left: {
    S3Right: [
      ["执", "扫", "托", "扛", "扩", "扚"],
      ["汛", "汤", "汕", "江", "汗", "池"],
      ["钗", "钏", "钓", "钒", "钎", "钍"],
      [],
      [],
      []
    ],
    S4Right: [
      ["投", "技", "抓", "抢", "扶", "把"],
      ["汹", "汰", "沤", "沐", "沥", "汫"],
      ["忪", "怀", "怅", "忧", "忷", "忡"],
      ["眍", "盼", "眉", "看", "眈", "眨"],
      ["账", "贫", "贬", "贩", "货", "购"],
      ["钛", "钩", "钢", "钥", "钨", "钠"]
    ],
    S5Right: [
      ["拎", "拐", "拉", "拦", "拥", "拇"],
      ["泣", "泻", "泄", "泼", "泪", "河"],
      ["怜", "怦", "怯", "怡", "怕", "怵"],
      ["眑", "眜", "眠", "眬", "眩", "眏"],
      ["贻", "贵", "费", "贷", "贱", "贸"],
      ["铃", "铆", "钾", "铁"]
    ],
    S6Right: [
      ["挖", "拱", "挥", "持", "挂", "挡"],
      ["洲", "洋", "洗", "洒", "浇", "洪"],
      ["恌", "恸", "恂", "恹", "恼", "恨"],
      ["眼", "眺", "眭", "眸", "眯", "眶"],
      ["贿", "赁", "赂", "赃", "贼", "资"],
      ["铗", "铰", "铠", "铝", "银", "铜"]
    ],
    S7Right: [
      [],
      [],
      ["悯", "悚", "悌", "悔", "悟", "悦"],
      ["睇", "睐", "睑", "睆", "睄", "睃"],
      [],
      []
    ],
    S8Right: [[], [], [], [], ["赐", "赌", "赋", "赔", "赏", "赎"], []]
  }
};
export const MAX_CARD_STACK = 120;
export const TARGET_MIDDLE = 180;

export const RESULT_DICTIONARY = {
  执: " hold in hand; keep; carry out",
  扫: " sweep; clear away; exterminate",
  托: " to hold up with palm; to support; rely on",
  扛: " carry on shoulders; lift",
  扩: " expand; enlarge; stretch",
  扚: " punch",
  投: " cast; deliver; fling; pitch",
  技: " craftsmanship; skill",
  抓: " catch; grasp; seize",
  抢: " take by force",
  扶: " support with hand",
  把: " hold",
  拎: " carry",
  拐: " crutch",
  拉: " pull; drag; draw",
  拦: " hinder; obstruct",
  拥: " hold",
  拇: " big toe",
  挖: " to scoop out; to dig; to excavate",
  拱: " to surround; to arch; to cup one's hands in salute",
  挥: " to disperse; to brandish; to scatter; to command; to conduct; to wave",
  持:
    " to support; to persevere; to manage; to grasp; to hold; to run (i.e. administer)",
  挂: " hang items in higher places by hand",
  拱: " to surround; to arch; to cup one's hands in salute",
  挡: " obstruct; impede; stop; resist",
  忪: " restless; agitated",
  怅: " depressed; despair; upset; regretful",
  忧: " anxiety; sorrow; worried",
  忷: " fear",
  忡: " distressed; uneasy; grieved",
  怦: "impulsive",
  忪: " restless; agitated",
  怯: " cowardly; timid",
  怡: " harmony; pleased",
  怕: " to fear; to drea",
  怵: " to fear; timid",
  怜: " pity",
  恌: " frivolous",
  恸: " grief",
  恂: " sincere",
  恹: " weak",
  恼: " angry",
  恨: " hate",
  悯: " pity",
  悚: " frightened",
  悌: " have love and respect for one’s elder brother",
  悔: " regret",
  悟: " enlightenment ",
  悦: "happy",
  汛: " to sprinkle water",
  汤: " water in which sth has been boiled",
  汕: " used in names of places connected with Shantou",
  江: " river",
  汗: " sweat",
  池: " pool",
  汹: " torrential rush; tumultuous",
  汰: " to eliminate; to discard",
  沤: " to steep; bubble; to macerate; froth",
  沐: " to receive; to be given; to cleanse; to bathe",
  沥: " a trickle; to strain or filter; to drip",
  汫: " trickle",
  泻: " flow out swiftly",
  泄: " evacuation; catharsis",
  泣: " weep",
  泼: " splash",
  泪: " tear",
  河: " river",
  洲: " continent",
  洋: " ocean",
  洗: " wash",
  洒: " spray",
  浇: " irrigate",
  洪: " flood",
  盼: " hope",
  眉: " eyebrow",
  眍: " to sink in of eyes",
  看: " look",
  眈: " gaze intently",
  眨: " blink",
  眑: " sunken eyes",
  眜: " unclear eyes",
  眠: " sleep",
  眬: " eyes see things blurred",
  眩: " dizzy",
  眏: " focus",
  眼: " eye",
  眺: " to gaze into the distance",
  眭: " to have a deep or piercing gaze",
  眸: " pupil of the eye",
  眯: " squinting ",
  眶: " eye socket ",
  睐: " gaze",
  睑: " good-looking",
  睆: " splash",
  睇: " strabismus",
  睄: " cursory look",
  睃: "glance",
  贬: " depreciation",
  贩: " vendor",
  货: " goods",
  贫: " poor",
  购: " purchase",
  账: " bill",
  贵: " expensive",
  费: " fee",
  贷: " loan",
  贱: " cheap",
  贻: " give to",
  眏: " focus",
  贸: " trade",
  贿: " bribes; riches; wealth; bribe",
  赁: " wages; paid to servants",
  赂: " bribe",
  赃: " corruption or theft of property income",
  贼: " thief",
  资: " capital; wealth; property",
  赐: " give",
  赌: " bet",
  赋: " taxation",
  赔: " compensate",
  赏: " reward",
  赎: " ransom",
  钗: " hairpin",
  钏: " bracelet",
  钓: " fishhook",
  钒: " vanadium",
  钎: " brazing",
  钍: " thorium",
  钩: " sickle",
  钢: " steel",
  钥: " key",
  钨: " wolfram",
  钛: " titanium",
  钠: " sodium",
  钾: " potassium",
  铃: " bell",
  铆: " riveting",
  铎: " an ancient percussion instrument",
  铅: " lead",
  铁: " iron",
  铗: " sword",
  铰: " hinge",
  铠: " armor",
  铝: " aluminum",
  银: "silver",
  铜: " copper"
};

export const ppDictionary = {
  扌:
    "Chinese characters with this part mean actions related to the hand or by hand.",
  忄:
    "Chinese characters with this part mean actions related to the heart or human emotions",
  氵:
    "Chinese characters with this part mean actions related to the water or by water",
  钅:
    " Chinese characters with this part mean actions related to the metal or metal tools",
  目: " Chinese characters with this part mean actions related to the eyes"
};
