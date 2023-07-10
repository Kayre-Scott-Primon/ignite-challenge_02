import { StatusBar } from "expo-status-bar";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";
import { styled } from "styled-components/native";

export const ContainerExpand = styled.View`
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    justify-content: center;
    align-self: center;
    border-radius: 8px;
    padding: 10px;
    height: 100px;
    margin: 33px;
    width: 90%;
`

export const ContainerCompress = styled.View`
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    justify-content: center;
    align-self: center;
    padding: 10px;
    height: 150px;
    width: 100%;
`

export const StatusBarCompress = styled(StatusBar).attrs(({theme}) => ({
    backgroundColor: theme.COLORS.GREEN_LIGHT
}))`
`

export const ArrowExpand = styled(ArrowUpRight).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))`
    align-self: flex-end;
    position: absolute;
    right: 5px;
    top: 5px;
`

export const ArrowCompress = styled(ArrowLeft).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))`
    align-self: flex-end;
    position: absolute;
    left: 5px;
    top: 5px;
`

export const PercentsLabel = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    align-self: center;
`

export const Subtitle = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    align-self: center;
`
