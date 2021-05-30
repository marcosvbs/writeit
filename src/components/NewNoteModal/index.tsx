import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { api } from '../../services/api';
import { Container } from './styles';

interface Note {
    id: number;
    title: string;
    description: string;
    date: string;
  }

interface newWriteModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onClick: () => void;
    notes: Note[];
    onSetNotes: (value: Note[]) => void;
}

export function NewNoteModal({ isOpen, onRequestClose, onClick, notes, onSetNotes }: newWriteModalProps) {

    const [ title, setTitle ] = useState<string>('');
    const [ description, setDescription ] = useState<string>('');

    async function handleCreateNewNote(event: FormEvent) {
        event.preventDefault();

        const currentDateAndHours = new Date().toLocaleDateString("pt-BR") + ' - ' + new Date().toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

        const data = {
            title,
            description,
            date: currentDateAndHours
        };

        const response = await api.post('/notes', data);
        const { note } = response.data;

        const updatedNotes = [
            note,
            ...notes
        ];
        
        onSetNotes(updatedNotes);
        localStorage.setItem('@notes', JSON.stringify(updatedNotes));

        setTitle('');
        setDescription('');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal"
            overlayClassName="react-modal-overlay"
        >
            <Container onSubmit={handleCreateNewNote}>

                <div className="title-container">
                    <h1>Escreva sobre o que quiser</h1>
                    <button onClick={onClick}><img src={closeImg} alt="Close" /></button>
                </div>

                <div className="input-text-container">
                    <label htmlFor="note-title">Titulo:</label>
                    <input 
                        name="note-title" 
                        type="text" 
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <label htmlFor="note-description">Descrição:</label>
                    <textarea 
                        name="note-description" 
                        rows={3}
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                </div>

                <div className="button-container">
                    <button type="submit">Salvar</button>
                </div>

            </Container>
        </Modal>
    )
}