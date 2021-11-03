import stopwordslist from '../templates/stopwordslist.hbs';
import refs from './refs';
const { stopWordsContainer } = refs;

export default function createStopWordsList(array) {
  const listMarkup = stopwordslist(array);

  console.log(listMarkup);
  console.log(stopWordsContainer);

  stopWordsContainer.insertAdjacentHTML('beforeend', listMarkup);
}
