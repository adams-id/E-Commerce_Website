import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';

const OptionsContainerStyles = css`
    padding: 10px 15px;
    display:inline-block;
    margin:0 0.3em 0.3em 0;
    border-radius:0.15em;
    box-sizing: border-box;
    text-decoration:none;
    font-size: medium;
    text-transform:uppercase;
    font-weight: bold;
    color:#FFFFFF;
    background-color:black;
    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    text-align:center;
    position:relative;
    
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    } 
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 1em;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const OptionLink =styled(Link)`
    ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionsContainerStyles}
`;