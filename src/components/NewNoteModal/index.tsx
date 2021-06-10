import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { useNotes } from '../../hooks/useNotes';
import { Container } from './styles';

interface newNoteModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onClick: () => void;
}

function getFormattedCurrentDate() {
    const currentDateAndHours = new Date().toLocaleDateString("pt-BR") + ' - ' + new Date().toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

    return currentDateAndHours;
}

export function NewNoteModal({ isOpen, onRequestClose, onClick }: newNoteModalProps) {

    const { createNewNote } = useNotes();
    const [ title, setTitle ] = useState<string>('');
    const [ description, setDescription ] = useState<string>('');

    async function handleCreateNewNote(event: FormEvent) {

        event.preventDefault();
        
        await createNewNote({
            id: 0,
            title,
            description,
            date: getFormattedCurrentDate()
        });

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