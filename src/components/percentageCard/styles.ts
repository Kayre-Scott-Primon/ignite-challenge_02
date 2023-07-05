import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    align-self: center;
    border-radius: 8px;
    padding: 10px;
    height: 100px;
    width: 80%;
`

export const ArrowExpand = styled(ArrowUpRight).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))`
    align-self: flex-end;
`

export const ArrowCompress = styled(ArrowLeft).attrs({
    size: 24,
})`
`