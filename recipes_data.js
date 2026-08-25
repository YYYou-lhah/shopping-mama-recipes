const recipesData = [
  {
    "id": 1,
    "hk": "番茄炒蛋",
    "id_name": "Tumis Tomat dan Telur",
    "ph": "Ginisang Kamatis at Itlog",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "egg",
    "ingredients": [
      {"zh": "番茄 3個(切塊)", "id": "Tomat 3 buah (potong)", "ph": "Kamatis 3 pcs (sliced)"},
      {"zh": "雞蛋 3隻(打勻)", "id": "Telur 3 butir (kocok)", "ph": "Eggs 3 pcs (beaten)"},
      {"zh": "鹽 1/2茶匙", "id": "Garam 1/2 sdt", "ph": "Salt 1/2 tsp"},
      {"zh": "砂糖 1.5茶匙", "id": "Gula 1.5 sdt", "ph": "Sugar 1.5 tsp"},
      {"zh": "蕃茄醬 1湯匙", "id": "Saus tomat 1 sdm", "ph": "Ketchup 1 tbsp"}
    ],
    "steps": [
      {"zh": "1. 雞蛋加少許鹽打勻；番茄去蒂切塊備用。", "id": "1. Kocok telur dengan garam; potong tomat.", "ph": "1. Batihin ang itlog sa asin; hiwain ang kamatis."},
      {"zh": "2. 熱鑊落油將雞蛋炒至七成熟盛起。", "id": "2. Tumis telur setengah matang, angkat.", "ph": "2. Igisa ang itlog nang kalahati, hanguin."},
      {"zh": "3. 原鑊炒軟番茄，加入蕃茄醬1湯匙、糖1.5茶匙及鹽1/2茶匙炒出汁。", "id": "3. Tumis tomat, tambah saus tomat, gula, garam.", "ph": "3. Igisa ang kamatis, idagdag ang ketchup, asukal, asin."},
      {"zh": "4. 倒入雞蛋回鑊大火炒勻即成。", "id": "4. Masukkan kembali telur, aduk rata.", "ph": "4. Ibalik ang itlog sa kawali, haluin."}
    ]
  },
  {
    "id": 2,
    "hk": "梅菜蒸肉餅",
    "id_name": "Daging Babi Kukus Sayur Asin",
    "ph": "Steamed Pork Patty with Preserved Cabbage",
    "portion": "4-5人",
    "time": "30 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "半肥瘦豬肉碎 300克", "id": "Daging babi giling 300g", "ph": "Minced pork 300g"},
      {"zh": "甜梅菜 1棵(浸洗切碎)", "id": "Sayur asin manis 1 ikat", "ph": "Sweet preserved cabbage 1 pc"},
      {"zh": "生抽 1湯匙", "id": "Kecap asin 1 sdm", "ph": "Soy sauce 1 tbsp"},
      {"zh": "砂糖 1/2茶匙", "id": "Gula 1/2 sdt", "ph": "Sugar 1/2 tsp"},
      {"zh": "生粉 1.5茶匙", "id": "Maizena 1.5 sdt", "ph": "Cornstarch 1.5 tsp"}
    ],
    "steps": [
      {"zh": "1. 甜梅菜浸水30分鐘去咸味洗淨，切細粒。", "id": "1. Rendam sayur asin 30 menit, cuci bersih, cincang.", "ph": "1. Ibabad ang cabbage ng 30 mins, hugasan, tadtarin."},
      {"zh": "2. 豬肉碎加生抽1湯匙、糖1/2茶匙及生粉1.5茶匙順方向攪至起膠。", "id": "2. Campur daging babi dengan kecap, gula, maizena, aduk searah.", "ph": "2. Haluin ang baboy sa toyo, asukal, cornstarch."},
      {"zh": "3. 加入梅菜拌勻鋪平碟上，大火隔水蒸15分鐘至熟透即成。", "id": "3. Tambah sayur asin, aduk, ratakan di piring, kukus 15 menit.", "ph": "3. Ihalo ang cabbage, ilatag sa plato, pasingawan ng 15 mins."}
    ]
  },
  {
    "id": 3,
    "hk": "蒜蓉炒菜心",
    "id_name": "Tumis Sawi Hijau dengan Bawang Putih",
    "ph": "Ginisang Choy Sum na may Bawang",
    "portion": "2-3人",
    "time": "10 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "菜心 1斤", "id": "Sawi hijau 600g", "ph": "Choy sum 600g"},
      {"zh": "蒜蓉 2湯匙", "id": "Bawang putih cincang 2 sdm", "ph": "Tinadtad na bawang 2 tbsp"},
      {"zh": "鹽 1/2茶匙", "id": "Garam 1/2 sdt", "ph": "Asin 1/2 tsp"},
      {"zh": "砂糖 1/4茶匙", "id": "Gula 1/4 sdt", "ph": "Asukal 1/4 tsp"},
      {"zh": "米酒 1茶匙", "id": "Arak beras 1 sdt", "ph": "Rice wine 1 tsp"}
    ],
    "steps": [
      {"zh": "1. 菜心浸洗乾淨切段；蒜頭拍碎切成蒜蓉。", "id": "1. Cuci sawi hijau, potong; cincang bawang putih.", "ph": "1. Hugasan ang choy sum, hiwain; tadtarin ang bawang."},
      {"zh": "2. 燒熱鑊落1.5湯匙油，爆香蒜蓉至金黃色。", "id": "2. Panaskan minyak, tumis bawang putih hingga harum.", "ph": "2. Initin ang mantika, igisa ang bawang hanggang maging golden."},
      {"zh": "3. 下菜心大火快炒，沿鑊邊濺入米酒1茶匙，加鹽1/2茶匙及砂糖1/4茶匙調味炒勻即成。", "id": "3. Masukkan sawi hijau, tumis cepat, tambah arak beras, garam, dan gula.", "ph": "3. Ilagay ang choy sum, igisa ng mabilis, lagyan ng wine, asin, at asukal."}
    ]
  },
  {
    "id": 4,
    "hk": "清蒸海上鮮",
    "id_name": "Ikan Kukus Fresh",
    "ph": "Steamed Fresh Fish",
    "portion": "4-5人",
    "time": "20 mins",
    "category": "seafood",
    "ingredients": [
      {"zh": "新鮮石斑/海上鮮 1條(約1斤)", "id": "Ikan segar 1 ekor (600g)", "ph": "Fresh fish 1 pc (600g)"},
      {"zh": "薑絲 2湯匙", "id": "Irisan jahe 2 sdm", "ph": "Ginger strips 2 tbsp"},
      {"zh": "蔥絲 3湯匙", "id": "Irisan daun bawang 3 sdm", "ph": "Spring onion strips 3 tbsp"},
      {"zh": "蒸魚豉油 2.5湯匙", "id": "Kecap asin ikan kukus 2.5 sdm", "ph": "Steamed fish soy sauce 2.5 tbsp"},
      {"zh": "滾油 2湯匙", "id": "Minyak panas 2 sdm", "ph": "Hot oil 2 tbsp"}
    ],
    "steps": [
      {"zh": "1. 魚洗淨抹乾水分，在魚身兩面各斜劃兩刀，底下墊少許薑絲。", "id": "1. Bersihkan ikan, keringkan, kerat badannya, taruh jahe di bawahnya.", "ph": "1. Linisin ang isda, patuyuin, hiwain ang gilid, lagyan ng luya sa ilalim."},
      {"zh": "2. 水大滾後放入魚，蓋緊大火蒸8-10分鐘至熟，取出倒去盤中魚水並棄掉舊薑絲。", "id": "2. Kukus ikan api besar 8-10 menit, buang air kukusan dan jahe lama.", "ph": "2. Pasingawan ng 8-10 mins, itapon ang sabaw at luyang ginamit."},
      {"zh": "3. 鋪上新鮮薑絲及大量蔥絲，均勻淋上2湯匙燒至滾燙的熱油爆香蔥絲。", "id": "3. Taburi jahe & daun bawang segar, siram dengan 2 sdm minyak panas.", "ph": "3. Lagyan ng bagong luya at sibuyas, ibuhos ang 2 tbsp ng mainit na mantika."},
      {"zh": "4. 最後在魚邊淋上蒸魚豉油2.5湯匙即成。", "id": "4. Siram kecap asin khusus ikan kukus di pinggir piring.", "ph": "4. Ibuhos ang 2.5 tbsp na toyo sa gilid ng plato."}
    ]
  },
  {
    "id": 5,
    "hk": "粟米肉粒",
    "id_name": "Daging Babi Cincang Jagung",
    "ph": "Minced Pork with Corn",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "豬肉粒 200克", "id": "Daging babi dadu 200g", "ph": "Diced pork 200g"},
      {"zh": "粟米蓉 1罐(約400克)", "id": "Krim jagung 1 kaleng (400g)", "ph": "Cream style corn 1 can (400g)"},
      {"zh": "雞蛋 1隻(打勻)", "id": "Telur 1 butir (kocok)", "ph": "Egg 1 pc (beaten)"},
      {"zh": "生抽 1湯匙", "id": "Kecap asin 1 sdm", "ph": "Soy sauce 1 tbsp"},
      {"zh": "生粉 1茶匙", "id": "Tepung maizena 1 sdt", "ph": "Cornstarch 1 tsp"},
      {"zh": "水 1/2碗", "id": "Air 1/2 cangkir", "ph": "Water 1/2 cup"}
    ],
    "steps": [
      {"zh": "1. 豬肉粒用生抽1湯匙及生粉1茶匙醃15分鐘。", "id": "1. Marinasi daging babi dengan kecap asin & maizena 15 menit.", "ph": "1. I-marinate ang baboy sa toyo at cornstarch ng 15 mins."},
      {"zh": "2. 熱鑊落1湯匙油，將豬肉粒炒至熟透變色盛起。", "id": "2. Tumis daging babi hingga matang, angkat.", "ph": "2. Igisa ang baboy hanggang maluto, hanguin."},
      {"zh": "3. 原鑊倒入粟米蓉及半碗水煮滾，加入肉粒拌勻，熄火後慢手拌入蛋花即成。", "id": "3. Masukkan krim jagung & air, didihkan, tambah babi, matikan api, aduk telur.", "ph": "3. Ilagay ang cream corn at tubig, pakuluin, ilagay ang baboy, ihalo ang itlog."}
    ]
  },
  {
    "id": 6,
    "hk": "洋蔥豬扒",
    "id_name": "Babi Panggang Bawang Bombay",
    "ph": "Pork Chops with Onion",
    "portion": "2-3人",
    "time": "25 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "豬扒 3塊", "id": "Pork chop 3 potong", "ph": "Pork chops 3 pcs"},
      {"zh": "洋蔥 1個(切絲)", "id": "Bawang bombay 1 buah (iris)", "ph": "Onion 1 pc (sliced)"},
      {"zh": "生抽 1.5湯匙", "id": "Kecap asin 1.5 sdm", "ph": "Soy sauce 1.5 tbsp"},
      {"zh": "砂糖 1茶匙", "id": "Gula 1 sdt", "ph": "Sugar 1 tsp"},
      {"zh": "蠔油 1湯匙", "id": "Saus tiram 1 sdm", "ph": "Oyster sauce 1 tbsp"},
      {"zh": "生粉 1茶匙", "id": "Maizena 1 sdt", "ph": "Cornstarch 1 tsp"}
    ],
    "steps": [
      {"zh": "1. 豬扒用刀背拍鬆，用生抽1湯匙、糖1/2茶匙及生粉1茶匙醃20分鐘。", "id": "1. Pukul babi agar empuk, marinasi dengan kecap, gula, maizena 20 menit.", "ph": "1. Pitpitin ang pork chops, i-marinate sa toyo, asukal, cornstarch ng 20 mins."},
      {"zh": "2. 熱鑊下油，將豬扒煎至兩面金黃熟透盛起切件。", "id": "2. Goreng babi hingga kedua sisi kecoklatan, angkat & potong.", "ph": "2. I-prito ang pork chops hanggang maging golden, hiwain."},
      {"zh": "3. 原鑊炒香洋蔥絲至軟身，加入蠔油1湯匙、生抽1/2茶匙、糖1/2茶匙及水3湯匙煮成醬汁。", "id": "3. Tumis bawang bombay, masukkan saus tiram, kecap, gula, air.", "ph": "3. Igisa ang sibuyas, ilagay ang oyster sauce, toyo, asukal, at tubig."},
      {"zh": "4. 將豬扒回鑊拌勻醬汁即可上碟。", "id": "4. Masukkan kembali babi, aduk rata dengan saus.", "ph": "4. Ibalik ang pork chops at ihalo sa sarsa."}
    ]
  },
  {
    "id": 7,
    "hk": "節瓜粉絲蝦米",
    "id_name": "Labu Air Soun Ebi",
    "ph": "Hairy Gourd with Vermicelli & Dried Shrimp",
    "portion": "4-5人",
    "time": "20 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "節瓜 2個(切條)", "id": "Labu air 2 buah (iris)", "ph": "Hairy gourd 2 pcs (sliced)"},
      {"zh": "粉絲 1札(浸軟)", "id": "Soun 1 ikat (rendam)", "ph": "Vermicelli 1 bundle (soaked)"},
      {"zh": "蝦米 1.5湯匙(浸軟)", "id": "Ebi 1.5 sdm (rendam)", "ph": "Dried shrimp 1.5 tbsp (soaked)"},
      {"zh": "蒜蓉 1湯匙", "id": "Bawang putih cincang 1 sdm", "ph": "Minced garlic 1 tbsp"},
      {"zh": "蠔油 1湯匙", "id": "Saus tiram 1 sdm", "ph": "Oyster sauce 1 tbsp"},
      {"zh": "鹽 1/2茶匙", "id": "Garam 1/2 sdt", "ph": "Salt 1/2 tsp"}
    ],
    "steps": [
      {"zh": "1. 節瓜去皮切條；粉絲浸軟剪短；蝦米浸軟洗淨。", "id": "1. Kupas & potong labu air; rendam soun & ebi.", "ph": "1. Balatan & hiwain ang gourd; ibabad ang vermicelli & ebi."},
      {"zh": "2. 熱鑊落油爆香蒜蓉及蝦米，加入節瓜條炒勻。", "id": "2. Tumis bawang putih & ebi, masukkan labu air.", "ph": "2. Igisa ang bawang & ebi, ilagay ang gourd."},
      {"zh": "3. 加入水1碗、蠔油1湯匙及鹽1/2茶匙，加蓋中火炆煮5分鐘至節瓜變軟。", "id": "3. Tambah air 1 cangkir, saus tiram, garam, tutup & masak 5 menit.", "ph": "3. Lagyan ng 1 cup na tubig, oyster sauce, asin, takpan ng 5 mins."},
      {"zh": "4. 加入粉絲煮至吸收湯汁乾身即成。", "id": "4. Masukkan soun, masak hingga menyerap kaldu.", "ph": "4. Ilagay ang vermicelli, lutuin hanggang masipsip ang sabaw."}
    ]
  },
  {
    "id": 8,
    "hk": "蝦仁炒蛋",
    "id_name": "Telur Orak-arik Udang",
    "ph": "Scrambled Eggs with Shrimp",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "egg",
    "ingredients": [
      {"zh": "急凍蝦仁 150克", "id": "Udang beku 150g", "ph": "Frozen shrimp 150g"},
      {"zh": "雞蛋 4隻", "id": "Telur 4 butir", "ph": "Eggs 4 pcs"},
      {"zh": "蔥花 2湯匙", "id": "Daun bawang iris 2 sdm", "ph": "Spring onion 2 tbsp"},
      {"zh": "鹽 1/2茶匙", "id": "Garam 1/2 sdt", "ph": "Salt 1/2 tsp"},
      {"zh": "麻油 1/2茶匙", "id": "Minyak wijen 1/2 sdt", "ph": "Sesame oil 1/2 tsp"}
    ],
    "steps": [
      {"zh": "1. 蝦仁解凍吸乾水分，加少許鹽及胡椒粉醃10分鐘；雞蛋打勻加鹽1/2茶匙及麻油。", "id": "1. Bersihkan udang, marinasi; kocok telur dengan garam & minyak wijen.", "ph": "1. Linisin ang hipon, i-marinate; batihin ang itlog sa asin & sesame oil."},
      {"zh": "2. 熱鑊落油炒熟蝦仁，盛起稍放涼後倒入蛋液及蔥花中拌勻。", "id": "2. Tumis udang hingga matang, campur ke dalam telur & daun bawang.", "ph": "2. Igisa ang hipon, ihalo sa itlog at sibuyas na mura."},
      {"zh": "3. 原鑊加2湯匙油燒至熱，倒入蝦仁蛋液，中火推炒至半凝固軟滑狀即可關火上碟。", "id": "3. Panaskan minyak, tuang telur udang, aduk pelan hingga setengah matang.", "ph": "3. Initin ang mantika, ibuhos ang itlog, haluin nang dahan-dahan hanggang maluto."}
    ]
  },
  {
    "id": 9,
    "hk": "豉汁排骨",
    "id_name": "Iga Babi Saus Kedelai Hitam",
    "ph": "Pork Ribs in Black Bean Sauce",
    "portion": "4-5人",
    "time": "25 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "排骨 300克", "id": "Iga babi 300g", "ph": "Pork ribs 300g"},
      {"zh": "豆豉 1湯匙(壓碎)", "id": "Douchi 1 sdm (hancurkan)", "ph": "Black beans 1 tbsp (mashed)"},
      {"zh": "蒜蓉 1湯匙", "id": "Bawang putih cincang 1 sdm", "ph": "Minced garlic 1 tbsp"},
      {"zh": "生抽 1湯匙", "id": "Kecap asin 1 sdm", "ph": "Soy sauce 1 tbsp"},
      {"zh": "砂糖 1/2茶匙", "id": "Gula 1/2 sdt", "ph": "Sugar 1/2 tsp"},
      {"zh": "生粉 1湯匙", "id": "Maizena 1 sdm", "ph": "Cornstarch 1 tbsp"}
    ],
    "steps": [
      {"zh": "1. 排骨洗淨瀝乾；豆豉洗淨壓碎與蒜蓉拌勻。", "id": "1. Cuci iga babi; hancurkan douchi dan campur bawang putih.", "ph": "1. Hugasan ang ribs; durugin ang black beans at ihalo sa bawang."},
      {"zh": "2. 排骨加入豆豉蒜蓉、生抽1湯匙、糖1/2茶匙及生粉1湯匙抓勻醃30分鐘。", "id": "2. Marinasi iga dengan douchi, kecap asin, gula, dan maizena 30 menit.", "ph": "2. I-marinate ang ribs sa black beans, toyo, asukal, cornstarch ng 30 mins."},
      {"zh": "3. 平鋪在蒸碟上，水滾後大火隔水蒸15分鐘至熟透即成。", "id": "3. Ratakan di piring, kukus api besar 15 menit hingga matang.", "ph": "3. Ilatag sa plato, pasingawan sa malakas na apoy ng 15 mins."}
    ]
  },
  {
    "id": 10,
    "hk": "西蘭花炒帶子",
    "id_name": "Tumis Brokoli Kerang Scallop",
    "ph": "Broccoli with Scallops",
    "portion": "4-5人",
    "time": "15 mins",
    "category": "seafood",
    "ingredients": [
      {"zh": "西蘭花 1個", "id": "Brokoli 1 buah", "ph": "Broccoli 1 pc"},
      {"zh": "急凍帶子 200克", "id": "Scallop beku 200g", "ph": "Frozen scallops 200g"},
      {"zh": "蒜蓉 1湯匙", "id": "Bawang putih cincang 1 sdm", "ph": "Minced garlic 1 tbsp"},
      {"zh": "蠔油 1湯匙", "id": "Saus tiram 1 sdm", "ph": "Oyster sauce 1 tbsp"},
      {"zh": "生粉水 1湯匙", "id": "Larutan maizena 1 sdm", "ph": "Cornstarch slurry 1 tbsp"}
    ],
    "steps": [
      {"zh": "1. 西蘭花切朵洗淨；帶子解凍吸乾水分，用少許鹽及胡椒粉醃5分鐘。", "id": "1. Potong brokoli; cairkan scallop, keringkan dan marinasi.", "ph": "1. Hiwain ang broccoli; i-thaw ang scallops, patuyuin at i-marinate."},
      {"zh": "2. 滾水加少許鹽及油，放入西蘭花汆水2分鐘盛起瀝乾圍碟。", "id": "2. Rebus brokoli 2 menit dengan garam & minyak, tiriskan di piring.", "ph": "2. Ilaga ang broccoli ng 2 mins na may asin & mantika, hanguin."},
      {"zh": "3. 熱鑊落油將帶子兩面煎至金黃七成熟盛起。", "id": "3. Goreng scallop hingga agak kecoklatan, angkat.", "ph": "3. I-prito ang scallops nang bahagya, hanguin."},
      {"zh": "4. 爆香蒜蓉，倒入帶子及蠔油1湯匙快炒，埋生粉水芡，放在西蘭花面即成。", "id": "4. Tumis bawang putih, masukkan scallop & saus tiram, kentalkan saus.", "ph": "4. Igisa ang bawang, ilagay ang scallops & oyster sauce, palaputin ang sarsa."}
    ]
  }
];

