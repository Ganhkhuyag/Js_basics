let news = [
  {
    title: "Засгийн газар дараах асуудлууд хэлэлцэж байна",
    desc: "Хуваарь ёсоор долоо хоног бүрийн лхагва гаригт Засгийн газрийн хуралдаан болдог",
    publishdate: "12/6/2023",
    Author: "Urnaa",
    category: "Politics",
  },
  {
    title: "Бизнесийн орчин цар тахлын өмнөх үеээс мууджээ",
    desc: "Бизнесийн асуудал",
    publishdate: "12/2/2023",
    Author: "Mygmardorj",
    category: "Economic",
  },
  {
    title: "Баруун болон төвийн аймгуудын нутгаар цасан шуурга шуурна",
    desc: "Малчид иргэдийн анхааралд",
    publishdate: "12/5/2023",
    Author: "Amartsetseg",
    category: "Weather",
  },
  {
    title: "Өнөөдрөөс эхлэн ашиглаагүй удсан Google хаягуудыг устгана",
    desc: "Хэрэв танд олон жил ашиглаагүй Google хаяг байдаг бол өнөөдрөөс эхлэн устгагдахаар болж байна",
    publishdate: "12/6/2023",
    Author: "Ankhaa",
    category: "Tech",
  },
  {
    title: "Лондонд толилуулж буй “Тамгагүй төр” жүжиг ба гаднынхны шүүмж",
    desc: "Монголын түүх, соёлыг сурталчлах нэг хэлбэр болж буй ",
    publishdate: "12/6/2023",
    Author: "Tsolmon",
    category: "Culture",
  },
  {
    title: "Шатрын спорт дахь хүйсийн эрх тэгш байдлаар манай улс тэргүүллээ",
    desc: "105 улсын шатрын спорт дахь хүйсийн эрх тэгш байдлаар Монгол Улс тэргүүлжээ. ",
    publishdate: "11/30/2023",
    Author: "Suvd",
    category: "Sport",
  },
  {
    title: "Арвайхээрийн 150 хүүхдийн цэцэрлэгийн барилга ашиглалтанд орлоо",
    desc: "Хуулийн зохицуулалтын хүрээн 141 багшийн туслах бэлтгэгдэж гэрчилгээ",
    publishdate: "12/6/2023",
    Author: "Amartsetseg",
    category: "Education",
  },
  {
    title:
      "Уул уурхайн салбар нь дэд бүтэц дагаж хөгждөггүй, харин өөрөө дэд бүтцийг дагуулж хөгждөг",
    desc: "Өнөөдөр уул уурхайн салбар нь Монголын хөгжлийн гарц биш ч гэлээ",
    publishdate: "12/6/2023",
    Author: "Delger",
    category: "Mining",
  },
  {
    title:
      "СОНСГОЛ: Хишиг арвин индустриал” ХХК нийт 1.4 их наяд төгрөгийн гэрээ байгуулжээ",
    desc: "Нүүрснийгэх тодотголтой нээлттэй сонсгол Төрийн ордонд болж байгаа. ",
    publishdate: "12/1/2023",
    Author: "Dulmaa",
    category: "Society",
  },
  {
    title: "Жүдо бөхийн энэ оны сүүлийн их дуулга Токиод болно",
    desc: "Японы нийслэл Токио хотод жүдо бөхийн 2023 оны сүүлчийн тэмцээн болох Их дуулга эхлэхэд тав хоног үлдлээ.",
    publishdate: "11/27/2023",
    Author: "Azbayr",
    category: "Sport",
  },
];

function findAuthor(person) {
  for (let i = 0; i < 10; i = i + 1) {
    if (news[i].Author == person) {
      console.log(news[i]);
    }
  }
}
findAuthor("Azbayr");

function findCategory(cate) {
  for (let i = 0; i < 10; i = i + 1) {
    if (news[i].category == cate) {
      console.log(news[i]);
    }
  }
}
findCategory("Tech");

// filterbyAuthor();

// filterbyCategory();

// filterbyDate(last, first);
