import copyToTextarea from './copyToTextarea';

export default function analyzeText(e) {
  e.preventDefault();
  let text = document.getElementById('input').value;
  copyToTextarea(text);
}
