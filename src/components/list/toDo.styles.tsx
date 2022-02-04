import styled from "styled-components";

export const ToDoItem = styled.div`
    font-family: Arial, sans-serif;
    font-size: 14px;
    border: 1px solid #0000006b;
    background-color: #f3ecec;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    felx-wrap: no-wrap;
    align-items: center;
`

export const ListItem = styled.div`
    max-width: 30%;
    padding: 15px;
    border: 1px solid #0000006b;
    border-radius: 8px;
`

export const ListTitle = styled.h1`
    margin: 0px;
    font-family: Arial, sans-serif;
`
export const ToDoInput = styled.input`
    font-family: Arial, sans-serif;
    font-size: 14px;
    width: 95%;
    padding: 5px;
    border: 1px solid #0000006b;
    border-radius: 8px;
`
export const AddButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 14px;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #31AAB4;
    color: white;
`

export const DeleteButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 12px;
    border-color: transparent;
    background-color: transparent;
    color: red;
`

export const AddItemsParagraph = styled.p`
    font-family: Arial, sans-serif;
    font-size: 14px;
`