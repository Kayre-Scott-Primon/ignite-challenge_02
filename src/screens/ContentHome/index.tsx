
import * as S from './styles'

export default function ContentHome() {

    return (
        <S.Container>
            <S.TitleLabel>Refeições</S.TitleLabel>
            <S.ButtonNewMeal>
                <S.LabelButtonNewMeal>
                    + Nova Refeição
                </S.LabelButtonNewMeal>
            </S.ButtonNewMeal>
            <S.MealList>
                <S.DateLabel>12.08.22</S.DateLabel>
                <S.MealDate>
                    <S.Meal>{'20.00'}  |  {'X-Tudo'}</S.Meal>
                </S.MealDate>
                <S.MealDate>
                    <S.Meal>{'20.00'}  |  {'X-Tudo'}</S.Meal>
                </S.MealDate>
            </S.MealList>
        </S.Container>
    )
}