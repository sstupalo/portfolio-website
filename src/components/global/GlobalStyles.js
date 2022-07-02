import styled from 'styled-components';
import '../../assets/fonts/fonts.css';

export const PageHeaderContainer = styled.div`
    font-family: 'diodrum';
    font-style: normal;
    font-weight: 600;
    font-size: 17pt;
    display: flex;
    align-items: center;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 20px;
    padding-bottom: 20px;

    @media (min-width: 768px) {
        font-size: 36pt;
        padding-top: 40px;
    padding-bottom: 40px;
    }
`

export const PageHeaderText = styled.h1`
    color: #2B2B2BFF;
    margin-top: 0%;
    margin-bottom: 0%;
    white-space: nowrap; 
`

export const PageHeaderDot = styled.h1`
    color: #FFC9C9FF;
    margin-top: 0%;
    margin-bottom: 0%;
`

export const SubHeadingText = styled.h2`
    font-family: 'diodrum';
    font-style: normal;
    font-weight: 600;
    font-size: 24pt;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #2B2B2BFF;
    margin-top: 0%;
    margin-bottom: 5%;
    white-space: nowrap; 
`