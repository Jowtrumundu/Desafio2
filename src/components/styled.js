import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

 export const Header = styled.a`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
    text-decoration: none;
`;

export const List = styled.ul`
    list-style: none;
    padding: none;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .5rem 0;
    display: inline-block;
    padding: 3%;
    &:hover {
        font-weight: 700;
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 1.5rem;
    padding: 0 .5rem;
    &:focus,
    &:active {
        outline: none;
    }
`;

export const Button = styled.button`
    height: 1.6rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    &:hover {
        cursor: pointer;
    }
`;

export const Subtitle = styled.div`
    width: 100vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px;
    font-size: larger;
`;