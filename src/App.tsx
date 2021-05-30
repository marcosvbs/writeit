import { useState, useEffect } from 'react';
import { NotesList } from './components/NotesList';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewNoteModal } from './components/NewNoteModal';

interface Note {
  id: number;
  title: string;
  description: string;
  date: string;
}

Modal.setAppElement('#root');

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  useEffect(() => {
        
    const storagedNotes = localStorage.getItem('@notes');

    if (storagedNotes) {
        setNotes(JSON.parse(storagedNotes));
    } 

}, [])

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleSetNotes(value: Note[]) {
    setNotes(value);
  }

  return (
    <>
      <Header onOpenModal={openModal} />
      <NewNoteModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onClick={closeModal}
        notes={notes}
        onSetNotes={handleSetNotes}
      />
      <NotesList 
        notes={notes}
      />
      <GlobalStyle />
    </>
  )
}

export default App;
