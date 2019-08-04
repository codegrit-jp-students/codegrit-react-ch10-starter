import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../constants/firebaseConfig';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getAllQuizzes = () => {
  return db.collection("quiz").get();
}

export const getAllQuizItems = (quizId) => {
  return db.collection("quiz")
    .doc(quizId)
    .collection('quiz_items')
    .orderBy("order", "asc")
    .get();
}

export const getAllQuizOptions = (quizId, itemId) => {
  return db.collection("quiz")
    .doc(quizId)
    .collection('quiz_items')
    .doc(itemId)
    .collection('options')
    .orderBy("order", "asc")
    .get();
}