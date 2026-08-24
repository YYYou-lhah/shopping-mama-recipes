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
      {"zh": "番茄 3個", "id": "Tomat 3 buah", "ph": "Kamatis 3 piraso"},
      {"zh": "雞蛋 3隻", "id": "Telur 3 butir", "ph": "Itlog 3 piraso"},
      {"zh": "鹽 1茶匙", "id": "Garam 1 sdt", "ph": "Asin 1 kutsarita"},
      {"zh": "糖 2茶匙", "id": "Gula 2 sdt", "ph": "Asukal 2 kutsarita"}
    ],
    "steps": [
      {"zh": "番茄切塊，雞蛋打勻備用。", "id": "Potong tomat, kocok telur.", "ph": "Hiwain ang kamatis, batihin ang itlog."},
      {"zh": "燒熱鑊落油，先炒熟雞蛋盛起。", "id": "Panaskan wajan dengan minyak, goreng telur lalu angkat.", "ph": "Initin ang kawali, lutuin ang itlog at itabi."},
      {"zh": "原鑊加少許油，炒軟番茄，加入鹽和糖調味。", "id": "Tumis tomat hingga layu, bumbui dengan garam dan gula.", "ph": "Igisa ang kamatis hanggang lumambot, timplahan."},
      {"zh": "將雞蛋回鑊炒勻即成。", "id": "Masukkan kembali telur, aduk rata.", "ph": "Ibalik ang itlog sa kawali, haluin."}
    ]
  },
  {
    "id": 2,
    "hk": "梅菜蒸肉餅",
    "id_name": "Daging Babi Cincang Kukus dengan Sayur Asin",
    "ph": "Pinasingaw na Baboy na may Preserved Cabbage",
    "portion": "4-5人",
    "time": "30 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "半肥瘦豬肉碎 300克", "id": "Daging babi giling 300g", "ph": "Giniling na baboy 300g"},
      {"zh": "甜梅菜 1棵", "id": "Sayur asin manis 1 ikat", "ph": "Sweet preserved cabbage 1 piraso"},
      {"zh": "生抽 1湯匙", "id": "Kecap asin 1 sdm", "ph": "Toyo 1 kutsara"}
    ],
    "steps": [
      {"zh": "梅菜浸洗乾淨切碎，與豬肉碎及調味拌勻。", "id": "Cuci sayur asin, cincang, campur dengan daging.", "ph": "Hugasan ang preserved cabbage, tadtarin, ihalo sa karne."},
      {"zh": "鋪平在碟上，大火蒸約 15 分鐘至熟透。", "id": "Ratakan di piring, kukus api besar 15 menit.", "ph": "Ilatag sa plato, pasingawan ng 15 minuto."}
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
      {"zh": "蒜蓉 2湯匙", "id": "Bawang putih cincang 2 sdm", "ph": "Tinadtad na bawang 2 kutsara"}
    ],
    "steps": [
      {"zh": "菜心洗淨切段，爆香蒜蓉後下菜心大火快炒熟即成。", "id": "Tumis bawang putih, masukkan sawi hijau, tumis cepat.", "ph": "Igisa ang bawang, ilagay ang choy sum, igisa nang mabilis."}
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
      {"zh": "新鮮魚 1條", "id": "Ikan segar 1 ekor", "ph": "Fresh fish 1 piraso"},
      {"zh": "蔥薑絲 適量", "id": "Irisan daun bawang & jahe secukupnya", "ph": "Ginger & spring onion strips"}
    ],
    "steps": [
      {"zh": "魚鋪上薑片大火蒸 8-10 分鐘，倒去魚水，鋪蔥絲淋滾油及蒸魚豉油。", "id": "Kukus ikan 8-10 menit, buang airnya, taburi daun bawang, siram minyak panas & kecap ikan.", "ph": "Pasingawan ang isda ng 8-10 mins, itapon ang sabaw, lagyan ng sibuyas at ibuhos ang mainit na mantika at toyo."}
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
      {"zh": "豬肉粒 200克", "id": "Daging babi potong dadu 200g", "ph": "Diced pork 200g"},
      {"zh": "粟米蓉 1罐", "id": "Krim jagung 1 kaleng", "ph": "Cream style corn 1 can"}
    ],
    "steps": [
      {"zh": "炒熟肉粒，倒入粟米蓉及少許水煮滾，加入蛋花即成。", "id": "Tumis daging, masukkan krim jagung & air, tambahkan kocokan telur.", "ph": "Lutuin ang baboy, ilagay ang cream corn at tubig, ihalo ang bati na itlog."}
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
      {"zh": "豬扒 3塊", "id": "Pork chop 3 potong", "ph": "Pork chops 3 piraso"},
      {"zh": "洋蔥 1個", "id": "Bawang bombay 1 buah", "ph": "Sibuyas 1 piraso"}
    ],
    "steps": [
      {"zh": "煎香豬扒至熟盛起，原鑊炒香洋蔥，調味後將豬扒回鑊拌勻。", "id": "Goreng babi hingga matang, tumis bawang bombay, campurkan kembali babi.", "ph": "I-prito ang pork chops, igisa ang sibuyas, ihalo uli ang baboy sa sarsa."}
    ]
  },
  {
    "id": 7,
    "hk": "節瓜粉絲蝦米",
    "id_name": "Labu Air Soun Ebi",
    "ph": "Hairy Gourd with Vermicelli and Dried Shrimp",
    "portion": "4-5人",
    "time": "20 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "節瓜 2個", "id": "Labu air 2 buah", "ph": "Hairy gourd 2 piraso"},
      {"zh": "粉絲 1札", "id": "Soun 1 ikat", "ph": "Vermicelli 1 bundle"},
      {"zh": "蝦米 1湯匙", "id": "Ebi 1 sdm", "ph": "Dried shrimp 1 kutsara"}
    ],
    "steps": [
      {"zh": "爆香蝦米及節瓜，加湯炆軟，最後加入粉絲煮至吸汁。", "id": "Tumis ebi & labu, tambah air/kaldu, masukkan soun hingga meresap.", "ph": "Igisa ang ebi at kalabasa, lagyan ng sabaw, ilagay ang vermicelli."}
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
      {"zh": "蝦仁 150克", "id": "Udang 150g", "ph": "Shrimp 150g"},
      {"zh": "雞蛋 4隻", "id": "Telur 4 butir", "ph": "Itlog 4 piraso"}
    ],
    "steps": [
      {"zh": "蝦仁炒熟後加入蛋液中，熱鑊中火炒至軟滑凝固即可。", "id": "Tumis udang, campur ke kocokan telur, orak-arik hingga setengah matang.", "ph": "Lutuin ang hipon, ihalo sa itlog, lutuin sa katamtamang apoy."}
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
      {"zh": "豆豉蒜蓉 1湯匙", "id": "Douchi & bawang putih 1 sdm", "ph": "Black bean & garlic 1 kutsara"}
    ],
    "steps": [
      {"zh": "排骨加入豆豉蒜蓉及調味拌勻，平鋪碟上大火蒸 15 分鐘。", "id": "Campur iga dengan douchi & bawang putih, kukus api besar 15 menit.", "ph": "I-marinate ang ribs sa black bean at bawang, pasingawan ng 15 minuto."}
    ]
  },
  {
    "id": 10,
    "hk": "西蘭花炒帶子",
    "id_name": "Tumis Brokoli Kerang",
    "ph": "Broccoli with Scallops",
    "portion": "4-5人",
    "time": "15 mins",
    "category": "seafood",
    "ingredients": [
      {"zh": "西蘭花 1個", "id": "Brokoli 1 buah", "ph": "Broccoli 1 piraso"},
      {"zh": "帶子 200克", "id": "Kerang scallop 200g", "ph": "Scallops 200g"}
    ],
    "steps": [
      {"zh": "西蘭花汆水，帶子煎熟，爆香蒜蓉後將兩者大火炒勻即成。", "id": "Rebus brokoli, goreng kerang, tumis bawang putih lalu campurkan semua.", "ph": "Pakuluan ang broccoli, lutuin ang scallops, igisa sa bawang at ihalo."}
    ]
  },
  {
    "id": 11,
    "hk": "魚香茄子",
    "id_name": "Terong Saus Ikan Asin",
    "ph": "Eggplant with Salted Fish",
    "portion": "2-3人",
    "time": "25 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "茄子 2條", "id": "Terong 2 buah", "ph": "Eggplant 2 piraso"},
      {"zh": "鹹魚粒及肉碎 適量", "id": "Ikan asin & daging giling secukupnya", "ph": "Salted fish & minced pork"}
    ],
    "steps": [
      {"zh": "茄子煎軟盛起，爆香鹹魚粒及肉碎，加入茄子及醬汁炆透。", "id": "Goreng terong, tumis ikan asin & daging giling, masukkan terong & saus.", "ph": "I-prito ang eggplant, igisa ang salted fish at karne, ilagay ang eggplant."}
    ]
  },
  {
    "id": 12,
    "hk": "馬蹄土魷蒸肉餅",
    "id_name": "Daging Kukus Bangkuang & Cumi",
    "ph": "Steamed Pork Patty with Water Chestnut & Squid",
    "portion": "4-5人",
    "time": "25 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "豬肉碎 300克", "id": "Daging babi giling 300g", "ph": "Minced pork 300g"},
      {"zh": "馬蹄及乾魷魚粒 適量", "id": "Bangkuang & cumi kering secukupnya", "ph": "Water chestnut & dried squid"}
    ],
    "steps": [
      {"zh": "肉碎加入馬蹄粒及魷魚粒攪至起膠，平鋪碟上蒸 15 分鐘。", "id": "Campur daging dengan bangkuang & cumi, ratakan lalu kukus 15 menit.", "ph": "Haluin ang karne, water chestnut, at squid, pasingawan ng 15 minuto."}
    ]
  },
  {
    "id": 13,
    "hk": "蠔油生菜",
    "id_name": "Selada Saus Tiram",
    "ph": "Lettuce with Oyster Sauce",
    "portion": "2-3人",
    "time": "5 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "生菜 1斤", "id": "Selada 600g", "ph": "Lettuce 600g"},
      {"zh": "蠔油蒜蓉 適量", "id": "Saus tiram & bawang putih secukupnya", "ph": "Oyster sauce & garlic"}
    ],
    "steps": [
      {"zh": "生菜滾水加油鹽灼 30 秒撈起，淋上爆香的蒜蓉蠔油汁。", "id": "Rebus selada 30 detik, tiriskan, siram saus tiram bawang putih.", "ph": "Ilaga ang lettuce ng 30 segundo, ibuhos ang ginisang bawang at oyster sauce."}
    ]
  },
  {
    "id": 14,
    "hk": "三色椒炒肉絲",
    "id_name": "Tumis Babi Iris Paprika Tiga Warna",
    "ph": "Stir-fried Shredded Pork with Bell Peppers",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "瘦肉絲 200克", "id": "Daging babi iris 200g", "ph": "Shredded pork 200g"},
      {"zh": "三色甜椒 各半個", "id": "Paprika 3 warna", "ph": "3 color bell peppers"}
    ],
    "steps": [
      {"zh": "炒熟肉絲盛起，爆香三色椒絲後將肉絲回鑊快炒即成。", "id": "Tumis daging iris, tumis paprika, campurkan kembali.", "ph": "Lutuin ang karne, igisa ang bell peppers, ihalo uli ang karne."}
    ]
  },
  {
    "id": 15,
    "hk": "冬菇炆雞",
    "id_name": "Ayam Rebus Jamur Hioko",
    "ph": "Braised Chicken with Shiitake Mushrooms",
    "portion": "4-5人",
    "time": "35 mins",
    "category": "poultry",
    "ingredients": [
      {"zh": "雞 半隻", "id": "Ayam 1/2 ekor", "ph": "Chicken 1/2 piece"},
      {"zh": "乾冬菇 6隻", "id": "Jamur hioko 6 buah", "ph": "Shiitake mushrooms 6 pieces"}
    ],
    "steps": [
      {"zh": "煎香雞件及爆香冬菇，倒入冬菇水及調味細火炆 20 分鐘。", "id": "Goreng ayam & jamur, tambah air jamur & bumbu, masak 20 menit.", "ph": "Igisa ang manok at mushrooms, lagyan ng tubig at iluto ng 20 mins."}
    ]
  },
  {
    "id": 16,
    "hk": "金銀蛋莧菜",
    "id_name": "Bayam Amaranth Telur Tiga Macam",
    "ph": "Amaranth with Three Kinds of Eggs",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "莧菜 1斤", "id": "Bayam amaranth 600g", "ph": "Amaranth 600g"},
      {"zh": "鹹蛋及皮蛋 各1隻", "id": "Telur asin & telur bitan 1 butir", "ph": "Salted egg & century egg 1 piece"}
    ],
    "steps": [
      {"zh": "爆香蒜頭加入上湯，放入莧菜煮腍，最後加入皮蛋鹹蛋粒煮滾。", "id": "Tumis bawang putih & kaldu, masukkan bayam, tambah telur asin & bitan.", "ph": "Igisa ang bawang at kaldu, ilagay ang amaranth, idagdag ang mga itlog."}
    ]
  },
  {
    "id": 17,
    "hk": "南瓜排骨",
    "id_name": "Iga Babi Labu Kuning",
    "ph": "Pork Ribs with Pumpkin",
    "portion": "4-5人",
    "time": "30 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "排骨 300克", "id": "Iga babi 300g", "ph": "Pork ribs 300g"},
      {"zh": "南瓜 300克", "id": "Labu kuning 300g", "ph": "Pumpkin 300g"}
    ],
    "steps": [
      {"zh": "排骨煎香，加入南瓜塊及水中火炆 15-20 分鐘至南瓜軟腍。", "id": "Goreng iga, masukkan labu kuning & air, masak 15-20 menit.", "ph": "I-prito ang ribs, ilagay ang kalabasa at tubig, lutuin ng 15-20 mins."}
    ]
  },
  {
    "id": 18,
    "hk": "荷豆炒臘腸",
    "id_name": "Tumis Kacang Kapri Sosis Babi",
    "ph": "Snow Peas with Chinese Sausage",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "荷蘭豆 200克", "id": "Kacang kapri 200g", "ph": "Snow peas 200g"},
      {"zh": "臘腸 1條", "id": "Sosis babi (Lap Cheong) 1 batang", "ph": "Chinese sausage 1 piece"}
    ],
    "steps": [
      {"zh": "臘腸切片爆香出油，加入荷蘭豆大火快炒 2 分鐘調味即成。", "id": "Tumis sosis hingga harum, masukkan kacang kapri, tumis 2 menit.", "ph": "Igisa ang sausage, ilagay ang snow peas, igisa ng 2 minuto."}
    ]
  },
  {
    "id": 19,
    "hk": "豆腐火腩",
    "id_name": "Babi Panggang Tahu",
    "ph": "Roast Pork Belly with Tofu",
    "portion": "4-5人",
    "time": "25 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "燒肉 200克", "id": "Babi panggang 200g", "ph": "Roast pork belly 200g"},
      {"zh": "硬豆腐 1磚", "id": "Tahu keras 1 blok", "ph": "Firm tofu 1 block"}
    ],
    "steps": [
      {"zh": "豆腐煎金黃，爆香薑蒜及燒肉，加水及蠔油炆 10 分鐘即成。", "id": "Goreng tahu, tumis babi panggang & bumbu, masak dengan air & saus tiram.", "ph": "I-prito ang tofu, igisa ang roast pork, lutuin sa tubig at oyster sauce."}
    ]
  },
  {
    "id": 20,
    "hk": "蝦醬通菜",
    "id_name": "Tumis Kangkung Saus Terasi",
    "ph": "Water Spinach with Shrimp Paste",
    "portion": "2-3人",
    "time": "10 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "通菜 1斤", "id": "Kangkung 600g", "ph": "Water spinach 600g"},
      {"zh": "蝦醬 1.5湯匙", "id": "Saus terasi 1.5 sdm", "ph": "Shrimp paste 1.5 kutsara"}
    ],
    "steps": [
      {"zh": "爆香蒜蓉及蝦醬，轉大火加入通菜快速翻炒至軟身即可。", "id": "Tumis bawang putih & terasi, masukkan kangkung dengan api besar.", "ph": "Igisa ang bawang at shrimp paste, ilagay ang water spinach sa malakas na apoy."}
    ]
  },
  {
    "id": 21,
    "hk": "可樂雞翼",
    "id_name": "Sayap Ayam Masak Coca Cola",
    "ph": "Coca Cola Chicken Wings",
    "portion": "2-3人",
    "time": "25 mins",
    "category": "poultry",
    "ingredients": [
      {"zh": "雞翼 8隻", "id": "Sayap ayam 8 buah", "ph": "Chicken wings 8 pieces"},
      {"zh": "可樂 1罐", "id": "Coca cola 1 kaleng", "ph": "Coca cola 1 can"},
      {"zh": "生抽 2湯匙", "id": "Kecap asin 2 sdm", "ph": "Soy sauce 2 kutsara"}
    ],
    "steps": [
      {"zh": "雞翼煎至兩面金黃，倒入可樂及生抽，中火炆至收汁即可。", "id": "Goreng sayap ayam hingga kecoklatan, tuang cola & kecap, masak hingga meresap.", "ph": "I-prito ang chicken wings, ibuhos ang cola at toyo, lutuin hanggang lumapot."}
    ]
  },
  {
    "id": 22,
    "hk": "豉汁蒸雞",
    "id_name": "Ayam Kukus Saus Kedelai Hitam",
    "ph": "Steamed Chicken in Black Bean Sauce",
    "portion": "3-4人",
    "time": "25 mins",
    "category": "poultry",
    "ingredients": [
      {"zh": "雞半隻", "id": "Ayam 1/2 ekor", "ph": "Chicken 1/2 piece"},
      {"zh": "豆豉蒜蓉 1.5湯匙", "id": "Douchi & bawang putih 1.5 sdm", "ph": "Black bean & garlic 1.5 kutsara"}
    ],
    "steps": [
      {"zh": "雞件拌入豆豉蒜蓉、生抽、生粉醃 20 分鐘，大火蒸 15 分鐘至熟。", "id": "Marinasi ayam dengan douchi & bumbu 20 menit, kukus api besar 15 menit.", "ph": "I-marinate ang manok sa black bean sauce ng 20 mins, pasingawan ng 15 mins."}
    ]
  },
  {
    "id": 23,
    "hk": "手撕雞",
    "id_name": "Ayam Suwir Wijen",
    "ph": "Shredded Sesame Chicken",
    "portion": "3-4人",
    "time": "30 mins",
    "category": "poultry",
    "ingredients": [
      {"zh": "雞胸肉或雞腿 2塊", "id": "Dada/paha ayam 2 potong", "ph": "Chicken breast/thigh 2 pieces"},
      {"zh": "芝麻醬及麻油 適量", "id": "Saus wijen & minyak wijen secukupnya", "ph": "Sesame paste & sesame oil"}
    ],
    "steps": [
      {"zh": "雞肉浸熟後撕成絲，拌入芝麻醬、麻油、生抽及芝麻即可。", "id": "Rebus ayam hingga matang, suwir-suwir, campur saus wijen & kecap.", "ph": "Lutuin ang manok, himayin, ihalo sa sesame paste, mantika ng linga at toyo."}
    ]
  },
  {
    "id": 24,
    "hk": "栗子炆雞",
    "id_name": "Ayam Rebus Kastanya",
    "ph": "Braised Chicken with Chestnuts",
    "portion": "4-5人",
    "time": "40 mins",
    "category": "poultry",
    "ingredients": [
      {"zh": "雞半隻", "id": "Ayam 1/2 ekor", "ph": "Chicken 1/2 piece"},
      {"zh": "熟栗子 200克", "id": "Kastanya matang 200g", "ph": "Cooked chestnuts 200g"}
    ],
    "steps": [
      {"zh": "雞件煎香，加入栗子、水及生抽蠔油，中小火炆 25 分鐘至軟腍。", "id": "Goreng ayam, masukkan kastanya, air & saus, masak 25 menit.", "ph": "I-prito ang manok, ilagay ang chestnuts, tubig at sarsa, lutuin ng 25 mins."}
    ]
  },
  {
    "id": 25,
    "hk": "檸檬雞",
    "id_name": "Ayam Saus Lemon",
    "ph": "Lemon Chicken",
    "portion": "2-3人",
    "time": "25 mins",
    "category": "poultry",
    "ingredients": [
      {"zh": "無骨雞扒 2塊", "id": "Paha ayam tanpa tulang 2 potong", "ph": "Boneless chicken thigh 2 pieces"},
      {"zh": "檸檬汁及糖 適量", "id": "Air lemon & gula secukupnya", "ph": "Lemon juice & sugar"}
    ],
    "steps": [
      {"zh": "雞扒沾蛋液及生粉煎至金黃脆身，切塊，淋上特製酸甜檸檬汁。", "id": "Goreng ayam bersalut tepung hingga krispi, potong, siram saus lemon.", "ph": "I-prito ang manok na may harina, hiwain, ibuhos ang lemon sauce."}
    ]
  },
  {
    "id": 26,
    "hk": "白切雞",
    "id_name": "Ayam Rebus Hainan (Boiled Chicken)",
    "ph": "Poached Cantonese Chicken",
    "portion": "4-6人",
    "time": "45 mins",
    "category": "poultry",
    "ingredients": [
      {"zh": "全雞 1隻", "id": "Ayam utuh 1 ekor", "ph": "Whole chicken 1 piece"},
      {"zh": "薑蓉蓉蓉及蔥粒 適量", "id": "Jahe & daun bawang cincang", "ph": "Minced ginger & spring onion"}
    ],
    "steps": [
      {"zh": "水滾後熄火浸雞 30 分鐘至熟，過冷河切件，配薑蓉沾醬食用。", "id": "Rendam ayam dalam air panas 30 menit, potong, sajikan dengan saus jahe.", "ph": "Ibabad ang manok sa kumukulong tubig ng 30 mins, hiwain, isawsaw sa ginger dip."}
    ]
  },
  {
    "id": 27,
    "hk": "宮保雞丁",
    "id_name": "Ayam Kung Pao",
    "ph": "Kung Pao Chicken",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "poultry",
    "ingredients": [
      {"zh": "雞肉粒 250克", "id": "Daging ayam dadu 250g", "ph": "Diced chicken 250g"},
      {"zh": "花生及乾辣椒 適量", "id": "Kacang tanah & cabai kering", "ph": "Peanuts & dried chili"}
    ],
    "steps": [
      {"zh": "炒香乾辣椒，加入雞粒大火快炒，最後加入花生及宮保汁炒勻。", "id": "Tumis cabai kering & ayam, tambahkan kacang tanah & saus kung pao.", "ph": "Igisa ang sili at manok, ihalo ang mani at kung pao sauce."}
    ]
  },
  {
    "id": 28,
    "hk": "椒鹽豬扒",
    "id_name": "Babi Goreng Garam Merica",
    "ph": "Salt and Pepper Pork Chops",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "豬扒 3塊", "id": "Pork chop 3 potong", "ph": "Pork chops 3 pieces"},
      {"zh": "椒鹽粉及蒜粒 適量", "id": "Garam merica & bawang putih", "ph": "Salt pepper powder & garlic"}
    ],
    "steps": [
      {"zh": "豬扒切塊沾粉煎至酥脆，炒香蒜粒辣椒，加入豬扒及椒鹽炒勻。", "id": "Goreng babi bersalut tepung, tumis bawang & cabai, taburi garam merica.", "ph": "I-prito ang baboy, igisa ang bawang at sili, budburan ng salt pepper."}
    ]
  },
  {
    "id": 29,
    "hk": "咕嚕肉",
    "id_name": "Babi Asam Manis (Sweet & Sour Pork)",
    "ph": "Sweet and Sour Pork",
    "portion": "3-4人",
    "time": "30 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "梅頭肉 300克", "id": "Daging babi 300g", "ph": "Pork shoulder 300g"},
      {"zh": "菠蘿及三色椒 適量", "id": "Nanas & paprika secukupnya", "ph": "Pineapple & bell peppers"}
    ],
    "steps": [
      {"zh": "肉塊沾炸粉炸至酥脆，原鑊煮滾甜酸醬汁，放入肉塊及菠蘿快速拌勻。", "id": "Goreng babi hingga krispi, masak saus asam manis, aduk rata babi & nanas.", "ph": "I-prito ang baboy, lutuin ang sweet and sour sauce, ihalo ang baboy at pinya."}
    ]
  },
  {
    "id": 30,
    "hk": "京都骨",
    "id_name": "Iga Babi Saus Kyoto",
    "ph": "Peking Style Pork Ribs",
    "portion": "3-4人",
    "time": "30 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "排骨 400克", "id": "Iga babi 400g", "ph": "Pork ribs 400g"},
      {"zh": "OK汁/茄汁及糖 適量", "id": "Saus tomat & gula secukupnya", "ph": "Ketchup & sugar"}
    ],
    "steps": [
      {"zh": "排骨煎香至熟，加入酸甜京都醬汁慢火煮至濃稠包裹排骨即可。", "id": "Goreng iga hingga matang, tumis saus Kyoto manis gurih hingga meresap.", "ph": "I-prito ang ribs, ihalo sa sweet and savory Peking sauce hanggang lumapot."}
    ]
  },
  {
    "id": 31,
    "hk": "鹹蛋蒸肉餅",
    "id_name": "Daging Babi Kukus Telur Asin",
    "ph": "Steamed Pork Patty with Salted Egg",
    "portion": "3-4人",
    "time": "25 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "豬肉碎 300克", "id": "Daging babi giling 300g", "ph": "Minced pork 300g"},
      {"zh": "鹹蛋 1隻", "id": "Telur asin 1 butir", "ph": "Salted egg 1 piece"}
    ],
    "steps": [
      {"zh": "肉碎調味拌勻，鹹蛋白混入肉中，鹹黃放表面，大火蒸 15 分鐘。", "id": "Campur daging & putih telur asin, taruh kuning telur di atasnya, kukus 15 menit.", "ph": "Ihalo ang karne at puti ng salted egg, ilagay ang pula sa ibabaw, pasingawan ng 15 mins."}
    ]
  },
  {
    "id": 32,
    "hk": "蓮藕炒肉片",
    "id_name": "Tumis Akar Teratai dengan Daging Babi",
    "ph": "Stir-fried Pork Slices with Lotus Root",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "蓮藕 1節", "id": "Akar teratai 1 potong", "ph": "Lotus root 1 segment"},
      {"zh": "豬肉片 150克", "id": "Daging babi iris 150g", "ph": "Sliced pork 150g"}
    ],
    "steps": [
      {"zh": "蓮藕切薄片，炒熟肉片盛起，爆香蒜蓉下蓮藕快炒，加少許水及肉片炒勻。", "id": "Iris tipis akar teratai, tumis daging, tumis teratai, campurkan semua.", "ph": "Hiwain ang lotus root, lutuin ang karne, igisa ang lotus root at ihalo ang karne."}
    ]
  },
  {
    "id": 33,
    "hk": "苦瓜炒肉片",
    "id_name": "Tumis Peria (Pare) dengan Daging Babi",
    "ph": "Stir-fried Pork Slices with Bitter Melon",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "苦瓜 1條", "id": "Peria (Pare) 1 buah", "ph": "Bitter melon 1 piece"},
      {"zh": "豬肉片 150克", "id": "Daging babi iris 150g", "ph": "Sliced pork 150g"}
    ],
    "steps": [
      {"zh": "苦瓜去籽切片汆水，炒熟肉片，加入苦瓜及豉汁大火炒勻。", "id": "Iris peria, rebus sebentar, tumis daging, masukkan peria & saus tauco.", "ph": "Hiwain ang bitter melon, ilaga nang bahagya, igisa kasama ang karne at toyo sauce."}
    ]
  },
  {
    "id": 34,
    "hk": "回鍋肉",
    "id_name": "Daging Babi Masak Saus Tauco (Hui Guo Rou)",
    "ph": "Double-cooked Pork",
    "portion": "3-4人",
    "time": "25 mins",
    "category": "pork",
    "ingredients": [
      {"zh": "五花腩 300克", "id": "Daging samcan 300g", "ph": "Pork belly 300g"},
      {"zh": "青椒及豆瓣醬 適量", "id": "Paprika hijau & saus豆瓣酱", "ph": "Green pepper & chili bean paste"}
    ],
    "steps": [
      {"zh": "五花腩煮熟切薄片，熱鑊炒至出油微焦，加入豆瓣醬及青椒爆炒即成。", "id": "Rebus samcan, iris tipis, tumis hingga berminyak, tambah saus cabai & paprika.", "ph": "Lutuin ang pork belly, hiwain, igisa sa chili bean paste at green pepper."}
    ]
  },
  {
    "id": 35,
    "hk": "干炒牛河",
    "id_name": "Kwetiau Goreng Daging Sapi",
    "ph": "Stir-fried Beef Rice Noodles",
    "portion": "2人",
    "time": "15 mins",
    "category": "beef",
    "ingredients": [
      {"zh": "河粉 300克", "id": "Kwetiau 300g", "ph": "Flat rice noodles 300g"},
      {"zh": "牛肉片 150克", "id": "Daging sapi iris 150g", "ph": "Sliced beef 150g"},
      {"zh": "芽菜及韭黃 適量", "id": "Tauge & kucai secukupnya", "ph": "Bean sprouts & chives"}
    ],
    "steps": [
      {"zh": "牛肉片炒至半熟盛起，大火熱油炒香河粉，加生抽老抽、牛肉及芽菜快炒乾身。", "id": "Tumis sapi setengah matang, tumis kwetiau api besar, tambah kecap, sapi & tauge.", "ph": "Lutuin ang baka, igisa ang noodles sa malakas na apoy, idagdag ang toyo at tauge."}
    ]
  },
  {
    "id": 36,
    "hk": "菜心炒牛肉",
    "id_name": "Tumis Daging Sapi dengan Sawi Hijau",
    "ph": "Stir-fried Beef with Choy Sum",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "beef",
    "ingredients": [
      {"zh": "菜心 300克", "id": "Sawi hijau 300g", "ph": "Choy sum 300g"},
      {"zh": "牛肉片 150克", "id": "Daging sapi iris 150g", "ph": "Sliced beef 150g"}
    ],
    "steps": [
      {"zh": "牛肉醃好炒熟盛起，原鑊爆蒜炒熟菜心，將牛肉回鑊拉芡炒勻。", "id": "Tumis daging sapi, tumis sawi hijau, campurkan daging dengan sedikit saus.", "ph": "Lutuin ang baka, igisa ang choy sum, ihalo uli ang baka na may kaunting sarsa."}
    ]
  },
  {
    "id": 37,
    "hk": "中式牛柳",
    "id_name": "Daging Sapi Saus Tomat Asam Manis",
    "ph": "Chinese Style Beef Tenderloin",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "beef",
    "ingredients": [
      {"zh": "牛柳 250克", "id": "Daging sapi tenderloin 250g", "ph": "Beef tenderloin 250g"},
      {"zh": "洋蔥及中式汁(茄汁/喼汁) 適量", "id": "Bawang bombay & saus tomat", "ph": "Onion & sweet savory sauce"}
    ],
    "steps": [
      {"zh": "牛柳切厚片煎至七成熟，炒香洋蔥及中式酸甜汁，倒入牛柳拌勻即可。", "id": "Goreng sapi hingga setengah matang, tumis bawang & saus, aduk rata sapi.", "ph": "I-prito ang baka, igisa ang sibuyas at sarsa, ihalo ang baka."}
    ]
  },
  {
    "id": 38,
    "hk": "黑椒牛柳粒",
    "id_name": "Daging Sapi Dadu Lada Hitam",
    "ph": "Black Pepper Beef Cubes",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "beef",
    "ingredients": [
      {"zh": "牛柳粒 250克", "id": "Daging sapi potong dadu 250g", "ph": "Diced beef 250g"},
      {"zh": "黑椒碎及蒜粒 適量", "id": "Lada hitam & bawang putih", "ph": "Black pepper & garlic"}
    ],
    "steps": [
      {"zh": "牛柳粒大火煎封表面，炒香蒜粒及黑椒碎，下牛柳粒及醬油快炒上碟。", "id": "Goreng sapi dadu api besar, tumis bawang putih & lada hitam, campurkan sapi.", "ph": "I-prito ang beef cubes sa malakas na apoy, igisa sa bawang at black pepper."}
    ]
  },
  {
    "id": 39,
    "hk": "蔥爆牛肉",
    "id_name": "Tumis Daging Sapi Daun Bawang",
    "ph": "Stir-fried Beef with Scallions",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "beef",
    "ingredients": [
      {"zh": "牛肉片 200克", "id": "Daging sapi iris 200g", "ph": "Sliced beef 200g"},
      {"zh": "大蔥/大蒜 2棵", "id": "Daun bawang besar 2 batang", "ph": "Scallions 2 stalks"}
    ],
    "steps": [
      {"zh": "牛肉片急火快炒至變色盛起，爆香大蔥段，加入牛肉及生抽蠔油大火爆炒。", "id": "Tumis sapi cepat, tumis daun bawang, masukkan sapi & saus tiram.", "ph": "Igisa ang baka nang mabilis, igisa ang scallions, ihalo ang baka at oyster sauce."}
    ]
  },
  {
    "id": 40,
    "hk": "豉汁炒蜆",
    "id_name": "Kerang Tumis Saus Kedelai Hitam",
    "ph": "Stir-fried Clams in Black Bean Sauce",
    "portion": "3-4人",
    "time": "15 mins",
    "category": "seafood",
    "ingredients": [
      {"zh": "蜆 (花甲) 1斤", "id": "Kerang 600g", "ph": "Clams 600g"},
      {"zh": "豆豉及辣椒 適量", "id": "Douchi & cabai secukupnya", "ph": "Black bean & chili"}
    ],
    "steps": [
      {"zh": "蜆吐沙後汆水開殼，爆香蒜蓉豆豉及辣椒，放入蜆大火快炒拉芡。", "id": "Rebus kerang sebentar, tumis bawang, douchi, cabai, masukkan kerang & saus.", "ph": "Pakuluan nang bahagya ang clams, igisa sa bawang, black bean at sili, ihalo ang clams."}
    ]
  },
  {
    "id": 41,
    "hk": "椒鹽魷魚",
    "id_name": "Cumi Goreng Garam Merica",
    "ph": "Salt and Pepper Squid",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "seafood",
    "ingredients": [
      {"zh": "鮮魷魚 2條", "id": "Cumi segar 2 ekor", "ph": "Fresh squid 2 pieces"},
      {"zh": "椒鹽粉及炸蒜粒 適量", "id": "Garam merica & bawang goreng", "ph": "Salt pepper powder & fried garlic"}
    ],
    "steps": [
      {"zh": "魷魚切圈沾生粉炸至酥脆，炒香蒜粒辣椒，倒入魷魚圈撒椒鹽炒勻。", "id": "Goreng cumi bersalut tepung, tumis bawang & cabai, taburi garam merica.", "ph": "I-prito ang squid rings, igisa ang bawang at sili, budburan ng salt pepper."}
    ]
  },
  {
    "id": 42,
    "hk": "蒜蓉蒸蝦",
    "id_name": "Udang Kukus Bawang Putih",
    "ph": "Steamed Shrimp with Garlic",
    "portion": "3-4人",
    "time": "15 mins",
    "category": "seafood",
    "ingredients": [
      {"zh": "鮮蝦 300克", "id": "Udang segar 300g", "ph": "Fresh shrimp 300g"},
      {"zh": "蒜蓉及粉絲 適量", "id": "Bawang putih cincang & soun", "ph": "Minced garlic & vermicelli"}
    ],
    "steps": [
      {"zh": "蝦開背去蝦線鋪在粉絲上，鋪滿熟蒜蓉，大火蒸 6 分鐘，淋滾油及熟豉油。", "id": "Belah punggung udang, taruh di atas soun, beri bawang putih, kukus 6 menit.", "ph": "Hiwain ang likod ng hipon, ilagay sa vermicelli, lagyan ng bawang, pasingawan ng 6 mins."}
    ]
  },
  {
    "id": 43,
    "hk": "薑蔥炒蟹",
    "id_name": "Kepiting Tumis Jahe dan Bawang",
    "ph": "Stir-fried Crab with Ginger and Scallions",
    "portion": "3-4人",
    "time": "25 mins",
    "category": "seafood",
    "ingredients": [
      {"zh": "肉蟹 2隻", "id": "Kepiting 2 ekor", "ph": "Crabs 2 pieces"},
      {"zh": "薑片及蔥段 適量", "id": "Jahe & daun bawang secukupnya", "ph": "Ginger & scallions"}
    ],
    "steps": [
      {"zh": "蟹切件沾生粉半煎炸至半熟，爆香大量薑片蔥段，加入蟹件及上湯炆炒熟。", "id": "Goreng kepiting bersalut tepung, tumis jahe & daun bawang, tambah kaldu.", "ph": "I-prito ang crab pieces, igisa sa maraming luya at scallions, dagdagan ng sabaw."}
    ]
  },
  {
    "id": 44,
    "hk": "椒鹽蝦",
    "id_name": "Udang Goreng Garam Merica",
    "ph": "Salt and Pepper Shrimp",
    "portion": "3-4人",
    "time": "15 mins",
    "category": "seafood",
    "ingredients": [
      {"zh": "中蝦 300克", "id": "Udang sedang 300g", "ph": "Medium shrimp 300g"},
      {"zh": "椒鹽粉及紅椒粒 適量", "id": "Garam merica & cabai merah", "ph": "Salt pepper powder & red chili"}
    ],
    "steps": [
      {"zh": "蝦剪鬚剪槍，大火炸至殼香脆，爆香蒜粒辣椒，倒入蝦撒椒鹽翻炒數下。", "id": "Goreng udang hingga krispi, tumis bawang & cabai, taburi garam merica.", "ph": "I-prito ang hipon hanggang maging renyah, igisa sa bawang, budburan ng salt pepper."}
    ]
  },
  {
    "id": 45,
    "hk": "麻婆豆腐",
    "id_name": "Tahu Mapo (Mapo Tofu)",
    "ph": "Mapo Tofu",
    "portion": "2-3人",
    "time": "20 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "軟豆腐 1磚", "id": "Tahu sutra/lembut 1 blok", "ph": "Soft tofu 1 block"},
      {"zh": "豬肉碎 100克", "id": "Daging babi giling 100g", "ph": "Minced pork 100g"},
      {"zh": "豆瓣醬及花椒粉 適量", "id": "Saus cabai bean & lada Sichuan", "ph": "Chili bean paste & Sichuan pepper"}
    ],
    "steps": [
      {"zh": "炒香肉碎及豆瓣醬，加水煮滾後放入豆腐塊，慢火炆 5 分鐘拉芡，撒花椒粉。", "id": "Tumis daging & saus cabai, tambah air & tahu, masak 5 menit, taburi lada.", "ph": "Igisa ang karne at chili paste, idagdag ang tubig at tofu, lutuin ng 5 mins."}
    ]
  },
  {
    "id": 46,
    "hk": "蒜蓉蒸豆腐",
    "id_name": "Tahu Kukus Bawang Putih",
    "ph": "Steamed Tofu with Garlic",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "滑豆腐 1盒", "id": "Tahu halus 1 kotak", "ph": "Silken tofu 1 box"},
      {"zh": "熟蒜蓉 2湯匙", "id": "Bawang putih tumis 2 sdm", "ph": "Fried garlic 2 tablespoons"}
    ],
    "steps": [
      {"zh": "豆腐切厚片排碟，鋪上炒香的熟蒜蓉，大火蒸 8 分鐘，淋上蒸魚豉油及滾油。", "id": "Potong tahu, beri bawang putih tumis, kukus 8 menit, siram kecap & minyak.", "ph": "Hiwain ang tofu, ilagay ang fried garlic, pasingawan ng 8 mins, ibuhos ang toyo."}
    ]
  },
  {
    "id": 47,
    "hk": "上湯娃娃菜",
    "id_name": "Sawihan dalam Kaldu Gurih",
    "ph": "Baby Chinese Cabbage in Supreme Soup",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "娃娃菜 2棵", "id": "Sawi putih kecil 2 buah", "ph": "Baby chinese cabbage 2 pieces"},
      {"zh": "皮蛋及皮蛋/鹹蛋粒 適量", "id": "Telur bitan & kaldu secukupnya", "ph": "Century egg & broth"}
    ],
    "steps": [
      {"zh": "爆香蒜頭及皮蛋粒，倒入上湯煮滾，放入娃娃菜煮至軟腍即可連湯上碟。", "id": "Tumis bawang & telur bitan, tuang kaldu, masukkan sawi hingga lembut.", "ph": "Igisa ang bawang at century egg, ibuhos ang kaldu, ilagay ang cabbage."}
    ]
  },
  {
    "id": 48,
    "hk": "蝦醬炒西蘭花",
    "id_name": "Tumis Brokoli Saus Terasi",
    "ph": "Stir-fried Broccoli with Shrimp Paste",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "veg",
    "ingredients": [
      {"zh": "西蘭花 1個", "id": "Brokoli 1 buah", "ph": "Broccoli 1 piece"},
      {"zh": "蝦醬 1湯匙", "id": "Saus terasi 1 sdm", "ph": "Shrimp paste 1 tablespoon"}
    ],
    "steps": [
      {"zh": "西蘭花切小朵汆水，爆香蒜蓉及蝦醬，倒入西蘭花大火快炒勻即可。", "id": "Rebus brokoli sebentar, tumis bawang & terasi, masukkan brokoli, aduk cepat.", "ph": "Pakuluan ang broccoli, igisa ang bawang at shrimp paste, ihalo ang broccoli."}
    ]
  },
  {
    "id": 49,
    "hk": "苦瓜炒蛋",
    "id_name": "Tumis Peria (Pare) dan Telur",
    "ph": "Stir-fried Bitter Melon with Eggs",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "egg",
    "ingredients": [
      {"zh": "苦瓜 1條", "id": "Peria (Pare) 1 buah", "ph": "Bitter melon 1 piece"},
      {"zh": "雞蛋 3隻", "id": "Telur 3 butir", "ph": "Itlog 3 pieces"}
    ],
    "steps": [
      {"zh": "苦瓜切薄片加鹽抓洗減苦味，炒軟苦瓜後倒入蛋液，煎至兩面金黃炒散即成。", "id": "Iris tipis peria, tumis hingga layu, tuang telur, aduk rata hingga matang.", "ph": "Hiwain ang bitter melon, igisa hanggang lumambot, ibuhos ang itlog, lutuin."}
    ]
  },
  {
    "id": 50,
    "hk": "蒸水蛋",
    "id_name": "Telur Kukus Lembut (Steamed Egg Custard)",
    "ph": "Steamed Egg Custard",
    "portion": "2-3人",
    "time": "15 mins",
    "category": "egg",
    "ingredients": [
      {"zh": "雞蛋 3隻", "id": "Telur 3 butir", "ph": "Itlog 3 pieces"},
      {"zh": "溫水/雞湯 蛋液的1.5倍", "id": "Air hangat/kaldu 1.5x jumlah telur", "ph": "Warm water/broth 1.5x of egg volume"}
    ],
    "steps": [
      {"zh": "雞蛋打勻加入溫水及鹽，過篩倒入深碟撇去泡泡，中小火蓋碟蒸 10 分鐘，淋生抽及麻油。", "id": "Kocok telur dengan air hangat & garam, saring, kukus api kecil 10 menit, siram kecap.", "ph": "Batihin ang itlog sa warm water at asin, salain, pasingawan ng 10 mins, lagyan ng toyo."}
    ]
  }
];