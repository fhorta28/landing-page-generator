import styled from "styled-components";


export const Container = styled.div`
   display: flex;
   flex-direction: column;
`;
export const Btn = styled.div`
   display:flex;
   padding: 10px;
   width: 95%;
   justify-content: flex-end;
`;
export const Section = styled.div`
   padding: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
`;

export const Row = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;
export const Preview = styled.div`
    display:flex;
    overflow:hidden;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 100%;
    height: 300px;
    
`;
export const headerPreview = styled.div`
    width: 90%;
    height:50%;
`;
export const ContainerBtn = styled.div`
    padding:8px 15px;
`;
