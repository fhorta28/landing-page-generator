import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`
export const Btn = styled.div`
   display:flex;
   padding: 10px;
   width: 95%;
   justify-content: flex-end;
`
export const Section = styled.div`
   padding: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
`
export const Row = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 5px;
`
export const Preview = styled.div`
    display:flex;
    overflow:hidden;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 100%;
    height: 300px;  
`
export const headerPreview = styled.div`
    width: 90%;
    height:50%;
`
export const ContainerBtn = styled.div`
    padding:8px 15px;
`
export const ThemedButton = styled.button`
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    width: 60%;
    cursor: pointer;
`
export const Wrapper = styled.li`
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #000;
    list-style: none;
    background-color: white;
`
export const ContainerTheme = styled.ul`
   display:flex;
   flex-direction:column;
   justify-content: center;
   padding: 0px; 
`
export const HeaderPreview = styled.h2`
    with: 100%;
    text-align: center;
`
