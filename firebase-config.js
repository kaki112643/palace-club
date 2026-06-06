// ================================================================
// PALACE CLUB — Firebase設定
// ================================================================
const firebaseConfig = {
  apiKey:            "AIzaSyBpotdV04UX5hmtSuk-_IkwAq02JvTbpo4",
  authDomain:        "palace-club.firebaseapp.com",
  databaseURL:       "https://palace-club-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "palace-club",
  storageBucket:     "palace-club.firebasestorage.app",
  messagingSenderId: "284585202940",
  appId:             "1:284585202940:web:56f0c2e89c53dcec167379",
  measurementId:     "G-M001ERX2JF"
};

// ================================================================
// デフォルトデータ（初回起動時にFirebaseに書き込まれます）
// ================================================================
const DEFAULT_DATA = {
  shop: {
    name:         "PALACE CLUB",
    catchcopy:    "チャイニーズ８専門店 — 日本最大級 17台 高田馬場",
    description:  "高田馬場という最高の立地に誕生。ビリヤード・ゴルフ・麻雀が一つ屋根の下に揃う、東京屈指のエンターテインメント空間。",
    address:      "東京都新宿区高田馬場X-X-X ○○ビル B1F〜3F",
    access:       "JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩2分",
    tel:          "03-XXXX-XXXX",
    email:        "info@palace-club.jp",
    hours_week:   "13:00〜25:00",
    hours_weekend:"10:00〜翌5:00",
    mapUrl:       "https://maps.google.com/?q=高田馬場駅"
  },
  plans: {
    billiard: [
      {name:"スタンダード",   price:"¥800",   unit:"/30分"},
      {name:"1時間パック",    price:"¥1,400", unit:"/1時間"},
      {name:"プレミアム月額", price:"¥9,800", unit:"/月・40時間"},
      {name:"グループ(2台〜)",price:"¥2,800", unit:"/時間/台"},
      {name:"学生割引",       price:"¥600",   unit:"/30分"}
    ],
    golf: [
      {name:"30分パック",  price:"¥1,200",  unit:"/30分"},
      {name:"1時間パック", price:"¥2,000",  unit:"/1時間"},
      {name:"月額プラン",  price:"¥15,800", unit:"/月"},
      {name:"レッスン付き",price:"¥3,500",  unit:"/時間"}
    ],
    mahjong: [
      {name:"1時間",          price:"¥500",   unit:"/人"},
      {name:"半荘",           price:"¥300",   unit:"/人"},
      {name:"貸し切り(4時間)",price:"¥4,000", unit:"/卓"}
    ]
  },
  facility: {
    billiard_tables: 17,
    golf_rooms:      2,
    mahjong_rooms:   2
  },
  events: [
    {id:"E001",type:"BILLIARD TOURNAMENT",name:"春季チャイニーズ８選手権",
     date:"2025-06-15",time:"14:00〜20:00",entry:"¥2,000",
     prize:"優勝¥50,000 / 準優勝¥20,000",max:32,current:18,active:true},
    {id:"E002",type:"MAHJONG EVENT",name:"麻雀フレンドリー大会",
     date:"2025-06-22",time:"13:00〜18:00",entry:"¥1,500",
     prize:"優勝¥30,000 / 準優勝¥15,000",max:24,current:9,active:true},
    {id:"E003",type:"GOLF CHALLENGE",name:"室内ゴルフ ニアピン競技",
     date:"2025-06-28",time:"11:00〜17:00",entry:"¥1,000",
     prize:"優勝¥20,000 / 各種賞品",max:20,current:5,active:true}
  ]
};


// ================================================================
// デフォルトデータ（初回起動時にFirebaseに書き込まれます）
// ================================================================
const DEFAULT_DATA = {
  shop: {
    name:        "PALACE CLUB",
    catchcopy:   "チャイニーズ８専門店 — 日本最大級 17台 高田馬場",
    description: "高田馬場という最高の立地に誕生。ビリヤード・ゴルフ・麻雀が一つ屋根の下に揃う、東京屈指のエンターテインメント空間。",
    address:     "東京都新宿区高田馬場X-X-X ○○ビル B1F〜3F",
    access:      "JR山手線・西武新宿線・東京メトロ東西線「高田馬場駅」徒歩2分",
    tel:         "03-XXXX-XXXX",
    email:       "info@palace-club.jp",
    hours_week:  "13:00〜25:00",
    hours_weekend:"10:00〜翌5:00",
    mapUrl:      "https://maps.google.com/?q=高田馬場駅"
  },
  plans: {
    billiard: [
      {name:"スタンダード",  price:"¥800",   unit:"/30分"},
      {name:"1時間パック",   price:"¥1,400", unit:"/1時間"},
      {name:"プレミアム月額",price:"¥9,800", unit:"/月・40時間"},
      {name:"グループ(2台〜)",price:"¥2,800",unit:"/時間/台"},
      {name:"学生割引",      price:"¥600",   unit:"/30分"}
    ],
    golf: [
      {name:"30分パック",  price:"¥1,200",  unit:"/30分"},
      {name:"1時間パック", price:"¥2,000",  unit:"/1時間"},
      {name:"月額プラン",  price:"¥15,800", unit:"/月"},
      {name:"レッスン付き",price:"¥3,500",  unit:"/時間"}
    ],
    mahjong: [
      {name:"1時間",        price:"¥500",   unit:"/人"},
      {name:"半荘",         price:"¥300",   unit:"/人"},
      {name:"貸し切り(4時間)",price:"¥4,000",unit:"/卓"}
    ]
  },
  facility: {
    billiard_tables: 17,
    golf_rooms:      2,
    mahjong_rooms:   2
  },
  events: [
    {id:"E001",type:"BILLIARD TOURNAMENT",name:"春季チャイニーズ８選手権",
     date:"2025-06-15",time:"14:00〜20:00",entry:"¥2,000",
     prize:"優勝¥50,000 / 準優勝¥20,000",max:32,current:18,active:true},
    {id:"E002",type:"MAHJONG EVENT",name:"麻雀フレンドリー大会",
     date:"2025-06-22",time:"13:00〜18:00",entry:"¥1,500",
     prize:"優勝¥30,000 / 準優勝¥15,000",max:24,current:9,active:true},
    {id:"E003",type:"GOLF CHALLENGE",name:"室内ゴルフ ニアピン競技",
     date:"2025-06-28",time:"11:00〜17:00",entry:"¥1,000",
     prize:"優勝¥20,000 / 各種賞品",max:20,current:5,active:true}
  ]
};
