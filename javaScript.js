const audio = [
  {
    id: 1,
    title: "In Da Club",
    artist: "fifty Cent",
    category: "excited",
    duration: "",
    image: "./public/image/fifty.jpg",
    link: "./public/music/50 Cent - In Da Club (Official Music Video)(M4A_128K).m4a",
    language: "english",
    description: "In Da Club ( 50 Cent ) ",
  },
  {
    id: 2,
    title: "عم سلامة",
    artist: "حكيم",
    category: "normal",
    duration: "",
    image: "./public/image/عم_سلامة.jpg",
    link: "./public/music/Aam Salama - Hakim [Official Video] _ [عم سلامة - حكيم [الفيديو الرسمي(MP3_160K).mp3",
    language: "arabic",
    description: "( حكيم ) يا عم سلامة",
  },
  {
    id: 3,
    title: "اللي مصبرني",
    artist: "أحمد فهمي",
    category: "romantic",
    duration: "",
    image: "./public/image/اللي_مصبرني.jpg",
    link: "./public/music/Ahmed Fahmy - Elly Msabbarny _ أحمد فهمي - اللي مصبرني(MP3_160K).mp3",
    language: "arabic",
    description: " ( أحمد فهمي ) اللي مصبرني عليك",
  },
  {
    id: 4,
    title: "قولي",
    artist: "أحمد كامل",
    category: "sad",
    duration: "",
    image: "./public/image/قولي.jpg",
    link: "./public/music/Ahmed Kamel - 2ooly (Official Lyrics Video) _ أحمد كامل - قولي - الكليب الرسمي(MP3_320K).mp3",
    language: "arabic",
    description: "( أحمد كامل ) قولي غاب مش فكرة شكله",
  },
  {
    id: 5,
    title: "علي عيني",
    artist: "أحمد كامل",
    category: "sad",
    duration: "",
    image: "./public/image/علي_عيني.jpeg",
    link: "./public/music/Ahmed Kamel - 3ala 3eeni _ Music Video - 2021 _ احمد كامل - علي عيني(MP3_320K).mp3",
    language: "arabic",
    description: "( أحمد كامل ) علي عيني اوشفكي جاية قدامي وبص بعيد ",
  },
  {
    id: 6,
    title: "اختياراتي",
    artist: "احمد سعد",
    category: "funny",
    duration: "",
    image: "./public/image/اختياراتي.jpg",
    link: "./public/music/Ahmed Saad - Ekhtayaraty _ Official Music Video - 2023 _ احمد سعد - اختياراتي(MP3_160K)_1.mp3",
    language: "arabic",
    description: " ( احمد سعد ) اختياراتي",
  },
  {
    id: 7,
    title: "علي حسب وداد قلبى",
    artist: "عبد الحليم حافظ",
    category: "old",
    duration: "",
    image: "./public/image/علي_حسبي_وداد.jpg",
    link: "./public/music/Ala Hesb Wedad  - Abdel Halim Hafez على حسب وداد قلبى - عبد الحليم حافظ(MP3_320K).mp3",
    language: "arabic",
    description:
      "( عبد الحليم حافظ ) علي حسب وداد قلبى قلبي يا بويا راح اقول للزين سلامات",
  },
  {
    id: 8,
    title: "بينا نعيش",
    artist: "عامر منيب",
    category: "love",
    duration: "",
    image: "./public/image/بينا_نعيش.jpg",
    link: "./public/music/Amir Muneeb ... Beena Naeesh _ عامر منيب ... بينا نعيش(MP3_160K).mp3",
    language: "arabic",
    description:
      " ( عامر منيب ) بينا نعيش دا العمر ليلة متقوليش نستني ليلة دي الايام ديما جميلة وعمري يا غالي لقيته معاك",
  },
  {
    id: 9,
    title: "هدد",
    artist: "عمرو دياب",
    category: "sad",
    duration: "",
    image: "./public/image/هدد.jpeg",
    link: "./public/music/Amr_Diab_-_Hadded_(Audio_عمرو_دياب_-_هدد_(كلمات(MP3_160K)_1.mp3",
    language: "arabic",
    description: " ( عمرو دياب ) هدد",
  },
  {
    id: 10,
    title: "ريحة الحبايب",
    artist: "عمرو دياب",
    category: "sad",
    duration: "",
    image: "./public/image/ريحة_الحبايب.jpg",
    link: "./public/music/Amr_Diab___Rihet_El_Habayib___عمرو_دياب___ريحة_الحبايب(MP3_160K)_1.mp3",
    language: "arabic",
    description: "( عمرو دياب ) اي حاجة تيجي من ريحة الحبايب",
  },
  {
    id: 11,
    title: "اكثر",
    artist: "اصالة",
    category: "love",
    duration: "",
    image: "./public/image/اكتر.jpg",
    link: "./public/music/Asalah Aktar اصالة - اكثر(MP3_160K).mp3",
    language: "arabic",
    description: " ( اصالة) اكثر من اللي انا بحلم بيه",
  },
  {
    id: 12,
    title: "الورد البلدي",
    artist: "اصالة",
    category: "love",
    duration: "",
    image: "./public/image/الورد_البلدي.jpg",
    link: "./public/music/Assala - El Ward El Balady  _ آصالة - الورد البلدي  [LYRICS](MP3_160K).mp3",
    language: "arabic",
    description:
      "( اصالة) لما يهل الورد البلدي كل الورد يخاف بالعربي اللي مشفش العربي يبقي لا عاش و لا شاف ",
  },
  {
    id: 13,
    title: "بعد الليالى",
    artist: "عمرو دياب",
    category: "sad",
    duration: "",
    image: "./public/image/بعد_اليالي.jpg",
    link: "./public/music/Baed El Layale - Amr Diab بعد الليالى - عمرو دياب(MP3_160K).mp3",
    language: "arabic",
    description: "( عمرو دياب) اه بعد الليالي  ",
  },
  {
    id: 14,
    title: "باشا باشا",
    artist: "عماد باشا",
    category: "festival",
    duration: "",
    image: "./public/image/باشا_باشا.jpg",
    link: "./public/music/basha basha  - Emad Basha l exclusive l  باشا باشا - عماد باشا 2021(MP3_160K).mp3",
    language: "arabic",
    description: "باشا باشا انا الباشا ( عماد باشا )",
  },
  {
    id: 15,
    title: "lovely",
    artist: "Billie Eilish _ Khalid",
    category: "love",
    duration: "",
    image: "./public/image/lovely.jpg",
    link: "./public/music/Billie Eilish_ Khalid - lovely(M4A_128K).m4a",
    language: "english",
    description: "lovely ( Billie Eilish _ Khalid )",
  },
  {
    id: 16,
    title: "Symphony",
    artist: "Clean Bandit",
    category: "excited",
    duration: "",
    image: "./public/image/syna.jpeg",
    link: "./public/music/Clean Bandit - Symphony (Lyrics_Vietsub) feat. Zara Larsson(MP3_160K).mp3",
    language: "english",
    description: "Symphony ( Clean Bandit )",
  },
  {
    id: 17,
    title: "Gangsta_s Paradise",
    artist: "Coolio",
    category: "excited",
    duration: "",
    image: "./public/image/power.jpg",
    link: "./public/music/Coolio - Gangsta_s Paradise (Official Music Video) [HD] ft. L.V(M4A_128K).m4a",
    language: "english",
    description: "Gangsta_s Paradise  ( Coolio )",
  },
  {
    id: 18,
    title: "Shape Of You",
    artist: "Ed Sheeran",
    category: "love",
    duration: "",
    image: "./public/image/shaoeOFYou.jpeg",
    link: "./public/music/Ed Sheeran - Shape Of You (Lyrics)(M4A_128K).m4a",
    language: "english",
    description: "Shape Of You ( Ed Sheeran )",
  },
  {
    id: 19,
    title: "الدنيا حلوة",
    artist: "نانسي عجرم",
    category: "funny",
    duration: "",
    image: "./public/image/الدنيا_حلوة.jpg",
    link: "./public/music/El Donia Helwa _ Nancy Ajram _ Indonesian Translation _ الدنيا حلوة _ نانسي عجرم(MP3_160K).mp3",
    language: "arabic",
    description: "( نانسي عجرم ) بنعيشها و احنا يا ناس عايشين الدنيا حلوة ",
  },
  {
    id: 20,
    title: "Venom",
    artist: "Eminem",
    category: "excited",
    duration: "",
    image: "./public/image/venom.jpeg",
    link: "./public/music/Eminem - Venom(M4A_128K).m4a",
    language: "english",
    description: "Venom ( Eminem )",
  },
  {
    id: 21,
    title: "Low",
    artist: "Flo Rida",
    category: "excited",
    duration: "",
    image: "./public/image/low.jpeg",
    link: "./public/music/Flo Rida - Low (feat. T-Pain) [from Step Up 2 The Streets O.S.T. _ Mail On Sunday] (Official Video)(M4A_128K).m4a",
    language: "english",
    description: "Low ( Flo Rida ) ",
  },
  {
    id: 22,
    title: "مهرجان ١٩٩١",
    artist: "اوكا",
    category: "festival",
    duration: "",
    image: "./public/image/ahna1991.jpg",
    link: "./public/music/G.Oka-1991 ( atdl3 )  _ official music video _ ( جنرال اوكا مهرجان ١٩٩١( اتدلع(MP3_160K).mp3",
    language: "arabic",
    description: " اوكا الف تسعمية احنا الجيل اللي اتدلع  ١٩٩١ ( مهرجان ١٩٩١ )",
  },
  {
    id: 23,
    title: "جانا الهوا",
    artist: "عبد الحليم حافظ",
    category: "old",
    duration: "",
    image: "./public/image/جانا_الهوي.jpg",
    link: "./public/music/Gana El Hawa - Abdel Halim Hafez جانا الهوا - عبد الحليم حافظ(MP3_320K).mp3",
    language: "arabic",
    description: "جانا الهوا جانا و رمانا الهوا رامانا  ( عبد الحليم حافظ )",
  },
  {
    id: 24,
    title: "جرالنا إيه",
    artist: "حمادة هلال",
    category: "sad",
    duration: "",
    image: "./public/image/grlnaEh.jpg",
    link: "./public/music/Hamada Helal - Garalna Eh - (Official Lyrics Video) _ من فيلم حسن وبقلظ حمادة هلال - جرالنا إيه(MP3_320K).mp3",
    language: "arabic",
    description:
      "( حمادة هلال  ) جرالنا إيه ازاي خسرنا انا وانت بعض كنت اخويا وكنت صاحبي و اغلي حد ",
  },
  {
    id: 25,
    title: "مش هقول",
    artist: "حمادة هلال",
    category: "love",
    duration: "",
    image: "./public/image/مش_هقول.jpg",
    link: "./public/music/Hamada Helal - Mesh Ha_oul _ حمادة هلال - مش هقول(MP3_160K).mp3",
    language: "arabic",
    description: "( حمادة هلال ) و مش هقول عاللي حصل بيني  بينه ",
  },
  {
    id: 26,
    title: "يا ستار",
    artist: "حماقي",
    category: "love",
    duration: "",
    image: "./public/image/يا_ستار.jpg",
    link: "./public/music/Hamaki - Ya Sattar (Official Lyrics Video) _ حماقي - يا ستّار - كلمات(MP3_160K).mp3",
    language: "arabic",
    description: "يا ستار ( حماقي ) ",
  },
  {
    id: 27,
    title: "انا هونت عليك",
    artist: "حوده بندق",
    category: "sad",
    duration: "",
    image: "./public/image/انا_هونت_عليك.jpg",
    link: "./public/music/Houda Bondok - Ana Hont Alek  [Official Lyric Video]_ حوده بندق - انا هونت عليك(MP3_160K).mp3",
    language: "arabic",
    description: "( حوده بندق ) انا هونت عليك",
  },
  {
    id: 28,
    title: "كان ليا حبايب",
    artist: "حوده بندق",
    category: "sad",
    duration: "",
    image: "./public/image/kanLia.jpeg",
    link: "./public/music/Houda Bondok – Kan Lya Habayeb (Official Video clip) _ حوده بندق - كان ليا حبايب(MP3_160K).mp3",
    language: "arabic",
    description: "( حوده بندق ) كان ليا حبايب ",
  },
  {
    id: 29,
    title: "كلمة رجوعنا",
    artist: "حوده بندق",
    category: "sad",
    duration: "",
    image: "./public/image/كلمة_رجوعنا.jpg",
    link: "./public/music/Houda Bondok – Kelmet Rogo3na ( Official Video clip ) _ حوده بندق - كليب _ كلمة رجوعنا(MP3_160K) (1).mp3",
    language: "arabic",
    description: "كلمة رجوعنا يا ريت ما ينطقهاش لسانك ( حوده بندق )",
  },
  {
    id: 30,
    title: "سته الصبح",
    artist: "حسين الجسمي",
    category: "love",
    duration: "",
    image: "./public/image/ستة_الصبح.jpeg",
    link: "./public/music/Husain Al Jassmi ... Seta El Sobah _ حسين الجسمي ... سته الصبح(MP3_320K).mp3",
    language: "arabic",
    description: "( حسين الجسمي ) بتعدي في حتا انا قلبي بيتكسر ميت حتة ",
  },
  {
    id: 31,
    title: "Believer",
    artist: "Imagine Dragons",
    category: "excited",
    duration: "",
    image: "./public/image/believer.jpg",
    link: "./public/music/Imagine Dragons - Believer (Lyrics)(M4A_128K).m4a",
    language: "english",
    description: "Believer ( Imagine Dragons )",
  },
  {
    id: 32,
    title: "Thunder",
    artist: "Imagine Dragons",
    category: "excited",
    duration: "",
    image: "./public/image/thunder.jpg",
    link: "./public/music/Imagine Dragons - Thunder(M4A_128K).m4a",
    language: "english",
    description: "Thunder ( Imagine Dragons )",
  },
  {
    id: 33,
    title: "البادي أظلم",
    artist: "جنات",
    category: "sad",
    duration: "",
    image: "./public/image/البادي_اظلم.jpg",
    link: "./public/music/Jannat ... Al Badi Azlam - Video Clip _ جنات ... البادي أظلم - فيديو كليب(MP3_320K).mp3",
    language: "arabic",
    description: "البادي أظلم دانت بتحلم ( جنات )",
  },
  {
    id: 34,
    title: "انا لا بنام",
    artist: "خالد عصام",
    category: "sad",
    duration: "",
    image: "./public/image/انا_لابنام.jpg",
    link: "./public/music/Khaled Essam - Ana La Banam _ خالد عصام -  انا لا بنام  (Official lyrics video)(MP3_160K).mp3",
    language: "arabic",
    description: " دا انا لا بنام و لا في كلام اوصف فيه حالي ( خالد عصام )",
  },
  {
    id: 35,
    title: "وايه يعني",
    artist: "خالد عصام",
    category: "sad",
    duration: "",
    image: "./public/image/وايه_يعيني.jpg",
    link: "./public/music/Khaled Essam - W Eh Yaany _ خالد عصام - وايه يعني (Official lyrics video)(MP3_160K).mp3",
    language: "arabic",
    description: " وايه يعني اما اعيش بعدك ( خالد عصام )",
  },
  {
    id: 36,
    title: "زمن مادى",
    artist: "طارق الشيخ",
    category: "sad",
    duration: "",
    image: "./public/image/زمن_مادي.jpg",
    link: "./public/music/اغنية زمن مادى غناء طارق الشيخ_ من مسلسل البيت الكبير 2018  قريبا(MP3_160K).mp3",
    language: "arabic",
    description:
      " ( طارق الشيخ )  الماديات يما فرقت اخوات _ واحنا في زمن مادي    ",
  },
  {
    id: 37,
    title: "كل الناس",
    artist: "الصواريخ وحسن ابوالروس",
    category: "funny",
    duration: "",
    image: "./public/image/كل_الناس.jpg",
    link: "./public/music/Kol El Nas - Hassan Abouelrouss _ El Swareekh (Official Video)_ كل الناس - الصواريخ وحسن ابوالروس(MP3_160K).mp3",
    language: "arabic",
    description:
      "( الصواريخ و حسن ابوالروس )  مفيش منك مفيش خالص كل الناس واحد الا انت فالتة كل مولتو اللي انت مجنم كل االناس بوجي الا انت طمطم ",
  },
  {
    id: 38,
    title: "حدوتة الماني",
    artist: "مروان موسى",
    category: "rap",
    duration: "",
    image: "./public/image/حدوتة_الماني.jpg",
    link: "./public/music/MARWAN MOUSSA - 7ADOTA ALMANY (OFFICIAL AUDIO) مروان موسى - حدوتة الماني(MP3_160K).mp3",
    language: "arabic",
    description: "( مروان موسى ) حدوتة الماني انا نجم الراب عالشط ",
  },
  {
    id: 39,
    title: "بطل عالم",
    artist: "مروان موسى",
    category: "rap",
    duration: "",
    image: "./public/image/بطل_عالم.jpg",
    link: "./public/music/MARWAN MOUSSA - BATAL 3ALAM (OFFICIAL MUSIC VIDEO) مروان موسى - بطل عالم --(MP3_160K).mp3",
    language: "arabic",
    description: "( مروان موسى ) مفيش شبهي في بلدك قارن ورقي بورقك بطل عالم",
  },
  {
    id: 40,
    title: "كنتي قوليلي",
    artist: "محمد سعيد",
    category: "sad",
    duration: "",
    image: "./public/image/كنتي_قوليلي.jpg",
    link: "./public/music/Mohammed Saeed - Konty 2olely _ محمد سعيد - كنتي قوليلي(MP3_320K).mp3",
    language: "arabic",
    description: "(  محمد سعيد  ) كنتي قوليلي",
  },
  {
    id: 41,
    title: "قلب فى الدفاتر",
    artist: "مسلم",
    category: "sad",
    duration: "",
    image: "./public/image/قلب_في.jpg",
    link: "./public/music/MUSliM - Aleb Fel Dafater _ Official Music Video - 2022 _ مسلم - قلب فى الدفاتر(M4A_128K).m4a",
    language: "arabic",
    description: "( مسلم ) قلب فى الدفاتر",
  },
  {
    id: 42,
    title: "اتنسيت",
    artist: "مسلم",
    category: "sad",
    duration: "",
    image: "./public/image/اتنسيت.jpg",
    link: "./public/music/MUSliM - Etnaset _ Music Video - 2021 _ مسلم - اتنسيت(M4A_128K).m4a",
    language: "arabic",
    description: "( مسلم ) اتنسيت",
  },
  {
    id: 43,
    title: "مش ندمان",
    artist: "مسلم",
    category: "sad",
    duration: "",
    image: "./public/image/مش_ندمان.jpg",
    link: "./public/music/MUSliM - Mesh Nadman _ Music Video - 2021 _ مسلم - مش ندمان(MP3_160K).mp3",
    language: "arabic",
    description:
      "  ( مسلم ) برواز قديم و متلصم و العمر بيجري و يخصم  _ علي العشرا و عالايام _ و يومين بالكتير و انساك انا سيبك و مش ندمان ",
  },
  {
    id: 44,
    title: "مخصماك",
    artist: "نوال",
    category: "funny",
    duration: "",
    image: "./public/image/مخصماك.jpg",
    link: "./public/music/Nawal - Mekhasmak ( Official Music Video - 2022 ) نوال - مخصماك_ انت لو كنت بتهتم(M4A_128K).m4a",
    language: "arabic",
    description: " ( نوال ) مخصماك",
  },
  {
    id: 45,
    title: "قلت مش هتسبني",
    artist: "أميمة طالب",
    category: "sad",
    duration: "",
    image: "./public/image/qult_mish.jpeg",
    link: "./public/music/Oumaima Taleb ... Olt Mosh Hatsebni - 2022 _ أميمة طالب ... قلت مش هتسبني(MP3_160K).mp3",
    language: "arabic",
    description: "(  أميمة طالب  ) قلت مش هتسبني ثانية ",
  },
  {
    id: 46,
    title: "Happy",
    artist: "Pharrell Williams",
    category: "funny",
    duration: "",
    image: "./public/image/happy.jpeg",
    link: "./public/music/Pharrell Williams - Happy (Video)(M4A_128K).m4a",
    language: "english",
    description: "Happy ( Pharrell Williams ) ",
  },
  {
    id: 47,
    title: "ابيع الدنيا",
    artist: "بوسي",
    category: "love",
    duration: "",
    image: "./public/image/انا_ابيع.jpg",
    link: "./public/music/Pousi - Abia El Donia  _  بوســي - ابيع الدنيا(M4A_128K).m4a",
    language: "arabic",
    description:
      "(  بوسي ) دانا ابيع الدنيا الدنيا عشانك انت يا روحي في ثانية ",
  },
  {
    id: 48,
    title: "لفينا الدنيا",
    artist: "رضا البحراوي و مسلم",
    category: "excited",
    duration: "",
    image: "./public/image/البعبع.jpg",
    link: "./public/music/Reda El Bahrawy _ Muslim - Lafena El Donya _ رضا البحراوي و مسلم - لفينا الدنيا (من فيلم البعبع)(MP3_160K).mp3",
    language: "arabic",
    description:
      "( رضا البحراوي و مسلم )  لحوين و مفيش مننا فاضلين  _ لفينا الدنيا ",
  },
  {
    id: 49,
    title: "Rockabye",
    artist: "Clean Bandit ft. Sean Paul _ Anne-Marie",
    category: "excited",
    duration: "",
    image: "./public/image/rockab.jpg",
    link: "./public/music/Rockabye - Clean Bandit ft. Sean Paul _ Anne-Marie (Lyrics_Vietsub)(M4A_128K).m4a",
    language: "english",
    description: "Rockabye ( Clean Bandit ft. Sean Paul _ Anne-Marie )",
  },
  {
    id: 50,
    title: "Can_t Be Touched",
    artist: "Roy Jones",
    category: "excited",
    duration: "",
    image: "./public/image/CAN'T.jpg",
    link: "./public/music/Roy Jones - Can_t Be Touched (HQ_Dirty)(M4A_128K).m4a",
    language: "english",
    description: "Can_t Be Touched ( Roy Jones ) ",
  },
  {
    id: 51,
    title: "SAFARİ",
    artist: "Serena",
    category: "excited",
    duration: "",
    image: "./public/image/safari.jpg",
    link: "./public/music/SAFARİ - Serena (Lyrics_Vietsub)(M4A_128K).m4a",
    language: "english",
    description: "SAFARİ ( Serena )",
  },
  {
    id: 52,
    title: "عروستي",
    artist: "شارموفرز",
    category: "love",
    duration: "",
    image: "./public/image/عروستي.jpg",
    link: "./public/music/Sharmoofers - Arosty _ شارموفرز - عروستي _ فيلم عروستي(MP3_320K).mp3",
    language: "arabic",
    description:
      "ايه دا هو انتي جيتي مكنتش مستني بس انتي بجد بهرتيني _ عروستي ( شارموفرز )",
  },
  {
    id: 53,
    title: "Señorita",
    artist: "Shawn Mendes_ Camila Cabello",
    category: "love",
    duration: "",
    image: "./public/image/senioteta.jpg",
    link: "./public/music/Shawn Mendes_ Camila Cabello - Señorita مترجمة(M4A_128K).m4a",
    language: "english",
    description: "Señorita ( Shawn Mendes _ Camila Cabello )",
  },
  {
    id: 54,
    title: "اناإمتى نسيتك",
    artist: "شيماء هلالي",
    category: "sad",
    duration: "",
    image: "./public/image/امتي_نسيتك.jpg",
    link: "./public/music/Shayma Helali   Emta Nseitak    شيماء هلالي    إمتى نسيتك(MP3_320K).mp3",
    language: "arabic",
    description: "( شيماء هلالي ) اناإمتى نسيتك ولا عشان انا مش بتكلم ",
  },
  {
    id: 55,
    title: "Infected",
    artist: "Sickick",
    category: "excited",
    duration: "",
    image: "./public/image/infected.jpeg",
    link: "./public/music/Sickick - Infected (lyrics)(M4A_128K).m4a",
    language: "english",
    description: "Infected ( Sickick)",
  },
  {
    id: 56,
    title: "دا حبيبي",
    artist: "سوما",
    category: "love",
    duration: "",
    image: "./public/image/دا_حبيبي.jpg",
    link: "./public/music/Soma - Da Habiby (Music Video) _ (سوما - ده حبيبي (فيديو كليب(MP3_160K).mp3",
    language: "arabic",
    description: "( سوما ) دا حبيبي ",
  },
  {
    id: 57,
    title: "Go Down Deh",
    artist: "Spice_ Sean Paul_ Shaggy",
    category: "excited",
    duration: "",
    image: "./public/image/SAGY.jpg",
    link: "./public/music/Spice_ Sean Paul_ Shaggy - Go Down Deh _ Official Music Video(M4A_128K).m4a",
    language: "english",
    description: "Go Down Deh ( Spice_ Sean Paul _ Shaggy)",
  },
  {
    id: 58,
    title: "Till I Collapse",
    artist: "Eminem",
    category: "excited",
    duration: "",
    image: "./public/image/till_i_cllopase.jpg",
    link: "./public/music/Till I Collapse(M4A_128K).m4a",
    language: "english",
    description: "Till I Collapse ( Eminem ) ",
  },
  {
    id: 59,
    title: "Dance Monkey",
    artist: "Tones and I",
    category: "normal",
    duration: "",
    image: "./public/image/dancAmokey.jpg",
    link: "./public/music/Tones and I - Dance Monkey (Lyrics)(MP3_160K).mp3",
    language: "english",
    description: "Dance Monkey ( Tones and I)",
  },
  {
    id: 60,
    title: "بتوحشيني",
    artist: "وائل الجسار",
    category: "love",
    duration: "",
    image: "./public/image/بوحشيني.jpg",
    link: "./public/music/Wael Jassar - Betewhashini - وائل الجسار- بتوحشيني - كلمات(MP3_160K).mp3",
    language: "arabic",
    description: "( وائل الجسار ) بتوحشيني ",
  },
  {
    id: 61,
    title: "See You Again ft. Charlie Puth",
    artist: "Wiz Khalifa",
    category: "sad",
    duration: "",
    image: "./public/image/seeYouAgin.jpg",
    link: "./public/music/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack(M4A_128K).m4a",
    language: "english",
    description: "See You Again ft. Charlie Puth ( Wiz Khalifa )",
  },
  {
    id: 62,
    title: "أكثر_عليكي عيون",
    artist: "أصالة و أحمد سعد",
    category: "love",
    duration: "",
    image: "./public/image/عليكي_عيون.jpg",
    link: "./public/music/أصالة _ أحمد سعد - أكثر_عليكي عيون_RemixReserve  _RemixOfficial  _arabic-cmusic(MP3_160K).mp3",
    language: "arabic",
    description: "( أصالة و أحمد سعد )  أكثر منة الي انا بحلم بيه _ عليكي عيون",
  },
  {
    id: 63,
    title: "أنا قادر",
    artist: "(أحمد سعد و هشام الجخ",
    category: "excited",
    duration: "",
    image: "./public/image/انا-قادر.jpg",
    link: "./public/music/أغنية أنا قادر - من مسلسل جعفر العمدة بطولة محمد رمضان - غناء أحمد سعد وأداء صوتي هشام الجخ(MP3_160K) (1).mp3",
    language: "arabic",
    description:
      "( أحمد سعد و هشام الجخ ) سوق الندالة وسع و الكل بقي بيلك واما النصاص بتقوم تلكي الاصيل بيعك _ أنا قادر واديني لسة بتفرج دا سيرك اسود و بتهرج و دنيا شكلها اعرج  و صابر ",
  },
  {
    id: 64,
    title: "اسأل عني",
    artist: "نور النبوي و كزبره",
    category: "excited",
    duration: "",
    image: "./public/image/اسال_عني.jpg",
    link: "./public/music/أغنية اسأل عني - نور النبوي و كزبره _ من فيلم الحريفة(MP3_160K).mp3",
    language: "arabic",
    description: "( نور النبوي و كزبره ) وابقي اسأل عني  ",
  },
  {
    id: 65,
    title: "القلوب السوداء",
    artist: "أحمد شيبة",
    category: "sad",
    duration: "",
    image: "./public/image/قلوب_سوداة.jpeg",
    link: "./public/music/أغنية القلوب السوداء - أحمد شيبة _ علامة إستفهام رمضان 2019(M4A_128K).m4a",
    language: "arabic",
    description:
      "( أحمد شيبة ) القلوب السوداء _ هاعيش مع نفسي و اتأقلم و مش هتعب _ هعود روحي علي روحي ومش هغلب ",
  },
  {
    id: 66,
    title: "بابا",
    artist: "حوده بندق و محمد شاهين",
    category: "excited",
    duration: "",
    image: "./public/image/بابا_المجال.jpg",
    link: "./public/music/أغنية بابا المجال من مسلسل بابا المجال بطولة مصطفي شعبان - غناء حوده بندق و محمد شاهين(MP3_160K).mp3",
    language: "",
    description: "( حوده بندق و محمد شاهين ) انا البابا يا غلابا ",
  },
  {
    id: 67,
    title: "خطوة اجباري",
    artist: "عطار و نور النبوي",
    category: "excited",
    duration: "",
    image: "./public/image/خطوة_اجباري.jpg",
    link: "./public/music/أغنية خطوة اجباري  (khatwa egbary) غناء عطار و نور النبوي _ Ramy Elmasry(MP3_320K).mp3",
    language: "arabic",
    description: " عمل نفسي مش داري _ واخد خطوة اجباري ( عطار و نور النبوي )",
  },
  {
    id: 68,
    title: "ايوه عليكى دنيا",
    artist: "احمد الصغير",
    category: "sad",
    duration: "",
    image: "./public/image/ايوه_عليكي_دنيا.jpg",
    link: "./public/music/احمد الصغير   ايوه عليكى دنيا من فيلم جمهورية امبابة(MP3_320K).mp3",
    language: "arabic",
    description: "  ايوه عليكى دنيا ( احمد الصغير )",
  },
  {
    id: 69,
    title: "مبقتش مستغرب",
    artist: "احمد عامر",
    category: "sad",
    duration: "",
    image: "./public/image/مبقتش.jpg",
    link: "./public/music/احمد عامر - مبقتش مستغرب ( قاعد وبتفرج ) _ إنتاج شركه بروتكت ميديا محمد العشري - 2024(M4A_128K).m4a",
    language: "arabic",
    description:
      "( احمد عامر )   قاعد و بتفرج و اراقب كل اللي حوليا   _  مبقتش مستغرب  ",
  },
  {
    id: 70,
    title: "حلاوة روح",
    artist: "حكيم",
    category: "excited",
    duration: "",
    image: "./public/image/حلاوة_روح.jpg",
    link: "./public/music/اغنية حكيم حلاوة روح - كاملة - من فيلم حلاوة روح - هيفاء وهبي(MP3_320K).mp3",
    language: "arabic",
    description: "( حكيم ) اغنية حلاوة روح ",
  },
  {
    id: 71,
    title: "القاضية",
    artist: "اسلام شيندي",
    category: "excited",
    duration: "",
    image: "./public/image/قاضية.jpg",
    link: "./public/music/Eslam Shendy - El Qadya [ From Welad Rizk 3 ] _ إسلام شيندي - القاضية [ من فيلم اولاد رزق 3](M4A_128K).m4a",
    language: "arabic",
    description: "القاضية من فيلم اولاد رزق   ( اسلام شيندي )3",
  },
  {
    id: 72,
    title: "سيب علامة",
    artist: "وائل عامر",
    category: "sad",
    duration: "",
    image: "./public/image/سيب_علامة.jpg",
    link: "./public/music/وائل عامر - سيب علامة(MP3_320K).mp3",
    language: "arabic",
    description: "( وائل عامر  ) سيب علامة للي بعدك من فيلم بيكيا",
  },
  {
    id: 73,
    title: "ماتبكيش ياعين",
    artist: "نور الدين الطيار",
    category: "sad",
    duration: "",
    image: "./public/image/متبكيش_ياعين.jpg",
    link: "./public/music/نور الدين الطيار - ماتبكيش ياعين - ملكوش مكان جوانا - ( الڤيديو الرسمي ) Xoureldin (Official Video)(MP3_320K).mp3",
    language: "arabic",
    description: "( نور الدين الطيار ) ماتبكيش ياعين - ملكوش مكان جوانا",
  },
  {
    id: 74,
    title: "نزلة سمان",
    artist: "كريم أسامة",
    category: "rap",
    duration: "",
    image: "./public/image/نزلة_سمان.jpg",
    link: "./public/music/نزلة سمان _ كريم أسامة ( اسف ع الازعاج لساني مفيش حاجه هنا حكماه) ⚡--(MP3_160K).mp3",
    language: "arabic",
    description: "( كريم أسامة  ) اسف ع الازعاج لساني مفيش حاجه هنا حكماه جاي بعد ما الميزان ",
  },
  {
    id: 75,
    title: "انت تقول وتمشى",
    artist: "نجاة الصغيرة",
    category: "old",
    duration: "",
    image: "./public/image/انت_تقول.jpg",
    link: "./public/music/نجاة الصغيرة - انت تقول وتمشى(MP3_320K).mp3",
    language: "arabic",
    description: "( نجاة الصغيرة ) انت تقول وتمشى انا اسهر ما نمشي",
  },
  {
    id: 76,
    title: "مليونير",
    artist: "المدفعجية",
    category: "excited",
    duration: "",
    image: "./public/image/مليونير.jpg",
    link: "./public/music/مهرجان مليونير- مسلسل ب 100 وش - غناء المدفعجية _ Mahragan Millionaire - El Madfaagya(MP3_320K).mp3",
    language: "arabic",
    description: "مهرجان مليونير- مسلسل ب 100 وش - غناء المدفعجية",
  },
  {
    id: 77,
    title: "قلبك بحر مالح",
    artist: "الصواريخ دقدق و باسم فانكى",
    category: "festival",
    duration: "",
    image: "./public/image/klbkBaherMakeh.jpeg",
    link: "./public/music/مهرجان قلبك بحر مالح -- _ مشينا صح مش عاجب _ الصواريخ دقدق و باسم فانكى _ Albk Bahr Maleh(MP3_160K).mp3",
    language: "arabic",
    description:
      "( الصواريخ دقدق و باسم فانكى ) مهرجان قلبك بحر مالح -- _ مشينا صح مش عاجب _ الصواريخ دقدق و باسم فانكى",
  },
  {
    id: 78,
    title: "يا مرسال الهوى",
    artist: "نجاة الصغيرة",
    category: "old",
    duration: "",
    image: "./public/image/يا_مرسال.jpg",
    link: "./public/music/مرسال الهوى - نجاة الصغيرة - صوت عالي الجودة(MP3_160K).mp3",
    language: "arabic",
    description: " يا مرسال الهوى نجاة الصغيرة",
  },
  {
    id: 79,
    title: "عم المجال كله",
    artist: "محمود الليثي",
    category: "festival",
    duration: "",
    image: "./public/image/عم_المجال.jpg",
    link: "./public/music/محمود الليثي - عم المجال كله ( يبني أنا في الشغله دي عمها ) [Official Music Lyrics] ابو السيد [2024](M4A_128K).m4a",
    language: "arabic",
    description: "( محمود الليثي ) عم المجال كله يبني أنا في الشغله دي عمها ",
  },
  {
    id: 80,
    title: "اتخنقت",
    artist: "محمد محي",
    category: "sad",
    duration: "",
    image: "./public/image/كلمات-اغنية-اتخنقت-محمد-محي.jpg",
    link: "./public/music/محمد محي- اتخنقت-(MP3_320K).mp3",
    language: "arabic",
    description: "( محمد محي ) اتخنقت",
  },
  {
    id: 81,
    title: "قالوا عليكي",
    artist: "محمد سعيد",
    category: "love",
    duration: "",
    image: "./public/image/قالوا_عليكي.jpeg",
    link: "./public/music/محمد سعيد - قالوا عليكي __ Mohammed Saeed [Official Music](MP3_320K).mp3",
    language: "arabic",
    description: "( محمد محي ) و قالوا عليكي",
  },
  {
    id: 82,
    title: "واحد من الناس",
    artist: "لؤي",
    category: "sad",
    duration: "",
    image: "./public/image/واحد_من_الناس.webp",
    link: "./public/music/لؤي - واحد من الناس(MP3_320K).mp3",
    language: "",
    description: "( لؤي ) كان واحد من الناس",
  },
  {
    id: 83,
    title: "الفلوس",
    artist: "احمد عبده - اسلام الملاح",
    category: "festival",
    duration: "",
    image: "./public/image/الفلوس.jpg",
    link: "./public/music/كليب مهرجان _ الفلوس _ احنا جامدين اوي اوي اوي _ احمد عبده - اسلام الملاح - انتاج ابو السيد تيم _94(MP3_160K).mp3",
    language: "arabic",
    description: " ( احمد عبده - اسلام الملاح ) كليب مهرجان _ الفلوس _ احنا جامدين اوي اوي اوي",
  },
  {
    id: 84,
    title: "طريق الاندال",
    artist: "حمادة الليثى و عمرو سلامة ",
    category: "normal",
    duration: "",
    image: "./public/image/طريق_الاندال.jpg",
    link: "./public/music/كليب طريق الاندال ( الظروف خلت الصحاب قلت ) حمادة الليثى و عمرو سلامة - انتاج سكر مصر 2023(MP3_160K).mp3",
    language: "arabic",
    description: " ( حمادة الليثى و عمرو سلامة ) كليب طريق الاندال الظروف خلت الصحاب قلت",
  },
  {
    id: 85,
    title: "يا سبايسي",
    artist: "سيف مجدي و عمر الكروان",
    category: "love",
    duration: "",
    image: "./public/image/يا_سبايسي.jpg",
    link: "./public/music/كليب _يا سبايسي_ ( انا سلسلتك حاضنة رقابتي ) سيف مجدي و عمر الكروان _ البوم سلطان الشن 2021(MP3_160K).mp3",
    language: "arabic",
    description:  " ( حمادة الليثى و عمرو سلامة ) كليب يا سبايسي انا سلسلتك حاضنة رقابتي",
  },
  {
    id: 86,
    title: "بأمارة مين",
    artist: "فريد",
    category: "sad",
    duration: "",
    image: "./public/image/amartEh.jpg",
    link: "./public/music/فريد - بأمارة مين (لو جاي في رجوع إنساني) - Farid - be_amart meen(MP3_320K).mp3",
    language: "arabic",
    description: "( فريد ) بأمارة مين لو جاي في رجوع إنساني",
  },
  {
    id: 87,
    title: "ضيعنا",
    artist: "عمر كمال وعبد الباسط حمودة واوكسانا",
    category: "excited",
    duration: "",
    image: "./public/image/ضيعنا.jpg",
    link: "./public/music/عمر كمال وعبد الباسط حمودة واوكسانا _ ضيعنا _ Omar Kamal _ Abdelbaset Hamouda _ Dai3na(MP3_160K).mp3",
    language: "arabic",
    description: " ( عمر كمال وعبد الباسط حمودة واوكسانا ) لو انك اخر قطعة احب اقولك بالسلامة فلوس نطير  ضيعنا",
  },
  {
    id: 88,
    title: "وبينا معاد",
    artist: "عمر دياب",
    category: "romantic",
    duration: "",
    image: "./public/image/وبينا_معاد.jpg",
    link: "./public/music/عمر دياب وبينا معاد ( Webna Maad Amr Diab ( HQ Music Sound(MP3_320K).mp3",
    language: "arabic",
    description: " ( عمر دياب ) وبينا معاد",
  },
  {
    id: 89,
    title: "زي العسل",
    artist: "صباح",
    category: "love",
    duration: "",
    image: "./public/image/زي_العسل.jpg",
    link: "./public/music/صباح- زي العسل(MP3_160K).mp3",
    language: "arabic",
    description: "( صباح ) زي العسل",
  },
  {
    id: 90,
    title: "اللي يمشي عادي",
    artist: "داليا",
    category: "sad",
    duration: "",
    image: "./public/image/اللي_يمشي.jpg",
    link: "./public/music/داليا - اللي يمشي عادي (حصرياً) _ 2021(MP3_160K).mp3",
    language: "arabic",
    description: "( داليا ) اللي يمشي عادي",
  },
  {
    id: 91,
    title: "اعذريني",
    artist: "خالد عصام",
    category: "sad",
    duration: "",
    image: "./public/image/اعذريني.jpg",
    link: "./public/music/خالد عصام - اعذريني _ Khaled Essam - Ouzoreny(MP3_320K).mp3",
    language: "",
    description: "( خالد عصام ) اعذريني",
  },
  {
    id: 92,
    title: "أصعب فراق",
    artist: "جورج وسوف",
    category: "sad",
    duration: "",
    image: "./public/image/اصعب_فراق.jpg",
    link: "./public/music/جورج وسوف أصعب فراق  Geroge Wassouf(MP3_320K).mp3",
    language: "arabic",
    description: "( جورج وسوف ) أصعب فراق أصعب عذاب الشوق اللي غايب",
  },
  {
    id: 93,
    title: "بعملها كده",
    artist: "عنبه",
    category: "excited",
    duration: "",
    image: "./public/image/بعملها_كدا.jpg",
    link: "./public/music/بعملها كده - عنبه ( الحمد لله لوحدي حمله ) 2024 ‏ (Official Music Video) 3enba - b3melha Kda(M4A_128K).m4a",
    language: "arabic",
    description: "( عنبه ) بعملها كده",
  },
  {
    id: 94,
    title: "اه يا حلو",
    artist: "ناي البرغوثي",
    category: "romantic",
    duration: "",
    image: "./public/image/اه_يا_حلو.jpg",
    link: "./public/music/اه يا حلو- ناي البرغوثي  Ah Ya Helu- Nai Barghouti(MP3_160K).mp3",
    language: "arabic",
    description: "( ناي البرغوثي ) اه يا حلو",
  },
  {
    id: 95,
    title: "روقان",
    artist: "حوده بندق",
    category: "excited",
    duration: "",
    image: "./public/image/rawakan.jpg",
    link: "./public/music/اغنيه ( روقان ) النسخة الماستر - حوده بندق - من مسلسل رحيل بطوله ياسمين صبري و احمد صلاح حسني حلقة 8(M4A_128K).m4a",
    language: "arabic",
    description: "( حوده بندق ) اللي معانا كسبان (روقان)",
  },
  {
    id: 96,
    title: "النمر",
    artist: "رضا البحراوي",
    category: "excited",
    duration: "",
    image: "./public/image/النمر.jpeg",
    link: "./public/music/اغنية_النمر_اول_ما_يظهر_-_غناء_رضا_البحراوي_-_تتر_مسلسل_النمر_2021_(192_kbps.mp3",
    language: "arabic",
    description: "( رضا البحراوي ) النمر اول ما بيظهر يخض",
  },
  {
    id: 97,
    title: "عيني ليك ياليل",
    artist: "نور الدين الطيار",
    category: "sad",
    duration: "",
    image: "./public/image/عيني_ليك_يا_ليل.jpg",
    link: "./public/music/نور الدين الطيار - عيني ليك ياليل Xoureldin (Officia Audio)(MP3_320K).mp3",
    language: "arabic",
    description: "( نور الدين الطيار ) عيني ليك ياليل حالي مش بخير بتمنلوكوا الخير تتمنولي الشر ليه",
  },
  {
    id: 98,
    title: "القريب منك بعيد",
    artist: "نجاة الصغيرة",
    category: "old",
    duration: "",
    image: "./public/image/القريب_منك.jpg",
    link: "./public/music/نجاة الصغيرة   القريب منك بعيد   Najat Al Saghira(MP3_160K).mp3",
    language: "arabic",
    description:
      "( نجاة الصغيرة ) القريب منك بعيد و البعيد عنك قريب كل دا و فلبي اللي حبك لسة بيسميك حبيبي ",
  },
  {
    id: 99,
    title: "هلال رمضان",
    artist: "ايهاب توفيق",
    category: "ramadan",
    duration: "",
    image: "./public/image/هلال_رمضان.jpg",
    link: "./public/music/Helal Ramadan - Ehab Tawfik ( Official Music Video ) هلال رمضان - ايهاب توفيق(M4A_128K).m4a",
    language: "arabic",
    description:
      " (  ايهاب توفيق )  اغاني رمضان هلال رمضان لما تلاقي نجوم السما ملينا ايمان لما تلاقي الخير و الحب في كل مكان ",
  },
  {
    id: 100,
    title: "اشهر اغاني رمضان",
    artist: "اشهر اغاني رمضان",
    category: "ramadan",
    duration: "",
    image: "./public/image/تجميعة_رمضان.jpg",
    link: "./public/music/اشهر اغاني رمضان  القديمة مجمعه - جودة عالية(M4A_128K).m4a",
    language: "arabic",
    description: " اشهر اغاني رمضان تجميعة اغاني رمضان ",
  },
  {
    id: 101,
    title: "جارى يا جارى",
    artist: "اعلان اورنچ رمضان",
    category: "ramadan",
    duration: "",
    image: "./public/image/جاري.jpeg",
    link: "./public/music/اعلان اورنچ رمضان 2018  _جارى_يا_جارى(M4A_128K).m4a",
    language: "arabic",
    description:
      " ( اعلان اورنچ رمضان ) اغاني رمضان جارى يا جارى يا حتة سكرة جارتي حببتي صديقة الحيوان ",
  },
  {
    id: 102,
    title: "رمضان كريم",
    artist: "حكيم",
    category: "ramadan",
    duration: "",
    image: "./public/image/رمضان_كريم.jpg",
    link: "./public/music/اغنية رمضان كريم - غناء حكيم - من مسلسل رمضان كريم(M4A_128K).m4a",
    language: "arabic",
    description: "( حكيم ) اغاني رمضان رمضان كريم فتح يا عليم تلاتين يوم في هنا و سعادة",
  },
  {
    id: 103,
    title: "اهو جه يا ولاد",
    artist: "الثلاثي المرح",
    category: "ramadan",
    duration: "",
    image: "./public/image/اهو-جيه.jpg",
    link: "./public/music/اهو جه يا ولاد(M4A_128K).m4a",
    language: "arabic",
    description: "( الثلاثي المرح ) اغاني رمضان اهو جه يا ولاد",
  },
  {
    id: 104,
    title: "رمضان في مصر حاجة تانية",
    artist: "حسين الجسمي",
    category: "ramadan",
    duration: "",
    image: "./public/image/رمضان_في_مصر.jpg",
    link: "./public/music/اورنچ رمضان 2021 _رمضان في مصر حاجة تانية_ حسين الجسمي(M4A_128K).m4a",
    language: "arabic",
    description:
      "( حسين الجسمي ) اغاني رمضان رمضان في مصر حاجة تانية و السر في التفاصيل رمضان في مصر غير الدنيا طعمه بطعم النيل",
  },
  {
    id: 105,
    title: "سر السعاده",
    artist: "حسين الجسمي",
    category: "ramadan",
    duration: "",
    image: "./public/image/سر_السعادة.jpg",
    link: "./public/music/حسين الجسمي - سر السعاده  (ماونتن ڤيو رمضان) _ ٢٠٢١(M4A_128K).m4a",
    language: "arabic",
    description: "( حسين الجسمي ) اغاني رمضان سر السعاده علي معاد معاد كل ليلة",
  },
  {
    id: 106,
    title: "العيلة الكبيرة",
    artist: "اعلان ڤودافون",
    category: "ramadan",
    duration: "",
    image: "./public/image/العيلة_الكبيرة.jpg",
    link: "./public/music/ڤودافون – العيلة الكبيرة رمضان 2016(M4A_128K).m4a",
    language: "arabic",
    description:
      " ( اعلان ڤودافون ) اغاني رمضان العيلة الكبيرة رمضان حالا بالن انا طالع  مسا التماسي",
  },
  {
    id: 107,
    title: "رمضان جانا",
    artist: "محمد عبد المطلب",
    category: "ramadan",
    duration: "",
    image: "./public/image/رمضان_جانا.jpg",
    link: "./public/music/محمد عبد المطلب _ أغنية رمضان جانا(M4A_128K).m4a",
    language: "arabic",
    description: " ( محمد عبد المطلب ) اغاني رمضان رمضان جانا و فرحنابوا بعد غيابه اهلا رمضان",
  },
  {
    id: 108,
    title: "رمضان جنه",
    artist: "محمد منير",
    category: "ramadan",
    duration: "",
    image: "./public/image/رمضان_جنة.jpg",
    link: "./public/music/محمد منير - رمضان جنه _ Mohamed Mouner - Ramdan Gana(M4A_128K).m4a",
    language: "arabic",
    description: " ( محمد منير ) اغاني رمضان رمضان جنه رمضان فرحة اهلا رمضان",
  },
  {
    id: 109,
    title: "مرحب شهر الصوم",
    artist: "عبد العزيز محمود",
    category: "ramadan",
    duration: "",
    image: "./public/image/مرحب_شهر_الصوم.jpg",
    link: "./public/music/مرحب شهر الصوم(M4A_128K).m4a",
    language: "arabic",
    description: " ( عبد العزيز محمود ) اغاني رمضان مرحب شهر الصوم لياليك عادة بأمان",
  },
];

