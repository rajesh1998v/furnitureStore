let products = [
  {
    prodCode: "DS2S245",
    category: "Dining",
    desc: [
      "Two seater Dining Set",
      "Built from High quality wood",
      "1 year warranty",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255.jpg",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 2 },
    ],
    title: "Two seater Dining Set",
  },
  {
    prodCode: "DS6S761",
    category: "Dining",
    desc: [
      "Six Seater Dining Set in Antique Cherry Colour",
      "Assembly by Skilled Carpenters",
      "Made from Teak wood",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-1.jpg",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
      { ingName: "Bench", qty: 1 },
    ],
    title: "Six Seater Dining Set",
  },
  {
    prodCode: "DS4S177",
    category: "Dining",
    desc: [
      "Mild Steel Four Seater Dining Set in Black Colour",
      "Knock-down construction for easy transportation",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-2.jpg",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
    ],
    title: "Mild Steel Dining Set",
  },
  {
    prodCode: "DC2S705",
    category: "Dining",
    desc: [
      "Solid Wood Dining Chair Set of Two in Dark Walnut Colour",
      "Beautiful design carved on dining chair",
      "Dining chair seat upholstered in dark brown Fabric",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-3.jpg",
    ingredients: [{ ingName: "Chair", qty: 2 }],
    title: "Dining Chair Set",
  },
  {
    prodCode: "BN1S388",
    category: "Dining",
    desc: [
      "Solid Wood Dining Bench in Dark Walnut Colour",
      "Comfortable bench for a relaxed dinner",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-4_1.jpg",
    ingredients: [{ ingName: "Bench", qty: 1 }],
    title: "Dining Bench",
  },
  {
    prodCode: "SF2S532",
    category: "Drawing",
    desc: [
      "Characteristic Rising Track Arm Rest Design",
      "Premium High Gloss Leatherette Upholstery",
      "Independent Headrest And Lumber Support",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-5_1.jpg",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two Seater Sofa",
  },
  {
    prodCode: "SF2S206",
    category: "Drawing",
    desc: ["Two Seater Sofa in Blue Colour", "Assembly by Skilled Carpenters"],
    img: "https://www.linkpicture.com/q/1-catalog_255-6_1.jpg",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two Seater Sofa",
  },
  {
    prodCode: "SFBD311",
    category: "Drawing",
    desc: [
      "Sofa Cum bed in Brown Colour",
      "Ply-wood construction with hand polished finish",
      "Removable fabric cover on best quality foam mattress",
      "Throw cushions and bolsters come with the product",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-7.jpg",
    ingredients: [
      { ingName: "Sofa", qty: 1 },
      { ingName: "Cushions", qty: 2 },
    ],
    title: "Sofa cum Bed",
  },
  {
    prodCode: "BDQS381",
    category: "Bedroom",
    desc: [
      "Wood Box Storage King Size Bed in Wenge Colour ",
      "Box Storage included for Maximum space utilization",
      "Mattress is included",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-8.jpg",
    ingredients: [
      { ingName: "Bed", qty: 1 },
      { ingName: "Mattress", qty: 2 },
    ],
    title: "King size Bed",
  },
  {
    prodCode: "BDQS229",
    category: "Bedroom",
    desc: [
      "Wood Hydraulic Storage Queen Size Bed",
      "Half hydraulic storage",
      "Superior E2 grade MDF used with melamine finish",
    ],
    img: "https://www.linkpicture.com/q/Screenshot-2023-06-29-125606.png",
    ingredients: [{ ingName: "Bed", qty: 1 }],
    title: "Queen size Bed",
  },
  {
    prodCode: "ST1T425",
    category: "Study",
    desc: [
      "Wood Study Table in Walnut Colour",
      "Assembly by Skilled Carpenters",
      "Built from High Quality Wood",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-9.jpg",
    ingredients: [{ ingName: "Study Table", qty: 1 }],
    title: "Study Table",
  },
  {
    prodCode: "ST1T588",
    category: "Study",
    desc: [
      " Wood Study Table in Highgloss White & Blue Colour",
      "Study table comes with bookshelf on top, 5 drawers & 1 open shelf",
      "Superior quality MDF with stain resistant melamine finish",
    ],
    img: "https://www.linkpicture.com/q/1-catalog_255-10.jpg",
    ingredients: [{ ingName: "Study Table", qty: 1 }],
    title: "Study Table",
  },
];

let users = [
  {role:"user",email:"user@user.com",password:"12345678"},
  {role:"admin",email:"admin@admin.com",password:"12345678"}
]
module.exports = {products,users};