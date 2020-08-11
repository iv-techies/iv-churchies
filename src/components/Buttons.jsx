import styled from 'styled-components';

const Button = styled.button`
    cursor:pointer;
    color:#fff;
    background:${props => props.light ? "var(--lightOrange)" : "var(--orange)" };  
    border:none;
    outline:none;
    padding:${props => props.padding || "10px" };
    font-size:1.2rem; 
    transform: scale(1);
    transition:transform 0.1s linear;
    text-transform:${props => props.case || "uppercase" };
    border-radius:${props => props.radius || "0px" };

    &:hover 
    {
        transform: scale(1.05);    
    }

`;

export default Button;