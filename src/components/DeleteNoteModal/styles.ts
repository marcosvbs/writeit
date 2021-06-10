import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    .title-container {

        h1 {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.6875rem;
            color: var(--preto);
        }

    }

    .buttons-container {

        display: flex;
        gap: 1rem;
        align-items: flex-end;
        justify-content: flex-end;


        .backButton {
        
            padding: 1rem;

            display: flex;
            align-items: center;

            font-weight: 700;

            background: transparent;
            color: var(--roxo);

            border: none;

            cursor: pointer;

            transition: 0.2s;

            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }
   
        }

    }
`