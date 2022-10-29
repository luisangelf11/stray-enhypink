import Charmer from "../audio/charmer.mp3";
import Get_Cool from "../audio/get_cool.mp3";
import Grow_Up from "../audio/grow_up.mp3";
import Go from "../audio/go_big.mp3";
import Shout_Out from "../audio/shout_out.mp3";
import Polaroid from "../audio/polaroid_love.mp3";
import Dont from "../audio/dont_know_what_to_do.mp3";
import Happiest from "../audio/happiest_girl.mp3";
import Typa_Girl from "../audio/typa_girl.mp3"; 
//Images
import S from "../image/1.png";
import T from "../image/2.png";
import E from "../image/3.png";
import P from "../image/4.png";
import H from "../image/5.png";
import A from "../image/6.png";
import N from "../image/7.png";
import Y from "../image/8.png";
import Gato from "../image/9.png";
//..
const music = [
    {
        id: 0,
        nameSong: "Charmer",
        band: "Stray Kids",
        url: Charmer,
        photo: S
    }, 
    {
        id: 1,
        nameSong: "Get Cool",
        band: "Stray Kids",
        url: Get_Cool,
        photo: T
    },
    {
        id: 2,
        nameSong: "Grow Up",
        band: "Stray Kids",
        url: Grow_Up,
        photo: E
    },
    {
        id: 3,
        nameSong: "Go big or Go home",
        band: "Enhypen",
        url: Go,
        photo: P
    },
    {
        id: 4,
        nameSong: "Shout out",
        band: "Enhypen",
        url: Shout_Out,
        photo: H
    },
    {
        id: 5,
        nameSong: "Polaroid Love",
        band: "Enhypen",
        url: Polaroid,
        photo: A
    },
    {
        id: 6,
        nameSong: "Don't know what to do",
        band: "Blackpink",
        url: Dont,
        photo: N
    },
    {
        id: 7,
        nameSong: "Happiest girl",
        band: "Blackpink",
        url: Happiest,
        photo: Y
    },
    {
        id: 8,
        nameSong: "Typa girl",
        band: "Blackpink",
        url: Typa_Girl,
        photo: Gato
    }
];

export default music;

//console.log(Polaroid);