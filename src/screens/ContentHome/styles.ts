import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
`

export const TitleLabel = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    margin-left: 20px;
`

export const ButtonNewMeal = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.GRAY_2};
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 6px;
    height: 50px;
    width: 90%;
`

export const LabelButtonNewMeal = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.WHITE};
`

export const MealList = styled.ScrollView`
    margin-bottom: 25px;
    margin-top: 20px;
`

export const MealDate = styled.View`
    border-color: ${({theme}) => theme.COLORS.GRAY_4};
    align-self: center;
    border-radius: 6px;
    border-width: 1px;
    margin-bottom: 10px;
    padding: 20px;
    width: 90%;
`

export const DateLabel = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    margin-left: 20px;
`

export const Meal = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
`