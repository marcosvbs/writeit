import styled from "styled-components";

export const Container = styled.div`
    max-width: 423px;

    padding: 1.5rem;
    margin: 1.5rem auto;

    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-flow: row nowrap;
    gap: 0.5rem;

    border-radius: 5px;

    box-shadow: 0 2px 6px rgba(15, 14, 14, 0.3);

    .card-content {

        display: flex;
        justify-content: center;
        align-items: left;
        flex-flow: column wrap;
        gap: 0.5rem;

        border-radius: 5px;

        span {
        font-size: 0.875rem;
        font-weight: 400;

        color: var(--preto);
        }

        h1 {
            font-size: 1.125rem;
            font-weight: 700;
            color: var(--preto);
            overflow-wrap: anywhere;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.6875rem;
            color: var(--preto);
            overflow-wrap: anywhere;
        }

    }

    .card-buttons {

        button {

        padding: 0.5rem;

        display: flex;
        align-items: center;

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