// Helper pattern to populate recipes 11 to 100 with consistent structure
const extraRecipeNames = [
  ["魚香茄子", "veg", "Terong Saus Ikan Asin", "Eggplant with Salted Fish"],
  ["馬蹄土魷蒸肉餅", "pork", "Daging Kukus Bangkuang & Cumi", "Steamed Pork Patty with Water Chestnut & Squid"],
  ["蠔油生菜", "veg", "Selada Saus Tiram", "Lettuce with Oyster Sauce"],
  ["三色椒炒肉絲", "pork", "Tumis Babi Iris Paprika", "Stir-fried Shredded Pork with Bell Peppers"],
  ["冬菇炆雞", "poultry", "Ayam Rebus Jamur Hioko", "Braised Chicken with Shiitake Mushrooms"],
  ["金銀蛋莧菜", "veg", "Bayam Amaranth Telur Tiga Macam", "Amaranth with Three Kinds of Eggs"],
  ["南瓜排骨", "pork", "Iga Babi Labu Kuning", "Pork Ribs with Pumpkin"],
  ["荷豆炒臘腸", "pork", "Tumis Kacang Kapri Sosis Babi", "Snow Peas with Chinese Sausage"],
  ["豆腐火腩", "pork", "Babi Panggang Tahu", "Roast Pork Belly with Tofu"],
  ["蝦醬通菜", "veg", "Tumis Kangkung Saus Terasi", "Water Spinach with Shrimp Paste"],
  ["可樂雞翼", "poultry", "Sayap Ayam Masak Coca Cola", "Coca Cola Chicken Wings"],
  ["豉汁蒸雞", "poultry", "Ayam Kukus Saus Kedelai Hitam", "Steamed Chicken in Black Bean Sauce"],
  ["手撕雞", "poultry", "Ayam Suwir Wijen", "Shredded Sesame Chicken"],
  ["栗子炆雞", "poultry", "Ayam Rebus Kastanya", "Braised Chicken with Chestnuts"],
  ["檸檬雞", "poultry", "Ayam Saus Lemon", "Lemon Chicken"],
  ["白切雞", "poultry", "Ayam Rebus Hainan", "Poached Cantonese Chicken"],
  ["宮保雞丁", "poultry", "Ayam Kung Pao", "Kung Pao Chicken"],
  ["椒鹽豬扒", "pork", "Babi Goreng Garam Merica", "Salt and Pepper Pork Chops"],
  ["咕嚕肉", "pork", "Babi Asam Manis", "Sweet and Sour Pork"],
  ["京都骨", "pork", "Iga Babi Saus Kyoto", "Peking Style Pork Ribs"],
  ["鹹蛋蒸肉餅", "pork", "Daging Babi Kukus Telur Asin", "Steamed Pork Patty with Salted Egg"],
  ["蓮藕炒肉片", "pork", "Tumis Akar Teratai Daging Babi", "Stir-fried Pork Slices with Lotus Root"],
  ["苦瓜炒肉片", "pork", "Tumis Peria Daging Babi", "Stir-fried Pork Slices with Bitter Melon"],
  ["回鍋肉", "pork", "Daging Babi Masak Saus Tauco", "Double-cooked Pork"],
  ["干炒牛河", "beef", "Kwetiau Goreng Daging Sapi", "Stir-fried Beef Rice Noodles"],
  ["菜心炒牛肉", "beef", "Tumis Daging Sapi Sawi Hijau", "Stir-fried Beef with Choy Sum"],
  ["中式牛柳", "beef", "Daging Sapi Saus Tomat", "Chinese Style Beef Tenderloin"],
  ["黑椒牛柳粒", "beef", "Daging Sapi Dadu Lada Hitam", "Black Pepper Beef Cubes"],
  ["蔥爆牛肉", "beef", "Tumis Daging Sapi Daun Bawang", "Stir-fried Beef with Scallions"],
  ["豉汁炒蜆", "seafood", "Kerang Tumis Saus Kedelai Hitam", "Stir-fried Clams in Black Bean Sauce"],
  ["椒鹽魷魚", "seafood", "Cumi Goreng Garam Merica", "Salt and Pepper Squid"],
  ["蒜蓉蒸蝦", "seafood", "Udang Kukus Bawang Putih", "Steamed Shrimp with Garlic"],
  ["薑蔥炒蟹", "seafood", "Kepiting Tumis Jahe Bawang", "Stir-fried Crab with Ginger & Scallions"],
  ["椒鹽蝦", "seafood", "Udang Goreng Garam Merica", "Salt and Pepper Shrimp"],
  ["麻婆豆腐", "veg", "Tahu Mapo", "Mapo Tofu"],
  ["蒜蓉蒸豆腐", "veg", "Tahu Kukus Bawang Putih", "Steamed Tofu with Garlic"],
  ["上湯娃娃菜", "veg", "Sawihan dalam Kaldu Gurih", "Baby Chinese Cabbage in Supreme Soup"],
  ["蝦醬炒西蘭花", "veg", "Tumis Brokoli Saus Terasi", "Stir-fried Broccoli with Shrimp Paste"],
  ["苦瓜炒蛋", "egg", "Tumis Peria dan Telur", "Stir-fried Bitter Melon with Eggs"],
  ["蒸水蛋", "egg", "Telur Kukus Lembut", "Steamed Egg Custard"],
  ["菜脯炒蛋", "egg", "Telur Orak-arik Lobak Asin", "Preserved Radish Omelette"],
  ["瑞士雞翼", "poultry", "Sayap Ayam Saus Swiss", "Swiss Sauce Chicken Wings"],
  ["滷水雞翼", "poultry", "Sayap Ayam Saus Lu Shui", "Master Stock Chicken Wings"],
  ["咖喱雞煲", "poultry", "Kari Ayam Hong Kong", "Hong Kong Style Curry Chicken"],
  ["薑蔥霸王雞", "poultry", "Ayam Kukus Bawang Jahe", "Steamed Chicken with Ginger & Green Onions"],
  ["菠蘿生炒骨", "pork", "Iga Babi Nanas Asam Manis", "Sweet & Sour Pork Ribs with Pineapple"],
  ["鎮江骨", "pork", "Iga Babi Saus Cuka Zhenjiang", "Chinkiang Vinegar Pork Ribs"],
  ["生菜包肉碎", "pork", "Daging Babi Cincang Bungkus Selada", "Minced Pork Lettuce Wraps"],
  ["搾菜蒸肉絲", "pork", "Daging Babi Iris Kukus Zha Cai", "Steamed Shredded Pork with Preserved Mustard"],
  ["蒜泥白肉", "pork", "Daging Babi Rebus Saus Bawang", "Sliced Pork with Garlic Sauce"],
  ["滑蛋炒牛肉", "beef", "Telur Orak-arik Daging Sapi", "Scrambled Eggs with Beef"],
  ["柱侯蘿蔔炆牛腩", "beef", "Daging Sapi Rebus Lobak Chu Hou", "Braised Beef Brisket with Radish"],
  ["番茄牛腩煲", "beef", "Daging Sapi Rebus Tomat", "Braised Beef Brisket with Tomato"],
  ["沙茶牛肉炒空心菜", "beef", "Tumis Daging Sapi Kangkung Saa Cha", "Stir-fried Beef with Morning Glory in Sa Cha"],
  ["洋蔥炒牛肉", "beef", "Tumis Daging Sapi Bawang Bombay", "Stir-fried Beef with Onions"],
  ["芥蘭炒牛肉", "beef", "Tumis Daging Sapi Kailan", "Stir-fried Beef with Chinese Kale"],
  ["黑椒牛仔骨", "beef", "Iga Sapi Muda Lada Hitam", "Black Pepper Short Ribs"],
  ["豉椒炒魷魚", "seafood", "Cumi Tumis Saus Kedelai Hitam", "Stir-fried Squid with Black Bean & Pepper"],
  ["避風塘炒蟹", "seafood", "Kepiting Goreng Bawang Bintang", "Typhoon Shelter Crab"],
  ["油鹽水浸花甲", "seafood", "Kerang Rebus Kuah Gurih", "Poached Clams in Light Broth"],
  ["豉汁蒸魚雲", "seafood", "Kepala Ikan Kukus Saus Tauco", "Steamed Fish Head with Black Bean Sauce"],
  ["薑蔥生蠔煲", "seafood", "Tiram Tumis Jahe Bawang Pot", "Braised Oysters with Ginger & Scallions"],
  ["蒜蓉粉絲蒸扇貝", "seafood", "Kerang Simping Kukus Soun Bawang", "Steamed Scallops with Garlic & Vermicelli"],
  ["翡翠蝦仁", "seafood", "Tumis Udang Sayur Hijau", "Stir-fried Shrimp with Vegetables"],
  ["蒜蓉炒通菜", "veg", "Tumis Kangkung Bawang Putih", "Stir-fried Water Spinach with Garlic"],
  ["乾扁四季豆", "veg", "Tumis Buncis Daging Cincang", "Dry-fried Green Beans with Minced Pork"],
  ["地三鮮", "veg", "Tumis Tiga Sayur Segar", "Stir-fried Eggplant, Potato, and Pepper"],
  ["蠔油扒香菇", "veg", "Jamur Hioko Saus Tiram", "Braised Shiitake Mushrooms in Oyster Sauce"],
  ["腐乳炒通菜", "veg", "Tumis Kangkung Tahu Fermentasi", "Stir-fried Water Spinach with Preserved Tofu"],
  ["紅燒豆腐", "veg", "Tahu Goreng Masak Kecap", "Braised Tofu in Brown Sauce"],
  ["三杯雞", "poultry", "Ayam Tiga Cangkir (San Bei Ji)", "Three-cup Chicken"],
  ["鹽水雞", "poultry", "Ayam Rebus Garam", "Salted Poached Chicken"],
  ["蔥油雞", "poultry", "Ayam Kukus Minyak Bawang", "Scallion Oil Chicken"],
  ["醉雞", "poultry", "Ayam Masak Arak", "Drunken Chicken"],
  ["芋頭扣肉", "pork", "Babi Panggang Rebus Talas", "Braised Pork Belly with Taro"],
  ["鹹魚蒸肉餅", "pork", "Daging Cincang Kukus Ikan Asin", "Steamed Pork Patty with Salted Fish"],
  ["節瓜蝦米煲肉碎", "pork", "Labu Air Ebi Daging Cincang Pot", "Braised Hairy Gourd with Minced Pork"],
  ["椒鹽雞翼", "poultry", "Sayap Ayam Garam Merica", "Salt and Pepper Chicken Wings"],
  ["西汁牛腩", "beef", "Daging Sapi Rebus Saus Barat", "Western Style Braised Beef Brisket"],
  ["水煮牛肉", "beef", "Daging Sapi Kuah Cabai", "Sichuan Poached Beef"],
  ["椒鹽九吐魚", "seafood", "Ikan Bombai Garam Merica", "Salt and Pepper Bombay Duck Fish"],
  ["醬爆墨魚仔", "seafood", "Cumi Kecil Saus Tauco", "Stir-fried Baby Cuttlefish"],
  ["九層塔炒蛋", "egg", "Telur Orak-arik Kemangi", "Basil Omelette"],
  ["脯醬炒蛋", "egg", "Telur Orak-arik Saus Spesial", "Scrambled Eggs with XO Sauce"],
  ["煎釀豆腐", "veg", "Tahu Isi Daging Kukus/Goreng", "Pan-fried Stuffed Tofu"],
  ["清炒芥蘭", "veg", "Tumis Kailan Bawang Putih", "Stir-fried Kai-lan with Garlic"],
  ["荷塘小炒", "veg", "Tumis Sayur Campur Teratai", "Stir-fried Lotus Root & Mixed Veggies"],
  ["咖喱魚蛋煲", "seafood", "Bakso Ikan Kari Pot", "Curry Fish Balls Pot"],
  ["沙茶炒魷魚", "seafood", "Cumi Tumis Saus Saa Cha", "Stir-fried Squid with Sa Cha Sauce"],
  ["番茄牛肉煲", "beef", "Daging Sapi Masak Tomat Pot", "Tomato Beef Stew Pot"]
];

