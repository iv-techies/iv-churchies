import styled from 'styled-components';

const Flexbox = styled.div`
    display:flex;
    flex-direction: ${props => props.direction || "row" };
    flex-wrap: ${props => props.wrap || "wrap" };
    justify-content:${props => props.justify || "center" };
    align-items: ${props => props.alignItems || "stretch" };
    align-content:${props => props.alignContent || "center" };

`;

export default Flexbox;
