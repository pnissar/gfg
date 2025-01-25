import mdl from './luffy.jpg'
import zoro from "./Zoro.png"
import sanji from "./sanji.png"
import robin from "./rubbin.jpg"
import brook from "./brook.jpg"
import usoop from "./Usopp.jpg"
import nami from "./nami.jpg"
import franky from "./franky.png"
import jimbe from "./jimbe.jpg"
import chopper from "./chopper.jpg"
const data = {
  home: "This is the home page",
  phone: "9390520700",
  about: `Luffy's ultimate goal is to become the Pirate King, which he believes will grant him the most freedom in the world.
  His journey is driven by his desire for adventure, the pursuit of freedom, and his promise to his idol, the pirate Shanks,
  to return his treasured straw hat when he becomes a great pirate. Luffy's character embodies themes of friendship, courage,
  and the unyielding pursuit of dreams, making him a beloved and iconic figure in the world of anime and manga.`
};
const imgs = [
    {
        img: mdl,
        tittle: "Monkey D. Luffy",
        des: "The enthusiastic and fearless captain of the Straw Hat Pirates, known for his dream to find the One Piece and become the Pirate King.",
        powerLevel: 9000,
        specialties: ["Gomu Gomu no Mi", "Haki", "Gear Fourth"]
    },
    {
        img: zoro,
        tittle: "Roronoa Zoro",
        des: "The powerful swordsman and first mate of the Straw Hat Pirates, aspiring to become the world's greatest swordsman.",
        powerLevel: 8500,
        specialties: ["Three-Sword Style", "Asura", "Haki"]
    },
    {
        img: sanji,
        tittle: "Vinsmoke Sanji",
        des: "The skilled cook of the Straw Hat Pirates, known for his chivalry and dream of finding the All Blue.",
        powerLevel: 8000,
        specialties: ["Black Leg Style", "Diable Jambe", "Haki"]
    },
    {
        img: robin,
        tittle: "Nico Robin",
        des: "The archaeologist of the Straw Hat Pirates, who seeks to uncover the true history of the world by deciphering Poneglyphs.",
        powerLevel: 7500,
        specialties: ["Hana Hana no Mi", "Archaeology", "Intellect"]
    },
    {
        img: brook,
        tittle: "Brook",
        des: "The musician and swordsman of the Straw Hat Pirates, a living skeleton who can use the power of the Revive-Revive Fruit.",
        powerLevel: 7000,
        specialties: ["Yomi Yomi no Mi", "Soul King", "Swordsmanship"]
    },
    {
        img: usoop,
        tittle: "Usopp",
        des: "The sharpshooter of the Straw Hat Pirates, known for his incredible marksmanship and dreams of becoming a brave warrior of the sea.",
        powerLevel: 6000,
        specialties: ["Marksmanship", "Inventor", "Lies"]
    },
    {
        img: nami,
        tittle: "Nami",
        des: "The navigator of the Straw Hat Pirates, with a deep love for cartography and a talent for predicting the weather.",
        powerLevel: 6500,
        specialties: ["Navigation", "Weather Control", "Thievery"]
    },
    {
        img: franky,
        tittle: "Franky",
        des: "The shipwright of the Straw Hat Pirates, a cyborg with a passion for building and maintaining the Thousand Sunny.",
        powerLevel: 7000,
        specialties: ["Cyborg", "Inventor", "Franky Shogun"]
    },
    {
        img: jimbe,
        tittle: "Jinbe",
        des: "The helmsman of the Straw Hat Pirates, a fish-man with a strong sense of honor and a commitment to peace.",
        powerLevel: 8000,
        specialties: ["Fish-Man Karate", "Helmsmanship", "Haki"]
    },
    {
        img: chopper,
        tittle: "Tony Tony Chopper",
        des: "The doctor of the Straw Hat Pirates, a reindeer who can transform into different forms thanks to the Human-Human Fruit.",
        powerLevel: 7000,
        specialties: ["Hito Hito no Mi", "Medicine", "Transformations"]
    }
];


    

export { data,imgs };
