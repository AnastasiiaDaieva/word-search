import copyToTextarea from './copyToTextarea';
import showHighlights from './showHighlights';
import clearStopWords from './clearStopWords';

export default function analyzeText(e) {
  e.preventDefault();
  clearStopWords();
  showHighlights();
  let text = document.getElementById('input').value;
  copyToTextarea(text);

  document.getElementById('input').value = '';
}
