import { Content } from "./styles";

interface Note {
    id: number;
    title: string;
    description: string;
    date: string;
}

interface NotesListProps {
    notes: Note[];
}

export function NotesList({ notes }: NotesListProps) {

    return (
        <>
            {notes.map(note => {
                return (
                    <Content key={note.id}>
                        <span>{note.date}</span>
                        <h1>{note.title}</h1>
                        <p>{note.description}</p>
                    </Content>
                )
            })}
        </>
    )
}