import styled from 'styled-components';

const types =
{
    first: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 4.37%, rgba(0, 0, 0, 0.148234) 76.28%, rgba(0, 0, 0, 0) 100%)",
    last: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 16.67%, rgba(255, 255, 255, 0) 88.54%, rgba(255, 255, 255, 0) 99.99%)",
    middle: "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%), rgba(0, 0, 0, 0.4)"
};

const Gradients = styled.div`
    background:${props => types[ props.type ] || types.middle };
    text-transform:uppercase;
    min-height: 194px;
    max-height: 250px;
    min-width: 300px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-family: Roboto;
    font-weight: bold;
    font-size: 2rem;
    color: #F5F5F5;
    margin: 10px 0;

`;

export default Gradients;
