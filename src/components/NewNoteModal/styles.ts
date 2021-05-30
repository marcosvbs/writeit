import styled from "styled-components";

export const Container = styled.form`

    display: flex;
    flex-flow: column nowrap;
    gap: 1.5rem;

    .title-container {

        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.6875rem;
            color: var(--preto);
        }

        button {
            padding: 0.5rem;
            background: transparent;
            border: none;
        }

    }

    .input-text-container {

        display: flex;
        flex-flow: column nowrap;

        label {
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.6875rem;
            color: var(--preto);
        }

        input, textarea {
            padding: 0.25rem 1rem;

            height: 50px;
            border: 1px solid var(--preto);
            border-radius: 5px;

            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.6875rem;
            color: var(--preto);
            background: var(--bege);
        }

        input {
            margin-bottom: 1rem;
        }

        textarea {
            padding: 1rem;
            min-height: 110px;
            resize: none;
        }

    }

    .button-container {
        display: flex;
        flex-direction: row-reverse;
    }
`