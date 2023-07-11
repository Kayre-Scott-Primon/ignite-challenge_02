import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    align-content: center;
    flex: 1;
`

export const SecoundView = styled.View`
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`

export const SecoundContentView = styled.View`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    align-items: center;
`

export const LabelTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_1};
    margin-top: 33px;
    margin-bottom: 23px;
`

export const CardView = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_6};
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    border-radius: 8px;
    padding: 16px;
    width: 90%;
`

export const CardNumber = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const CardSubtitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.XSM}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const ViewSmallCards = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`

export const SmallCard = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_5};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 26px 16px ;
    width: 48%;
`

export const TitleSmallCard = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const SubTitleSmallCard = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.XSM}px;
    color: ${({theme}) => theme.COLORS.GRAY_2};

`