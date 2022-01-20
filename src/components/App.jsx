import React from 'react';

import Heading from './Heading';
import Note from './Note'
import Footer from './Footer';

import notes from '../notes';

export default function App() {
  return (
    <div>
      <Heading />
      {notes.map( note => (
        <Note 
          key = {note.key}
          title = {note.title}
          content = {note.content}
        />
      ))}
      <Footer />
    </div>
  );
  }
