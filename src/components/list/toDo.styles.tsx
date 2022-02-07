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
    margin-top: 20px; 
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
    width: 98%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border: 1px solid #0000006b;
    border-radius: 8px;
`
export const AddButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 14px;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid #31AAB4;
    border-radius: 8px;
    background-color: #31AAB4;
    color: white;
    cursor:pointer;
`

export const DeleteButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 12px;
    border-color: transparent;
    background-color: transparent;
    color: red;
    cursor:pointer;
`

export const AddListButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 38px;
    padding: 5px 15px;
    margin-top: 20px;
    border: 1px solid #31AAB4;
    border-radius: 8px;
    background-color: #31AAB4;
    color: white;
    cursor:pointer;
    cursor:pointer;
`

export const AddItemsParagraph = styled.p`
    font-family: Arial, sans-serif;
    font-size: 14px;
`

export const Title = styled.div`
    font-family: Arial, sans-serif;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    felx-wrap: no-wrap;
    align-items: center;
`

export const EditButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 12px;
    border-color: transparent;
    background-color: transparent;
    color: #31AAB4;
    cursor:pointer;
`

export const TitleInput = styled.input`
    font-family: Arial, sans-serif;
    font-size: 14px;
    width: 98%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border: 1px solid #0000006b;
    border-radius: 8px;
`