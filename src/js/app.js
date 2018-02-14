import '../css/style.css';
import jequetiImg from '../assets/Ck1qa1CXEAA5ntw.jpg';

const divJequeti = window.document.getElementById("jequeti");
const originalElement = divJequeti.innerHTML;

setInterval(() => {
  divJequeti.innerHTML = `<img style="width: 100%; height: 100%" src=${jequetiImg} />`;
  setTimeout(() => {
    divJequeti.innerHTML = originalElement;
  }, 100);
}, 4000);
