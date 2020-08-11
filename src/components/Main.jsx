import styled from 'styled-components';

const Main = styled.main`
   
    background:var(--grey);  
    min-height:50vh;
    padding: 20px;
    text-align:center;

    @media screen and (min-width:768px)
    {
        padding: ${props => props.padding ? props.padding : "20px 40px" };
    }
   

`;

export default Main;