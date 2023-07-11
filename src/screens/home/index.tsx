import { Text } from 'react-native'
import { Header } from '../../components/header'
import * as S from './styles'
import { PercentageCard } from '@components/percentageCard'
import ContentHome from '@screens/ContentHome'
import theme from '@theme/index'

export default function Home() {

    const expand = false

    return (
        <S.Container>
            {expand && <Header/>}
            
            <PercentageCard/>

            {expand ?
                <>

                    <ContentHome/>
                </>
            :    
                <S.SecoundView>
                    <S.SecoundContentView>
                        <S.LabelTitle>Estatísticas gerais</S.LabelTitle>
                        <S.CardView>
                            <S.CardNumber>22</S.CardNumber>
                            <S.CardSubtitle>Melhor sequência de pratos dentro da dieta</S.CardSubtitle>
                        </S.CardView>
                        <S.CardView>
                            <S.CardNumber>22</S.CardNumber>
                            <S.CardSubtitle>Melhor sequência de pratos dentro da dieta</S.CardSubtitle>
                        </S.CardView>
                        <S.ViewSmallCards>
                            <S.SmallCard  style={{backgroundColor: theme.COLORS.GREEN_LIGHT}}>
                                <S.TitleSmallCard>99</S.TitleSmallCard>
                                <S.SubTitleSmallCard>Refeições dentro da dieta</S.SubTitleSmallCard>
                            </S.SmallCard>
                            <S.SmallCard  style={{backgroundColor: theme.COLORS.RED_LIGHT}}>
                                <S.TitleSmallCard>10</S.TitleSmallCard>
                                <S.SubTitleSmallCard>Refeições fora da dieta</S.SubTitleSmallCard>
                            </S.SmallCard>
                        </S.ViewSmallCards>
                    </S.SecoundContentView>
                </S.SecoundView>
            }


            
        </S.Container>
    )
}