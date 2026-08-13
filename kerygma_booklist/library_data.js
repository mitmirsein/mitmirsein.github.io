const bioHarnack = "19세기 말 20세기 초 독일을 대표하는 신학자이자 교회사학자. 리츨 학파의 거두로서 역사비평적 방법론을 통해 초기 기독교와 교리사 연구에 획기적인 업적을 남겼다. 그의 대표작 『교리사』는 기독교 사상사의 고전으로 꼽히며, 『기독교의 본질』은 자유주의 신학의 정수를 보여주는 저작으로 널리 알려져 있다.";

const bioSeeberg = "독일의 루터교 신학자이자 교회사학자. 하르낙과 동시대에 활동하며 베를린 대학에서 가르쳤다. 그는 역사적 비평 방법론을 수용하면서도 루터교 정통주의 신학을 변호하고 계승하는 데 힘썼다. 그의 대작 『교리사 교본』(Lehrbuch der Dogmengeschichte)은 하르낙의 『교리사』에 필적하는 역작으로, 사회학적 관점을 가미한 교리사 해석으로 유명하다.";

const bioKimJaejin = `연세대학교 신학과 및 대학원 졸업, 독일 튀빙겐 및 뮌스터 대학교 신학박사(Dr. theol.). 현재 계명대학교 신학과 조직신학 교수이자 케리그마신학연구원(KTA) 원장으로 재직 중이다. 한국칼바르트학회 및 한국조직신학회 회장을 역임했으며, 『세례론』, 『성경의 영-그리스도론』, 『바르트 신학해부』 등 다수의 저서와 역서를 통해 한국 신학계에 깊이 있는 통찰을 제공하고 있다.`;

const bioKimYongsik = `고등학교 시절 친구의 전도로 신앙에 입문하여 의심을 넘어 믿음의 길을 걸어왔다. 장로회신학대학원(M.Div)에서 수학하며 9년간 파트타임 사역을 감당했으나, 깊은 고민 끝에 진로를 전환하여 현재 공립학교 특수교사로 재직 중이다. 일상 속에서 만나는 하나님과 말씀의 은혜를 진솔한 언어로 풀어내는 데 주력하고 있다.`;

const bioTertullian = "카르타고 출신의 법률가이자 수사학자였으며, 초기 기독교의 가장 중요한 라틴 교부 중 한 사람이다. 그는 날카로운 논리와 방대한 지식, 그리고 열정적인 변증으로 '라틴 신학의 아버지'로 불린다. 삼위일체, 기독론, 교회론 등 기독교 핵심 교리 형성에 크게 기여했다.";

const bioMichaelHong = "Michael Hong studied philosophy and theology at university and graduate school and is now a traveling preacher, spreading the Gospel. His other books, \"Bible Reading and Preaching: Uncovering Deeper Meanings in the Bible\" and \"Advent: How to Wait for the Lord's Coming\" were published in 2023.";

const bioLeeJangseop = "볼프하르트 판넨베르크(Wolfhart Pannenberg)를 전공하였다. 영남신학대학교와 계명대학교에서 신학을 공부하고, 계명대학교 대학원에서 에버하르트 융엘의 하나님 존재 이해를 연구하고, 연세대학교 대학원에서 볼프하르트 판넨베르크의 신학의 학문성을 연구하였다. 2020년부터 케리그마신학연구원의 부원장 및 연구교수로 일하고 있다.";

const bioChoDukyoung = "충북 충주 출생. 한국문학연구회 충북지부 사무국장, 월간 <새벗> 편집자문위원을 역임했으며, 한국기독교출판문화상 어린이도서부문 최우수상을 최초 2년 연속 수상했다. 김천대·안양대·평택대 겸임교수와 에일린신학연구원 대학원장을 거쳐 지금은 신학연구소의 소장으로 있다. 기독교 세계관과 창조론, 그리고 문학을 아우르는 폭넓은 집필 활동을 하고 있다.";

const bioMichaelHongKr = "대학과 대학원에서 철학과 신학을 공부했으며, 현재 순회 설교자로 복음을 전하고 있다. 저서로는 『성경 읽기와 설교』, 『주님을 기다리는 법』 등이 있으며, 깊이 있는 성경 묵상을 바탕으로 한 설교와 저술 활동에 매진하고 있다.";

const bioKasemann = "에른스트 케제만(Ernst Käsemann)은 현대 신약학의 거장이자 불트만의 수제자로 꼽히며, 튜빙겐 대학교에서 가르쳤다. 역사적 예수 연구와 바울 신학 해석에 지대한 공헌을 했다. 역자 전경연 교수는 한국 신약학계의 권위자로 30여 년간 한신대에서 재직하며 수많은 신학 서적을 번역 소개했다.";

