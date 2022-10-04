import styled from 'styled-components';
import { ReactComponent } from './table.svg';

export const TitleContainer = styled.section`
width: 100%;
height: 232px;
text-align:center;
`;

export const TitleQuestion = styled.h2`
font-size:38px;
line-height:45.6px;
margin-bottom:17px;
margin-top:29px;
`;
export const TitleDescription = styled.h6`
color:#93918F;
font-size:16px;
line-height:19.5px;
margin-top:0px;
margin-bottom:46px;
`;

export const SearchPageButton = styled.button`
height: 36px;
line-height: 36px;
padding: 0 16px;
font-size: 14px;
font-weight: 500;
color: #ffffff;
background: #fdb755;
border: none;
border-radius: 4px;
cursor: pointer;
text-transform: uppercase;
margin-bottom:46px;
`;

export const HeatMapImg = styled(ReactComponent)`
margin:auto;
margin-top:36px;
`;

export const ImageContainer = styled.section`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
`;

export const InfoContainer1 = styled.section`
width:100%;
max-width:738px;
height:122px;
margin:auto;
margin-top:123px;
margin-bottom:105px;
`;

export const InfoContainer2 = styled.section`
width:100%;
max-width:738px;
height:122px;
margin:auto;
margin-bottom:121px;
`;

export const InfoTitle = styled.h2`
font-size:24px;
line-height:28.8px;
text-align:left;
margin-bottom:12px;
`;

export const InfoDetails = styled.h6`
font-size:16px;
line-height:27px;
color:#93918F;
text-align:left;
margin-top:0;
`;
