import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const URL_API = 'https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json'

async function fetch_API(URL_API: string) {
  const response = await fetch(URL_API);
  if (!response.ok) {
    throw new Error('Error: ' + response.statusText);
  }
  return await response.text();
}

