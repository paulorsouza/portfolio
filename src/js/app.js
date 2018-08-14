import 'bulma';
import '../css/style.css';
import jedi from '../assets/jedi_vs_sith.png';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import icon from '../assets/icon.jpeg';

const mainImage = window.document.getElementById("main-image");
mainImage.src = jedi;
const project1Image = window.document.getElementById("project1-image");
project1Image.src = project1;
const project2Image = window.document.getElementById("project2-image");
project2Image.src = project2;
const project3Image = window.document.getElementById("project3-image");
project3Image.src = project3;
const iconDoc = window.document.getElementById("icon");
iconDoc.src = icon;