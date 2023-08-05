import { SafeAreaView } from "react-native-safe-area-context";
import { Trash } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    justify-content: space-between;
    height: 80%;
`
export const InfoContainer = styled.View`

`
export const NameTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    margin-bottom: 5px;
    margin-top: 20px;
`
export const NameLabel = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`
export const MomentTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    margin-bottom: 5px;
    margin-top: 20px;
`
export const MomentLabel = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`
export const ButtonContainer = styled.View`

`
export const ButtonFull = styled.TouchableOpacity.attrs({})`
    background-color: ${({theme}) => theme.COLORS.GRAY_1};
    justify-content: center;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    height: 50px;
`
export const ButtonFullText = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.WHITE};
`
export const ButtonFullIcon = styled(Trash).attrs(({theme}) => ({
    color: theme.COLORS.WHITE,
    size: 24,
}))`
    margin-right: 10px;
`
export const ButtonEmpty = styled.TouchableOpacity.attrs({})`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-color: ${({theme}) => theme.COLORS.GRAY_1};
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-width: 2px;
    border-radius: 8px;
    height: 50px;
`
export const ButtonEmptyText = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
`
export const ButtonEmptyIcon = styled(Trash).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_1,
    size: 24,
}))`
    margin-right: 10px;
`
