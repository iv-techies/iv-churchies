import styled from 'styled-components';

const Hero = styled.div`
   width:100vw;
   height:${props => props.height || "60vh" };
   background:#fff;
   position:relative

`;

export default Hero;