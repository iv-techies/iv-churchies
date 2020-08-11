import styled from 'styled-components';

const LinedHeader = styled.p`
    font-family: Quicksand;
    font-style: normal;
    text-align: center;
    color: #000;
    position:relative;
    padding: 5px 5px 10px;
    display:inline-block;
    text-transform:uppercase;
    font-size:1.5rem;
    vertical-align: ${props => props.alignV };

    &:after
    {
        content:"";
        position:absolute;
        width:${props => props.mini ? "50%" : "95%" };
        height:2px;
        background-color:var(--orange);
        left:${props => props.mini ? "50%" : "0%" };
        bottom:5px;
        transform: ${props => props.mini ? "translateX( -50%)" : "translateX(0)" }

    }
`;

export default LinedHeader;
