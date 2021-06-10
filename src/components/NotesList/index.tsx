import { useNotes } from "../../hooks/useNotes";
import { Container } from "./styles";
import deleteImg from "../../assets/delete.svg";

interface NotesListProps {
    setSelectedNoteId: (noteId: number) => void;
    onOpenModal: () => void;
}

export function NotesList({ setSelectedNoteId, onOpenModal }: NotesListProps) {

    const { notes } = useNotes();

    function handleOpenDeleteModal(noteId: number) {
        setSelectedNoteId(noteId)
        onOpenModal();
    }

    return (
        <>
            {notes.map(note => {
                return (
                    <Container key={note.id}>
                        <div className="card-content">
                            <span>{note.date}</span>
                            <h1>{note.title}</h1>
                            <p>{note.description}</p>
                        </div>
                        <div className="card-buttons">
                            <button onClick={() => handleOpenDeleteModal(note.id)}><img src={deleteImg} alt="Deletar"/></button>
                        </div>
                    </Container>
                )
            })}
        </>
    )
}