export const fetchData = async (searchTerm) => {
  const term = searchTerm;
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const ts = process.env.REACT_APP_MARVEL_TS;
  const hash = process.env.REACT_APP_MARVEL_HASH;
  try {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/${term}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    );
    const data = await res.json();
    localStorage.setItem(term, JSON.stringify(data));
    return data.data.results;
  } catch (error) {
    console.log("Error fetching data. ", error);
  }
};