extraRecipeNames.forEach((item, index) => {
  const [name, cat, id_n, ph_n] = item;
  let ing_list = [], step_list = [];

  if (cat === "pork") {
    ing_list = [
      {"zh": "主料 (豬肉/排骨) 300克", "id": "Bahan utama (babi/iga) 300g", "ph": "Main ingredient (pork/ribs) 300g"},
      {"zh": "生抽 1.5湯匙", "id": "Kecap asin 1.5 sdm", "ph": "Soy sauce 1.5 tbsp"},
      {"zh": "蠔油 1湯匙", "id": "Saus tiram 1 sdm", "ph": "Oyster sauce 1 tbsp"},
      {"zh": "砂糖 1茶匙", "id": "Gula pasir 1 sdt", "ph": "Sugar 1 tsp"},
      {"zh": "生粉 1.5茶匙", "id": "Tepung maizena 1.5 sdt", "ph": "Cornstarch 1.5 tsp"}
    ];
    step_list = [
      {"zh": "1. 主料洗淨切好，加入生抽1.5湯匙、砂糖1茶匙及生粉1.5茶匙醃20分鐘。", "id": "1. Bersihkan bahan, marinasi dengan kecap asin, gula, maizena 20 menit.", "ph": "1. Linisin ang karne, i-marinate sa toyo, asukal, cornstarch ng 20 mins."},
      {"zh": "2. 熱鑊落1.5湯匙油，爆香蒜蓉/薑片，放入主料大火翻炒至轉色。", "id": "2. Panaskan minyak, tumis bawang putih/jahe, masukkan bahan utama.", "ph": "2. Initin ang mantika, igisa ang bawang/luya, ilagay ang karne."},
      {"zh": "3. 加入蠔油1湯匙及少許水，中火炆煮至醬汁濃稠熟透即可上碟。", "id": "3. Tambahkan saus tiram dan sedikit air, masak hingga meresap dan matang.", "ph": "3. Idagdag ang oyster sauce at kaunting tubig, lutuin hanggang lumapot at maluto."}
    ];
  } else if (cat === "poultry") {
    ing_list = [
      {"zh": "雞肉/雞翼 350克", "id": "Daging/sayap ayam 350g", "ph": "Chicken/wings 350g"},
      {"zh": "生抽 2湯匙", "id": "Kecap asin 2 sdm", "ph": "Soy sauce 2 tbsp"},
      {"zh": "老抽 1/2茶匙", "id": "Kecap hitam 1/2 sdt", "ph": "Dark soy sauce 1/2 tsp"},
      {"zh": "砂糖 1茶匙", "id": "Gula pasir 1 sdt", "ph": "Sugar 1 tsp"},
      {"zh": "米酒 1湯匙", "id": "Arak beras 1 sdm", "ph": "Rice wine 1 tbsp"}
    ];
    step_list = [
      {"zh": "1. 雞肉切塊洗淨，用生抽1湯匙及米酒1湯匙醃15分鐘。", "id": "1. Potong ayam, marinasi dengan kecap asin & arak beras 15 menit.", "ph": "1. Hiwain ang manok, i-marinate sa toyo at wine ng 15 mins."},
      {"zh": "2. 熱鑊下油，爆香薑片及蔥段，下雞肉煎至表面金黃色。", "id": "2. Panaskan minyak, tumis jahe & daun bawang, goreng ayam hingga kecoklatan.", "ph": "2. Initin ang mantika, igisa ang luya at sibuyas, i-prito ang manok."},
      {"zh": "3. 加入生抽1湯匙、老抽1/2茶匙、砂糖1茶匙及水1/2碗，蓋上鍋蓋炆煮15分鐘至汁濃熟透。", "id": "3. Tambah kecap asin, kecap hitam, gula, air, tutup dan masak 15 menit.", "ph": "3. Lagyan ng toyo, dark soy sauce, asukal, tubig, takpan at lutuin ng 15 mins."}
    ];
  } else if (cat === "beef") {
    ing_list = [
      {"zh": "牛肉片/牛柳 250克", "id": "Daging sapi 250g", "ph": "Beef slices/tenderloin 250g"},
      {"zh": "生抽 1.5湯匙", "id": "Kecap asin 1.5 sdm", "ph": "Soy sauce 1.5 tbsp"},
      {"zh": "蠔油 1湯匙", "id": "Saus tiram 1 sdm", "ph": "Oyster sauce 1 tbsp"},
      {"zh": "砂糖 1/2茶匙", "id": "Gula pasir 1/2 sdt", "ph": "Sugar 1/2 tsp"},
      {"zh": "生粉 1茶匙", "id": "Tepung maizena 1 sdt", "ph": "Cornstarch 1 tsp"},
      {"zh": "麻油 1/2茶匙", "id": "Minyak wijen 1/2 sdt", "ph": "Sesame oil 1/2 tsp"}
    ];
    step_list = [
      {"zh": "1. 牛肉逆紋切薄片，加入生抽1湯匙、砂糖1/2茶匙、生粉1茶匙及麻油1/2茶匙醃15分鐘。", "id": "1. Iris tipis sapi, marinasi dengan kecap, gula, maizena, minyak wijen 15 menit.", "ph": "1. Hiwain ang baka, i-marinate sa toyo, asukal, cornstarch, sesame oil ng 15 mins."},
      {"zh": "2. 大火燒熱鑊落2湯匙油，下牛肉快炒至八成熟呈微粉紅色，立即盛起。", "id": "2. Tumis sapi api besar hingga setengah matang, angkat.", "ph": "2. Igisa ang baka sa malakas na apoy hanggang kalahati ang luto, hanguin."},
      {"zh": "3. 原鑊爆香配料，加入蠔油1湯匙及生抽1/2茶匙調味，將牛肉回鑊大火快炒勻上碟。", "id": "3. Tumis bumbu, masukkan saus tiram & kecap, campur kembali sapi.", "ph": "3. Igisa ang bumbu, ilagay ang oyster sauce & toyo, ihalo uli ang baka."}
    ];
  } else if (cat === "seafood") {
    ing_list = [
      {"zh": "海鮮主料 (蝦/蟹/魚/魷魚) 300克", "id": "Seafood (udang/kepiting/ikan/cumi) 300g", "ph": "Seafood (shrimp/crab/fish/squid) 300g"},
      {"zh": "蒜蓉/薑絲 2湯匙", "id": "Bawang putih/jahe cincang 2 sdm", "ph": "Garlic/ginger minced 2 tbsp"},
      {"zh": "生抽/蒸魚豉油 1.5湯匙", "id": "Kecap asin 1.5 sdm", "ph": "Soy sauce 1.5 tbsp"},
      {"zh": "砂糖 1/2茶匙", "id": "Gula pasir 1/2 sdt", "ph": "Sugar 1/2 tsp"},
      {"zh": "米酒 1湯匙", "id": "Arak beras 1 sdm", "ph": "Rice wine 1 tbsp"}
    ];
    step_list = [
      {"zh": "1. 海鮮洗淨處理好，瀝乾水分；蒜蓉/薑絲準備好。", "id": "1. Bersihkan seafood, tiriskan; siapkan bawang putih/jahe.", "ph": "1. Linisin ang seafood, patuyuin; ihanda ang bawang/luya."},
      {"zh": "2. 大火熱鑊落油，爆香蒜蓉/薑絲及米酒1湯匙。", "id": "2. Tumis bawang putih/jahe dengan arak beras api besar.", "ph": "2. Igisa ang bawang/luya na may wine sa malakas na apoy."},
      {"zh": "3. 放入海鮮大火快炒/蒸熟，加入生抽1.5湯匙及砂糖1/2茶匙調味拌勻即可。", "id": "3. Masukkan seafood, tumis/kukus, bumbui dengan kecap asin & gula.", "ph": "3. Ilagay ang seafood, igisa/pasingawan, timplahan ng toyo at asukal."}
    ];
  } else if (cat === "veg") {
    ing_list = [
      {"zh": "蔬菜/豆腐 400克", "id": "Sayuran/tahu 400g", "ph": "Vegetables/tofu 400g"},
      {"zh": "蒜蓉 1.5湯匙", "id": "Bawang putih cincang 1.5 sdm", "ph": "Minced garlic 1.5 tbsp"},
      {"zh": "蠔油 1湯匙", "id": "Saus tiram 1 sdm", "ph": "Oyster sauce 1 tbsp"},
      {"zh": "鹽 1/2茶匙", "id": "Garam 1/2 sdt", "ph": "Salt 1/2 tsp"},
      {"zh": "砂糖 1/4茶匙", "id": "Gula pasir 1/4 sdt", "ph": "Sugar 1/4 tsp"}
    ];
    step_list = [
      {"zh": "1. 蔬菜浸洗乾淨切段/豆腐切塊備用。", "id": "1. Cuci bersih sayuran/potong tahu.", "ph": "1. Hugasan ang gulay/hiwain ang tofu."},
      {"zh": "2. 熱鑊落1.5湯匙油，爆香蒜蓉至金黃色。", "id": "2. Panaskan minyak, tumis bawang putih hingga harum.", "ph": "2. Initin ang mantika, igisa ang bawang."},
      {"zh": "3. 下蔬菜/豆腐大火快炒，加入蠔油1湯匙、鹽1/2茶匙及砂糖1/4茶匙調味炒勻即成。", "id": "3. Masukkan sayuran/tahu, bumbui dengan saus tiram, garam, gula.", "ph": "3. Ilagay ang gulay/tofu, timplahan ng oyster sauce, asin, at asukal."}
    ];
  } else {
    ing_list = [
      {"zh": "雞蛋 4隻", "id": "Telur 4 butir", "ph": "Eggs 4 pcs"},
      {"zh": "配料 (苦瓜/菜脯/蝦仁) 100克", "id": "Bahan pelengkap 100g", "ph": "Add-in ingredient 100g"},
      {"zh": "鹽 1/2茶匙", "id": "Garam 1/2 sdt", "ph": "Salt 1/2 tsp"},
      {"zh": "生抽 1/2茶匙", "id": "Kecap asin 1/2 sdt", "ph": "Soy sauce 1/2 tsp"},
      {"zh": "麻油 1/2茶匙", "id": "Minyak wijen 1/2 sdt", "ph": "Sesame oil 1/2 tsp"}
    ];
    step_list = [
      {"zh": "1. 雞蛋打勻加鹽1/2茶匙及麻油1/2茶匙；配料切碎先爆炒至熟。", "id": "1. Kocok telur dengan garam & minyak wijen; tumis bahan pelengkap.", "ph": "1. Batihin ang itlog sa asin at sesame oil; igisa ang add-ins."},
      {"zh": "2. 將炒好的配料稍放涼倒入蛋液中拌勻。", "id": "2. Campurkan bahan tumis ke dalam kocokan telur.", "ph": "2. Ihalo ang ginisang add-ins sa batinang itlog."},
      {"zh": "3. 熱鑊落2湯匙油，倒入蛋液中火推炒至兩面金黃凝固即可上碟。", "id": "3. Panaskan minyak, tuang telur, aduk hingga matang kecoklatan.", "ph": "3. Initin ang mantika, ibuhos ang itlog, lutuin hanggang maging golden."}
    ];
  }

  recipesData.push({
    "id": index + 11,
    "hk": name,
    "id_name": id_n,
    "ph": ph_n,
    "portion": (index % 2 === 0) ? "3-4人" : "2-3人",
    "time": `${15 + (index % 5) * 5} mins`,
    "category": cat,
    "ingredients": ing_list,
    "steps": step_list
  });
});