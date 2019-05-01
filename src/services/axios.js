const axios = require("axios");

const api = axios.create({
  baseURL: "https://cardsagainsthumanity-api.herokuapp.com/"
});

const fetchWhite = async () => {
  try {
    const resp = await api.get(`answer`);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};
const fetchBlack = async () => {
  try {
    const resp = await api.get(`question`);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
};

const dubs = function(a) {
  let counts = [];
  for (let i = 0; i <= a.length; i++) {
    if (counts[a[i]] === undefined) {
      counts[a[i]] = 1;
    } else {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
};

const getWhites = async num => {
  let cards = [];
  let i;
  for (i = 0; i < num; i++) {
    let card2 = await fetchWhite();
    while (cards.includes(card2)) {
      card2 = await fetchWhite();
    }
    cards.push(card2);
  }
  return cards;
};

const getBlacks = async num => {
  let cards = [];
  let i;
  for (i = 0; i < num; i++) {
    let card2 = await fetchBlack();
    while (cards.includes(card2)) {
      card2 = await fetchBlack();
    }
    cards.push(card2);
  }
  return cards;
};
export { fetchWhite, fetchBlack, getWhites, getBlacks };
