import refs from './refs';

const { stopWordsContainer } = refs;

export default function clearStopWords() {
  stopWordsContainer.innerHTML = '';
}
