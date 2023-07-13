import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    align-content: center;
    flex: 1;
`

export const Header = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_5};
    justify-content: center;
    align-items: center;
    height: 112px;

`

export const HeaderLabel = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const Content = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_5};
    height: 100%;
    width: 100%;
`

export const ContentView = styled.View`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    align-items: center;
    flex: 1;
`

export const FormView = styled.View`
    padding-top: 35px;
    width: 90%;
`

export const TitleInput = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const InputName = styled.TextInput`
    border-color:  ${({theme}) => theme.COLORS.GRAY_5};
    border-width: 1px;
    border-radius: 6px;
    height: 48px;
    margin-bottom: 15px;
`

export const InputDescription = styled.TextInput`
    border-color:  ${({theme}) => theme.COLORS.GRAY_5};
    border-width: 1px;
    border-radius: 6px;
    height: 120px;
    margin-bottom: 15px;
`

export const DateContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const DateView = styled.View`
    width: 48%;
`

export const InputDate = styled.TextInput`
    border-color:  ${({theme}) => theme.COLORS.GRAY_5};
    border-width: 1px;
    border-radius: 6px;
    height: 48px;
`

export const InputHour = styled.TextInput`
    border-color:  ${({theme}) => theme.COLORS.GRAY_5};
    border-width: 1px;
    border-radius: 6px;
    height: 48px;
`

export const ButtonContainer = styled.View`

`

export const ButtonOptionView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const ButtonOption = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.GRAY_6};
    height: 50px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    width: 48%;
`

export const ButtonOptionLabel = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const Button = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.GRAY_2};
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    height: 50px;
    width: 90%;
`

export const ButtonLabel = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.WHITE};
`