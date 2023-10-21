import axios from 'axios';

export async function getData(url) {
  const data = await axios.get(url).then((data) => data);
  return data;
}
