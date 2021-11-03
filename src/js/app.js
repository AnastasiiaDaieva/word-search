import Notiflix from 'notiflix';

import refs from './refs';
import analyzeText from './analyzeText';
const { formAccess } = refs;

formAccess.addEventListener('submit', analyzeText);
