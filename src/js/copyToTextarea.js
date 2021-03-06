import refs from './refs';
import searchStopWords from './searchStopWords';

const { textareaAccess } = refs;

export default function copyToTextarea(content) {
  textareaAccess.value = content.trim();
  searchStopWords(textareaAccess.value);
}
