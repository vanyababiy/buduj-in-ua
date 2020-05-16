const mainLinksGroup = [
  [
    "",
    "about",
    "prices",
    "work",
    "category",

    "category/house",
    "category/house/house-external-materials",
    "category/house/house-external-materials/brick",
    "category/house/house-external-materials/ceramic-blocks",
    "category/house/house-external-materials/beton",

    "category/climate",
    "category/climate/types",
    "category/climate/condiditioner",
    "category/climate/cleaner",
    "category/climate/moisturizer",

    "category/communications",
    "category/communications/acustic",
    "category/communications/water",

    "category/communications/water/sink",
    "category/communications/water/bath",
    "category/communications/water/shower",
    "category/communications/water/bowl",
    "category/communications/water/bidet",
    "category/communications/water/plumb",
    "category/communications/water/mixer",
    "category/communications/water/siphon",
    "category/communications/water/sewerage",
    "category/communications/water/sauna",
    "category/communications/water/filter",

    "category/communications/heating",

    "category/communications/heating/radiator",
    "category/communications/heating/pipe",
    "category/communications/heating/boiler",
    "category/communications/heating/floor-heating",
    "category/communications/heating/heater",
    "category/communications/heating/towel-dryer",
    "category/communications/heating/fireplaces",
    "category/communications/heating/condensate",
    "category/communications/heating/alternative",

    "category/communications/electric",

    "category/communications/electric/light",
    "category/communications/electric/protection-machines",
    "category/communications/electric/voltage-stabilizers",
    "category/communications/electric/type-stabilizers",
    "category/communications/electric/grounding",

    "category/communications/antena",
    "category/communications/internet",

    "category/communications/protection",

    "category/communications/protection/house",
    "category/communications/protection/alarms",
    "category/communications/protection/intercom",
    "category/communications/protection/video",
  ],
  //pathname: '/'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "main2", text: "ПРО НАС", url: "about" },
    { id: "main3", text: "ЦІНИ", url: "prices" },
    { id: "main4", text: "НАШІ РОБОТИ", url: "work" },
    { id: "main5", text: "КАТЕГОРІЇ", url: "category" },
    { id: "main6", text: "ВХІД", url: "auth" },
  ],
  ////pathname: '/about'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "" },
  ],

  ////pathname: '/prices'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "" },
  ],

  ////pathname: '/work'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "" },
  ],

  //pathname: 'category'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "category2", text: "БУДИНОК", url: "category/house" },
    { id: "category3", text: "КЛІМАТ", url: "category/climate" },
    { id: "category4", text: "КОМУНІКАЦІЇ", url: "category/communications" },
    { id: "category5", text: "ІНТЕР'ЄР", url: "interior" },
    { id: "category6", text: "МАТЕРІАЛИ", url: "materials" },
    { id: "category7", text: "ВАЖЛИВО", url: "important" },
    { id: "back", text: "НАЗАД", url: "" },
  ],

  //pathname: 'category/house'
  [
    { id: "main", text: "ГОЛОВНА", url: "/" },
    {
      id: "house-category2",
      text: "ВИБІР ДІЛЯНКИ",
      url: "/house/house-dilyanka",
    },
    {
      id: "house-category3",
      text: "СКЛАДОВІ БУДИНКУ",
      url: "house/house-components",
    },
    { id: "house-category4", text: "ТИПИ БУДИНКІВ", url: "house/house-types" },
    {
      id: "house-category5",
      text: "ФУНДАМЕНТИ",
      url: "house/house-foundations",
    },
    {
      id: "house-category6",
      text: "МАТЕРІАЛИ ДЛЯ ЗОВНІШНІХ СТІН",
      url: "house/house-external-materials",
    },
    { id: "back", text: "НАЗАД", url: "/category" },
  ],

  //pathname: '/category/house/house-external-materials'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    {
      id: "house-external-materials2",
      text: "ЦЕГЛА",
      url: "house-external-materials/brick",
    },
    {
      id: "house-external-materials3",
      text: "КЕРАМОБЛОКИ",
      url: "house-external-materials/ceramic-blocks",
    },
    {
      id: "house-external-materials4",
      text: "ЯЧЕЇСТІ БЕТОНИ",
      url: "house-external-materials/beton",
    },
    { id: "back", text: "НАЗАД", url: "/category/house" },
  ],

  ////pathname: '/category/house/brick'
  [{ id: "main", text: "ГОЛОВНА", url: "" }],

  ////pathname: '/category/house/ceramic-blocks'
  [{ id: "main", text: "ГОЛОВНА", url: "" }],

  ////pathname: '/category/house/beton'
  [{ id: "main", text: "ГОЛОВНА", url: "" }],

  //pathname: 'category/climate'
  [
    { id: "main", text: "ГОЛОВНА", url: "/" },
    {
      id: "cl2",
      text: "ВЕНТИЛЯЦІЙНІ СИСТЕМИ",
      url: "climate/types",
    },
    {
      id: "cl3",
      text: "КОНДИЦІОНЕР",
      url: "climate/condiditioner",
    },
    { id: "cl4", text: "ОЧИЩУВАЧ ПОВІТРЯ", url: "climate/cleaner" },
    {
      id: "cl5",
      text: "ЗВОЛОЖУВАЧ ПОВІТРЯ",
      url: "climate/moisturizer",
    },
    { id: "back", text: "НАЗАД", url: "/category" },
  ],

  ////pathname: '/category/climate/types'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "" },
  ],

  ////pathname: '/category/climate/conditioner'
  [{ id: "main", text: "ГОЛОВНА", url: "" }],

  ////pathname: '/category/climate/cleaner'
  [{ id: "main", text: "ГОЛОВНА", url: "" }],

  ////pathname: '/category/climate/moisturizer'
  [{ id: "main", text: "ГОЛОВНА", url: "" }],

  //pathname: 'category/communications'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    {
      id: "cm2",
      text: "АКУСТИКА",
      url: "communications/acustic",
    },
    {
      id: "cm3",
      text: "ВОДА",
      url: "communications/water",
    },
    { id: "cm4", text: "ОПАЛЕННЯ", url: "communications/heating" },
    {
      id: "cm5",
      text: "ЕЛЕКТРИКА",
      url: "communications/electric",
    },
    {
      id: "cm6",
      text: "АНТЕННА СИСТЕМА",
      url: "communications/antena",
    },
    {
      id: "cm7",
      text: "ІНТЕРНЕТ",
      url: "communications/internet",
    },
    {
      id: "cm8",
      text: "ОХОРОНА",
      url: "communications/protection",
    },
    { id: "back", text: "НАЗАД", url: "/category" },
  ],

  ////pathname: 'communications/acustic'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications" },
  ],

  ////pathname: 'communications/water'////////////////////////
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    {
      id: "water1",
      text: "РАКОВИНИ",
      url: "water/sink",
    },
    {
      id: "water2",
      text: "ВАННИ",
      url: "water/bath",
    },
    { id: "water3", text: "ДУШЕВІ КАБІНИ", url: "water/shower" },
    {
      id: "water4",
      text: "УНІТАЗ",
      url: "water/bowl",
    },
    {
      id: "water5",
      text: "БІДЕ",
      url: "water/bidet",
    },
    {
      id: "water6",
      text: "САНТЕХНІКА",
      url: "water/plumb",
    },
    {
      id: "water7",
      text: "ЗМІШУВАЧІ",
      url: "water/mixer",
    },
    {
      id: "water8",
      text: "СИФОНИ",
      url: "water/siphon",
    },
    {
      id: "water9",
      text: "КАНАЛІЗАЦІЯ",
      url: "water/sewerage",
    },
    {
      id: "water10",
      text: "САУНА",
      url: "water/sauna",
    },
    {
      id: "water11",
      text: "ФІЛЬТРИ",
      url: "water/filter",
    },
    { id: "back", text: "НАЗАД", url: "/category/communications" },
  ],

  // "category/communications/water/sink",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/bath",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/shower",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/bowl",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/bidet",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/plumb",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/mixer",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/siphon",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/sewerage",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/sauna",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  //   "category/communications/water/filter",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/water" },
  ],

  ////pathname: 'communications/heating'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    {
      id: "water1",
      text: "РАДІАТОРИ ОПАЛЕННЯ",
      url: "heating/radiator",
    },
    {
      id: "water2",
      text: "ВИДИ ТРУБ",
      url: "heating/pipe",
    },
    {
      id: "water4",
      text: "КОТЛИ",
      url: "heating/boiler",
    },
    {
      id: "water5",
      text: "ТЕПЛА ПІДЛОГА",
      url: "heating/floor-heating",
    },
    {
      id: "water6",
      text: "ОБІГРІВАЧІ",
      url: "heating/heater",
    },
    {
      id: "water7",
      text: "РУШНИКОСУШКА",
      url: "heating/towel-dryer",
    },
    {
      id: "water8",
      text: "КАМІНИ",
      url: "heating/fireplaces",
    },
    {
      id: "water9",
      text: "КОНДЕНСАТ",
      url: "heating/condensate",
    },
    {
      id: "water10",
      text: "АЛЬТЕРНАТИВНА ЕНЕРГІЯ",
      url: "heating/alternative",
    },
    { id: "back", text: "НАЗАД", url: "/category/communications" },
  ],

  // "category/communications/heating/radiator",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],
  // "category/communications/heating/pipe",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],
  // "category/communications/heating/boiler",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],
  // "category/communications/heating/floor-heating",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],
  // "category/communications/heating/heater",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],
  // "category/communications/heating/towel-dryer",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],
  // "category/communications/heating/fireplaces",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],
  // "category/communications/heating/condensate",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],
  // "category/communications/heating/alternative",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/heating" },
  ],

  ////pathname: 'communications/electric'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    {
      id: "electric1",
      text: "СВІТЛО",
      url: "electric/light",
    },
    {
      id: "electric2",
      text: "АВТОМАТИ ЗАХИСТУ",
      url: "electric/protection-machines",
    },
    {
      id: "electric3",
      text: "СТАБІЛІЗАТОРИ НАПРУГИ",
      url: "electric/voltage-stabilizers",
    },
    {
      id: "electric4",
      text: "ТИПИ СТАБІЛІЗАТОРІВ НАПРУГИ",
      url: "electric/type-stabilizers",
    },
    {
      id: "electric5",
      text: "ЗАЗЕМЛЕННЯ",
      url: "electric/grounding",
    },
    { id: "back", text: "НАЗАД", url: "/category/communications" },
  ],

  // "category/communications/electric/light",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/electric" },
  ],
  // "category/communications/electric/protection-machines",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/electric" },
  ],
  // "category/communications/electric/voltage-stabilizers",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/electric" },
  ],
  // "category/communications/electric/type-stabilizers",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/electric" },
  ],
  // "category/communications/electric/grounding",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/electric" },
  ],

  ////pathname: 'communications/antena'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications" },
  ],

  ////pathname: 'communications/internet'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications" },
  ],

  ////pathname: 'communications/protection'
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    {
      id: "pr1",
      text: "ЗАХИСТ БУДИНКУ",
      url: "protection/house",
    },
    {
      id: "pr2",
      text: "СИГНАЛІЗАЦІЯ",
      url: "protection/alarms",
    },
    {
      id: "pr3",
      text: "ДОМОФОН",
      url: "protection/intercom",
    },
    {
      id: "pr4",
      text: "ВІДЕОСПОСТЕРЕЖЕННЯ",
      url: "protection/video",
    },
    { id: "back", text: "НАЗАД", url: "/category/communications" },
  ],

  // "category/communications/protection/house",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/protection" },
  ],
  // "category/communications/protection/alarms",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/protection" },
  ],
  // "category/communications/protection/intercom",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/protection" },
  ],
  // "category/communications/protection/video",
  [
    { id: "main", text: "ГОЛОВНА", url: "" },
    { id: "back", text: "НАЗАД", url: "/category/communications/protection" },
  ],
];

export default mainLinksGroup;
