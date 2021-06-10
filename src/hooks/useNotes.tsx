import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Note {
    id: number;
    title: string;
    description: string;
    date: string;
}

interface NotesContextProviderProps {
    children: ReactNode;
}

interface notesContextData {
    notes: Note[];
    createNewNote: (newNote: Note) => Promise<void>;
    deleteNote: (noteId: number) => void;
}

export const NotesContext = createContext<notesContextData>({} as notesContextData);

export function NotesContextProvider({ children }: NotesContextProviderProps) {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        api.get('http://localhost:3333/notes')
            .then(response => setNotes(response.data.reverse()));
    }, [])

    async function createNewNote(newNote: Note) {

        await api.post('http://localhost:3333/notes', newNote);

        setNotes([
            newNote,
            ...notes
        ])

    }

    async function deleteNote(noteId: number) {
        const updatedNotes = notes.filter(note => note.id !== noteId);

        setNotes(updatedNotes);
        await api.delete(`http://localhost:3333/notes/${noteId}`);
    }

    return (
        <NotesContext.Provider value={{ notes, createNewNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    )
}

export function useNotes() {
    const context = useContext(NotesContext);

    return context;
}