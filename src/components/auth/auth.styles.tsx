import styled from "styled-components";

export const LoginBox = styled.div`
    font-family: Arial, sans-serif;
    font-size: 14px;
    border: 1px solid #3BB3BD;
    border-radius: 14px;
    padding: 32px;
    width: 33%;
    margin: 10% 33%; 
    text-align: center;
    box-sizing: border-box;
`

export const LoginButton = styled.button`
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
export const LogoutButton = styled.button`
    font-family: Arial, sans-serif;
    font-size: 14px;
    width: 10%;
    margin: 5px 45%;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 1px solid red;
    border-radius: 8px;
    background-color: white;
    color: red;
    cursor:pointer;
    &:hover {
        background-color: red;
        color: white;
        }
`

export const LoginInput = styled.input`
    padding:5px;
    margin: 5px 0px;
    width: 95%;
    border:0;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
`

export const LoginTitle = styled.h1`
    font-family: Arial, sans-serif;
    font-size: 32px;
    color: #3BB3BD;
    font-weight: 700;
`

export const PassWrapper = styled.div`
    position: relative;
    margin-bottom: 14px;
`

export const EmailWrapper = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 14px;
`

export const EyeIcon = styled.i`
    position: absolute;
    top: 33%;
    right: 7%;
    &:hover {
        color: #3bb3bd;
        cursor: pointer;
        }
`