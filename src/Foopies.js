import img1 from "./assets/chocolate_pizza.jpg";
import img2 from "./assets/choco-cheese.jpg";
import img3 from "./assets/ice-cream-baked-potato.jpg";

export const FoopieItems = [
  {
    id: 1,
    title: "Pieeza",
    shape: "round",
    img: img1,
    description:
      "A slice of pizza topped with oreos, marshmallows, and icing sugar",
    price: 15,
  },
  {
    id: 2,
    title: "Chocoloco",
    shape: "square",
    img: img2,
    description: "A plate of cheese paired with chocolate cake and brownies",
    price: 12,
  },
  {
    id: 3,
    title: "Tayto Ice Cr3am",
    shape: "oval",
    img: img3,
    description:
      "Hot steaming baked potato topped with ice creams and sprinkles",
    price: 8,
  },
];

export const products = [
  {
    id: 1,
    icon: "fa-solid fa-bowl-food",
    type: "food",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 2,
    icon: "fa-solid fa-mug-saucer",
    type: "beverage",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 3,
    icon: "fa-solid fa-square",
    type: "small bite",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
];

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#selections", text: "selections" },
  { id: 4, href: "#featured", text: "featured" },
];
export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];
