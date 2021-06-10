import { useState } from 'react';
import { NotesList } from './components/NotesList';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewNoteModal } from './components/NewNoteModal';
import { NotesContextProvider } from './hooks/useNotes';
import { DeleteNoteModal } from './components/DeleteNoteModal';

Modal.setAppElement('#root');

function App() {

  const [newNoteModalIsOpen, setNewNoteModalIsOpen] = useState<boolean>(false);
  const [deleteNoteModalIsOpen, setDeleteNoteModalIsOpen] = useState<boolean>(false);
  const [selectedNoteId, setSelectedNoteId] = useState<number>(0);

  function openNewNoteModal() {
    setNewNoteModalIsOpen(true);
  }

  function closeNewNoteModal() {
    setNewNoteModalIsOpen(false);
  }

  function openDeleteNoteModal() {
    setDeleteNoteModalIsOpen(true);
  }

  function closeDeleteNoteModal() {
    setDeleteNoteModalIsOpen(false);
  }

  return (
    <NotesContextProvider>

      <Header onOpenModal={openNewNoteModal} />
      <NewNoteModal
        isOpen={newNoteModalIsOpen}
        onRequestClose={closeNewNoteModal}
        onClick={closeNewNoteModal}
      />
      <DeleteNoteModal
        selectedNote={selectedNoteId} 
        isOpen={deleteNoteModalIsOpen}
        onRequestClose={closeDeleteNoteModal}
        onClick={closeDeleteNoteModal}
      />
      <NotesList 
        setSelectedNoteId={setSelectedNoteId}
        onOpenModal={openDeleteNoteModal}
      />
      <GlobalStyle />

    </NotesContextProvider>
  )
}

export default App;
