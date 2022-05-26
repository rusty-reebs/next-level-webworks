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
    // image: "../../img/ws-screenshot.png",
    image: wsScreenshot,
    landscape: false,
  },
  {
    title: "Store Inventory Web App",
    description: "Yada Yada",
    link: "https://crud-app-rusty-reebs.herokuapp.com/",
    url: "https://crud-app-rusty-reebs.herokuapp.com/",
    // image: "../../img/cyclelogical.png",
    image: cycleLogical,
    landscape: true,
  },
];

export default projects;
