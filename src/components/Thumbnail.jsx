import styled from "styled-components";

const Thumbnail = styled.div`
    min-height: 194px;
    max-height: 250px;
    text-align: center;
    color:#fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--lightOrange);
    background-image:url("${props => props.thumb }");
    display: flex;
    justify-content: center;
    align-items: center;       
    cursor:pointer;

    & svg
    {
        font-size: 4rem;
        transform:scale(1);
        transition: transform ease 0.1s; 
    }

    &:hover svg
    {
        transform:scale(1.3);
    }
`;


export default Thumbnail;