const libraryData = [
  {
    "id": "1",
    "title": "영혼론",
    "subtitle": "영혼의 불멸성에 관하여",
    "author": "테르툴리아누스 | 조영호 감수",
    "status": "published",
    "price": "5,300원",
    "tags": ["교부", "영혼론", "명저번역프로젝트"],
    "cover": "./images/book_1.jpg",
    "links": [
        { "site": "교보문고", "url": "https://ebook-product.kyobobook.co.kr/dig/epd/ebook//E000011414027" },
        { "site": "알라딘", "url": "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=363871457" },
        { "site": "Yes24", "url": "https://www.yes24.com/Product/Goods/146336282" },
        { "site": "Google Play", "url": "https://play.google.com/store/books/details?id=zS5cEQAAQBAJ" },
        { "site": "온라인 용어 해설", "url": "http://kerygma.co.kr/tertullianus/" }
    ],
    "desc": "초기 기독교 사상의 정수. '라틴 신학의 아버지' 테르툴리아누스가 파헤친 영혼의 기원과 본질에 대한 기독교 최초의 체계적인 논의를 담고 있습니다.",
    "long_desc": `<p><strong>"라틴 신학의 아버지" 테르툴리아누스가 파헤친 영혼의 본질과 운명!</strong></p>
<p>초기 기독교의 가장 독창적이고 영향력 있는 사상가 중 한 명인 테르툴리아누스. 그의 대표작 『영혼론』(De Anima)은 영혼의 기원, 본성, 속성, 그리고 사후 상태에 대한 기독교 최초의 체계적인 논의를 담고 있습니다. 테르툴리아누스는 당대의 헬라 철학(특히 플라톤주의와 스토아주의)과 영지주의 이단들의 영혼론을 날카롭게 비판하며, 성경과 사도적 전승, 그리고 때로는 자연 철학과 의학적 지식까지 동원하여 독자적인 기독교 영혼론을 구축합니다.</p>
<p>그는 영혼이 하나님의 숨결로 창조되었으며 육체와 함께 잉태되는 '물질적'(corporealis) 실체라고 주장하며, 이는 영혼이 감각하고 고통받으며 사후에도 개별성을 유지하는 근거가 된다고 역설합니다. 또한 영혼의 단일성, 마음(정신)과의 관계, 꿈과 잠의 상태, 영혼의 성장과 타락 가능성, 그리고 죽음 이후 하데스에서의 잠정적 심판과 낙원에서의 안식 등, 영혼에 관한 거의 모든 주제를 망라하며 심도 깊은 논증을 펼칩니다.</p>`,
    "author_bio": bioTertullian,
    "quotes": [
      { "text": "하나님에게서 받은 것은 하나님에게서 배워야 하며, 하나님에게서 배우지 못한다면 다른 누구에게서도 알지 말아야 한다. 하나님이 감춘 것을 누가 밝힐 수 있겠는가?", "cite": "1절" },
      { "text": "영혼은 물체적인 속성을 공유하며 물체임이 입증된다. ... 물체가 아니라면 신체를 떠날 수 없기 때문이다.", "cite": "5절" },
      { "text": "우리는 둘 다[영혼과 육체] 동시에 잉태되고 형성되며 완성된다고 말한다. 이는 또한 동시에 드러나며, 잉태 과정에서 어떤 순간도 중재되지 않는다.", "cite": "27절" }
    ]
  },
  {
    "id": "2",
    "title": "교리사 개요 (서방 교회)",
    "subtitle": "서방 교회의 맥락에서 교리의 발전",
    "author": "아돌프 폰 하르낙",
    "status": "published",
    "price": "18,000원",
    "tags": ["교리", "교리사", "명저번역프로젝트"],
    "cover": "./images/book_2.jpg",
    "links": [
        { "site": "교보문고", "url": "https://ebook-product.kyobobook.co.kr/dig/epd/ebook//E000010549804" },
        { "site": "알라딘", "url": "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=353630301" },
        { "site": "Yes24", "url": "https://www.yes24.com/Product/Goods/140036797" },
        { "site": "Google Play", "url": "https://play.google.com/store/books/details?id=ZLM2EQAAQBAJ" },
        { "site": "리디북스", "url": "https://ridibooks.com/books/3373000015?_s=search&_q=%ED%95%98%EB%A5%B4%EB%82%99&_rdt_sid=SearchBookList" }
    ],
    "desc": "교리의 역사적 변천 과정을 추적한 하르낙의 기념비적 저작. 서방 신학의 흐름을 인물과 논쟁 중심으로 짚어냅니다.",
    "long_desc": `<p><strong>하르낙 교리사 개요 1: 서방 교회의 맥락에서 교리의 발전</strong></p>
<p>기독교 교리사의 거장 아돌프 폰 하르낙의 기념비적인 저작 『교리사 개요』가 새로운 번역으로 독자들을 찾아갑니다. 방대한 『교리사』(Lehrbuch der Dogmengeschichte)의 정수를 담아내면서도, 신학생과 목회자 등 폭넓은 독자층을 위해 간결하고 명료하게 서술된 이 책은 교리의 역사적 변천 과정을 이해하는 데 없어서는 안 될 필독서입니다.</p>
<p>하르낙은 이 책에서 초기 기독교의 태동부터 당대에 이르기까지 교리가 형성되고 변화해 온 흐름을 역사비평적 관점에서 치밀하게 추적합니다. 단순히 교리의 내용을 나열하는 데 그치지 않고, 각 교리가 어떤 역사적 배경과 신학적 논쟁 속에서 탄생했는지, 그리고 그것이 교회의 삶과 신앙에 어떤 영향을 미쳤는지를 입체적으로 조망합니다.</p>
<p>특히 헬라 철학과의 만남을 통한 교리의 지성화 과정, 동방 교회와 서방 교회의 신학적 분화, 중세 스콜라 신학의 발전과 한계, 그리고 종교개혁을 통한 교리의 쇄신 등 교리사의 주요 변곡점들을 날카로운 통찰력으로 파헤칩니다. 하르낙의 비판적 분석은 독자들에게 교리의 본질이 무엇인지, 그리고 오늘날 우리는 교리를 어떻게 이해하고 적용해야 하는지에 대한 깊은 성찰을 제공할 것입니다.</p>`,
    "author_bio": bioHarnack
  },
  {
    "id": "3",
    "title": "교리사 개요 (동방 교회)",
    "subtitle": "동방 교회의 틀에서 교리의 발생과 전개",
    "author": "아돌프 폰 하르낙",
    "status": "published",
    "price": "18,000원",
    "tags": ["교리", "교리사", "명저번역프로젝트"],
    "cover": "./images/book_3.jpg",
    "links": [
        { "site": "교보문고", "url": "https://ebook-product.kyobobook.co.kr/dig/epd/ebook//E000010303824" },
        { "site": "Yes24", "url": "https://www.yes24.com/Product/Goods/139726586" },
        { "site": "Google Play", "url": "https://play.google.com/store/books/details?id=QHwzEQAAQBAJ" },
        { "site": "리디북스", "url": "https://ridibooks.com/books/3373000014?_s=search&_q=%ED%95%98%EB%A5%B4%EB%82%99&_rdt_sid=SearchBookList" }
    ],
    "desc": "동방 기독교 신학의 형성과 교리적 발전을 다룬 하르낙의 개요서입니다. 헬라 철학과의 만남을 통한 교리의 형성과정을 다룹니다.",
    "long_desc": `<p><strong>하르낙 교리사 개요 2: 동방 교회의 틀에서 교리의 발생과 전개</strong></p>
<p>『교리사 개요』 제2권은 동방 교회를 중심으로 초기 기독교 교리의 형성과 전개 과정을 다룹니다. 하르낙은 4세기 이후 동방 교회가 어떻게 헬라 철학적 사유와 기독교 신앙을 융합하여 독특한 교리 체계를 구축했는지를 보여줍니다.</p>
<p>삼위일체론과 기독론 논쟁의 치열한 전개 과정, 공의회를 통한 교리의 확정, 그리고 이 과정에서 발생한 다양한 이단 논쟁들을 생생하게 서술합니다. 특히 동방 교회의 신비주의적 전통과 전례 중심의 신학이 교리 형성에 어떤 영향을 미쳤는지를 심도 있게 분석합니다.</p>`,
    "author_bio": bioHarnack
  },
  {
    "id": "3b",
    "title": "교리사 개요 (제베르크)",
    "subtitle": "Grundriss der Dogmengeschichte",
    "author": "라인홀트 제베르크",
    "status": "published",
    "price": "18,000원",
    "tags": ["교리", "교리사", "명저번역프로젝트"],
    "cover": "./images/book_20.jpg",
    "links": [
        { "site": "교보문고", "url": "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000010110122" },
        { "site": "알라딘", "url": "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=352557704" },
        { "site": "Yes24", "url": "https://www.yes24.com/Product/Goods/139560270" },
        { "site": "Google Play", "url": "https://play.google.com/store/books/details?id=f_wxEQAAQBAJ" },
        { "site": "리디북스", "url": "https://ridibooks.com/books/3373000013?_s=search&_q=%EA%B5%90%EB%A6%AC%EC%82%AC+%EA%B0%9C%EC%9A%94&_rdt_sid=SearchBookList" }
    ],
    "desc": "복음의 역사적 발전을 체계적으로 정리한 제베르크의 교리사 입문서입니다.",
    "long_desc": `<p><strong>기독교 교리의 형성과 발전을 꿰뚫는 통찰!</strong></p>
<p>라인홀트 제베르크의 『교리사 개요』(Grundriss der Dogmengeschichte)는 기독교 사상의 흐름을 명쾌하게 조망하는 탁월한 안내서입니다. 하르낙과 더불어 근대 교리사 연구의 양대 산맥으로 평가받는 제베르크는 이 책에서 방대한 교리사의 내용을 신학생과 목회자들이 이해하기 쉽게 핵심을 추려 서술했습니다.</p>
<p>제베르크는 교리사를 단순히 과거의 유물로 보지 않고, 기독교 복음이 역사적 상황 속에서 어떻게 해석되고 체계화되었는지를 보여주는 생생한 과정으로 파악합니다. 특히 루터교 정통주의 입장에서 출발하면서도, 교리 형성 과정에 작용한 다양한 역사적, 문화적, 철학적 요인들을 객관적으로 분석하려 노력했습니다.</p>
<p>초대 교회의 삼위일체론과 기독론 논쟁부터 중세 스콜라 신학의 정교한 체계, 종교개혁의 역동적인 신학, 그리고 근대 계몽주의와 자유주의 신학의 도전에 이르기까지, 이 책은 2천 년 기독교 지성사의 파노라마를 펼쳐 보입니다. 독자들은 이 책을 통해 기독교 신앙의 핵심 진리가 역사 속에서 어떻게 보존되고 변형되며 계승되어 왔는지를 깨닫게 될 것입니다.</p>`,
    "author_bio": bioSeeberg
  },
  {
    "id": "4",
    "title": "기독교의 기본 진리",
    "subtitle": "Die Grundwahrheiten der christlichen Religion",
    "author": "라인홀트 제베르크",
    "status": "published",
    "price": "18,000원",
    "tags": ["기독교 소개", "명저번역프로젝트"],
    "cover": "./images/book_4.jpg",
    "links": [
        { "site": "교보문고", "url": "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000009815931" },
        { "site": "알라딘", "url": "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=351839868" },
        { "site": "Yes24", "url": "https://www.yes24.com/Product/Goods/137000535" },
        { "site": "Google Play", "url": "https://play.google.com/store/books/details?id=XjkvEQAAQBAJ" },
        { "site": "리디북스", "url": "https://ridibooks.com/books/3373000011?_s=search&_q=%EB%9D%BC%EC%9D%B8%ED%99%80%ED%8A%B8&_rdt_sid=SearchBookList" }
    ],
    "desc": "기독교 신앙의 본질적 진리를 현대적 지성과의 대화 속에서 변증합니다.",
    "long_desc": `<p><strong>현대적 지성과의 대화 속에서 기독교 신앙의 본질을 변증하다!</strong></p>
<p>제베르크의 『기독교의 기본 진리』는 교리사 연구와 더불어 그의 신학적 깊이를 보여주는 또 다른 걸작입니다. 그는 이 책에서 기독교 신앙을 단순히 전통적인 교리의 반복이 아니라, 당대의 지성적 흐름과 대화하며 살아있는 진리로 재해석해냅니다.</p>
<p>종교의 본질, 계시의 의미, 예수 그리스도의 인격과 사역, 그리고 기독교적 삶의 윤리 등 기독교 신앙의 핵심 주제들을 다루며, 기독교가 왜 여전히 현대인들에게 유효하고 필요한 진리인지를 설득력 있게 제시합니다. 역사적 통찰과 신학적 깊이가 어우러진 이 책은 기독교 신앙의 기초를 튼튼히 하고자 하는 이들에게 훌륭한 길잡이가 될 것입니다.</p>`,
    "author_bio": bioSeeberg
  },
  {
    "id": "5",
    "title": "마르틴 루터와 종교개혁의 기초",
    "subtitle": "Martin Luther und die Grundlegung der Reformation",
    "author": "아돌프 폰 하르낙",
    "status": "published",
    "price": "18,000원",
    "tags": ["루터", "명저번역프로젝트", "종교개혁"],
    "cover": "./images/book_5.jpg",
    "links": [
        { "site": "교보문고", "url": "https://ebook-product.kyobobook.co.kr/dig/epd/ebook//E000009965073" },
        { "site": "알라딘", "url": "https://www.aladin.co.kr/m/mproduct.aspx?ItemId=352302604" },
        { "site": "Yes24", "url": "https://www.yes24.com/Product/Goods/138333414" },
        { "site": "Google Play", "url": "https://play.google.com/store/books/details?id=f18wEQAAQBAJ" },
        { "site": "리디북스", "url": "https://ridibooks.com/books/3373000012?_s=search&_q=%ED%95%98%EB%A5%B4%EB%82%99&_rdt_sid=SearchBookList" }
    ],
    "desc": "종교개혁의 본질적 동기와 루터의 신학적 기초를 파헤친 하르낙의 역작입니다.",
    "long_desc": `<p><strong>격동의 시대에 루터의 횃불을 다시 밝히다</strong></p>
<p>1917년 종교개혁 400주년과 제1차 세계대전의 포화 속에서 쓴 아돌프 폰 하르낙 교수의 『마르틴 루터와 종교개혁의 기초』는 단순한 역사서가 아닙니다. 전쟁으로 말미암은 혼돈과 불안에 빠진 동시대인들에게 루터의 용기와 신념 그리고 진정한 신앙의 의미를 일깨우는 등불과 같은 책입니다.</p>
<p>하르낙 교수는 뛰어난 역사가이자 신학자로서의 안목으로 루터의 내면세계를 깊이 있게 조명합니다. 번개를 맞을 뻔한 사건 이후 수도원에 입문하여 겪었던 영적 고뇌와 면죄부 판매의 부당함에 맞선 분노 그리고 보름스 제국의회에서 보여준 확고한 신념까지 루터의 삶이 연대기적으로 한 편의 드라마처럼 생생하게 펼쳐집니다.</p>
<p>특히 하르낙 교수는 루터의 종교개혁이 독일 민족의 정체성 형성에 지대한 영향을 미쳤음을 강조합니다. 루터가 성경을 독일어로 번역하고 찬송가를 작사 작곡하며 독일어 및 독일 문화 발전에 이바지한 공적을 상세히 다루고 있습니다. 이는 전쟁으로 상처받은 독일 국민들에게 위로와 희망이 될 뿐 아니라 분열된 사회를 하나로 모으고 새로운 미래를 향해 나아갈 수 있는 원동력이 되었습니다.</p>`,
    "author_bio": bioHarnack
  },
  {
    "id": "6",
    "title": "판넨베르크 신학 이해",
    "subtitle": "조직신학의 거두 판넨베르크 입문",
    "author": "이장섭",
    "status": "판매중",
    "tags": ["조직신학", "판넨베르크"],
    "cover": "./images/book_6.jpg",
    "links": [],
    "desc": "현대 조직신학의 거장 볼프하르트 판넨베르크의 신학 세계를 명료하게 해설한 가이드북입니다.",
    "long_desc": `<p><strong>신학의 보편성을 향한 여정</strong></p>
<p>이 책은 현대 조직신학의 거장 볼프하르트 판넨베르크의 신학을 처음 접하는 이들을 위한 친절한 안내서입니다. 저자 이장섭 박사는 "신학의 보편성"이라는 관점에서 판넨베르크의 방대한 신학 체계를 일목요연하게 정리했습니다.</p>
<p>판넨베르크는 신학이 교회라는 좁은 울타리를 넘어, 자연과학 및 인문과학과 대화하며 보편적인 진리를 추구해야 한다고 주장했습니다. 이 책은 그의 핵심 개념인 '보편사', '역사로서의 계시', '아래로부터의 기독론', 그리고 '종말론적 삼위일체' 등을 명쾌하게 해설하며, 현대 사회 속에서 신학이 나아갈 길을 모색합니다.</p>`,
    "author_bio": bioLeeJangseop,
    "quotes": [
        { "text": "신학은 하나님의 계시와 인간 이성의 조화를 추구해야 한다.", "cite": "16p" },
        { "text": "인간이 가진 개방성은 궁극적으로 하나님에 대한 물음 혹은 이해를 지향한다.", "cite": "86p" },
        { "text": "삼위일체론에 대한 완전한 이해는 종말에 가서야 이루어짐으로... 우리는 계속해서 논쟁한다.", "cite": "40p" }
    ]
  },
  {
    "id": "13",
    "title": "판넨베르크의 신학의 학문성",
    "subtitle": "신학은 과연 학문인가?",
    "author": "이장섭",
    "status": "재쇄 준비중",
    "tags": ["조직신학", "판넨베르크", "신학 방법론"],
    "cover": "./images/book_13.png",
    "desc": "신학이 현대 학문의 기준에서 어떻게 정당성을 가질 수 있는지 탐구한 역작입니다.",
    "long_desc": `<p><strong>신학의 위기, 그리고 판넨베르크의 응답</strong></p>
<p>이 책은 "신학은 과연 학문인가?"라는 근본적인 질문을 던지며 시작합니다. 이장섭 박사는 현대 학문성 논쟁, 특히 논리실증주의와 비판적 합리주의의 도전에 맞서 신학의 학문적 지위를 확보하려는 판넨베르크의 노력을 심도 있게 분석합니다.</p>
<p>저자는 판넨베르크의 '가설로서의 신학', '보편사적 해석학', '지평융합' 등의 개념을 통해 신학이 단순한 신앙 고백을 넘어 공적인 진리 담론으로서 기능할 수 있음을 입증합니다. 신학의 방법론과 미래를 고민하는 학도들에게 귀중한 통찰을 제공합니다.</p>`,
    "author_bio": bioLeeJangseop
  },
  {
    "id": "7",
    "title": "세례론",
    "subtitle": "문제제기 및 해설",
    "author": "김재진",
    "status": "published",
    "price": "18,000원",
    "tags": ["세례", "유아세례", "침례"],
    "cover": "./images/book_7.jpg",
    "links": [
        { "site": "교보문고", "url": "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000008021698" },
        { "site": "알라딘", "url": "http://aladin.kr/p/3qbNn" },
        { "site": "Yes24", "url": "https://www.yes24.com/Product/Goods/128265984" },
        { "site": "Google Play", "url": "https://play.google.com/store/books/details/김재진_세례론?id=H_4QEQAAQBAJ&hl=ko-KR" },
        { "site": "리디북스", "url": "https://ridibooks.com/books/3373000009?_s=search&_q=세례론+김재진&_rdt_sid=search&_rdt_idx=0" }
    ],
    "desc": "세례의 성서적 의미와 역사적 발전, 그리고 현대적 실천을 다각도로 분석합니다.",
    "long_desc": `<p><strong>세례의 본질과 현대적 의미를 묻다!</strong></p>
<p>김재진 박사의 『세례론: 문제제기 및 해설』은 한국 교회의 세례 현장을 돌아보며, 세례의 성서적 기원과 신학적 의미를 깊이 있게 탐구한 역작입니다. 세례가 단순히 교회의 입교 의식이 아니라, 그리스도와의 연합이며 새로운 삶의 시작임을 강력하게 역설합니다.</p>
<p>이 책은 유아세례와 성인세례, 세례와 침례의 형식 논쟁 등 한국 교회 내의 민감한 이슈들을 피하지 않고 정면으로 다룹니다. 성경적 근거와 교회사적 전통, 그리고 현대 신학의 논의들을 종합하여 균형 잡힌 시각을 제공하며, 목회 현장에서 부딪히는 실제적인 문제들에 대한 신학적 해답을 제시합니다.</p>
<p>특히 '세례는 단회적이지만 그 효력은 평생 지속된다'는 루터의 통찰을 현대적으로 재해석하며, 세례 받은 그리스도인이 어떻게 매일의 삶 속에서 세례의 은혜를 기억하고 실천해야 하는지를 도전적으로 질문합니다.</p>`,
    "author_bio": bioKimJaejin,
    "quotes": [
        { "text": "세례는 물로 씻는 단순한 예식이 아니라, 하나님의 말씀과 믿음이 결합된 구원의 표지이다.", "cite": "서문" },
        { "text": "우리는 세례를 통해 그리스도의 죽음과 부활에 연합하며, 이는 일생을 통해 반복적으로 확인되어야 할 실존적 사건이다." }
    ]
  },
  {
    "id": "10",
    "title": "성경의 인지구조로 성경 해석",
    "subtitle": "성경의 5차원의 인지구조",
    "author": "김재진",
    "status": "published",
    "price": "17,000원",
    "tags": ["성경 읽기", "성경 해석", "인지구조"],
    "cover": "./images/book_10.jpg",
    "links": [
        { "site": "교보문고", "url": "https://bit.ly/3qHUXpF" },
        { "site": "알라딘", "url": "https://bit.ly/3aMglV9" },
        { "site": "Yes24", "url": "https://bit.ly/3ouhRip" },

        { "site": "Google Play", "url": "https://bit.ly/3oo2xn9" },
        { "site": "리디북스", "url": "https://bit.ly/33FRJsz" },
        { "site": "Apple Books", "url": "https://apple.co/37p5Gh7" },

    ],
    "desc": "성경을 히브리적 사고방식과 인지구조의 틀로 조명하여 새로운 해석의 지평을 엽니다.",
    "long_desc": `<p><strong>성경을 히브리적 사고방식으로 다시 읽다!</strong></p>
<p>2011년 초판 출간 이후 꾸준히 사랑받아온 『히브리적 성경 이해』의 증보 개정판입니다. 김재진 박사는 이 책에서 성경이 기록된 당시의 히브리인들의 사고방식, 즉 '성경의 5차원 인지구조'를 통해 성경을 해석해야 한다고 역설합니다.</p>
<p>"예수 그리스도가 십자가에 못 박혀 죽으셨을 때, 유대인들은 예수의 죄패에 'INRI: 나사렛 예수, 유대인의 왕'이라고 썼다... 우리는 성경이 기록된 시대적 배경이나, 혹은 증언자들의 정신사적 신앙적 배경을 도외시하고, 오늘 우리가 살고 있는 시대의 세계관으로 성경을 읽고 해석할 때가 잦다." (서문 중)</p>
<p>창조 기사부터 예수님의 부활에 이르기까지, 저자는 히브리 유목민의 삶과 언약 사상, 그리고 그들의 독특한 시공간 개념(지평융합)을 바탕으로 성경 본문을 새롭게 조명합니다. 교훈적인 해석을 넘어 성경의 깊은 신학적 의미를 발견하고자 하는 이들에게 필독서가 될 것입니다.</p>`,
    "author_bio": bioKimJaejin
  },
  {
    "id": "14",
    "title": "말씀의 비밀과 신학적 영성",
    "subtitle": "성경적 영성의 본질을 찾아서",
    "author": "김재진",
    "status": "재쇄 준비중",
    "tags": ["영성", "설교", "조직신학"],
    "cover": "./images/book_14.jpg",
    "links": [
        { "site": "케리그마 도서주문", "url": "https://forms.gle/nEwiM3e3Bo6MMUNfA" }
    ],
    "desc": "기독교 영성의 핵심을 말씀과 신학적 깊이에서 재조명한 영성 신학서입니다.",
    "long_desc": `<p><strong>기독교 영성은 말씀의 깊은 깨달음에서 시작된다.</strong></p>
<p>김재진 박사는 오늘날 한국 교회의 영적 위기를 진단하며, 그 해법으로 '말씀에 천착하는 영성'을 제안합니다. 이 책은 막연한 신비주의나 감상주의를 배격하고, 성경 말씀 속에 감추어진 참된 영적 보화를 캐내는 작업을 시도합니다.</p>
<p>"나를 발견하는 영성, 존재론적 단절을 의식하는 영성, 십자가와 부활의 세계를 보는 영적 눈..."</p>
<p>설교자와 신학생, 그리고 성숙한 신앙을 갈망하는 평신도들에게 기독교 영성의 진정한 코드를 제시합니다.</p>`,
    "author_bio": bioKimJaejin
  },
  {
    "id": "11",
    "title": "성탄절 칸타타 신앙",
    "subtitle": "대림절 묵상",
    "author": "김재진",
    "status": "published",
    "price": "18,000원",
    "tags": ["대림절", "묵상", "성탄절"],
    "cover": "./images/book_11.jpg",
    "links": [
        { "site": "교보문고", "url": "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000009119448" },
        { "site": "알라딘", "url": "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=349172211" },
        { "site": "Yes24", "url": "https://www.yes24.com/Product/Goods/134266496" },
        { "site": "Google Play", "url": "https://play.google.com/store/books/details?id=QRwnEQAAQBAJ" },
        { "site": "리디북스", "url": "https://ridibooks.com/books/3373000010?_s=search&_q=성탄절+칸타타+신앙&_rdt_sid=SearchBookList" }
    ],
    "desc": "대림절 기간 동안 예수 그리스도의 오심을 묵상하며 성탄의 진정한 의미를 되새깁니다.",
    "long_desc": `<p><strong>예수님의 오심을 기다리며 부르는 영혼의 노래</strong></p>
<p>『성탄절 칸타타 신앙』은 대림절 기간 동안 성도들이 예수 그리스도의 탄생을 깊이 묵상하며 성탄의 기쁨을 온전히 누리도록 돕는 묵상집입니다. 단순한 감상적인 기다림이 아니라, 성경이 증언하는 메시아 예언과 그 성취의 과정을 따라가며 신학적 깊이가 있는 묵상으로 인도합니다.</p>
<p>"'예수'란 너 ‘요셉’을 어둡고, 차가운 겨울밤과 같은 이 세상의 삶에서 벗어나게 해 준다는 뜻이고, ‘임마누엘’이란, 이후 너와 너의 사랑하는 아내, ‘마리아' 사이에서 태어날 보석 같은 ‘아들’과 하나님께서 어느 때, 어디서나 '항상' 동행하여 주시겠다는 뜻이다." (본문 중)</p>
<p>이 책은 삭막하고 분주한 연말연시, 우리의 시선을 세상의 화려한 조명이 아닌 베들레헴의 구유로 향하게 합니다. 칸타타의 선율처럼 흐르는 묵상의 글들을 통해, 독자들은 우리 삶의 자리에 찾아오시는 임마누엘 하나님을 생생하게 경험하게 될 것입니다.</p>`,
    "author_bio": bioKimJaejin,
    "quotes": [
        { "text": "'예수'란 너 ‘요셉’을 어둡고, 차가운 겨울밤과 같은 이 세상의 삶에서 벗어나게 해 준다는 뜻이다.", "cite": "본문" },
        { "text": "‘임마누엘’이란, 하나님께서 어느 때, 어디서나 '항상' 동행하여 주시겠다는 뜻이다." }
    ]
  },
  {
    "id": "8",
    "title": "네가 성내는 것이 옳으냐",
    "subtitle": "성경 읽기와 설교 2",
    "author": "홍연경",
    "status": "판매중",
    "tags": ["설교", "성경 읽기", "성경 해석"],
    "cover": "./images/book_8.jpg",
    "links": [
        { "site": "교보문고", "url": "https://bit.ly/2WWN6a6" },
        { "site": "알라딘", "url": "https://bit.ly/34Ny4HJ" },
        { "site": "Yes24", "url": "https://bit.ly/3aSL3fc" },

        { "site": "Google Play", "url": "https://bit.ly/3aM0mq9" },
        { "site": "리디북스", "url": "https://bit.ly/3aXAbN0" },
        { "site": "Apple Books", "url": "https://apple.co/38Lp1bN" },
        { "site": "Logos", "url": "https://kr.logos.com/product/251428/nega-seongnaeneun-geosi-olheunya-seonggyeong-ilggiwa-seolgyo-2" }
    ],
    "desc": "요나서를 중심으로 하나님의 마음과 인간의 감정을 깊이 있게 다룬 설교집입니다.",
    "long_desc": `<p><strong>"네가 성내는 것이 옳으냐?"</strong></p>
<p>이 책의 제목은 하나님께서 분노하는 선지자 요나를 조용히 타이르실 때 하신 말씀입니다. 하나님은 요나의 타오르는, 그러나 빗나가는 열정을 몇 번이고 진정시키셨습니다.</p>
<p>저자 홍연경(Michael Hong)은 오늘날의 그리스도인들, 특히 열정적인 사역자들에게 필요한 것이 바로 이 하나님의 음성이라고 말합니다. 우리가 하나님을 위해 열심히 일한다고 할 때, 오히려 하나님의 뜻과 멀어질 수 있는 위기를 예리하게 지적합니다.</p>
<p>"설교자는 자신의 열정과 하나님을 향한 갈망을 구분하지 못하는 위기에 쉽게 빠질 수 있습니다. 이것은 설교자의 불타는 마음이 얼마나 정제되어 있는지, 그리고 그 불길이 제대로 조절되고 있는지의 문제입니다."</p>
<p>이 책은 요나서 묵상을 통해 우리의 신앙과 열정을 점검하고, 하나님의 넓고 깊은 마음을 배우도록 초대합니다.</p>`,
    "author_bio": bioMichaelHongKr
  },
  {
    "id": "9",
    "title": "성경 읽기와 설교",
    "subtitle": "성경의 표면적 차원을 넘어서",
    "author": "홍연경",
    "status": "판매중",
    "tags": ["설교", "성경 읽기", "성경 해석"],
    "cover": "./images/book_9.jpg",
    "links": [
        { "site": "교보문고", "url": "https://bit.ly/39SOH8i" },
        { "site": "알라딘", "url": "https://bit.ly/3rJjf34" },
        { "site": "Yes24", "url": "https://bit.ly/37uD4Sk" },
        { "site": "Google Play", "url": "https://bit.ly/37xiMHX" },
        { "site": "리디북스", "url": "https://bit.ly/2JtCM6m" },
        { "site": "Apple Books", "url": "https://apple.co/2WWAIqq" },
        { "site": "Logos", "url": "https://kr.logos.com/product/251425/seonggyeong-ilggiwa-seolgyo" },
        { "site": "구매하기", "url": "https://a.co/d/iRpv06v" }
    ],
    "desc": "설교자의 성경 읽기가 곧 설교의 깊이를 결정함을 역설하는 필독서입니다.",
    "long_desc": `<p><strong>신학 공부의 끝은 설교단입니다.</strong></p>
<p>설교단은 설교자의 신학과 성경 읽기가 오롯이 드러나는 곳입니다. 따라서 설교는 설교자의 성경 읽기가 반영된 것입니다. 저자는 설교자가 전심으로 헌신하고 성실하게 성경을 읽어야 한다고 강조합니다.</p>
<p>"설교자는 겸손한 성경 읽기에서 출발해야 합니다."</p>
<p>이 책은 성경의 표면적인 차원을 넘어 성경에 대한 깊은 통찰력을 제공하며, 독자들이 성경의 가르침을 더 깊이 파고들도록 격려합니다. 성경을 어떻게 읽고 어떻게 선포할 것인가에 대한 진지한 고민을 담았습니다.</p>`,
    "author_bio": bioMichaelHongKr,
    "quotes": [
        { "text": "설교는 설교자의 성경 읽기가 반영된 것이다.", "cite": "서문" },
        { "text": "겸손한 성경 읽기에서 설교는 시작된다.", "cite": "본문 중" }
    ]
  },
  {
    "id": "12",
    "title": "주님을 기다리는 법",
    "subtitle": "대림절 설교집",
    "author": "홍연경",
    "status": "판매중",
    "tags": ["대림절", "설교", "성경 읽기"],
    "cover": "./images/book_12.jpg",
    "links": [
        { "site": "교보문고", "url": "https://bit.ly/3oumM2C" },
        { "site": "알라딘", "url": "https://bit.ly/2KyBJCJ" },
        { "site": "Yes24", "url": "https://bit.ly/3op8Cje" },
        { "site": "Google Play", "url": "https://bit.ly/39HNuAE" },
        { "site": "리디북스", "url": "https://bit.ly/39IxDSE" },
        { "site": "Logos", "url": "https://kr.logos.com/product/251426/junimeul-gidarineun-beob-daerimjeol-seolgyojib" }
    ],
    "desc": "기다림과 소망의 절기인 대림절에 선포된 깊은 울림의 설교들을 담았습니다.",
    "long_desc": `<p><strong>하나님이 우리를 찾아오시는 날을 기대합시다</strong></p>
<p>『주님을 기다리는 법』은 기다림의 절기인 대림절에 선포된 설교들을 엮은 책입니다. 저자는 막연한 기다림이 아니라, 약속을 붙들고 믿음으로 준비하는 역동적인 기다림을 역설합니다.</p>
<p>"비록 우리의 신앙이 사인파 곡선을 그리고 있지만, 하나님과 함께 길을 떠납시다. 비록 사람의 욕망이 슬며시 고개를 든다 하더라도, 하나님이 주시는 복을 믿음으로 기다립시다." (본문 중)</p>
<p>가인과 아벨, 에스겔의 환상, 오병이어의 기적 등 다양한 본문을 통해, 절망적인 현실 속에서도 하늘을 열어주시는 하나님의 소망을 보게 합니다. 다시 오실 주님을 맞이할 준비를 하는 모든 성도들에게 깊은 위로와 도전을 줍니다.</p>`,
    "author_bio": bioMichaelHongKr,
    "quotes": [
        { "text": "하나님이 악을 이기셨고, 세상을 이기셨고, 당신의 백성들을 이기셨습니다.", "cite": "73쪽" },
        { "text": "하늘이 열렸다는 말은... 비참한 포로생활을 신앙적으로 새롭게 볼 수 있게 되었다는 뜻입니다.", "cite": "56쪽" }
    ]
  },
  {
    "id": "15",
    "title": "예수의 유언 기도",
    "subtitle": "요한복음 17장 강해 (Kerygma 신학총서 1)",
    "author": "에른스트 케제만 | 전경연 역",
    "status": "절판",
    "tags": ["요 17장", "요한복음"],
    "cover": "./images/book_15.jpg",
    "links": [],
    "desc": "에른스트 케제만의 요한복음 17장 해석을 통해 예수의 마지막 기도가 지닌 신학적 의미를 탐구합니다.",
    "long_desc": `<p><strong>케제만, 요한복음 17장의 심연을 들여다보다.</strong></p>
<p>이 책은 20세기 신약학의 거장 에른스트 케제만이 1966년 예일대학교에서 행한 기념비적인 강좌를 엮은 것입니다. 그는 요한복음 17장, 소위 '대제사장적 기도'를 통해 초기 기독교 공동체가 직면했던 긴장과 소망, 그리고 그리스도의 영광을 탁월하게 풀어냅니다.</p>
<p>한국 신약학계의 거목 고(故) 전경연 교수가 생애 마지막으로 번역하여 한국 교회에 남긴 유작이기도 합니다. 학문적 깊이와 영적 통찰이 어우러진 이 책은 요한복음 연구의 필독서로 꼽힙니다.</p>`,
    "author_bio": bioKasemann
  },
  {
    "id": "16",
    "title": "다시 부르시는 은혜",
    "subtitle": "하나님과 진실한 만남의 기억 시리즈",
    "author": "김용식",
    "status": "published",
    "price": "18,000원",
    "tags": ["설교", "성경 읽기"],
    "cover": "./images/book_16.jpg",
    "links": [
        { "site": "교보문고", "url": "https://product.kyobobook.co.kr/detail/S000208722152)" }
    ],
    "desc": "깨어진 삶의 자리에 다시 찾아오시는 하나님의 은혜를 전하는 설교집입니다.",
    "long_desc": `<p><strong>하나님과 진실한 만남의 기억 시리즈 1</strong></p>
<p>『다시 부르시는 은혜』는 저자 김용식의 진솔한 신앙 고백과 깊은 성경 묵상이 담긴 설교집입니다. 저자는 "설교자와 하나님의 만남의 기억이 설교에 담겨 있다"고 고백하며, 자신이 먼저 말씀 앞에서 씨름하고 은혜받은 내용들을 독자들과 나눔으로써, 독자들 또한 하나님과의 개인적이고 진실한 만남을 갖도록 초대합니다.</p>
<p>"내가 좋아하는 야곱은 욕망에 이끌려 파란만장한 삶을 살았다... 그 모든 것은 그의 삶에 개입하신 하나님 때문이었다." (머리말 중)</p>
<p>이 책은 구약과 신약을 아우르는 다양한 본문을 통해, 끊임없이 실패하고 넘어지는 인간을 포기하지 않으시고 '다시 부르시는' 하나님의 끈질긴 은혜를 증언합니다. 특수교사로서의 일상과 신학적 성찰이 어우러진 그의 글은 투박하지만 진정성 있는 울림으로 다가옵니다.</p>`,
    "author_bio": bioKimYongsik,
    "quotes": [
        { "text": "죄의 처리와 죄에 대한 책임 면제만 있고 관계의 회복이 없는 용서는 하나님과 우리 사이에 있을 수 없습니다.", "cite": "하나님의 의에서" },
        { "text": "하나님의 의롭다하심은 '가라'는 것이 아닙니다... \"너는 와야 한다. 너는 사랑하는 내 아들이기 때문이다.\"", "cite": "하나님의 의에서" },
        { "text": "야곱은 인생의 끝으로 갈수록 마땅히 초점을 맞추어야 할 대상에게 초점을 맞추었다.", "cite": "머리말" }
    ]
  },
  {
    "id": "17",
    "title": "Bible Reading and Preaching",
    "subtitle": "Bible Interpretation and Meditation",
    "author": "Michael Hong",
    "status": "published",
    "price": "18,000원",
    "tags": ["Bible Interpretation", "Preaching", "Sermon"],
    "cover": "./images/book_17.jpg",
    "links": [
        { "site": "구매하기", "url": "https://a.co/d/dQhaF1O" },

    ],
    "desc": "An English guide to the principles of biblical interpretation and effective preaching.",
    "long_desc": `<p><strong>At the end of theological study is the pulpit.</strong></p>
<p>The pulpit represents various aspects of theology. It stands out above theological classrooms because it is where a preacher's theology and Bible reading are solely displayed. Therefore, the sermon is a reflection of the preacher's Bible reading.</p>
<p>"A preacher must read the Bible with wholehearted dedication and sincerity. This is humble Bible reading, and preaching starts from here."</p>
<p>This book offers insights into the Bible beyond its surface level, encouraging readers to delve deeper into its teachings. It explores the essential connection between how one reads the text and how one proclaims it.</p>`,
    "author_bio": bioMichaelHong,
    "quotes": [
        { "text": "The sermon is a reflection of the preacher's Bible reading.", "cite": "Introduction" },
        { "text": "A preacher must read the Bible with wholehearted dedication and sincerity. This is humble Bible reading.", "cite": "Introduction" }
    ]
  },
  {
    "id": "18",
    "title": "Is it right for you to be angry?",
    "subtitle": "Bible reading and preaching",
    "author": "Michael Hong",
    "status": "published",
    "price": "18,000원",
    "tags": ["Bible Reading", "Preaching", "Sermon"],
    "cover": "./images/book_18.jpg",
    "links": [
        { "site": "구매하기", "url": "https://a.co/d/2YMSOoC" },

    ],
    "desc": "A theological reflection on human anger and divine grace, based on the book of Jonah.",
    "long_desc": `<p><strong>"The title of this book is the word of God when He quietly calmed Jonah."</strong></p>
<p>God subdued Jonah's burning passion over and over again. Even today, the voice of God that calmed Jonah and his heart is still needed. A crisis can arise when a preacher is full of passion for God; they can easily fall into a crisis where they cannot distinguish between their own passion and their longing for God.</p>
<p>"Is it right for you to be angry?"</p>
<p>This book points out the misconceptions of Christians. The crisis of Christians comes when they think they believe in God well rather than when they live against God's will. The author invites readers to listen to God's gentle rebuke together.</p>`,
    "author_bio": bioMichaelHong,
    "quotes": [
        { "text": "The crisis of Christians comes when they think they believe in God well.", "cite": "Introduction" },
        { "text": "Is it right for you to be angry?", "cite": "Jonah 4:4" }
    ]
  },
  {
    "id": "19",
    "title": "사랑, 그 지독한 통속(通俗)",
    "subtitle": "조덕영 시집",
    "author": "조덕영",
    "status": "archived",
    "tags": ["시", "기독교 문학"],
    "cover": "./images/book_19.jpg",
    "links": [
        { "site": "창조신학연구소", "url": "http://blog.naver.com/davidycho" },
        { "site": "충주신문", "url": "http://m.cjwn.com/46509" }
    ],
    "desc": "사랑의 본질을 통속적인 언어와 깊은 성찰로 담아낸 조덕영 박사의 시집입니다.",
    "long_desc": `<p><strong>통속(通俗) 속에서 피어난 거룩한 시심(詩心)</strong></p>
<p>창조신학자이자 시인인 조덕영 박사의 시집입니다. 그는 '사랑', '그리움', '믿음'과 같이 우리가 흔히 접하는 통속적인 단어들이 실은 삶의 가장 깊은 진실을 담고 있음을 노래합니다.</p>
<p>"나는 통속(通俗)이 좋다... 고통과 아픔과 시련과 슬픔과 외로움이 내게 밀물처럼 말을 걸어올 때, 오히려 이들 단어들은 살아서 늘 꿈틀거리며 위로하러 내게 슬며시 다가오는 것이다." (본문 중)</p>
<p>이 시집은 기독교적 세계관에 뿌리를 두고 있으면서도, 종교적 언어에 갇히지 않고 인간 보편의 정서와 공명합니다. 낡은 사진첩에서 발견한 문구처럼 투박하지만, 그 안에 담긴 진솔한 고백이 독자들의 마음에 잔잔한 파동을 일으킬 것입니다.</p>`,
    "author_bio": bioChoDukyoung,
    "quotes": [
        { "text": "문학은 늘 지독하다. 거기에 빠져 자폐아가 되든지 고열에 시달린다.", "cite": "서문" },
        { "text": "나는 통속(通俗)이 정말 좋다.", "cite": "나는 통속이 좋다" }
    ]
  }
];

export default libraryData;
