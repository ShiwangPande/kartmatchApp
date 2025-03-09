export type Vendor = {
  id: number;
  name: string;
  location: {
    type: string;
    coordinates: [number, number]; 
  };
  foodItems: string[];
  hygieneRating: number;
  tasteRating: number;
  hospitalityRating: number;
  photoUrl: string;
};

export type PreferenceType = "hygiene" | "taste" | "hospitality";

export const vendors: Vendor[] = [
  {
    id: 7,
    name: "Puchka Wala",
    location: {
      type: "Point",
      coordinates: [88.351977, 22.560087],
    },
    foodItems: ["Puchka", "Puchka Masala"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963152/exmd5bmtkqgmr5msherf.webp",
  },
  {
    id: 8,
    name: "Subhash Papad wala",
    location: {
      type: "Point",
      coordinates: [88.352038, 22.560099],
    },
    foodItems: [
      "Fried Snacks",
      "Puchka Packet",
      "Puffed Rice (Murmura)",
      "Sev",
      "Bhujia",
      "Chakli (circular fried snacks)",
      "Lentils and Pulses",
      "Chips",
      "Papad",
      "Fried Namkeen",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963241/Whats-App-Image-2024-06-19-at-14-46-35-5ec8518b_ymolvg.webp",
  },
  {
    id: 9,
    name: "Subhash Papad wala",
    location: {
      type: "Point",
      coordinates: [88.352018, 22.560253],
    },
    foodItems: [
      "Puffed Rice (Murmura)",
      "Papad wala",
      "Sev",
      "Bhujia",
      "Chips",
      "Papad",
      "Fried Namkeen",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963265/Whats-App-Image-2024-06-19-at-14-46-35-c6bd8150_shtwqi.webp",
  },
  {
    id: 10,
    name: "Wow Chicken",
    location: {
      type: "Point",
      coordinates: [88.352032, 22.559962],
    },
    foodItems: ["Chicken Puff"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963288/Whats-App-Image-2024-06-19-at-14-46-35-29caa01a_xbxyzw.webp",
  },
  {
    id: 11,
    name: "kolkata Mocktail, Lassi & Kulfi Corner",
    location: {
      type: "Point",
      coordinates: [88.351956, 22.559728],
    },
    foodItems: ["Mocktail", "Lassi", "Kulfi", "Faluda"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963303/kokata-Mocktail-Lassi-Kulfi-Corner_znwqej.webp",
  },
  {
    id: 12,
    name: "Dolly Fast Food",
    location: {
      type: "Point",
      coordinates: [88.35259, 22.559206],
    },
    foodItems: ["Roll", "Momo", "Rice", "Chowmein", "Kabab"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963321/Dolly-Fast-Food_ju0rmc.webp",
  },
  {
    id: 13,
    name: "Jay mata di puchka",
    location: {
      type: "Point",
      coordinates: [88.352623, 22.559256],
    },
    foodItems: ["Puchka Masala", "Puchka"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963335/jay-mata-di_suggr7.webp",
  },
  {
    id: 14,
    name: "Dosa shop",
    location: {
      type: "Point",
      coordinates: [88.35275, 22.559573],
    },
    foodItems: ["Masala Dosa", "Idli", "Lassi"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963349/dosa-wala_demswq.webp",
  },
  {
    id: 15,
    name: "Ma Vindhyavasini Tea Staller",
    location: {
      type: "Point",
      coordinates: [88.352776, 22.559424],
    },
    foodItems: ["Tea", "Masala Tea", "Gud Tea"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963365/tea-staller_ttsjjq.webp",
  },
  {
    id: 16,
    name: "SugarCane Juice Seller",
    location: {
      type: "Point",
      coordinates: [88.353017, 22.559386],
    },
    foodItems: ["Sugarcane Juice"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963381/sugar-Cane-juice-seller_ekpddp.webp",
  },
  {
    id: 17,
    name: "Bhel Puri Seller",
    location: {
      type: "Point",
      coordinates: [88.353036, 22.559463],
    },
    foodItems: ["Murmura", "Bhel Puri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963400/Bhel-puri-seller_wyfu6x.webp",
  },
  {
    id: 18,
    name: "Sandeep Stall",
    location: {
      type: "Point",
      coordinates: [88.354182, 22.559173],
    },
    foodItems: ["Egg", "Banana", "Water Bottle", "Pan Masala"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963422/sandeep_y4rvjg.webp",
  },
  {
    id: 19,
    name: "Sandwich & Cold Drink Seller",
    location: {
      type: "Point",
      coordinates: [88.354653, 22.559179],
    },
    foodItems: [
      "Paneer Sandwich",
      "Veg Sandwich",
      "Water Bottle",
      "Cold Drink",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963482/sandwich-and-coldrink-stall_cc3xgi.webp",
  },
  {
    id: 20,
    name: "Debashish Sandwich & Drink Seller",
    location: {
      type: "Point",
      coordinates: [88.354666, 22.559125],
    },
    foodItems: [
      "Egg Sandwich",
      "Veg Sandwich",
      "Mango Shake",
      "jucie",
      "Cold Drink",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963498/Debashish-Sandwich-Drink-Seller_gv4zds.webp",
  },
  {
    id: 21,
    name: "Anirban SugarCane Seller",
    location: {
      type: "Point",
      coordinates: [88.354328, 22.559235],
    },
    foodItems: ["Sugarcane Juice"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963564/Anirban-Sugar-Cane-Seller_israjf.webp",
  },
  {
    id: 22,
    name: "Santosh Pakode wala",
    location: {
      type: "Point",
      coordinates: [88.353095, 22.559376],
    },
    foodItems: ["Onion Pakoda", "Chicken Pakoda"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963582/santosh-pakode-wala_o3ib3o.webp",
  },
  {
    id: 23,
    name: "Arun Chat wala",
    location: {
      type: "Point",
      coordinates: [88.352799, 22.559414],
    },
    foodItems: ["Dahi Papdi Chat", "Alu Chat", "Murmura", "Bhel Puri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963598/arun-murmura-Seller_qfe0mn.webp",
  },
  {
    id: 24,
    name: "Pradip Puchka",
    location: {
      type: "Point",
      coordinates: [88.35077, 22.552784],
    },
    foodItems: ["Puchka Masala", "Puchka Papdi", "Puchka", "Dahi Puchka"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963614/pradip-Puchka_vzbqz0.webp",
  },
  {
    id: 25,
    name: "Rakesh Murmura",
    location: {
      type: "Point",
      coordinates: [88.350919, 22.552843],
    },
    foodItems: ["Papad", "Murmura", "Alu Dum Masala"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963632/rakesh-murmura_r1c1l8.webp",
  },
  {
    id: 26,
    name: "Ashok Bhel Puri",
    location: {
      type: "Point",
      coordinates: [88.350694, 22.552818],
    },
    foodItems: ["Bhel Puri", "Murmura"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963647/Ashok-bhelpuri_jthq2a.webp",
  },
  {
    id: 27,
    name: "Sudip Murmura",
    location: {
      type: "Point",
      coordinates: [88.350721, 22.552264],
    },
    foodItems: ["Bhel Puri", "Murmura", "Papad", "Fried Namkeen", "Sev"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963669/sudip-murmura_io6zy8.webp",
  },
  {
    id: 28,
    name: "Vardaan Vada Pav",
    location: {
      type: "Point",
      coordinates: [88.353503, 22.548629],
    },
    foodItems: ["cheese Vada Pav", "Vada Pav", "Pav"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963688/Dipak-Vada-Pav_dxkw07.webp",
  },
  {
    id: 29,
    name: "Chandan Sprout",
    location: {
      type: "Point",
      coordinates: [88.353494, 22.548435],
    },
    foodItems: ["Sprout", "Mixture", "Cheewda"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963702/Chandan-Sprout_ps7bfv.webp",
  },
  {
    id: 30,
    name: "Mahesh Puchka wala",
    location: {
      type: "Point",
      coordinates: [88.353553, 22.548592],
    },
    foodItems: ["Puchka Masala", "Puchka", "Puchka Papdi"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963720/Mahesh-puchka-wala_f6on6v.webp",
  },
  {
    id: 31,
    name: "Bhaskar Murmura wala",
    location: {
      type: "Point",
      coordinates: [88.353629, 22.548506],
    },
    foodItems: ["Murmura", "Bhel Puri", "Churmur"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963739/bhaskar-murmura_ukzbrg.webp",
  },
  {
    id: 32,
    name: "Anil Chiila wala",
    location: {
      type: "Point",
      coordinates: [88.3534499, 22.548406],
    },
    foodItems: [
      "Paneer Onion Mix Chiila",
      "Cheese Onion Mix Chiila",
      "Onion Chiila",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963761/chilla_yrhrom.webp",
  },
  {
    id: 33,
    name: "Victoria Soda Shop",
    location: {
      type: "Point",
      coordinates: [88.353669, 22.548554],
    },
    foodItems: [
      "Kesar Badam",
      "Keshar Pista",
      "lemon Soda",
      "Strawberry Soda",
      "kachha mango soda",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963777/victoria-soda-shop_rqzhtm.webp",
  },
  {
    id: 34,
    name: "Manoj’s Masti Chaat",
    location: {
      type: "Point",
      coordinates: [88.353532, 22.548423],
    },
    foodItems: [
      "Kesar Badam",
      "Keshar Pista",
      "lemon Soda",
      "Strawberry Soda",
      "kachha mango soda",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963793/Manojs-Masti-Chaat_jmtmqi.webp",
  },
  {
    id: 35,
    name: "Ravi Puchka",
    location: {
      type: "Point",
      coordinates: [88.349054, 22.545627],
    },
    foodItems: [
      "Sev Puri",
      "Churmur",
      "Sandwich Soda",
      "Aloo Puchka",
      "Dahi Puchka",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963814/Ravi-puchka_oexlcu.webp",
  },
  {
    id: 36,
    name: "Raju Puchka",
    location: {
      type: "Point",
      coordinates: [88.349062, 22.54565],
    },
    foodItems: [
      "Ragda pattis",
      "Ghughni Puchka",
      "Churmur",
      "Puchka Masala",
      "Puchka Papdi",
      "Aloo Puchka",
      "Dahi Puchka",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963830/raju-puchka_ghxemw.webp",
  },
  {
    id: 37,
    name: "Rana Chaat",
    location: {
      type: "Point",
      coordinates: [88.349027, 22.545449],
    },
    foodItems: ["Chaat", "Alu Chat", "Masala Chat"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963852/rana-chat_ecwp03.webp",
  },
  {
    id: 38,
    name: "Rajasthani Famous Chat",
    location: {
      type: "Point",
      coordinates: [88.348975, 22.545455],
    },
    foodItems: ["Kachori Chaat", "Papri Chat", "Samosa Chat", "mixed Chat"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963869/Rajasthani-Famous-Chat_xyvbg7.webp",
  },
  {
    id: 39,
    name: "Food Quest",
    location: {
      type: "Point",
      coordinates: [88.349003, 22.545346],
    },
    foodItems: [
      "Veg Maggi",
      "Cheese Maggi",
      "Veg Pasta",
      "Mix Cheese",
      "Pasta",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963885/food-quest_pnvvs0.webp",
  },
  {
    id: 40,
    name: "Maya Ram",
    location: {
      type: "Point",
      coordinates: [88.349007, 22.545246],
    },
    foodItems: [
      "Veg Thali",
      "Fried Rice",
      "Veg Maggi",
      "Cheese Maggi",
      "Pasta",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963901/Maya-Ram_clnd3w.webp",
  },
  {
    id: 41,
    name: "Sanjay Churmur",
    location: {
      type: "Point",
      coordinates: [88.34861, 22.541614],
    },
    foodItems: ["Churmur", "Puffed Rice (Murmura)", "Mixture"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963916/sanjay-churmur_td9qyo.webp",
  },
  {
    id: 42,
    name: "Haripada",
    location: {
      type: "Point",
      coordinates: [88.348527, 22.541658],
    },
    foodItems: [
      "Roasted Gram (Chana)",
      "Puffed Rice (Murmura)",
      "Flattened Rice (Poha)",
      "Sev",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963934/haribada_rfdyzd.webp",
  },
  {
    id: 43,
    name: "Nirmal Puchka",
    location: {
      type: "Point",
      coordinates: [88.331733, 22.531724],
    },
    foodItems: ["Puchka Masala", "Puchka Papdi", "Churmur", "Sev Puchka"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963951/niraml-puchka_x1fzoe.webp",
  },
  {
    id: 44,
    name: "Chaurasiya Bombay Sandwich Centre",
    location: {
      type: "Point",
      coordinates: [88.330316, 22.522509],
    },
    foodItems: ["Veg Sandwich", "Paneer Sandwich", "Cheese Sandiwich"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963974/Chaurasiya-Bombay-Sandwich-Centre_umvxan.webp",
  },
  {
    id: 45,
    name: "Thela Puchka",
    location: {
      type: "Point",
      coordinates: [88.330424, 22.52233],
    },
    foodItems: ["Alu Puchka", "Puchka Masala", "Puchka Papdi"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729963991/thela-puchka_psmqkv.webp",
  },
  {
    id: 46,
    name: "Harilal churmur",
    location: {
      type: "Point",
      coordinates: [88.330481, 22.522403],
    },
    foodItems: ["Churmur", "Sev", "Murmura"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964009/harilal-murmur_mai9fa.webp",
  },
  {
    id: 47,
    name: "Basudev Masala Puri",
    location: {
      type: "Point",
      coordinates: [88.33038, 22.522271],
    },
    foodItems: ["Batata Puri", "Masala puri", "papdi chaat", "Bread chat"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964025/basudev_iao3r7.webp",
  },
  {
    id: 48,
    name: "Bengal Sharbet House",
    location: {
      type: "Point",
      coordinates: [88.343273, 22.547787],
    },
    foodItems: [
      "Aam Pora Sharbat",
      "Gondhoraj Lemon Sharbat",
      "Bel Panna",
      "Rose Milk",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964047/bengal-sharbet-house_fw7sq3.webp",
  },
  {
    id: 49,
    name: "Bombay Famour Chat",
    location: {
      type: "Point",
      coordinates: [88.343194, 22.54782],
    },
    foodItems: ["Batata Puri", "Masala Puri", "Papdi Chaat", "Bhel Puri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964056/bombay-famour-chat_m1kzhb.webp",
  },
  {
    id: 50,
    name: "Bhel House",
    location: {
      type: "Point",
      coordinates: [88.342021, 22.541439],
    },
    foodItems: ["Bhel Puri", "Jhal Muri", "Churmur", "Masala Puri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964074/Bhel-House_sezpif.webp",
  },
  {
    id: 51,
    name: "Bong momo magic",
    location: {
      type: "Point",
      coordinates: [88.346438, 22.524439],
    },
    foodItems: ["Steamed Momo", "Fried Momo", "Tandoori Momo", "Schezwan Momo"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964083/bong-momo-magic_hcy41f.webp",
  },
  {
    id: 52,
    name: "chat adda",
    location: {
      type: "Point",
      coordinates: [88.353566, 22.545055],
    },
    foodItems: ["Puchka", "Dahi Puchka", "Aloo Kabli", "Churmur"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964108/chat-adda_w48kqb.webp",
  },
  {
    id: 53,
    name: "chiruni pav bhaji",
    location: {
      type: "Point",
      coordinates: [88.333022, 22.559292],
    },
    foodItems: [
      "Pav Bhaji",
      "Cheese Pav Bhaji",
      "Masala Pav",
      "Butter Pav Bhaji",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964125/chiruni-pav-bhaji_qlipo0.webp",
  },
  {
    id: 54,
    name: "ganga puchka corner",
    location: {
      type: "Point",
      coordinates: [88.342068, 22.541431],
    },
    foodItems: ["Puchka", "Dahi Puchka", "Aloo Kabli", "Churmur"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964132/ganga-puchka-corner_h0e6xe.webp",
  },
  {
    id: 55,
    name: "ganguly pan palace",
    location: {
      type: "Point",
      coordinates: [88.346238, 22.525639],
    },
    foodItems: ["Meetha Pan", "Masala Pan", "Chocolate Pan", "Sada Pan"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964137/ganguly-pan-pala_mqzzhz.webp",
  },
  {
    id: 56,
    name: "kolkata pan kutir",
    location: {
      type: "Point",
      coordinates: [88.354545, 22.538032],
    },
    foodItems: ["Meetha Pan", "Masala Pan", "Chocolate Pan", "Sada Pan"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964167/kolkata-pan-kutir_tmrymm.webp",
  },
  {
    id: 57,
    name: "laxman bhel puri",
    location: {
      type: "Point",
      coordinates: [88.354527, 22.538032],
    },
    foodItems: ["Bhel Puri", "Jhal Muri", "Churmur", "Masala Puri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964178/laxman-bhel-puri_iqdxpc.webp",
  },
  {
    id: 58,
    name: "maya bose jai jawan stall",
    location: {
      type: "Point",
      coordinates: [88.333103, 22.559414],
    },
    foodItems: ["Egg Roll", "Chicken Roll", "Paneer Roll", "Mutton Roll"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964185/maya-bose-jai-jawan-stall_ojgxyd.webp",
  },
  {
    id: 59,
    name: "mishti kachori",
    location: {
      type: "Point",
      coordinates: [88.346419, 22.524201],
    },
    foodItems: ["Kachori", "Alur Dom", "Singara", "Khasta Kachori"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964241/mishti-kachori_q5lmcq.webp",
  },
  {
    id: 60,
    name: "misti pan masala",
    location: {
      type: "Point",
      coordinates: [88.33038, 22.522271],
    },
    foodItems: ["Meetha Pan", "Masala Pan", "Chocolate Pan", "Sada Pan"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964253/misti-pan-masala_a7e1iz.webp",
  },
  {
    id: 61,
    name: "mohan noodle",
    location: {
      type: "Point",
      coordinates: [88.344162, 22.540687],
    },
    foodItems: [
      "Hakka Noodles",
      "Schezwan Noodles",
      "Chilli Garlic Noodles",
      "Mixed Veg Noodles",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964259/mohan-noodle_an4aii.webp",
  },
  {
    id: 62,
    name: "murmura mastaan",
    location: {
      type: "Point",
      coordinates: [88.34424, 22.540669],
    },
    foodItems: ["Jhal Muri", "Churmur", "Bhel Puri", "Masala Muri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964311/murmura-mastaan_ooca9m.webp",
  },
  {
    id: 63,
    name: "nirvana nimbu pani",
    location: {
      type: "Point",
      coordinates: [88.333028, 22.559356],
    },
    foodItems: ["Nimbu Pani", "Pudina Nimbu Pani", "Masala Soda", "Jal Jeera"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964318/nirvana-nimbu-pani_dbu7wk.webp",
  },
  {
    id: 64,
    name: "puchka babu",
    location: {
      type: "Point",
      coordinates: [88.353616, 22.545019],
    },
    foodItems: ["Puchka", "Dahi Puchka", "Aloo Kabli", "Churmur"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964345/puchka-babu_sv2ubf.webp",
  },
  {
    id: 65,
    name: "puchka pritam",
    location: {
      type: "Point",
      coordinates: [88.344259, 22.540674],
    },
    foodItems: ["Puchka", "Dahi Puchka", "Aloo Kabli", "Churmur"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964352/puchka-pritam_lsawl8.webp",
  },
  {
    id: 66,
    name: "raja chat",
    location: {
      type: "Point",
      coordinates: [88.342006, 22.541402],
    },
    foodItems: ["Puchka", "Dahi Puchka", "Aloo Kabli", "Churmur"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964375/raja-chat_oujr7p.webp",
  },
  {
    id: 67,
    name: "raja pan masala",
    location: {
      type: "Point",
      coordinates: [88.346325, 22.525736],
    },
    foodItems: ["Meetha Pan", "Masala Pan", "Chocolate Pan", "Sada Pan"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964384/raja-pan-masala_vckzux.webp",
  },
  {
    id: 68,
    name: "saraswati murmura",
    location: {
      type: "Point",
      coordinates: [88.346436, 22.524117],
    },
    foodItems: ["Jhal Muri", "Churmur", "Bhel Puri", "Masala Muri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964414/saraswati-murmura_oni2cu.webp",
  },
  {
    id: 69,
    name: "shibuji stall",
    location: {
      type: "Point",
      coordinates: [88.353508, 22.545035],
    },
    foodItems: ["Chana Zor Garam", "Masala Papad", "Bhel Puri", "Jhal Muri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964441/shibuji_rdc1kz.webp",
  },
  {
    id: 70,
    name: "special bhel puri",
    location: {
      type: "Point",
      coordinates: [88.333012, 22.559309],
    },
    foodItems: ["Bhel Puri", "Jhal Muri", "Churmur", "Masala Puri"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964448/special-bhel-puri_pkzq7h.webp",
  },
  {
    id: 71,
    name: "spl chaat corner",
    location: {
      type: "Point",
      coordinates: [88.343265, 22.54776],
    },
    foodItems: ["Puchka", "Dahi Puchka", "Aloo Kabli", "Churmur"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964731/spl-chaat-corner_s2kg4l.webp",
  },
  {
    id: 72,
    name: "spl pav bhaji",
    location: {
      type: "Point",
      coordinates: [88.343851, 22.563527],
    },
    foodItems: [
      "Pav Bhaji",
      "Cheese Pav Bhaji",
      "Masala Pav",
      "Butter Pav Bhaji",
    ],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964752/spl-pav-bhaji_vrx0lv.webp",
  },
  {
    id: 73,
    name: "sunder kachori",
    location: {
      type: "Point",
      coordinates: [88.344259, 22.540674],
    },
    foodItems: ["Kachori", "Alur Dom", "Singara", "Khasta Kachori"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964759/sunder-kachori_vkneyg.webp",
  },
  {
    id: 74,
    name: "maharaja purely vegeterian",
    location: {
      type: "Point",
      coordinates: [88.344259, 22.540674],
    },
    foodItems: ["Hing Kachori", "Singara", "gulab jamun", "jalebi", "dhokla"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964784/maharaja-purely-vegeterian_zmnxpw.webp",
  },
  {
    id: 75,
    name: "share chai",
    location: {
      type: "Point",
      coordinates: [88.344259, 22.540674],
    },
    foodItems: ["Adhrak Chai", "Gud Chai", "masala Chai"],
    hygieneRating: 4,
    tasteRating: 4,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964791/share-chai_ozfapx.webp",
  },
  {
    id: 76,
    name: "Bhojohori Manna",
    location: {
      type: "Point",
      coordinates: [88.346054, 22.573532],
    },
    foodItems: [
      "Fried Fritters (Telebhaja)",
      "Aloo Chop",
      "Yellow Fried Snacks (possibly Pakoras)",
      "Fish Curry",
      "Egg Curry",
      "Vegetable Curry",
    ],

    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964876/IMG-20240624-WA0004_x5pulv.webp",
  },
  {
    id: 77,
    name: "Gupshup Chai Stall",
    location: {
      type: "Point",
      coordinates: [88.346053, 22.346053],
    },
    foodItems: [
      "Tea (Chai)",
      "Boiled Eggs",
      "Green Chilies",
      "Chopped Onions",
      "Lemon Wedges",
      "Bread (possibly for making toast or sandwiches)",
      "Various Condiments and Spices",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964936/IMG-20240624-WA0006_ojrxst.webp",
  },
  {
    id: 78,
    name: "Bengal Rotiwala",
    location: {
      type: "Point",
      coordinates: [88.345928, 22.573567],
    },
    foodItems: [
      "Roti",
      "Paratha",
      "Puri",
      "Chutney",
      "Pickle",
      "Dal (Lentils)",
      "Vegetable Curry",
      "Water",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964966/IMG-20240624-WA0008_gsgcmx.webp",
  },
  {
    id: 79,
    name: "Shri Noodle",
    location: {
      type: "Point",
      coordinates: [88.34591, 22.573575],
    },
    foodItems: [
      "Chicken Hakka Noodles",
      "Veg Schezwan Noodles",
      "Noodle",
      "Chowmein",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729964984/IMG-20240624-WA0009_q0pdwk.webp",
  },
  {
    id: 80,
    name: "Mehta murmura",
    location: {
      type: "Point",
      coordinates: [88.347169, 22.572669],
    },
    foodItems: [
      "Bhel Puri",
      "Jhal Muri",
      "Churmur",
      "Masala Puri",
      "Puffed Rice (Murmura)",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965012/IMG-20240624-WA0011_iqduxs.webp",
  },
  {
    id: 81,
    name: "Pakoda and Papad",
    location: {
      type: "Point",
      coordinates: [88.35172, 22.570008],
    },
    foodItems: [
      "Onion Pakoda",
      "Chicken Pakoda",
      "Aloo Pakoda",
      "Masala Papad",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965032/IMG-20240625-WA0003_nnogba.webp",
  },
  {
    id: 82,
    name: "Chola Batura Stall",
    location: {
      type: "Point",
      coordinates: [88.35992, 22.568462],
    },
    foodItems: ["Chola Batura", "Dosa", "lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965039/IMG-20240625-WA0005_pvqxju.webp",
  },
  {
    id: 83,
    name: "ganga Pakoda",
    location: {
      type: "Point",
      coordinates: [88.353434, 22.569276],
    },
    foodItems: ["Bread Pakoda", "Aloo Pakoda", "Onion Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965080/IMG-20240625-WA0006_lr6mhg.webp",
  },
  {
    id: 84,
    name: "Shri Chaat",
    location: {
      type: "Point",
      coordinates: [88.353208, 22.570606],
    },
    foodItems: ["Chaat", "Masala Chat", "Samosa Chat", "Alu Chat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965098/IMG-20240625-WA0008_yrbgbw.webp",
  },
  {
    id: 85,
    name: "Nashta Centre",
    location: {
      type: "Point",
      coordinates: [88.353021, 22.569235],
    },
    foodItems: ["Chat", "Samosa", "Cheese Maggi", "Onion Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965119/IMG-20240625-WA0009_pkdec1.webp",
  },
  {
    id: 86,
    name: "Ram Tea Centre",
    location: {
      type: "Point",
      coordinates: [88.353174, 22.572029],
    },
    foodItems: ["Tea", "Coffee", "Masala Tea"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965142/IMG-20240625-WA0012_syiejw.webp",
  },
  {
    id: 87,
    name: "Ram chat centre",
    location: {
      type: "Point",
      coordinates: [88.352787, 22.574336],
    },
    foodItems: ["Chaat", "Masala Chat", "Samosa Chat", "Alu Chat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965172/IMG-20240625-WA0014_jdqor6.webp",
  },
  {
    id: 88,
    name: "Manoharam food",
    location: {
      type: "Point",
      coordinates: [88.350627, 22.575258],
    },
    foodItems: ["Small tea", "Big Tea", "cofee", "kachori", "Samosa"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965194/IMG-20240625-WA0015_em7mqw.webp",
  },
  {
    id: 89,
    name: "Spl chat",
    location: {
      type: "Point",
      coordinates: [88.350572, 22.575209],
    },
    foodItems: ["Chaat", "Masala Chat", "Samosa Chat", "Alu Chat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965211/IMG-20240625-WA0016_z3l3uv.webp",
  },
  {
    id: 90,
    name: "hemant nashta",
    location: {
      type: "Point",
      coordinates: [88.349942, 22.574845],
    },
    foodItems: ["Veg Maggi", "Fried Rice", "Chaat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965279/IMG-20240625-WA0017_uyupme.webp",
  },
  {
    id: 91,
    name: "manohar chat stall",
    location: {
      type: "Point",
      coordinates: [88.3523, 22.574348],
    },
    foodItems: ["Chaat", "Masala Chat", "Samosa Chat", "Alu Chat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965340/IMG-20240625-WA0022_g6lb0u.webp",
  },
  {
    id: 92,
    name: "shri bhel puri",
    location: {
      type: "Point",
      coordinates: [88.349937, 22.574741],
    },
    foodItems: ["Bhel Puri", "Churmur", "papdi chaat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965357/IMG-20240625-WA0023_pvjcfp.webp",
  },
  {
    id: 93,
    name: "lal chaat",
    location: {
      type: "Point",
      coordinates: [88.349937, 22.574741],
    },
    foodItems: ["Chaat", "Masala Chat", "Samosa Chat", "Alu Chat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965363/IMG-20240625-WA0025_kjz4oo.webp",
  },
  {
    id: 94,
    name: "utsav nashta",
    location: {
      type: "Point",
      coordinates: [88.349836, 22.574323],
    },
    foodItems: ["Chola Batura", "kachori", "Papad"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965371/IMG-20240625-WA0027_lrsrva.webp",
  },
  {
    id: 95,
    name: "ramji chaat",
    location: {
      type: "Point",
      coordinates: [88.349734, 22.574219],
    },
    foodItems: ["Chaat", "Masala Chat", "Samosa Chat", "Alu Chat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965413/IMG-20240625-WA0030_qmwn5l.webp",
  },
  {
    id: 96,
    name: "Puff stall",
    location: {
      type: "Point",
      coordinates: [88.349728, 22.574183],
    },
    foodItems: ["veg puff", "egg puff", "roll"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965421/IMG-20240625-WA0031_bjlz8b.webp",
  },
  {
    id: 97,
    name: "puff babu",
    location: {
      type: "Point",
      coordinates: [88.348306, 22.575036],
    },
    foodItems: ["veg puff", "egg puff", "roll", "bread", "milk"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965429/IMG-20240625-WA0034_f9clbc.webp",
  },
  {
    id: 98,
    name: "pyaj pakoda wala",
    location: {
      type: "Point",
      coordinates: [88.347456, 22.575387],
    },
    foodItems: ["Onion Pakoda", "masala pyaj pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965438/IMG-20240625-WA0036_theor0.webp",
  },
  {
    id: 99,
    name: "babu biryani",
    location: {
      type: "Point",
      coordinates: [88.346551, 22.575002],
    },
    foodItems: [
      "veh biryani",
      "non-veg briyani",
      "full biryani",
      "half biryani",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965482/IMG-20240625-WA0037_y0gbdx.webp",
  },
  {
    id: 100,
    name: "chima fast food center",
    location: {
      type: "Point",
      coordinates: [88.346128, 22.574418],
    },
    foodItems: [
      "Chowmein",
      "Rice",
      "Pasta",
      "Egg Roll",
      "Momo",
      "lolly pop",
      "Chicken pakora",
      "veg pakora",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965545/IMG-20240625-WA0040_itwuoz.webp",
  },
  {
    id: 101,
    name: "kachori dukan",
    location: {
      type: "Point",
      coordinates: [88.349856, 22.574573],
    },
    foodItems: ["kachori", "masala kachori", "special kachori"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965554/IMG-20240625-WA0042_amdzba.webp",
  },
  {
    id: 102,
    name: "dosa stall",
    location: {
      type: "Point",
      coordinates: [88.346538, 22.575008],
    },
    foodItems: ["masala dosa", "plain dosa", "onion dosa", "special dosa"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965558/IMG-20240625-WA0043_vzqsxt.webp",
  },
  {
    id: 103,
    name: "Bhatura wala",
    location: {
      type: "Point",
      coordinates: [88.347751, 22.575192],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965657/IMG-20240625-WA0045_q0obfc.webp",
  },
  {
    id: 104,
    name: "curry bhandar",
    location: {
      type: "Point",
      coordinates: [88.345566, 22.573552],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965665/IMG-20240625-WA0048_ykrb56.webp",
  },
  {
    id: 105,
    name: "chana jhalmuri",
    location: {
      type: "Point",
      coordinates: [88.346071, 22.574231],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965730/IMG-20240625-WA0050_b5tjp9.webp",
  },
  {
    id: 106,
    name: "muri plaza",
    location: {
      type: "Point",
      coordinates: [88.345305, 22.57311],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965734/IMG-20240625-WA0052_frktzk.webp",
  },
  {
    id: 107,
    name: "batura plaza",
    location: {
      type: "Point",
      coordinates: [88.345356, 22.573113],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965768/IMG-20240625-WA0053_vidhmw.webp",
  },
  {
    id: 108,
    name: "kullad chai",
    location: {
      type: "Point",
      coordinates: [88.351814, 22.569969],
    },
    foodItems: [
      "Meetha Pan Masala",
      "Sada Pan Masala",
      "Banarasi Pan Masala",
      "Mint Pan Masala",
      "Rose Pan Masala",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965788/IMG-20240625-WA0055_yxbvqw.webp",
  },
  {
    id: 109,
    name: "bhatura plaza",
    location: {
      type: "Point",
      coordinates: [88.35353, 22.573299],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965828/IMG-20240625-WA0057_fevv6i.webp",
  },
  {
    id: 110,
    name: "Flavors of Chai",
    location: {
      type: "Point",
      coordinates: [88.351763, 22.569984],
    },
    foodItems: [
      "Masala Chai",
      "Ginger Tea",
      "Lemon Tea",
      "Green Tea",
      "Black Tea",
      "Elaichi Tea",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965843/IMG-20240625-WA0060_ybdlml.webp",
  },
  {
    id: 111,
    name: "Street Style Pakoda Corner",
    location: {
      type: "Point",
      coordinates: [88.352537, 22.567916],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965850/IMG-20240625-WA0062_ufnyak.webp",
  },
  {
    id: 112,
    name: "steam momo & fry momo",
    location: {
      type: "Point",
      coordinates: [88.352628, 22.569624],
    },
    foodItems: [
      "steam Chicken momo",
      "steam veg momo",
      "fry chicken momo",
      "fry veg momo",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965882/IMG-20240625-WA0063_biux5s.webp",
  },
  {
    id: 113,
    name: "kannad nashta",
    location: {
      type: "Point",
      coordinates: [88.352537, 22.567916],
    },
    foodItems: ["Fried Rice", "veg rice", "sabji", "veg paneer"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965901/IMG-20240625-WA0066_t0aw88.webp",
  },
  {
    id: 114,
    name: "ram bandar",
    location: {
      type: "Point",
      coordinates: [88.351872, 22.566631],
    },
    foodItems: ["Fried Rice", "veg rice", "sabji", "veg paneer"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965919/IMG-20240625-WA0067_qg3ktf.webp",
  },
  {
    id: 115,
    name: "Namkeen center",
    location: {
      type: "Point",
      coordinates: [88.352825, 22.568103],
    },
    foodItems: [
      "Roasted Gram (Chana)",
      "Puffed Rice (Murmura)",
      "Flattened Rice (Poha)",
      "Sev",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965946/IMG-20240625-WA0068_hshrzj.webp",
  },
  {
    id: 116,
    name: "shri Jhalmuri puri",
    location: {
      type: "Point",
      coordinates: [88.353217, 22.569852],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965964/IMG-20240625-WA0069_e085xo.webp",
  },
  {
    id: 117,
    name: "muri fast food",
    location: {
      type: "Point",
      coordinates: [88.353187, 22.569819],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965979/IMG-20240625-WA0074_wzrtjr.webp",
  },
  {
    id: 118,
    name: "Haju's Darbar",
    location: {
      type: "Point",
      coordinates: [88.353592, 22.573494],
    },
    foodItems: [
      "roll",
      "Egg Roll",
      "veg roll",
      "Mutton Roll",
      "Paneer Roll",
      "spring roll",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729965987/IMG-20240625-WA0075_dukmop.webp",
  },
  {
    id: 119,
    name: "Ashma Fast food",
    location: {
      type: "Point",
      coordinates: [88.353592, 22.573483],
    },
    foodItems: ["pizza", "noodles", "Samosa", "roll"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966012/IMG-20240625-WA0076_c0msjl.webp",
  },
  {
    id: 120,
    name: "hanuman nashta center",
    location: {
      type: "Point",
      coordinates: [88.35301, 22.574271],
    },
    foodItems: ["Rice", "Fried Rice", "Aloo Bhatura", "puri"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966020/IMG-20240625-WA0077_pysnpr.webp",
  },
  {
    id: 121,
    name: "somosa center",
    location: {
      type: "Point",
      coordinates: [88.35306, 22.574286],
    },
    foodItems: ["Samosa", "Samosa Chat", "kadi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966056/IMG-20240625-WA0078_rgwkcj.webp",
  },
  {
    id: 122,
    name: "Spicy Pakoda Zone",
    location: {
      type: "Point",
      coordinates: [88.352928, 22.574225],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966063/IMG-20240625-WA0083_xi4ayi.webp",
  },
  {
    id: 123,
    name: "batura nashta",
    location: {
      type: "Point",
      coordinates: [88.352837, 22.574224],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966072/IMG-20240625-WA0085_b2wvxd.webp",
  },
  {
    id: 124,
    name: "chowmein nashta",
    location: {
      type: "Point",
      coordinates: [88.352492, 22.57442],
    },
    foodItems: [
      "Chowmein",
      "Hakka Noodles",
      "Schezwan Noodles",
      "Garlic Noodles",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966103/IMG-20240625-WA0086_wfnnpx.webp",
  },
  {
    id: 125,
    name: "momo corner",
    location: {
      type: "Point",
      coordinates: [88.352652, 22.574318],
    },
    foodItems: ["Veg Momos", "Chicken Momos", "Paneer Momos", "Tandoori Momos"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966133/IMG-20240625-WA0089_halorb.webp",
  },
  {
    id: 126,
    name: "Rava Dosa Junction",
    location: {
      type: "Point",
      coordinates: [88.352835, 22.574243],
    },
    foodItems: [
      "Masala Dosa",
      "Plain Dosa",
      "Rava Dosa",
      "Paneer Dosa",
      "Mysore Dosa",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966141/IMG-20240625-WA0091_jtna5m.webp",
  },
  {
    id: 127,
    name: "Nimbu Masala Muri corner",
    location: {
      type: "Point",
      coordinates: [88.352103, 22.574517],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966163/IMG-20240625-WA0093_onfdit.webp",
  },
  {
    id: 128,
    name: "Paratha Paradise",
    location: {
      type: "Point",
      coordinates: [88.352357, 22.574424],
    },
    foodItems: [
      "Aloo Paratha",
      "Paneer Paratha",
      "Gobhi Paratha",
      "Methi Paratha",
      "Keema Paratha",
      "Onion Paratha",
      "Mixed Veg Paratha",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966171/IMG-20240625-WA0095_oo94kx.webp",
  },
  {
    id: 129,
    name: "Aloo Paratha Corner",
    location: {
      type: "Point",
      coordinates: [88.351881, 22.574582],
    },
    foodItems: [
      "Masala Dosa",
      "Plain Dosa",
      "Rava Dosa",
      "Paneer Dosa",
      "Mysore Dosa",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966194/IMG-20240625-WA0096_kombxs.webp",
  },
  {
    id: 130,
    name: "javed egg center",
    location: {
      type: "Point",
      coordinates: [88.351943, 22.574525],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966210/IMG-20240625-WA0098_k7h5dm.webp",
  },
  {
    id: 131,
    name: "chicken pakoda wala",
    location: {
      type: "Point",
      coordinates: [88.35184, 22.574591],
    },
    foodItems: [
      "Aloo Pakoda",
      "Pyaz Pakoda",
      "Palak Pakoda",
      "Paneer Pakoda",
      "chicken pakoda",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966230/IMG-20240625-WA0099_fk2dgl.webp",
  },
  {
    id: 132,
    name: "shri ram nashta",
    location: {
      type: "Point",
      coordinates: [88.35088, 22.575354],
    },
    foodItems: ["puri", "sabji", "dahi", "lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966238/IMG-20240625-WA0101_mf8mp8.webp",
  },
  {
    id: 133,
    name: "Bhatura stall",
    location: {
      type: "Point",
      coordinates: [88.350647, 22.575262],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966264/IMG-20240625-WA0105_ofrcou.webp",
  },
  {
    id: 134,
    name: "shri ram nashta",
    location: {
      type: "Point",
      coordinates: [88.349775, 22.574295],
    },
    foodItems: ["puri", "sabji", "dahi", "lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966292/IMG-20240625-WA0106_egjr0n.webp",
  },
  {
    id: 135,
    name: "cheesy noodle",
    location: {
      type: "Point",
      coordinates: [88.350004, 22.574729],
    },
    foodItems: [
      "Chowmein",
      "Hakka Noodles",
      "Schezwan Noodles",
      "Garlic Noodles",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966298/IMG-20240625-WA0108_nou91a.webp",
  },
  {
    id: 136,
    name: "Masala Dosa House",
    location: {
      type: "Point",
      coordinates: [88.349788, 22.574265],
    },
    foodItems: [
      "Masala Dosa",
      "Plain Dosa",
      "Rava Dosa",
      "Paneer Dosa",
      "Mysore Dosa",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966318/IMG-20240625-WA0109_hy5ouo.webp",
  },
  {
    id: 137,
    name: "samrat roll center",
    location: {
      type: "Point",
      coordinates: [88.349702, 22.574001],
    },
    foodItems: [
      "chow",
      "veg chow",
      "egg chow",
      "mix chow",
      "paneer roll",
      "Egg Roll",
      "Mutton Roll",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966353/IMG-20240625-WA0113_sh4ljo.webp",
  },
  {
    id: 138,
    name: "shri ram nashta",
    location: {
      type: "Point",
      coordinates: [88.347931, 22.575139],
    },
    foodItems: ["puri", "sabji", "dahi", "lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966361/IMG-20240625-WA0117_aqetgo.webp",
  },
  {
    id: 139,
    name: "Misal Pav Corner",
    location: {
      type: "Point",
      coordinates: [88.349764, 22.574296],
    },
    foodItems: [
      "Vada Pav",
      "Misal Pav",
      "Bhaji Pav",
      "Masala Pav",
      "Cheese Pav",
      "Schezwan Pav",
      "Butter Pav",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966381/IMG-20240625-WA0118_zwczmo.webp",
  },
  {
    id: 140,
    name: "Noodle & pasta center",
    location: {
      type: "Point",
      coordinates: [88.348345, 22.574895],
    },
    foodItems: [
      "Chowmein",
      "Hakka Noodles",
      "Schezwan Noodles",
      "Garlic Noodles",
      "Pasta",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966390/IMG-20240625-WA0119_lbbx65.webp",
  },
  {
    id: 141,
    name: "pakoda and sweets",
    location: {
      type: "Point",
      coordinates: [88.47724, 22.575228],
    },
    foodItems: [
      "Aloo Pakoda",
      "Pyaz Pakoda",
      "Palak Pakoda",
      "Paneer Pakoda",
      "jalebi",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966415/IMG-20240625-WA0122_b0y82x.webp",
  },
  {
    id: 142,
    name: "Rice and sabji center",
    location: {
      type: "Point",
      coordinates: [88.347946, 22.575118],
    },
    foodItems: [
      "Aloo Pakoda",
      "Pyaz Pakoda",
      "Palak Pakoda",
      "Paneer Pakoda",
      "jalebi",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966422/IMG-20240625-WA0124_makjko.webp",
  },
  {
    id: 143,
    name: "garam bhatura",
    location: {
      type: "Point",
      coordinates: [88.347653, 22.575235],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966480/IMG-20240625-WA0126_wyeq4z.webp",
  },
  {
    id: 144,
    name: "momo & rice corner fast food",
    location: {
      type: "Point",
      coordinates: [88.347077, 22.575531],
    },
    foodItems: [
      "steam veg momo",
      "fry veg momo",
      "lalipop",
      "veg fried rice",
      "chicken fried rice",
      "egg fried rice",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966487/IMG-20240625-WA0130_eldsnq.webp",
  },
  {
    id: 145,
    name: "Kullad tea and biscuit",
    location: {
      type: "Point",
      coordinates: [88.346819, 22.575424],
    },
    foodItems: [
      "Masala Chai",
      "Ginger Tea",
      "Lemon Tea",
      "Green Tea",
      "Black Tea",
      "Elaichi Tea",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966511/IMG-20240625-WA0131_nogqd2.webp",
  },
  {
    id: 146,
    name: "guddu chana and muri",
    location: {
      type: "Point",
      coordinates: [88.346936, 22.575538],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966521/IMG-20240625-WA0132_uvefgg.webp",
  },
  {
    id: 148,
    name: "Sandesh Sweets",
    location: {
      type: "Point",
      coordinates: [88.346525, 22.574979],
    },
    foodItems: ["Rasgulla", "Sandesh", "Mishti Doi", "Cham Cham"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966565/IMG-20240625-WA0135_gkgjwl.webp",
  },
  {
    id: 149,
    name: "curry corner",
    location: {
      type: "Point",
      coordinates: [88.344677, 22.572175],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966592/IMG-20240625-WA0139_nu8rza.webp",
  },
  {
    id: 150,
    name: "bhurji cornre",
    location: {
      type: "Point",
      coordinates: [88.346081, 22.571486],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966610/IMG-20240625-WA0140_yhqrfi.webp",
  },
  {
    id: 151,
    name: "sahin sandwich corner",
    location: {
      type: "Point",
      coordinates: [88.346756, 22.57128],
    },
    foodItems: [
      "Veg Sandwich",
      "Paneer Sandwich",
      "Grilled Cheese Sandwich",
      "Club Sandwich",
      "Egg Sandwich",
      "Chicken Sandwich",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966620/IMG-20240625-WA0142_krve9m.webp",
  },
  {
    id: 152,
    name: "Shahi biryani",
    location: {
      type: "Point",
      coordinates: [88.347204, 22.571233],
    },
    foodItems: [
      "veh biryani",
      "full biryani",
      "chicken biryani",
      "half biryani",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966647/IMG-20240625-WA0145_m3ysgh.webp",
  },
  {
    id: 153,
    name: "egg and biscuit",
    location: {
      type: "Point",
      coordinates: [88.347062, 22.571254],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop", "Biscuit"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966658/IMG-20240625-WA0147_bnbkgp.webp",
  },
  {
    id: 154,
    name: "sandish pakoda",
    location: {
      type: "Point",
      coordinates: [88.347338, 22.571183],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966693/IMG-20240625-WA0148_qqprhb.webp",
  },
  {
    id: 155,
    name: "egg curry point",
    location: {
      type: "Point",
      coordinates: [88.345941, 22.569365],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop", "Biscuit"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966772/IMG-20240625-WA0149_repfmq.webp",
  },
  {
    id: 156,
    name: "curry and bhuri point",
    location: {
      type: "Point",
      coordinates: [88.34583, 22.569229],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop", "Biscuit"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966782/IMG-20240625-WA0153_p4ljnx.webp",
  },
  {
    id: 157,
    name: "chana muri corner",
    location: {
      type: "Point",
      coordinates: [88.344887, 22.569671],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966803/IMG-20240625-WA0155_ktrxnd.webp",
  },
  {
    id: 158,
    name: "steam momos",
    location: {
      type: "Point",
      coordinates: [88.345544, 22.569874],
    },
    foodItems: ["Veg Momos", "Chicken Momos", "Paneer Momos", "Tandoori Momos"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966813/IMG-20240625-WA0156_y7ncc8.webp",
  },
  {
    id: 159,
    name: "sDesi Litti Chokha",
    location: {
      type: "Point",
      coordinates: [88.344887, 22.569671],
    },
    foodItems: [
      "Classic Litti Chokha",
      "Spicy Litti Chokha",
      "Stuffed Litti Chokha",
      "Paneer Litti Chokha",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966842/IMG-20240625-WA0159_mhztfm.webp",
  },
  {
    id: 160,
    name: "jhalmuri corner",
    location: {
      type: "Point",
      coordinates: [88.344711, 22.570141],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966855/IMG-20240625-WA0160_pjl0iw.webp",
  },
  {
    id: 161,
    name: "bhautra corner",
    location: {
      type: "Point",
      coordinates: [88.34484, 22.570386],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966861/IMG-20240625-WA0161_mk7qnp.webp",
  },
  {
    id: 162,
    name: "samosa and kachori center",
    location: {
      type: "Point",
      coordinates: [88.344696, 22.570148],
    },
    foodItems: ["samosa", "kachori", "ladoo"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966917/IMG-20240625-WA0164_arazdp.webp",
  },
  {
    id: 163,
    name: "aloo pakoda corner",
    location: {
      type: "Point",
      coordinates: [88.344826, 22.570257],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966926/IMG-20240625-WA0166_p6pt17.webp",
  },
  {
    id: 164,
    name: "egg chop",
    location: {
      type: "Point",
      coordinates: [88.345024, 22.570631],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966939/IMG-20240625-WA0168_seop4z.webp",
  },
  {
    id: 165,
    name: "garam pakoda",
    location: {
      type: "Point",
      coordinates: [88.345004, 22.570662],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966972/IMG-20240625-WA0169_wdxsyh.webp",
  },
  {
    id: 166,
    name: "chana corner",
    location: {
      type: "Point",
      coordinates: [88.345095, 22.570698],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729966980/IMG-20240625-WA0173_dxkadj.webp",
  },
  {
    id: 167,
    name: "Rahat Fast Food",
    location: {
      type: "Point",
      coordinates: [88.345057, 22.570712],
    },
    foodItems: ["Rice", "Pasta", "Fry items", "spring roll"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967135/IMG-20240625-WA0174_dtbfkr.webp",
  },
  {
    id: 168,
    name: "kolkata biryani",
    location: {
      type: "Point",
      coordinates: [88.345952, 22.571564],
    },
    foodItems: [
      "Chicken Biryani",
      "Mutton Biryani",
      "Veg Biryani",
      "Egg Biryani",
      "Paneer Biryani",
      "Hyderabadi Biryani",
      "Kolkata Biryani",
      "Lucknowi Biryani",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967145/IMG-20240625-WA0176_clshke.webp",
  },
  {
    id: 169,
    name: "rasedar curry",
    location: {
      type: "Point",
      coordinates: [88.346775, 22.572094],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967178/IMG-20240625-WA0178_tfptvf.webp",
  },
  {
    id: 170,
    name: "Kolkata Biryani Point",
    location: {
      type: "Point",
      coordinates: [88.347136, 22.572672],
    },
    foodItems: [
      "Chicken Biryani",
      "Mutton Biryani",
      "Veg Biryani",
      "Egg Biryani",
      "Paneer Biryani",
      "Hyderabadi Biryani",
      "Kolkata Biryani",
      "Lucknowi Biryani",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967184/IMG-20240625-WA0180_pr7ovf.webp",
  },
  {
    id: 171,
    name: "ramesh egg corner",
    location: {
      type: "Point",
      coordinates: [88.346915, 22.573053],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967202/IMG-20240625-WA0183_zg0yok.webp",
  },
  {
    id: 172,
    name: "kolkata chai center",
    location: {
      type: "Point",
      coordinates: [88.346792, 22.572118],
    },
    foodItems: [
      "Masala Chai",
      "Ginger Tea",
      "Lemon Tea",
      "Green Tea",
      "Black Tea",
      "Elaichi Tea",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967223/IMG-20240625-WA0186_wf2juu.webp",
  },
  {
    id: 173,
    name: "rasedar biryani",
    location: {
      type: "Point",
      coordinates: [88.346503, 22.573116],
    },
    foodItems: [
      "Chicken Biryani",
      "Mutton Biryani",
      "Veg Biryani",
      "Egg Biryani",
      "Paneer Biryani",
      "Hyderabadi Biryani",
      "Kolkata Biryani",
      "Lucknowi Biryani",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967231/IMG-20240625-WA0187_igfyoz.webp",
  },
  {
    id: 174,
    name: "Garma Garam Kachori",
    location: {
      type: "Point",
      coordinates: [88.346144, 22.573452],
    },
    foodItems: [
      "Pyaz Kachori",
      "Dal Kachori",
      "Matar Kachori",
      "Rajma Kachori",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967259/IMG-20240625-WA0188_eydnbs.webp",
  },

  {
    id: 175,
    name: "Egg roll center",
    location: {
      type: "Point",
      coordinates: [88.351514, 22.569994],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967277/IMG-20240625-WA0195_lvf8fm.webp",
  },
  {
    id: 176,
    name: "chola bhatura corner",
    location: {
      type: "Point",
      coordinates: [88.351102, 22.569923],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967285/IMG-20240625-WA0196_itaywy.webp",
  },
  {
    id: 177,
    name: "chat corner",
    location: {
      type: "Point",
      coordinates: [88.35172, 22.570008],
    },
    foodItems: [
      "Pani Puri",
      "Sev Puri",
      "Bhel Puri",
      "Dahi Puri",
      "Chaat Papdi",
      "Aloo Tikki Chaat",
      "Ragda Pattice",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967310/IMG-20240625-WA0199_ipy5t4.webp",
  },
  {
    id: 178,
    name: "dosa point",
    location: {
      type: "Point",
      coordinates: [88.352405, 22.569591],
    },
    foodItems: [
      "Masala Dosa",
      "Plain Dosa",
      "Rava Dosa",
      "Paneer Dosa",
      "Mysore Dosa",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967318/IMG-20240625-WA0201_oodgfc.webp",
  },
  {
    id: 179,
    name: "Maggie center",
    location: {
      type: "Point",
      coordinates: [88.351498, 22.569863],
    },
    foodItems: ["maggie", "Veg Maggi", "Cheese Maggi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967337/IMG-20240625-WA0202_cypr3s.webp",
  },
  {
    id: 180,
    name: "puchka and chat center",
    location: {
      type: "Point",
      coordinates: [88.352888, 22.5689],
    },
    foodItems: [
      "Pani Puri",
      "Sev Puri",
      "Bhel Puri",
      "Dahi Puri",
      "Chaat Papdi",
      "Aloo Tikki Chaat",
      "Ragda Pattice",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967345/IMG-20240625-WA0204_fnkeso.webp",
  },
  {
    id: 181,
    name: "Ravikant south indian food",
    location: {
      type: "Point",
      coordinates: [88.351471, 22.569903],
    },
    foodItems: [
      "idli vada",
      "idli",
      "aloo vanda",
      "plain dosa",
      "cheese dosa",
      "schezwan msaladosa",
      "uttapam",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967368/IMG-20240625-WA0208_lbngjv.webp",
  },
  {
    id: 182,
    name: "Spicy Biryani Corner",
    location: {
      type: "Point",
      coordinates: [88.352545, 22.569593],
    },
    foodItems: [
      "Chicken Biryani",
      "Mutton Biryani",
      "Veg Biryani",
      "Egg Biryani",
      "Paneer Biryani",
      "Hyderabadi Biryani",
      "Kolkata Biryani",
      "Lucknowi Biryani",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967389/IMG-20240625-WA0210_xq4nfv.webp",
  },
  {
    id: 183,
    name: "tasty bhatura",
    location: {
      type: "Point",
      coordinates: [88.352764, 22.56958],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967396/IMG-20240625-WA0211_rfjahr.webp",
  },
  {
    id: 184,
    name: "Royal Biryani Stall",
    location: {
      type: "Point",
      coordinates: [88.352501, 22.568099],
    },
    foodItems: [
      "Chicken Biryani",
      "Mutton Biryani",
      "Veg Biryani",
      "Egg Biryani",
      "Paneer Biryani",
      "Hyderabadi Biryani",
      "Kolkata Biryani",
      "Lucknowi Biryani",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967426/IMG-20240625-WA0212_jv88r2.webp",
  },
  {
    id: 185,
    name: "Classic Toasted Sandwich",
    location: {
      type: "Point",
      coordinates: [88.352068, 22.566872],
    },
    foodItems: [
      "Veg Sandwich",
      "Paneer Sandwich",
      "Grilled Cheese Sandwich",
      "Club Sandwich",
      "Egg Sandwich",
      "Chicken Sandwich",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967435/IMG-20240625-WA0213_aoxtwo.webp",
  },
  {
    id: 186,
    name: "authentic egg center",
    location: {
      type: "Point",
      coordinates: [88.352838, 22.568789],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967442/IMG-20240625-WA0217_d84ano.webp",
  },
  {
    id: 187,
    name: "shri fast food corner",
    location: {
      type: "Point",
      coordinates: [88.352761, 22.567517],
    },
    foodItems: ["momos", "french fries", "pasta", "sandwich"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967468/IMG-20240625-WA0219_es9wgz.webp",
  },
  {
    id: 188,
    name: "curry point",
    location: {
      type: "Point",
      coordinates: [88.352634, 22.56807],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967479/IMG-20240625-WA0222_p9kxnn.webp",
  },
  {
    id: 189,
    name: "rasbhari puchka",
    location: {
      type: "Point",
      coordinates: [88.35251, 22.56786],
    },
    foodItems: [
      "Special Puchka",
      "Normal Puchka",
      "special Alurdam",
      "Alurdam Puchka",
      "sweet Puchka",
      "alurdam churmur",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967499/IMG-20240625-WA0223_eaw9qx.webp",
  },
  {
    id: 190,
    name: "Crispy Dosa Corner",
    location: {
      type: "Point",
      coordinates: [88.351964, 22.566701],
    },
    foodItems: [
      "Masala Dosa",
      "Plain Dosa",
      "Rava Dosa",
      "Paneer Dosa",
      "Mysore Dosa",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967514/IMG-20240625-WA0225_q7dmsc.webp",
  },
  {
    id: 191,
    name: "cr-7 puchka",
    location: {
      type: "Point",
      coordinates: [88.353056, 22.568917],
    },
    foodItems: [
      "Special Puchka",
      "Normal Puchka",
      "special Alurdam",
      "Alurdam Puchka",
      "sweet Puchka",
      "alurdam churmur",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967524/IMG-20240625-WA0226_stmk3z.webp",
  },
  {
    id: 192,
    name: "shri ram chat wala",
    location: {
      type: "Point",
      coordinates: [88.352598, 22.567709],
    },
    foodItems: [
      "Pani Puri",
      "Sev Puri",
      "Bhel Puri",
      "Dahi Puri",
      "Chaat Papdi",
      "Aloo Tikki Chaat",
      "Ragda Pattice",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967543/IMG-20240625-WA0227_sht9ky.webp",
  },
  {
    id: 193,
    name: "Fast food center indian & chinese",
    location: {
      type: "Point",
      coordinates: [88.3519, 22.566481],
    },
    foodItems: ["Roll", "Chowmein", "egg curry", "pasta"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967553/IMG-20240625-WA0230_x35hao.webp",
  },
  {
    id: 194,
    name: "tea stall",
    location: {
      type: "Point",
      coordinates: [88.352869, 22.568255],
    },
    foodItems: ["puri", "sabji", "dahi", "lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967565/IMG-20240625-WA0231_dhtw5q.webp",
  },
  {
    id: 195,
    name: "Kachori stall",
    location: {
      type: "Point",
      coordinates: [88.35192, 22.566456],
    },
    foodItems: ["Khasta Kachori", "masala kachori", "Hing Kachori"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967599/IMG-20240625-WA0233_ukxdtk.webp",
  },

  {
    id: 196,
    name: "riddhi puchka",
    location: {
      type: "Point",
      coordinates: [88.352135, 22.543573],
    },
    foodItems: [
      "Special Puchka",
      "Normal Puchka",
      "special Alurdam",
      "Alurdam Puchka",
      "sweet Puchka",
      "alurdam churmur",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967610/IMG-20240626-WA0009_jusdbf.webp",
  },
  {
    id: 197,
    name: "sai biscuits and Cookies",
    location: {
      type: "Point",
      coordinates: [88.35194, 22.543289],
    },
    foodItems: ["Biscuit", "Cookies", "Toast", "Bread", "brown bread"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967638/IMG-20240626-WA0010_xdu8bs.webp",
  },
  {
    id: 198,
    name: "sai chana",
    location: {
      type: "Point",
      coordinates: [88.352071, 22.543517],
    },
    foodItems: [
      "Roasted Gram (Chana)",
      "Puffed Rice (Murmura)",
      "Flattened Rice (Poha)",
      "Sev",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967678/IMG-20240626-WA0018_axbp1h.webp",
  },
  {
    id: 199,
    name: "Sharma food corner",
    location: {
      type: "Point",
      coordinates: [88.351995, 22.543287],
    },
    foodItems: [
      "Veg machurian",
      "alu dum",
      "paneer chat",
      "palak paneer",
      "chilli paneer",
      "tadka",
      "rajma",
      "dhoka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967687/IMG-20240626-WA0019_qlztdf.webp",
  },
  {
    id: 200,
    name: "Chirag Stall",
    location: {
      type: "Point",
      coordinates: [88.35197, 22.54329],
    },
    foodItems: [
      "Veg machurian",
      "alu dum",
      "paneer chat",
      "palak paneer",
      "chilli paneer",
      "tadka",
      "rajma",
      "dhoka",
    ],

    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967769/IMG-20240626-WA0020_cwet9p.webp",
  },
  {
    id: 201,
    name: "Sharman cold drink and beverage",
    location: {
      type: "Point",
      coordinates: [88.351931, 22.54326],
    },
    foodItems: ["Shikanji", "Masala Cola", "Lemon Soda", "Mango Lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967781/IMG-20240626-WA0022_aeobei.webp",
  },
  {
    id: 202,
    name: "Rasoi Bhatura",
    location: {
      type: "Point",
      coordinates: [88.352005, 22.543463],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967814/IMG-20240626-WA0023_drnwfu.webp",
  },
  {
    id: 203,
    name: "Swadisht Chole Bhature",
    location: {
      type: "Point",
      coordinates: [88.351926, 22.543293],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967821/IMG-20240626-WA0024_vaoect.webp",
  },
  {
    id: 204,
    name: "Rasoi Bhatura",
    location: {
      type: "Point",
      coordinates: [88.351966, 22.543242],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967846/IMG-20240626-WA0025_ugcsdu.webp",
  },
  {
    id: 205,
    name: "Tasty Chowmein",
    location: {
      type: "Point",
      coordinates: [88.351906, 22.543216],
    },
    foodItems: [
      "Chowmein",
      "Hakka Noodles",
      "Schezwan Noodles",
      "Garlic Noodles",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967853/IMG-20240626-WA0027_uxbltm.webp",
  },
  {
    id: 206,
    name: "Chole Bhature Darbar",
    location: {
      type: "Point",
      coordinates: [88.351908, 22.543214],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967907/IMG-20240626-WA0031_upfvwr.webp",
  },
  {
    id: 207,
    name: "Mithaas Fruits",
    location: {
      type: "Point",
      coordinates: [88.351988, 22.543174],
    },
    foodItems: ["Mango", "Banana", "Papaya", "Watermelon"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967917/IMG-20240626-WA0036_rp59ns.webp",
  },
  {
    id: 211,
    name: "Spicy Schezwan",
    location: {
      type: "Point",
      coordinates: [88.351968, 22.54316],
    },
    foodItems: [
      "Chowmein",
      "Hakka Noodles",
      "Schezwan Noodles",
      "Garlic Noodles",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967926/IMG-20240626-WA0039_kdbofg.webp",
  },
  {
    id: 212,
    name: "Masaledar Muri",
    location: {
      type: "Point",
      coordinates: [88.351901, 22.543145],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967972/IMG-20240626-WA0040_eynbte.webp",
  },
  {
    id: 213,
    name: "Anda Adda",
    location: {
      type: "Point",
      coordinates: [88.351949, 22.543103],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729967979/IMG-20240626-WA0044_xm6luh.webp",
  },
  {
    id: 215,
    name: "food plaza ratan",
    location: {
      type: "Point",
      coordinates: [88.351915, 22.543055],
    },
    foodItems: [
      "Veg Sandwich",
      "Egg Sandwich",
      "chicken Sandwich",
      "grill veg sandwich",
      "Cheese Sandiwich",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968018/IMG-20240626-WA0046_kx3o1u.webp",
  },
  {
    id: 216,
    name: "grill sandwich",
    location: {
      type: "Point",
      coordinates: [88.351892, 22.543059],
    },
    foodItems: [
      "Veg Sandwich",
      "Egg Sandwich",
      "chicken Sandwich",
      "grill veg sandwich",
      "Cheese Sandiwich",
    ],

    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968028/IMG-20240626-WA0048_qq6una.webp",
  },
  {
    id: 217,
    name: "Mishti Mukh",
    location: {
      type: "Point",
      coordinates: [88.356925, 22.518135],
    },
    foodItems: ["Rasgulla", "Sandesh", "Mishti Doi", "Cham Cham"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968067/IMG-20240626-WA0049_hkayfe.webp",
  },
  {
    id: 220,
    name: "Swadisht Puchka",
    location: {
      type: "Point",
      coordinates: [88.351887, 22.543106],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968079/IMG-20240626-WA0091_lfssuw.webp",
  },
  {
    id: 221,
    name: "Masaledar Golgappa",
    location: {
      type: "Point",
      coordinates: [88.355926, 22.52929],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968109/IMG-20240626-WA0095_nqsiyj.webp",
  },
  {
    id: 222,
    name: "Anokha Pani Puri",
    location: {
      type: "Point",
      coordinates: [88.392955, 22.515145],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968120/IMG-20240626-WA0097_wjacdv.webp",
  },
  {
    id: 223,
    name: "Chatpata Puchka",
    location: {
      type: "Point",
      coordinates: [88.367111, 22.517724],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968150/IMG-20240626-WA0098_cnmapq.webp",
  },
  {
    id: 224,
    name: "Golmaal Golgappa",
    location: {
      type: "Point",
      coordinates: [88.358964, 22.518532],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968157/IMG-20240626-WA0099_m2tg2c.webp",
  },
  {
    id: 225,
    name: "Spicy Delight Puchka",
    location: {
      type: "Point",
      coordinates: [88.368061, 22.520822],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968214/IMG-20240626-WA0101_zqste2.webp",
  },
  {
    id: 226,
    name: "Rasila Pani Puri",
    location: {
      type: "Point",
      coordinates: [88.392948, 22.516121],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968225/IMG-20240626-WA0102_ybp7dj.webp",
  },
  {
    id: 227,
    name: "Chatpata Jhalmuri",
    location: {
      type: "Point",
      coordinates: [88.358859, 22.518635],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968287/IMG-20240626-WA0105_lqii7i.webp",
  },
  {
    id: 228,
    name: "Tangy Treat Puchka",
    location: {
      type: "Point",
      coordinates: [88.38831, 22.516658],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968296/IMG-20240626-WA0106_ucbpdh.webp",
  },
  {
    id: 229,
    name: "Royal Puchka",
    location: {
      type: "Point",
      coordinates: [88.383729, 22.50241],
    },
    foodItems: ["Aloo Puchka", "Dahi Puchka", "Masala Puchka", "Sukha Puchka"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968324/IMG-20240626-WA0109_aqfog4.webp",
  },
  {
    id: 230,
    name: "syan snacks",
    location: {
      type: "Point",
      coordinates: [88.366756, 22.516487],
    },
    foodItems: ["Egg Roll", "Chicken Roll", "veg rice", "pasta", "chow"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968331/IMG-20240626-WA0110_wkwhlo.webp",
  },
  {
    id: 231,
    name: "Crunchy Pakoda Point",
    location: {
      type: "Point",
      coordinates: [88.378388, 22.519293],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968338/IMG-20240626-WA0111_nyhcwf.webp",
  },
  {
    id: 232,
    name: "Kancha Muri",
    location: {
      type: "Point",
      coordinates: [88.367362, 22.520258],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968370/IMG-20240626-WA0112_rdadk3.webp",
  },

  {
    id: 234,
    name: "Desi Puchka",
    location: {
      type: "Point",
      coordinates: [88.380445, 22.519242],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968377/IMG-20240626-WA0115_lcjagw.webp",
  },
  {
    id: 236,
    name: "sankar chat bhandar",
    location: {
      type: "Point",
      coordinates: [88.380509, 22.519256],
    },
    foodItems: [
      "Alum Dum",
      "Churmur",
      "Alu Chat",
      "Dahi bada",
      "Ragra Chat",
      "Alu Dum Masala",
      "Puchka",
      "Puchka Masala",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968398/IMG-20240626-WA0118_doz6lg.webp",
  },
  {
    id: 237,
    name: "Spicy Chaat Junction",
    location: {
      type: "Point",
      coordinates: [88.392829, 22.514565],
    },
    foodItems: ["Alum Dum", "Churmur", "Alu Chat", "Dahi bada", "Ragra Chat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968407/IMG-20240626-WA0121_ucuqko.webp",
  },
  {
    id: 238,
    name: "Kolkata King Puchka",
    location: {
      type: "Point",
      coordinates: [88.393279, 22.51767],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968432/IMG-20240626-WA0122_w1c6qs.webp",
  },
  {
    id: 239,
    name: "Bengal Bites Puchka",
    location: {
      type: "Point",
      coordinates: [88.367233, 22.513138],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968445/IMG-20240626-WA0126_hysefc.webp",
  },
  {
    id: 240,
    name: "Shital Shikanji",
    location: {
      type: "Point",
      coordinates: [88.39301, 22.516004],
    },
    foodItems: ["Shikanji", "Masala Cola", "Lemon Soda", "Mango Lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968471/IMG-20240626-WA0129_fzlyrk.webp",
  },
  {
    id: 241,
    name: "Puchka Plaza",
    location: {
      type: "Point",
      coordinates: [88.3365693, 22.518478],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968482/IMG-20240626-WA0131_o1tau2.webp",
  },
  {
    id: 242,
    name: "Flavors of Puchka",
    location: {
      type: "Point",
      coordinates: [88.361308, 22.502018],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968513/IMG-20240626-WA0133_cxwwkm.webp",
  },
  {
    id: 243,
    name: "Momos Express",
    location: {
      type: "Point",
      coordinates: [88.361006, 22.501965],
    },
    foodItems: ["Veg Momos", "Chicken Momos", "Paneer Momos", "Tandoori Momos"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968532/IMG-20240626-WA0135_wwexqn.webp",
  },
  {
    id: 244,
    name: "Puchka Palace",
    location: {
      type: "Point",
      coordinates: [88.360957, 22.501981],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968561/IMG-20240626-WA0137_vafwsf.webp",
  },
  {
    id: 245,
    name: "Crunchy Delight Puchka",
    location: {
      type: "Point",
      coordinates: [88.361342, 22.502049],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968568/IMG-20240626-WA0138_z0actp.webp",
  },
  {
    id: 246,
    name: "Cookie Corner",
    location: {
      type: "Point",
      coordinates: [88.360915, 22.50203],
    },
    foodItems: [
      "Butter Biscuit",
      "Coconut Biscuit",
      "Chocolate Chip Cookie",
      "Oatmeal Cookie",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968627/IMG-20240626-WA0139_bbhzvv.webp",
  },
  {
    id: 247,
    name: "Chatkara Puchka",
    location: {
      type: "Point",
      coordinates: [88.367577, 22.511081],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968635/IMG-20240626-WA0140_ovf3vp.webp",
  },
  {
    id: 248,
    name: "Nimbu Masala Muri",
    location: {
      type: "Point",
      coordinates: [88.360766, 22.502051],
    },
    foodItems: [
      "Roasted Gram (Chana)",
      "Puffed Rice (Murmura)",
      "Flattened Rice (Poha)",
      "Sev",
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968665/IMG-20240626-WA0141_lnl4jb.webp",
  },
  {
    id: 251,
    name: "Srestha Fast Food Corner",
    location: {
      type: "Point",
      coordinates: [88.36532, 22.510998],
    },
    foodItems: ["Chowmein", "Maggi", "pasta", "Roll"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968675/IMG-20240626-WA0144_hjhjdw.webp",
  },
  {
    id: 252,
    name: "Joydeb Tea Stall",
    location: {
      type: "Point",
      coordinates: [88.365368, 22.5510973],
    },
    foodItems: [
      "Masala Chai",
      "Ginger Tea",
      "Lemon Tea",
      "Green Tea",
      "Black Tea",
      "Elaichi Tea",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729968703/IMG-20240626-WA0147_m5fn1d.webp",
  },
  {
    id: 253,
    name: "Chatpata Puchka",
    location: {
      type: "Point",
      coordinates: [88.364835, 22.502642],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969116/IMG-20240626-WA0150_jyfxth.webp",
  },
  {
    id: 254,
    name: "Flavorsome Puchka",
    location: {
      type: "Point",
      coordinates: [88.361262, 22.502063],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969128/IMG-20240626-WA0151_ypeb5q.webp",
  },
  {
    id: 255,
    name: "Khatta Meetha Puchka",
    location: {
      type: "Point",
      coordinates: [88.367557, 22.511292],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969141/IMG-20240626-WA0152_iknxzk.webp",
  },
  {
    id: 256,
    name: "Rajasthani Puchka",
    location: {
      type: "Point",
      coordinates: [88.361189, 22.501967],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969185/IMG-20240626-WA0153_p5elxl.webp",
  },
  {
    id: 257,
    name: "Thanda Swad",
    location: {
      type: "Point",
      coordinates: [88.36114, 22.502008],
    },
    foodItems: ["Shikanji", "Masala Cola", "Lemon Soda", "Mango Lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969192/IMG-20240626-WA0155_pidalw.webp",
  },
  {
    id: 258,
    name: "Authentic Puchka Corner",
    location: {
      type: "Point",
      coordinates: [88.362405, 22.502027],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],

    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969236/IMG-20240626-WA0156_bckrao.webp",
  },
  {
    id: 259,
    name: "Traditional Puchka Stop",
    location: {
      type: "Point",
      coordinates: [88.367618, 22.511081],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],

    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969244/IMG-20240626-WA0158_l2dr3w.webp",
  },
  {
    id: 260,
    name: "Puchka Fusion",
    location: {
      type: "Point",
      coordinates: [88.356925, 22.518135],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969271/IMG-20240626-WA0159_mzuk4q.webp",
  },
  {
    id: 261,
    name: "satish chat bhandar",
    location: {
      type: "Point",
      coordinates: [88.361297, 22.501969],
    },
    foodItems: [
      "Pani Puri",
      "Sev Puri",
      "Bhel Puri",
      "Dahi Puri",
      "Chaat Papdi",
      "Aloo Tikki Chaat",
      "Ragda Pattice",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969287/IMG-20240626-WA0164_vjkndx.webp",
  },
  {
    id: 262,
    name: "Classic batata",
    location: {
      type: "Point",
      coordinates: [88.356925, 22.518135],
    },
    foodItems: [
      "Roasted Gram (Chana)",
      "Puffed Rice (Murmura)",
      "Flattened Rice (Poha)",
      "Sev",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969315/IMG-20240626-WA0166_b8ozuu.webp",
  },
  {
    id: 263,
    name: "Sada Pan Corner",
    location: {
      type: "Point",
      coordinates: [88.356925, 22.518135],
    },
    foodItems: [
      "Meetha Pan Masala",
      "Sada Pan Masala",
      "Banarasi Pan Masala",
      "Mint Pan Masala",
      "Rose Pan Masala",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969327/IMG-20240626-WA0167_blrxba.webp",
  },
  {
    id: 264,
    name: "Swadisht Chole Bhature",
    location: {
      type: "Point",
      coordinates: [88.367169, 22.508563],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969335/IMG-20240626-WA0169_fka9vm.webp",
  },
  {
    id: 266,
    name: "ok shyamal da",
    location: {
      type: "Point",
      coordinates: [88.365241, 22.511036],
    },
    foodItems: [
      "sandwich",
      "Shapaley",
      "kebab",
      "chilli pork",
      "spring roll",
      "momo",
      "noodles",
      "chicken biryani",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969367/IMG-20240626-WA0173_mkcfdf.webp",
  },
  {
    id: 267,
    name: "Dilli Wala Puchka",
    location: {
      type: "Point",
      coordinates: [88.365053, 22.511105],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969394/IMG-20240626-WA0174_k9am0a.webp",
  },
  {
    id: 268,
    name: "Bhel Puri stall",
    location: {
      type: "Point",
      coordinates: [88.367133, 22.508602],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969407/IMG-20240626-WA0176_sv6g4w.webp",
  },
  {
    id: 269,
    name: "Eggcellent Bites",
    location: {
      type: "Point",
      coordinates: [88.367568, 22.508665],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969436/IMG-20240626-WA0178_gudx1u.webp",
  },
  {
    id: 270,
    name: "ahil momo center",
    location: {
      type: "Point",
      coordinates: [88.369326, 22.500008],
    },
    foodItems: ["Veg Momos", "Chicken Momos", "Paneer Momos", "Tandoori Momos"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969449/IMG-20240626-WA0181_hjdnzn.webp",
  },
  {
    id: 271,
    name: "tara fast food corner",
    location: {
      type: "Point",
      coordinates: [88.37588, 22.5479863],
    },
    foodItems: ["puri", "sabji", "dahi", "lassi"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969463/IMG-20240626-WA0183_yb1hia.webp",
  },
  {
    id: 272,
    name: "nonveg corner",
    location: {
      type: "Point",
      coordinates: [88.357797, 22.502139],
    },
    foodItems: ["chicken", "mutton", "egg"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969495/IMG-20240626-WA0186_bebn6f.webp",
  },
  {
    id: 273,
    name: "Junk yard",
    location: {
      type: "Point",
      coordinates: [88.370088, 22.498271],
    },
    foodItems: [
      "Devil's egg",
      "Chicken breast cutlet",
      "fish fry",
      "fish ball",
      "fish chips",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969515/IMG-20240626-WA0187_biclud.webp",
  },
  {
    id: 274,
    name: "dohi alurdum",
    location: {
      type: "Point",
      coordinates: [88.37057, 22.496594],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969526/IMG-20240626-WA0188_ldzq5q.webp",
  },
  {
    id: 275,
    name: "Puchka Junction",
    location: {
      type: "Point",
      coordinates: [88.365771, 22.485632],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969590/IMG-20240626-WA0190_ewcxvf.webp",
  },
  {
    id: 276,
    name: "Tea Treats",
    location: {
      type: "Point",
      coordinates: [88.370521, 22.496625],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969598/IMG-20240626-WA0192_zrh2xb.webp",
  },
  {
    id: 277,
    name: "Spicy Momo Hut",
    location: {
      type: "Point",
      coordinates: [88.375841, 22.479825],
    },
    foodItems: ["Veg Momos", "Chicken Momos", "Paneer Momos", "Tandoori Momos"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969607/IMG-20240626-WA0193_pzhyav.webp",
  },
  {
    id: 278,
    name: "Banarasi Pan Stall",
    location: {
      type: "Point",
      coordinates: [88.367714, 22.50907],
    },
    foodItems: [
      "Marie Biscuit",
      "Parle-G",
      "Digestive Biscuit",
      "Good Day Biscuit",
      "Meetha Pan Masala",
      "Sada Pan Masala",
      "Banarasi Pan Masala",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969644/IMG-20240626-WA0197_xgxtkv.webp",
  },
  {
    id: 279,
    name: "bhel murmura",
    location: {
      type: "Point",
      coordinates: [88.367991, 22.485337],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969655/IMG-20240626-WA0198_qzhbdg.webp",
  },
  {
    id: 280,
    name: "Banarasi puchka",
    location: {
      type: "Point",
      coordinates: [88.36965, 22.499385],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969666/IMG-20240626-WA0199_e0pucc.webp",
  },
  {
    id: 282,
    name: "chatpata murmura",
    location: {
      type: "Point",
      coordinates: [88.370997, 22.495535],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969701/IMG-20240626-WA0201_tcnuqn.webp",
  },
  {
    id: 283,
    name: "churmur plaza",
    location: {
      type: "Point",
      coordinates: [88.360795, 22.514109],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969736/IMG-20240626-WA0205_aemkjg.webp",
  },
  {
    id: 284,
    name: "Fish corner",
    location: {
      type: "Point",
      coordinates: [88.370575, 22.496569],
    },
    foodItems: [
      "chicken wings",
      "lote fish cutlet",
      "fish butter",
      "prawn fish",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969747/IMG-20240626-WA0206_ymmeuz.webp",
  },
  {
    id: 285,
    name: "spicy puchka",
    location: {
      type: "Point",
      coordinates: [88.367555, 22.508545],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969783/IMG-20240626-WA0209_m236jr.webp",
  },
  {
    id: 286,
    name: "Chai Adda",
    location: {
      type: "Point",
      coordinates: [88.367123, 22.508616],
    },
    foodItems: [
      "Masala Chai",
      "Ginger Tea",
      "Lemon Tea",
      "Green Tea",
      "Black Tea",
      "Elaichi Tea",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969791/IMG-20240626-WA0210_eeu6id.webp",
  },
  {
    id: 287,
    name: "lucky puchka point",
    location: {
      type: "Point",
      coordinates: [88.369383, 22.499849],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969802/IMG-20240626-WA0213_j6yomt.webp",
  },
  {
    id: 288,
    name: "puchka hub",
    location: {
      type: "Point",
      coordinates: [88.3367587, 22.508732],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969837/IMG-20240626-WA0214_ku07ec.webp",
  },
  {
    id: 289,
    name: "Chatpata Pakoda Stall",
    location: {
      type: "Point",
      coordinates: [88.367115, 22.50855],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969847/IMG-20240626-WA0215_tp8e9z.webp",
  },
  {
    id: 290,
    name: "mangesh chat center",
    location: {
      type: "Point",
      coordinates: [88.373476, 22.484376],
    },
    foodItems: ["Dahi Papri Chat", "papri chat", "batata puri"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969857/IMG-20240626-WA0216_zfxcbl.webp",
  },
  {
    id: 294,
    name: "karan puchka",
    location: {
      type: "Point",
      coordinates: [88.367631, 22.50914],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969888/IMG-20240626-WA0221_vx7e9q.webp",
  },
  {
    id: 295,
    name: "yash puchka",
    location: {
      type: "Point",
      coordinates: [88.36956, 22.499593],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969901/IMG-20240626-WA0222_d277k6.webp",
  },
  {
    id: 297,
    name: "Spicy Pakoda Zone",
    location: {
      type: "Point",
      coordinates: [88.357264, 22.50004],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969911/IMG-20240626-WA0225_alakyv.webp",
  },
  {
    id: 298,
    name: "victoria puchka",
    location: {
      type: "Point",
      coordinates: [88.362322, 22.502041],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969941/IMG-20240626-WA0226_kjuuln.webp",
  },
  {
    id: 299,
    name: "sweets and puri",
    location: {
      type: "Point",
      coordinates: [88.357557, 22.497036],
    },
    foodItems: [
      "Rasgulla",
      "Sandesh",
      "Mishti Doi",
      "Cham Cham",
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969959/IMG-20240626-WA0229_rp6xyw.webp",
  },
  {
    id: 300,
    name: "chatpata bhatura",
    location: {
      type: "Point",
      coordinates: [88.375767, 22.479943],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729969970/IMG-20240626-WA0232_kkof8k.webp",
  },
  {
    id: 301,
    name: "Egg corner",
    location: {
      type: "Point",
      coordinates: [88.369364, 22.499912],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970001/IMG-20240626-WA0233_sxnrf6.webp",
  },
  {
    id: 302,
    name: "Grilled Sandwich Hub",
    location: {
      type: "Point",
      coordinates: [88.369586, 22.499545],
    },
    foodItems: [
      "Veg Sandwich",
      "Paneer Sandwich",
      "Grilled Cheese Sandwich",
      "Club Sandwich",
      "Egg Sandwich",
      "Chicken Sandwich",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970026/IMG-20240626-WA0234_hwwswc.webp",
  },
  {
    id: 303,
    name: "spicy bhatura",
    location: {
      type: "Point",
      coordinates: [88.36946, 22.499754],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970036/IMG-20240626-WA0237_xnmzes.webp",
  },
  {
    id: 304,
    name: "Crunchy Bread Pakoda Point",
    location: {
      type: "Point",
      coordinates: [88.357776, 22.50229],
    },
    foodItems: [
      "Aloo Pakoda",
      "Pyaz Pakoda",
      "Palak Pakoda",
      "Paneer Pakoda",
      "break pakoda",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970106/IMG-20240626-WA0240_ln0oxq.webp",
  },
  {
    id: 305,
    name: "sandwich point",
    location: {
      type: "Point",
      coordinates: [88.370563, 22.496531],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970113/IMG-20240626-WA0243_kg7jvc.webp",
  },
  {
    id: 306,
    name: "Minty Pan Delight",
    location: {
      type: "Point",
      coordinates: [88.367525, 22.508653],
    },
    foodItems: [
      "Meetha Pan Masala",
      "Sada Pan Masala",
      "Banarasi Pan Masala",
      "Mint Pan Masala",
      "Rose Pan Masala",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970125/IMG-20240626-WA0244_dwoysr.webp",
  },
  {
    id: 307,
    name: "famous chat wala",
    location: {
      type: "Point",
      coordinates: [88.357195, 22.499929],
    },
    foodItems: [
      "papri chat",
      "Bhel Puri",
      "batata puri",
      "aloo chat",
      "dahi vada",
      "dahi chaat",
      "masal muri",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970176/IMG-20240626-WA0247_gfkscl.webp",
  },
  {
    id: 308,
    name: "chole Bhature corner",
    location: {
      type: "Point",
      coordinates: [88.369621, 22.499512],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970204/IMG-20240626-WA0249_hdgodw.webp",
  },
  {
    id: 310,
    name: "batata chat stall",
    location: {
      type: "Point",
      coordinates: [88.375896, 22.479781],
    },
    foodItems: [
      "papri chat",
      "Bhel Puri",
      "batata puri",
      "aloo chat",
      "dahi vada",
      "dahi chaat",
      "masal muri",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970218/IMG-20240626-WA0251_gd7rjk.webp",
  },
  {
    id: 311,
    name: "Puchka corner",
    location: {
      type: "Point",
      coordinates: [88.357946, 22.502439],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970252/IMG-20240626-WA0252_gqtpqv.webp",
  },
  {
    id: 312,
    name: "lassi corner",
    location: {
      type: "Point",
      coordinates: [88.370645, 22.496706],
    },
    foodItems: ["lassi", "doi chira", "Water Bottle"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970262/IMG-20240626-WA0256_z1zrr1.webp",
  },
  {
    id: 313,
    name: "puchka bandar",
    location: {
      type: "Point",
      coordinates: [88.357581, 22.496999],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970274/IMG-20240626-WA0259_cbslhk.webp",
  },
  {
    id: 314,
    name: "Cookie Heaven",
    location: {
      type: "Point",
      coordinates: [88.375963, 22.481329],
    },
    foodItems: [
      "Marie Biscuit",
      "Parle-G",
      "Digestive Biscuit",
      "Good Day Biscuit",
      "Chocolate Chip Cookie",
      "Oatmeal Raisin Cookie",
      "Butter Cookie",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970305/IMG-20240626-WA0261_lsgtaf.webp",
  },
  {
    id: 315,
    name: "Garlic chowmein Hub",
    location: {
      type: "Point",
      coordinates: [88.369323, 22.50001],
    },
    foodItems: [
      "Chowmein",
      "Hakka Noodles",
      "Schezwan Noodles",
      "Garlic Noodles",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970314/IMG-20240626-WA0264_vub3hs.webp",
  },

  {
    id: 317,
    name: "rasoi batura puri",
    location: {
      type: "Point",
      coordinates: [88.373012, 22.484689],
    },
    foodItems: [
      "Plain Bhatura",
      "Paneer Bhatura",
      "Aloo Bhatura",
      "Stuffed Bhatura",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970374/IMG-20240626-WA0266_warl9j.webp",
  },
  {
    id: 318,
    name: "Cookie Delight",
    location: {
      type: "Point",
      coordinates: [88.375796, 22.47989],
    },
    foodItems: [
      "Chocolate Chip Cookie",
      "Oatmeal Raisin Cookie",
      "Butter Cookie",
      "Coconut Cookie",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970381/IMG-20240626-WA0267_rrvshr.webp",
  },
  {
    id: 319,
    name: "rupali snacks",
    location: {
      type: "Point",
      coordinates: [88.36233, 22.502088],
    },
    foodItems: [
      "veg roll",
      "egg roll",
      "moglai parota",
      "veg chowmein",
      "egg chowmein",
      "chicken chowmein",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970391/IMG-20240626-WA0268_thyr8f.webp",
  },
  {
    id: 320,
    name: "classic egg",
    location: {
      type: "Point",
      coordinates: [88.351576, 22.538876],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970433/IMG-20240626-WA0270_a9zr0y.webp",
  },
  {
    id: 321,
    name: "classic puchka",
    location: {
      type: "Point",
      coordinates: [88.364999, 22.51954],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970450/IMG-20240626-WA0272_ai0li1.webp",
  },
  {
    id: 323,
    name: "egg center",
    location: {
      type: "Point",
      coordinates: [88.365033, 22.51957],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970502/IMG-20240626-WA0275_pbxoor.webp",
  },
  {
    id: 324,
    name: "muskaan puchka",
    location: {
      type: "Point",
      coordinates: [88.361937, 22.519098],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970512/IMG-20240626-WA0280_jdl2eu.webp",
  },
  {
    id: 325,
    name: "sanjay fastfood center",
    location: {
      type: "Point",
      coordinates: [88.358363, 22.537862],
    },
    foodItems: [
      "Chowmein",
      "Hakka Noodles",
      "Schezwan Noodles",
      "Garlic Noodles",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970526/IMG-20240626-WA0281_fobkoi.webp",
  },
  {
    id: 326,
    name: "pakoda chills",
    location: {
      type: "Point",
      coordinates: [88.352124, 22.539271],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970571/IMG-20240626-WA0282_odlbio.webp",
  },
  {
    id: 327,
    name: "muskaan murmura",
    location: {
      type: "Point",
      coordinates: [88.365546, 22.518317],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970582/IMG-20240626-WA0285_yhoter.webp",
  },
  {
    id: 328,
    name: "murmuram manik",
    location: {
      type: "Point",
      coordinates: [88.360071, 22.518675],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970593/IMG-20240626-WA0287_dlqlr7.webp",
  },
  {
    id: 329,
    name: "tasty noodles",
    location: {
      type: "Point",
      coordinates: [88.365586, 22.518256],
    },
    foodItems: [
      "Chowmein",
      "Hakka Noodles",
      "Schezwan Noodles",
      "Garlic Noodles",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970634/IMG-20240626-WA0288_iap4qq.webp",
  },
  {
    id: 330,
    name: "egg curry center",
    location: {
      type: "Point",
      coordinates: [88.351317, 22.538875],
    },
    foodItems: ["Egg Roll", "Egg Curry", "Egg Bhurji", "Egg Chop"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970663/IMG-20240626-WA0289_dyoa5r.webp",
  },
  {
    id: 331,
    name: "Chatpata Pakoda point",
    location: {
      type: "Point",
      coordinates: [88.355509, 22.518142],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970678/IMG-20240626-WA0291_tt3q6h.webp",
  },
  {
    id: 332,
    name: "Indian food",
    location: {
      type: "Point",
      coordinates: [88.351384, 22.538848],
    },
    foodItems: ["kachori", "roti", "egg curry", "fish fry"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970717/IMG-20240626-WA0294_dsncns.webp",
  },
  {
    id: 333,
    name: "classic pakoda",
    location: {
      type: "Point",
      coordinates: [88.365081, 22.519546],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970728/IMG-20240626-WA0295_dvs7ju.webp",
  },
  {
    id: 334,
    name: "puchka house",
    location: {
      type: "Point",
      coordinates: [88.359996, 22.518661],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970741/IMG-20240626-WA0297_lrjbto.webp",
  },
  {
    id: 335,
    name: "Masaledar Pakoda Hub",
    location: {
      type: "Point",
      coordinates: [88.360128, 22.518644],
    },
    foodItems: ["Aloo Pakoda", "Pyaz Pakoda", "Palak Pakoda", "Paneer Pakoda"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970775/IMG-20240626-WA0299_yobhge.webp",
  },
  {
    id: 336,
    name: "muri wala",
    location: {
      type: "Point",
      coordinates: [88.35827, 22.518533],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970787/IMG-20240626-WA0300_xtkt10.webp",
  },
  {
    id: 337,
    name: "puchka bhog",
    location: {
      type: "Point",
      coordinates: [88.364741, 22.519538],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970829/IMG-20240626-WA0302_iqa13n.webp",
  },
  {
    id: 338,
    name: "masala puchka",
    location: {
      type: "Point",
      coordinates: [88.358358, 22.518546],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970840/IMG-20240626-WA0304_vtjhyw.webp",
  },
  {
    id: 339,
    name: "thekha puchka",
    location: {
      type: "Point",
      coordinates: [88.361163, 22.518936],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970853/IMG-20240626-WA0305_w6z3ie.webp",
  },
  {
    id: 340,
    name: "chowmein corner",
    location: {
      type: "Point",
      coordinates: [88.358317, 22.518534],
    },
    foodItems: [
      "veg chowmein",
      "egg chowmein",
      "chicken chowmein",
      "egg chicken chowein",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970891/IMG-20240626-WA0308_ojveza.webp",
  },
  {
    id: 341,
    name: "masala puri",
    location: {
      type: "Point",
      coordinates: [88.359658, 22.518655],
    },
    foodItems: ["Bhel Puri", "batata puri", "Sev Puri"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970901/IMG-20240626-WA0309_dewpbi.webp",
  },
  {
    id: 342,
    name: "south indian food",
    location: {
      type: "Point",
      coordinates: [88.354273, 22.517728],
    },
    foodItems: ["idli", "vada", "uttapam", "dosa"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970915/IMG-20240626-WA0310_khlymq.webp",
  },
  {
    id: 343,
    name: "masala muri",
    location: {
      type: "Point",
      coordinates: [88.354213, 22.517884],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970956/IMG-20240626-WA0311_i7lgrn.webp",
  },
  {
    id: 344,
    name: "variety puchka center",
    location: {
      type: "Point",
      coordinates: [88.360031, 22.518742],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970968/IMG-20240626-WA0312_xkbein.webp",
  },
  {
    id: 345,
    name: "hakka chowmein",
    location: {
      type: "Point",
      coordinates: [88.358999, 22.518507],
    },
    foodItems: [
      "veg chowmein",
      "egg chowmein",
      "chicken chowmein",
      "egg chicken chowein",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729970981/IMG-20240626-WA0313_morcq3.webp",
  },
  {
    id: 346,
    name: "chatora chat",
    location: {
      type: "Point",
      coordinates: [88.35775, 22.518336],
    },
    foodItems: ["Bhel Puri", "papri chat", "aloo chat", "mixed Chat"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971020/IMG-20240626-WA0315_ygyvlx.webp",
  },
  {
    id: 347,
    name: "pudina puchka",
    location: {
      type: "Point",
      coordinates: [88.357061, 22.518287],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971030/IMG-20240626-WA0318_dd4hy8.webp",
  },
  {
    id: 348,
    name: "desi delight puchka",
    location: {
      type: "Point",
      coordinates: [88.358028, 22.51835],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971044/IMG-20240626-WA0319_wfpazl.webp",
  },
  {
    id: 349,
    name: "c-4 snacks",
    location: {
      type: "Point",
      coordinates: [88.358529, 22.518605],
    },
    foodItems: [
      "Chowmein",
      "roll",
      "Rice",
      "veg chowmein",
      "egg chowmein",
      "egg chicken roll",
      "chilli chicken",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971088/IMG-20240626-WA0321_nzgjem.webp",
  },
  {
    id: 350,
    name: "puchka lane",
    location: {
      type: "Point",
      coordinates: [88.356921, 22.518131],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971099/IMG-20240626-WA0322_ns71bz.webp",
  },
  {
    id: 351,
    name: "puchka trend",
    location: {
      type: "Point",
      coordinates: [88.356925, 22.518135],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971115/IMG-20240626-WA0323_byfdok.webp",
  },
  {
    id: 352,
    name: "puchak peak",
    location: {
      type: "Point",
      coordinates: [88.35693, 22.51813],
    },
    foodItems: [
      "Aloo Puchka",
      "Dahi Puchka",
      "Masala Puchka",
      "Sukha Puchka",
      "Pudina Puchka",
      "Meetha Puchka",
      "Spicy Puchka",
      "Stuffed Puchka",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971151/IMG-20240626-WA0325_u3ugju.webp",
  },
  {
    id: 353,
    name: "chana muri",
    location: {
      type: "Point",
      coordinates: [88.356935, 22.518128],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971181/IMG-20240626-WA0332_hixban.webp",
  },
  {
    id: 354,
    name: "bhel muri",
    location: {
      type: "Point",
      coordinates: [88.356924, 22.51812],
    },
    foodItems: [
      "Classic Jhalmuri",
      "Masala Muri",
      "Chana Jhalmuri",
      "Peanut Jhalmuri",
      "Kancha Muri",
      "Nimbu Masala Muri",
      "Bhel Puri",
      "Muri Chaat",
    ],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971206/IMG-20240626-WA0336_mhykov.webp",
  },
  {
    id: 355,
    name: "SugarCane Juicer",
    location: {
      type: "Point",
      coordinates: [88.356948, 22.51813],
    },
    foodItems: ["Sugarcane Juice"],
    hygieneRating: 3,
    tasteRating: 3,
    hospitalityRating: 4,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971253/IMG-20240626-WA0337_rp6jsd.webp",
  },

  {
    id: 1,
    name: "Bhel Puri Batata Puri",
    location: {
      type: "Point",
      coordinates: [88.358976, 22.514412],
    },
    foodItems: ["Bhel Puri", "Batata Puri"],
    hygieneRating: 5,
    tasteRating: 5,
    hospitalityRating: 5,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971265/bhel-puri-batata-puri_cycpbb.webp",
  },
  {
    id: 2,
    name: "Durga Pandit Ka Puchka",
    location: {
      type: "Point",
      coordinates: [88.358883, 22.514442],
    },
    foodItems: [
      "Special Puchka",
      "Normal Puchka",
      "special Alurdam",
      "Alurdam Puchka",
      "sweet Puchka",
      "alurdam churmur",
    ],
    hygieneRating: 5,
    tasteRating: 5,
    hospitalityRating: 5,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971278/durga-pandit-ka-puchka_j8189p.webp",
  },
  {
    id: 3,
    name: "Maharaja Chat Center",
    location: {
      type: "Point",
      coordinates: [88.358999, 22.514359],
    },
    foodItems: ["Cheese Puchka", "Pizza Puchka", "Rabri Puchka", "Dahi Puchka"],
    hygieneRating: 5,
    tasteRating: 5,
    hospitalityRating: 5,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971294/maharaja-chat-centre_soplzj.webp",
  },
  {
    id: 4,
    name: "Maharaja Cold Drink Center",
    location: {
      type: "Point",
      coordinates: [88.358988, 22.51439],
    },
    foodItems: [
      "Malasa Thumpsup",
      "Masala Limca",
      "Masala Pepsi",
      "Soda Shikanji",
    ],
    hygieneRating: 5,
    tasteRating: 5,
    hospitalityRating: 5,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971330/maharaja-cold-drink-centre_jkmtow.webp",
  },
  {
    id: 5,
    name: "Shri Mishri Lal Pandit",
    location: {
      type: "Point",
      coordinates: [88.358937, 22.514427],
    },
    foodItems: [
      "Alum Dum",
      "Churmur",
      "Alu Chat",
      "Dahi bada",
      "Ragra Chat",
      "Alu Dum Masala",
      "Puchka",
      "Puchka Masala",
    ],
    hygieneRating: 5,
    tasteRating: 5,
    hospitalityRating: 5,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971370/shri-mishri-lal-pandit_qdlm6y.webp",
  },
  {
    id: 6,
    name: "Shri Thakur Pandit ka Puchka",
    location: {
      type: "Point",
      coordinates: [88.358928, 22.514521],
    },
    foodItems: [
      "Alum Dum",
      "Churmur",
      "Alu Chat",
      "Dahi bada",
      "Ragra Chat",
      "Alu Dum Masala",
      "Puchka",
      "Puchka Masala",
    ],
    hygieneRating: 5,
    tasteRating: 5,
    hospitalityRating: 5,
    photoUrl:
      "https://res.cloudinary.com/dlpm03ztl/image/upload/v1729971406/Whats-App-Image-2024-06-18-at-18-32-43-20833f5e_gjxhem.webp",
  },
];
