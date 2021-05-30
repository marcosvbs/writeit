import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
    onOpenModal: () => void;
}

export function Header ({ onOpenModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="WriteIt Logo" />
                <button 
                    type="button" 
                    onClick={onOpenModal}
                >Escrever</button>
            </Content>
        </Container>
    )
}