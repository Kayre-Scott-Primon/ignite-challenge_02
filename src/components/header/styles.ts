import styled from "styled-components/native";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native"


export const Container = styled.View`
    background-color: ${({theme}) => (theme.COLORS.WHITE)};
    justify-content: space-between;
    flex-direction: row;
    padding: 24px;
    width: 100%;
`

export const Logo = styled.Image`
`

export const Avatar = styled.Image`
`

export const AvatarContainer = styled.View`
    border-color: ${({theme}) => theme.COLORS.GRAY_1};
    border-radius: 30px;
    border-width: 1px;
    height: 42px;
    width: 42px;
`
