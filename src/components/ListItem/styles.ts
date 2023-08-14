import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    background-color: #20212C;
    border-radius: 10px;

    input {
        width: 18px;
        height: 18px;
        margin-right: 8px;
    }

    label {
        color: #CCC;
        text-decoration: ${({ done }) => done ? 'line-through' : 'initial'};
    }
`;