const content = document.querySelector(".content-audio");
// const sideBar = document.querySelector(".sideBar");
const bar = document.querySelector(".bar");
const btn = document.querySelector(".close");
const show = document.querySelector(".show-data");
const musicImage = document.querySelector(".container-image");
const musicHeader = document.querySelector(".style-header");
const musicAudio = document.querySelector(".music-audio");
const descriptionMusic = document.querySelector(".description-audio");
const heart = document.querySelector(".heart");
const inputSearch = document.querySelector(".input-search");
const searchBtn = document.querySelector(".search-btn");

document.addEventListener("DOMContentLoaded", () => {
  const inputSearch = document.querySelector(".input-search");
  const searchBtn = document.querySelector(".search-btn");

  if (inputSearch && searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (inputSearch.value) {
        const oneMusic = audio.filter((ele) =>
          ele.description
            .toLocaleLowerCase()
            .includes(inputSearch.value.toLocaleLowerCase())
        );

        // console.log(oneMusic.map(ele=>ele.title));

        content.innerHTML = ``;

        oneMusic.map((ele) => {
          content.innerHTML += `<div class="cardOfMusic" data-id=${ele.id}>
                 <img class="image" src=${ele.image} alt="">
                 <div class="audio">
                   <div>
                     <p class="titleMusic">${ele.title}</p>
                     <p class="singer">${ele.artist}</p>
                   </div>
                   <i class="fa-solid fa-circle-play  icon-play" style="color: green;"></i>
                 </div>
             </div>
       `;
        });

        function singleMusic(id) {
          const index = id;

          forward.addEventListener("click", () => {
            methos(+index + 1);
          });

          backward.addEventListener("click", () => {
            methos(+index - 1);
          });

          musicImage.innerHTML = `<img src=${
            audio[index - 1].image
          }  class="image-sideBar"/>`;

          musicHeader.innerHTML = `
       
                                 <div class="name_singer">
                                 <p class="title-music">
                                 ${audio[index - 1].title} 
                                 </p>
                                 
                                 <p class="singer-music">
                                 ${audio[index - 1].artist} 
                                 </p>
                              </div>
       
                               
                               `;

          musicAudio.innerHTML = `<audio  class="audio-style" style="width: 100%;" controls autoPlay    >                                   
                                   <source src="${
                                     audio[index - 1].link
                                   }"  type="audio/ogg"> 
                                   </audio> `;

          // descriptionMusic.innerHTML = `<p>${
          //   audio[index - 1].description
          // } </p>`;
        }

        const NewMusic = document.querySelectorAll(".cardOfMusic");

        NewMusic.forEach((ele) => {
          ele.addEventListener("click", () => {
            singleMusic(ele.dataset.id);
            console.log(+ele.dataset.id + 1);
            bar.classList.add("active-width");
          });

          btn.addEventListener("click", () => {
            bar.classList.remove("active-width");
          });
        });
      } else {
        content.innerHTML = ``;
        audio.forEach((element) => {
          content.innerHTML += `
            <div class="cardOfMusic" data-id=${element.id}>
                      <img class="image" src=${element.image} alt="">
                      <div class="audio">
                        <div>
                          <p class="titleMusic">${element.title}</p>
                          <p class="singer">${element.artist}</p>
                        </div>
                        <i class="fa-solid fa-circle-play  icon-play" style="color: green;"></i>
                      </div>
                  </div>
            `;
        });

        function methos(id) {
          const index = id;

          forward.addEventListener("click", () => {
            methos(+index + 1);
          });

          backward.addEventListener("click", () => {
            methos(+index - 1);
          });

          musicImage.innerHTML = `<img src=${
            audio[index - 1].image
          }  class="image-sideBar"/>`;

          musicHeader.innerHTML = `
                                    <div class="name_singer">
                                    <p class="title-music">
                                    ${audio[index - 1].title} 
                                    </p>
                                    
                                    <p class="singer-music">
                                    ${audio[index - 1].artist} 
                                    </p>
                                 </div>
                                  `;

          musicAudio.innerHTML = `<audio class="audio-style  style="width: 100%;" controls autoPlay    >                                   
                                      <source src="${
                                        audio[index - 1].link
                                      }"  type="audio/ogg"> 
                                      </audio> `;

          // descriptionMusic.innerHTML = `<p>${
          //   audio[index - 1].description
          // } </p>`;
        }

        const music = document.querySelectorAll(".cardOfMusic");

        music.forEach((ele) => {
          ele.addEventListener("click", () => {
            methos(ele.dataset.id);
            console.log(+ele.dataset.id + 1);
            // sideBar.classList.add("active");
            bar.classList.add("active-width");
          });

          btn.addEventListener("click", () => {
            // sideBar.classList.remove("active");
            bar.classList.remove("active-width");
          });
        });
      }
    });
  } else {
  }
});

