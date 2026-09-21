import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Homerseklet } from './Homerseklet';

const URL_API = 'https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json'

document.addEventListener("DOMContentLoaded", () => {
  adatokBetoltese();

  document.getElementById('adatBekuldese')?.addEventListener('submit', adatHozzaadasa);

  })

async function adatokBetoltese() {
  const response = await fetch(URL_API);
  if (!response) {
    throw new Error('Error')
  }

  const adat = await response.json() as Homerseklet[];

  const content = document.getElementById('content'); 
  for (var item in adat) {
    const tr = document.createElement('tr') as HTMLTableRowElement;

    const tdNap = document.createElement('td')
    tdNap.textContent = item.day;
    tr.appendChild(tdNap);

    const tdHomerseklet = document.createElement('td')
    tdHomerseklet.textContent = item.temperature;
    tr.appendChild(tdHomerseklet);

    content?.appendChild(tr);
  }
}

async function adatHozzaadasa() {
  
}



