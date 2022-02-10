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
    flex-wrap: no-wrap;
    align-items: center;
`
export const TaskButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-items: center;
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const ListItem = styled.div`
    width: 25%;
    padding: 15px;
    margin-top: 20px; 
    border: 1px solid #0000006b;
    border-radius: 8px;
`

export const Button = styled.div`
   text-align: center;
`
export const ListsTitle = styled.h1`
    margin: 0px;
    font-size: 52px;
    font-family: Arial, sans-serif;
    text-align: center;
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
    border: 1px solid #3BB3BD;
    border-radius: 8px;
    background-color: #3BB3BD;
    color: white;
    cursor:pointer;
    &:hover {
        background-color: #33aab4;
        font-weight: bold;
        }
`
export const DeleteListButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 14px;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid #fc8d8d;
    border-radius: 8px;
    background-color: #fc8d8d;
    color: white;
    cursor:pointer;
    &:hover {
        background-color: #ff0000;
        font-weight: bold;
        }
`

export const DeleteButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 12px;
    border-color: transparent;
    background-color: transparent;
    color: red;
    cursor:pointer;
    &:hover {
        font-weight: bold;
        }
`

export const AddListButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 38px;
    padding: 5px 15px;
    margin-top: 20px;
    border: 1px solid #3BB3BD;
    border-radius: 8px;
    background-color: #3BB3BD;
    color: white;
    cursor:pointer;
    cursor:pointer;
    &:hover {
        background-color: #33aab4;
        font-weight: bold;
        }
`
export const ConsoleButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 18px;
    padding: 5px 15px;
    margin-top: 20px;
    border: 1px solid #3BB3BD;
    border-radius: 8px;
    background-color: #3BB3BD;
    color: white;
    cursor:pointer;
    cursor:pointer;
    &:hover {
        background-color: #33aab4;
        font-weight: bold;
        }
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
    justify-content: space-between;
`

export const EditButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 18px;
    border-color: transparent;
    background-color: transparent;
    color: #3BB3BD;
    cursor:pointer;
    &:hover {
        color: #33aab4;
        font-weight: bold;
        }
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

