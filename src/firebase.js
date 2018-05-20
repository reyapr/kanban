import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBhs6KLNnRid5Def8ydBZo1c7OeixBFrP0',
  authDomain: 'kanban-9bb44.firebaseapp.com',
  databaseURL: 'https://kanban-9bb44.firebaseio.com',
  projectId: 'kanban-9bb44',
  storageBucket: 'kanban-9bb44.appspot.com',
  messagingSenderId: '486638130049'
}

firebase.initializeApp(config)
export const db = firebase.database()
