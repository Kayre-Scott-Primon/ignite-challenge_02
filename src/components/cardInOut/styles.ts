import styled from "styled-components/native";

export const CardContainer = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_6};
    align-items: center;
    flex-direction: row;
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 6px 15px;
    margin-top: 20px;
    width: 50%;
`
export const CardText = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    text-align: center;
`

export const Point = styled.View`
    background-color: ${({theme}) => theme.COLORS.GREEN_DARK};
    border-radius: 20px;
    margin-right: 10px;
    height: 8px;
    width: 8px;
`