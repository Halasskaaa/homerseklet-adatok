import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Homerseklet } from './Homerseklet';

const URL_API = 'https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json'

const betoltes = addEventListener("DOMContentLoaded", () => {
  adatokBetoltese();
  })

async function fetch_API(URL_API: string) {
  const response = await fetch(URL_API);
  if (!response.ok) {
    throw new Error('Error: ' + response.statusText);
  }
  return await response.text();
}

async function adatokBetoltese() {


}


