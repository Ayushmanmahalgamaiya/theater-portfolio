/**
 * ============================================================
 *  PLAYS DATA — Edit this file to add/update your productions
 * ============================================================
 *
 *  HOW TO ADD A PLAY:
 *  1. Copy one object from the array below
 *  2. Paste it and fill in YOUR details
 *  3. Add your images to assets/plays/play-id/ folder
 *
 *  IMAGE PATHS:
 *  - cover: shown as the card image on homepage and hero on detail page
 *  - photos: array of paths shown in the production gallery
 *  - pressImages: newspaper/magazine images about this play
 */

const playsData = [

  {
    id: "play-1",                        // unique ID (used in URL: play.html?id=play-1)
    title: "Astawakra",                  // Title of the play
    subtitle: "अष्टावक्र",           // Optional subtitle
    year: "2023",
    genre: "Tragedy · Sanskrit Drama",
    language: "Hindi",
    role: "Raja Janak",                    // Your role: Director / Lead Actor / Both
    venue: "Artist Combine intitute of performing art, Gwalior",
    shows: "1",
    playwright: "Rohit jain",
    cover: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a942fd1a-9115-496a-b36a-15b5de3a0a5f.jpg",  // Main cover image

    // Short teaser (shown on homepage card)
    teaser:"When the world judges the body, a voice rises to awaken the soul. In a court full of wisdom, one man stands different—bent in body, but unshaken in truth.Ashtavakra is not just a story… it is a confrontation between illusion and reality." ,
    
    // Full synopsis (shown on play detail page)
    synopsis: `
      <p>Ashtavakra is a powerful theatrical piece inspired by the ancient tale of the sage Ashtavakra, who challenges societal perceptions of knowledge and identity. Set in King Janaka’s court, the story follows a young boy with a physically deformed body who is mocked by scholars, yet fearlessly questions their understanding of truth. Through sharp dialogue and philosophical depth, he reveals that true wisdom lies beyond the physical form, emphasizing the idea that the self is not the body but pure consciousness.
          The play moves from conflict to realization, as arrogance transforms into humility within the court. Inspired by the essence of the Ashtavakra Gita, this production focuses on emotional strength and inner confidence. As an actor, the portrayal emphasized calm authority and conviction, while minimalistic staging allowed the message to stand at the forefront, creating a deeply engaging and thought-provoking experience for the audience.?
          
          अष्टावक्र एक प्रभावशाली नाट्य प्रस्तुति है, जो प्राचीन ऋषि अष्टावक्र की कथा से प्रेरित है। यह नाटक समाज द्वारा बनाए गए ज्ञान और पहचान के दृष्टिकोण को चुनौती देता है। राजा जनक के दरबार में स्थापित इस कहानी में एक ऐसे बालक की यात्रा दिखाई गई है, जिसका शरीर विकृत है, और जिसे विद्वानों द्वारा उपहास का सामना करना पड़ता है। इसके बावजूद, वह निडर होकर सत्य और ज्ञान की उनकी समझ पर प्रश्न उठाता है। अपने तीखे संवादों और गहन दार्शनिक विचारों के माध्यम से वह यह स्पष्ट करता है कि वास्तविक ज्ञान शारीरिक रूप से परे है, और आत्मा ही हमारी सच्ची पहचान है।
          यह नाटक संघर्ष से आत्मबोध की यात्रा को दर्शाता है, जहाँ अहंकार धीरे-धीरे विनम्रता में परिवर्तित हो जाता है। अष्टावक्र गीता की मूल भावना से प्रेरित यह प्रस्तुति भावनात्मक शक्ति और आंतरिक आत्मविश्वास पर केंद्रित है। एक अभिनेता के रूप में प्रस्तुति में संयम, स्थिरता और दृढ़ विश्वास को प्रमुखता दी गई, जबकि न्यूनतम मंच सज्जा के माध्यम से संदेश को केंद्र में रखा गया। यह नाटक दर्शकों के लिए एक गहन, विचारोत्तेजक और भावनात्मक अनुभव प्रस्तुत करता है। </p>`,
    

    // Your personal story with this play
    journey: `
      <p>This production began as an opportunity to explore a deeply philosophical text, where I portrayed the role of Raja Janak—a character torn between authority and the search for true wisdom. Initially, understanding the emotional depth of Janak was challenging, as the role required a shift from ego and power to humility and self-realization.
      Through the process, I discovered the importance of stillness and listening as an actor. Rather than dominating the stage, I learned to react, absorb, and transform alongside Ashtavakra’s words. This journey not only strengthened my performance skills but also gave me a deeper understanding of self-awareness, both as an artist and as an individual.</p>
    `,

    // Cast and crew list
    cast: [
      { name: "Rohit jain", role: "Director" },
      { name: "Ayushman", role: "Raja Janak" },
      { name: "Rahul", role: "Ashtavakra" },
      { name: "Guruji", role: "Manish" },
      { name: "suppoting cast", role: "Arpit shukla" },
      
    ],

    // Photos inside the play detail page
    photos: [
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/bf03a036-1201-485b-92ad-0035417922d0.jpg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/bf03a036-1201-485b-92ad-0035417922d0.jpg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/28189df8-b71a-48bd-b372-7b87172bb813.jpg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/ae365d96-cc07-483c-89d6-75c52d911bce.jpg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/c145ce94-e6a3-4ca4-98a1-754948156995.jpg",
    ],

    // Press / newspaper clippings for THIS play
    press: [
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a9e6a7f4-1d7c-4544-b0ad-223fd0ea25ee.jpg",
        source: "Dainik Bhaskar, june 2023",
        quote: "Ashtavakar's Scriptural Knowlegde ended the evil ritual."
      },
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5a1d3a89-fede-42e5-a52f-fc4b55a9dd02.jpg",
        source: "Nai Duniya, Mar 2023",
        quote: "The direction showed remarkable maturity in handling such a complex text."
      },
    ],

    // Awards this play won
    awards: [
      "Best Direction — MP State Theater Festival 2023",
      "Best Production — Regional Theater Awards 2023",
    ],

    // Color accent for this play's detail page (hex or CSS color)
    accentColor: "#c9a84c",
  },

  // ──────────────────────────────────────────────────────────────

  {
    id: "play-2",
    title: "बच्चों की पाठशाला ",
    subtitle: "A Comedy Drama",
    year: "2023",
    genre: "Comedy",
    language: "Hindi",
    role: "Teacher",
    venue: "Artist Combine intitute of performing art, Gwalior",
    shows: "! Performence",
    playwright: "Rohit jain",
    cover: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/8f1774ec-912d-4990-b678-c29c15c09731.jpg",

    teaser: "“Where in a children’s classroom, learning is less… and corruption is more!Beneath the laughter lies a question—has responsibility been left only in textbooks?Baccho Ki Pathshala” — a comedy that will make you laugh… and also make you think.",

    synopsis: `
      <p>“Baccho Ki Pathshala” is a satirical comedy that highlights corruption and lack of responsibility within the education system. The story revolves around a school where teachers and authorities avoid their duties, focusing more on appearance and self-interest than real learning, directly affecting the children’s future.
          Through humor and engaging situations, the play raises an important question—who is truly responsible: the teachers, the system, or society? While entertaining, it delivers a strong message that encourages the audience to reflect on the need for change.</p>
      <p>बच्चों की पाठशाला” एक व्यंग्यात्मक कॉमेडी नाटक है, जो शिक्षा प्रणाली में फैले भ्रष्टाचार और जिम्मेदारी की कमी को हल्के-फुल्के अंदाज़ में प्रस्तुत करता है। कहानी एक ऐसी पाठशाला के इर्द-गिर्द घूमती है जहाँ शिक्षक, प्रशासन और व्यवस्था अपनी-अपनी जिम्मेदारियों से बचते हुए सिर्फ दिखावे और स्वार्थ में उलझे रहते हैं। इस अव्यवस्था का असर सीधे बच्चों की शिक्षा और भविष्य पर पड़ता है। हास्यपूर्ण स्थितियों और मज़ेदार संवादों के बीच नाटक यह सवाल उठाता है कि असली जिम्मेदारी किसकी है—शिक्षकों की, व्यवस्था की या समाज की? हँसी-ठिठोली के साथ यह नाटक एक गहरी सच्चाई को उजागर करता है और दर्शकों को सोचने पर मजबूर करता है कि बदलाव की शुरुआत आखिर कहाँ से होनी चाहिए।</p>
    `,

    journey: `
      <p>Being part of “Baccho Ki Pathshala” as a teacher was both fun and thought-provoking. I approached the character by observing real-life teaching environments, understanding how sometimes responsibility is overlooked within the system. My focus was to bring out the contrast between humor and reality—making the audience laugh while subtly reflecting the flaws in the system.
        One of the main challenges was balancing comedy with truth. As an actor, I had to ensure the character didn’t become just a caricature, but felt real and relatable. Through this process, I discovered how powerful satire can be in storytelling, and it helped me grow in expressing deeper messages through light-hearted performance.</p>
    `,

    cast: [
      { name: "Ayushman Mahalgamaiya", role: "Teacher" },
      { name: "Rohit Jain", role: "Director" },
      { name: "Pawan", role: "Inspector" },
      { name: "Dhurv", role: "Government servent" },
    ],

    photos: [
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/6a2004d3-2e2f-443b-baf9-8fd617ad930e.jpg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/4c679229-cd33-4738-b6eb-0cc9c67aef59.jpg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/d48fa801-9bf4-4c38-8f24-7ee08f244e93.jpg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/8f1774ec-912d-4990-b678-c29c15c09731.jpg"
    ],

    press: [
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a5b8329d-798c-4605-88de-489568c68905.jpg",
        source: "Denik bhasker, june 2023",
        quote: "Small play gives a bigger massage"
      },
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/ae49015e-4061-41f5-9afd-115b8f5d5c62.jpg",
        source: "Patrika, June 2023",
        quote: "Corruption and irresponsibility"
      },
    ],

    awards: [
      "Best Actor — MP Theater Samman 2021",
      "Special Jury Award — National Theater Festival 2022",
    ],

    accentColor: "#8b3a3a",
  },

  // ──────────────────────────────────────────────────────────────

  {
    id: "play-3",
    title: "Hungry stone Art festival 2026",
    subtitle: "आत्महत्या",
    year: "2026",
    genre: "Comedy Play",
    language: "Hindi Adaptation",
    role: "Suresh-Co-Actor",
    venue: "Kala Samhu, Gwalior",
    shows: "30+ Performances",
    playwright: "Alok Shukla",
    cover: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/b3ff754b-713c-4327-804e-04b875b9cc4f.jpeg",

    teaser: "An Indian reimagining of a powerful social drama — two men, their struggles, and a search for meaning amidst life’s pressures..",

    synopsis: `
      <p>This Hindi adaptation of “Atmahatya” is set in an Indian middle-class context, where Suresh and Ramesh face societal pressure, unemployment, and personal struggles. Through localized language and cultural references, the story becomes more relatable while preserving the core emotional depth and search for meaning in their lives..</p>
      <p>आलोक शुक्ल की रचना “आत्महत्या” एक संवेदनशील विषय पर सामाजिक-मानसिक दृष्टि से विचार प्रस्तुत करती है। इसमें बताया गया है कि व्यक्ति किन परिस्थितियों, मानसिक दबावों और सामाजिक उपेक्षा के कारण अत्यधिक निराशा तक पहुँच सकता है। लेखक सहानुभूति, संवाद और समय पर सहयोग की ज़रूरत पर ज़ोर देते हैं तथा समाज, परिवार और संस्थाओं की जिम्मेदारी रेखांकित करते हैं कि वे अकेलेपन और निराशा को पहचानकर सहायता उपलब्ध कराएँ। रचना का उद्देश्य जागरूकता बढ़ाना और मानवीय समझ को मजबूत करना है, न कि किसी हानिकारक व्यवहार को बढ़ावा देना।</p>
    `,

    journey: `
      <p>Adapting and directing this iconic play has been a deeply enriching artistic journey for me. Through research, I explored its emotional and social layers; during rehearsals, I collaborated with actors to bring the characters to life; and the performances connected powerfully with audiences. This production became a significant milestone in my growth as an artist..</p>
      <p>इस नाटक को रूपांतरित और निर्देशित करना मेरे लिए एक गहरा कलात्मक अनुभव रहा। शोध के दौरान मैंने इसके भाव और सामाजिक संदर्भों को समझा, रिहर्सल में कलाकारों के साथ मिलकर पात्रों को जीवंत बनाया, और मंचन के दौरान दर्शकों की प्रतिक्रिया ने इस यात्रा को और खास बना दिया। यह प्रस्तुति मेरे लिए एक कलाकार के रूप में आत्म-विकास और अभिव्यक्ति का महत्वपूर्ण पड़ाव रही।</p>
    `,

    cast: [
      { name: "Ayuhman", role: "Suresh-Co-actor" },
      { name: "Arpit", role: "Ramesh-Coactor" },
      { name: "Rishita Mangal", role: "Director" },
      { name: "Ravi Kushwaha", role: "Kidnapper" },
      { name: "Avadh", role: "Girish" },
      { name: "Krishna", role: "Hokar" },
      
    ],

    photos: [
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/4a482110-1472-4fc8-bb52-c7650992e125.jpeg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/32fdf056-8f6c-4f4b-92b2-d36933952358.jpeg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/df001048-bd51-4a0e-aa44-d0647ec67b74.jpeg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5c47d05c-efc8-4492-bc91-6f9d9728c9c2.jpeg",
    ],

    press: [
      
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/c16a50e2-4227-4e08-a230-c3d48e2f06d9.jpeg",
        source: "Patrika, March 2026",
        quote: "A bold and emotionally resonant adaptation that reinterprets the play into a deeply rooted Indian narrative.."
      },
       {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a319445e-332f-427c-9cdd-c790281eba80.jpeg",
        source: "Denik CIty Bhaskar, March 2026",
        quote: "A sharp and impactful satire on unemployment."
      },

    ],

    awards: [
      "Best Adaptation — South Asian Theater Awards 2019",
    ],

    accentColor: "#3a6b5a",
  },

  // ──────────────────────────────────────────────────────────────
  {
    id: "play-4",
    title: "Khubsutar Bahu",
    subtitle: "A Satirical Hindi Drama",
    year: "2026",
    genre: "A Satirical Social Comedy",
    language: "Hindi",
    role: "Patel Chacha and Sutradhar",
    venue: "Artist Combine intitute of performing art, Gwalior",
    shows: "1 Performances",
    playwright: "Deepak Soni",
    cover: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/8933c28d-6994-48d4-9dbb-bcd3b8d51891.png",

    teaser: "A sharp and humorous reflection of Indian society — a family, a bride, and the obsession with beauty.",

    synopsis: `
      <p>“Khubsurat Bahu” is a satirical portrayal of an Indian social mindset where a woman’s worth is judged more by her beauty than her character. The story revolves around a family obsessed with finding a “beautiful” bride for their son, reflecting the superficial values deeply rooted in society.
        This adaptation localizes the narrative through an Indian household setting, incorporating cultural nuances like family pressure, societal expectations, and everyday domestic interactions. The use of colloquial language and familiar situations makes it relatable to Indian audiences.through humor and satire, the play highlights that true beauty lies in one’s values, behavior, and sensitivity rather than mere physical appearance.</p>
      <p>यह नाटक “खबसूरत बहू” भारतीय समाज में व्याप्त उस सोच का व्यंग्यात्मक चित्रण है, जहाँ बहू का मूल्य उसके गुणों से नहीं बल्कि उसकी सुंदरता से आँका जाता है। कहानी एक ऐसे परिवार के इर्द-गिर्द घूमती है जो अपने बेटे के लिए केवल एक सुंदर बहू की तलाश में है।

इस रूपांतरण में भारतीय पारिवारिक परिवेश, रिश्तेदारों की दखलअंदाजी, और समाज की दिखावटी मानसिकता को प्रमुखता से दर्शाया गया है। लोकभाषा, घरेलू संवाद और पारंपरिक मान्यताओं के माध्यम से इसे भारतीय दर्शकों के लिए और अधिक प्रासंगिक बनाया गया है।

नाटक अपने हास्य और व्यंग्य के जरिए यह संदेश देता है कि असली सुंदरता व्यक्ति के संस्कार, व्यवहार और संवेदनशीलता में होती है, न कि केवल बाहरी रूप में।</p>
    `,

    journey: `
      <p>“खबसूरत बहू” के साथ मेरा अनुभव एक कलाकार के रूप में बहुत खास रहा। इस नाटक में मैंने पटेल चाचा और सूत्रधार का किरदार निभाया, जो कहानी को आगे बढ़ाने और उसके व्यंग्य को दर्शकों तक पहुँचाने में महत्वपूर्ण हैं।
      🎬 रिहर्सल के दौरान मैंने कलाकारों के साथ मिलकर संवादों को बहुत नैचुरल और रियल रखने पर काम किया। हम लोगों ने ओवर-एक्टिंग से बचते हुए सिचुएशनल कॉमेडी और सटीक टाइमिंग पर ध्यान दिया। हर सीन में यह कोशिश रही कि व्यंग्य साफ नजर आए लेकिन वह भारी न लगे — दर्शक हंसते-हंसते सोचने पर मजबूर हो जाएं।
      मंच पर प्रदर्शन के दौरान दर्शकों की हंसी और उनकी प्रतिक्रिया ने यह महसूस कराया कि नाटक का संदेश उन तक पहुँच रहा है।
      मेरे लिए यह नाटक एक सीख थी कि कैसे छोटे-छोटे किरदार भी गहरी बात कह सकते हैं और एक कलाकार के रूप में मेरी समझ को और मजबूत बना सकते हैं।.</p>
    `,

    cast: [
      { name: "Deepak soni", role: "Director" },
      { name: "Ayushman", role: "Patel CHacha and Sutradhar" },
      { name: "deepesh", role: "hari" },
      { name: "Arpit", role: "fheran Chacha" },
      { name: "Rishita", role: "Suman" },
      { name: "Bhumi", role: "chachi" },
      { name: "Rimjhim", role: "Agarewali" },
      { name: "ravi", role: "Gullu" },
      { name: "krishna", role: "Guri shankar" },
      { name: "Ankita", role: "Basanti" },
      { name: "Ratila", role: "Shahrukh" },
      { name: "Avadh", role: "Amar singh" },
      { name: "Lakhan", role: "Ankush Jain" },
      { name: "Champatiya", role: "Jatin" },
    ],

    photos: [
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/6a74b89b-7f55-4735-ae8a-73e6d3502142.jpeg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a2d9c62a-5a43-4b3d-8dd1-c32c86ffde56.jpeg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/7e2a8795-d088-4cd6-9f7f-3ffa6efaf69c.jpeg",
      "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/53f77bf1-9a0e-48bf-a02a-339688c5029b.jpeg",
    ],

    press: [
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/e0d78b45-120e-4ae9-9a76-83702055e5bc.jpeg",
        source: "City Bhaskar, March 2026",
        quote: "नाटक में दिखावे से सच्चाई तक का सफर जहां टूटी सुंदरता की परिभाषा"
      },
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/aa17b363-0d1b-407e-bbee-e61419325bc0.jpeg",
        source: "Sandesh Gwalior, March 2026",
        quote: "खूबसूरत बहू ने खोली समाज की सोच की परतें"
      },
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/e0b5a70c-8d0a-48b3-9100-407459fac9c3.jpeg",
        source: "Patrika Plus Gwalior, March 2026",
        quote: "सुंदरता के प्रति आकर्षण और सामाजिक विडंबनाओं पर नाटक में काश तीखा व्यंग"
      },
      {
        image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/99c1447a-2783-4462-9657-09b70edfeffe.jpeg",
        source: "Shri Ram Express, March 2026",
        quote: "खूबसूरत बहू - हंसी के बीच छुपी सच्चाई"
      },
    ],

    awards: [
      "Best Adaptation — South Asian Theater Awards 2019",
    ],

    accentColor: "#3a6b5a",
  },

  // ADD MORE PLAYS BELOW IN THE SAME FORMAT
  // ──────────────────────────────────────────────────────────────

];
