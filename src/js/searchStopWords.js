import refs from './refs';
import Mark from 'mark.js';
import createStopWordsList from './createStopWordsList';
const { textareaAccess } = refs;

const stopWords = [
  { word: 'academic', substitutes: ['educational', 'teaching', 'learning'] },
  { word: 'nursing essay', substitutes: ['essay on Biology'] },
  { word: 'essay on medicine ', substitutes: ['essay on Biology / or any other subject'] },
  { word: 'Free Plagiarism Report', substitutes: ['Free report on originality'] },
  {
    word: 'a free Turnitin plagiarism report',
    substitutes: ['free originality report', 'uniqueness report'],
  },
  { word: 'before the deadline', substitutes: ['earlier than asked'] },
  { word: 'deadline', substitutes: ['completion date'] },
  {
    word: 'student',
    substitutes: ['customers', 'learners', 'clients', 'people'],
  },
  { word: 'academic field', substitutes: ['subject field'] },
  { word: 'buy assignment ', substitutes: ['outsource assignment'] },
  { word: 'assessment task', substitutes: ['task', 'assignment'] },
  { word: 'college', substitutes: ['institution'] },
  { word: 'high-school', substitutes: ['institution'] },
  { word: 'university', substitutes: ['institution'] },
  { word: 'writing platform', substitutes: ['assistance platform'] },
  { word: 'academic writing platform', substitutes: ['study assistance platform'] },
  { word: 'pass plagiarism scan', substitutes: ['detection tools'] },
  { word: 'tailored academic papers', substitutes: ['custom writing products'] },
  { word: 'strictly against plagiarism', substitutes: ['stands for originality of papers'] },
  { word: 'boost grades', substitutes: ['help you do better with your tasks'] },
  {
    word: 'Enhance your academic grade',
    substitutes: ['start to do better at school/college/university'],
  },
  {
    word: "If you don't want to write an essay",
    substitutes: ['If you have to write an essay but have no clue on where to start'],
  },
  {
    word: 'writer',
    substitutes: ['expert', 'author'],
  },
  {
    word: 'to write',
    substitutes: ['to accomplish', 'to create', 'to develop'],
  },
  {
    word: 'unlimited revisions',
    substitutes: [
      'direct chat with an expert (or any other feature, except free plagiarism report)',
    ],
  },
  {
    word: 'essay writing service',
    substitutes: ['essay advice service'],
  },
];

export default function searchStopWords(content) {
  let arrayOfStopWords = [];

  stopWords.map(stopWord => {
    if (content.includes(stopWord.word)) {
      // function for keyword search
      // const markInstance = new Mark(textareaAccess);
      // console.log(markInstance);
      // markInstance.mark(stopWord.word);
      arrayOfStopWords.push(stopWord);

      console.log(stopWord);
    } else {
      return;
    }
  });
  createStopWordsList(arrayOfStopWords);
  console.log(arrayOfStopWords);
}
