import refs from './refs';
import Mark from 'mark.js';
import createStopWordsList from './createStopWordsList';
const { textareaAccess } = refs;

// const stopWords = [

//   { word: 'nursing essay', substitutes: ['essay on Biology'] },
//   { word: 'essay on medicine ', substitutes: ['essay on Biology / or any other subject'] },
//   { word: 'Free Plagiarism Report', substitutes: ['Free report on originality'] },
//   {
//     word: 'a free Turnitin plagiarism report',
//     substitutes: ['free originality report', 'uniqueness report'],
//   },

//   {
//     word: 'unlimited revisions',
//     substitutes: [
//       'direct chat with an expert (or any other feature, except free plagiarism report)',
//     ],
//   },
//
// ];

const stopWords = [
  {
    word: 'writer',
    substitutes: [
      'expert',
      'tutor',
      'advisor',
      'graduate',
      'assistant',
      'co-author',
      'learning strategist',
      'paper coach',
      'subject-matter expert',
      'teaching staff',
      'instructor',
      'nerd',
      'helper',
      'specialist',
      'educator',
      'geek',
    ],
  },
  {
    word: 'turnitin report',
    substitutes: [
      'similarity checker',
      'originality checker',
      'originality report',
      'web matches report',
      'authenticity report',
      'Get your text scaned for similarities / web matches',
    ],
  },
  {
    word: 'plagiarism-free',
    substitutes: [
      'similarity checker',
      'originality checker',
      'originality report',
      'web matches report',
      'authenticity report',
      'Get your text scaned for similarities / web matches',
    ],
  },

  {
    word: 'plagiarism report',
    substitutes: [
      'similarity checker',
      'originality checker',
      'originality report',
      'web matches report',
      'authenticity report',
      'Get your text scaned for similarities / web matches',
    ],
  },

  {
    word: 'confidentiality',
    substitutes: [
      'privacy',
      'secrecy',
      'data protection',
      'You always own your data — it’s our responsibility to keep it more secure',
      '1-on-1 help',
      '1-on-1 guidance',
      '1-on-1 coaching',
      '1:1 support from expert tutor',
      '1:1 learning strategist',
    ],
  },
  {
    word: 'student',
    substitutes: ['customer', 'learner', 'client', 'people', 'undergraduate', 'scholar'],
  },
  { word: 'before the deadline', substitutes: ['earlier than asked'] },
  { word: 'deadline', substitutes: ['completion date'] },
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
    word: 'enhance your academic grade',
    substitutes: ['start to do better at school/college/university'],
  },
  {
    word: "If you don't want to write an essay",
    substitutes: ['If you have to write an essay but have no clue on where to start'],
  },
  {
    word: 'to write',
    substitutes: ['to accomplish', 'to create', 'to develop'],
  },
  {
    word: 'essay writing service',
    substitutes: ['essay advice service'],
  },
  { word: 'academic', substitutes: ['educational', 'teaching', 'learning'] },

  {
    word: 'customized paper',
    substitutes: [
      "content feedback', 'personalized writing advice",
      'made-to-order paper',
      'personalized feedback',
      'personalized writing tips',
    ],
  },
  {
    word: 'unlimited revisions',
    substitutes: [
      'final touch',
      'unlimited improvements',
      'unlimited preparation',
      'unlimited edits',
      'unlimited changes',
      'unlimited corrections',
      'unlimited alternations',
      'review improvements',
      'Review the assignment',
      'two-proofreader model',
    ],
  },

  {
    word: 'scratch',
    substitutes: [
      'from ground up',
      'We’ll provide an in-depth content review designed to help you refine your narrative and showcase qualities that will add value to any institution. Your coach will make sure you cover your bases and tell a powerful story that says you’re institution ready.',
      'Our solutions are specifically tailored to align with your tutoring needs.',
      'Experts will help you express your ideas and find the right voice for your story. You’ll receive a polished paper and writing tips.',
    ],
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
