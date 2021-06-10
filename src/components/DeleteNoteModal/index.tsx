import Modal from 'react-modal';
import { useNotes } from '../../hooks/useNotes';
import { Container } from './styles';

interface DeleteNoteModalProps {
    selectedNote: number;
    isOpen: boolean;
    onRequestClose: () => void;
    onClick: () => void;
}

export function DeleteNoteModal({ selectedNote, isOpen, onRequestClose, onClick }: DeleteNoteModalProps) {

    const { deleteNote } = useNotes();

    function handleDeleteNote(noteId: number) {
        deleteNote(noteId)
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal"
            overlayClassName="react-modal-overlay"
        >
            <Container>
            <div className="title-container">
                <h1>Tem certeza de que deseja excluir a anotação?</h1>
            </div>
            <div className="buttons-container">
                <button className="backButton" onClick={onClick}>Voltar</button>
                <button onClick={() => handleDeleteNote(selectedNote)}>Excluir</button>
            </div>
            </Container>
        </Modal>
    )
}