const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");

audio.forEach((element) => {
  content.innerHTML += `
  <div class="cardOfMusic" data-id=${element.id}>
            <img class="image" src=${element.image} alt="">
            <div class="audio">
              <div>
                <p class="titleMusic">${element.title}</p>
                <p class="singer">${element.artist}</p>
              </div>
              <i class="fa-solid fa-circle-play  icon-play" style="color: green;"></i>
            </div>
        </div>
  `;
});

function methos(id) {
  const index = id;

  forward.addEventListener("click", () => {
    methos(+index + 1);
  });

  backward.addEventListener("click", () => {
    methos(+index - 1);
  });

  musicImage.innerHTML = `<img src=${
    audio[index - 1].image
  }  class="image-sideBar"/>`;

  musicHeader.innerHTML = `
                          <div>
                          <p class="title-music">
                          ${audio[index - 1].title} 
                          </p>
                          
                          <p class="singer-music">
                          ${audio[index - 1].artist} 
                          </p>
                       </div>
                        `;

  musicAudio.innerHTML = `<audio class="audio-style"  style="width: 100%;" controls autoPlay >                                   
                            <source src="${
                              audio[index - 1].link
                            }"  type="audio/ogg"> 
                            </audio> `;

  // descriptionMusic.innerHTML = `<p>${audio[index - 1].description} </p>`;
}

const music = document.querySelectorAll(".cardOfMusic");

music.forEach((ele) => {
  ele.addEventListener("click", () => {
    methos(ele.dataset.id);
    console.log(+ele.dataset.id + 1);
    // sideBar.classList.add("active");
    bar.classList.add("active-width");
  });

  btn.addEventListener("click", () => {
    // sideBar.classList.remove("active");
    bar.classList.remove("active-width");
  });
});
