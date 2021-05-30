import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --roxo: #522B47;
        --bege: #FBF5F3;
        --preto: #0F0E0E; 
    }

    * {
        margin: 0;
        padding: 0;

        font-family: 'Lora', serif;
    }

    body {
        background: #FBF5F3;
    }

    html {
        font-size: 1rem;
    }

    button {
        padding: 1rem;

        display: flex;
        align-items: center;

        font-weight: 700;

        background: var(--roxo);
        color: var(--bege);

        border-style: none;
        border: 1px solid var(--roxo);
        border-radius: 5px;

        cursor: pointer;

        transition: 0.2s;

        &:hover {
            background: var(--bege);
            color: var(--roxo);
        }
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal {
        width: 100%;
        max-width: 442px;
        padding: 1.5rem;

        border-radius: 5px;

        background: var(--bege);
    }
`