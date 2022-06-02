import wsScreenshot from "../../img/ws-screenshot.png";
import cycleLogical from "../../img/cyclelogical-remove.png";
// const wsScreenshot = require("../../img/ws-screenshot.png");
// const cycleLogical = require("../../img/cyclelogical.png");

const projects = [
  {
    title: "worldschoolingpopups.com",
    description:
      "An Airbnb-style listing of worldschooling events. Users can browse events, click for details, and see locations on an interactive map.",
    link: "worldschoolingpopups.com",
    url: "https://worldschoolingpopups.com",
    image: wsScreenshot,
    landscape: false,
  },
  {
    title: "Store Inventory Web App",
    description:
      "An inventory management app with tag navigation and a cloud database. Users can browse, add, and delete items, categories, manufacturers, and countries of origin.",
    link: "https://crud-app-rusty-reebs.herokuapp.com/",
    url: "https://crud-app-rusty-reebs.herokuapp.com/",
    image: cycleLogical,
    landscape: true,
  },
];

export default projects;
