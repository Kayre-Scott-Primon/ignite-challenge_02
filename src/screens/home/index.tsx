import { Text } from 'react-native'
import { Header } from '../../components/header'
import * as S from './styles'
import { PercentageCard } from '@components/percentageCard'
import ContentHome from '@screens/ContentHome'

export default function Home() {

    const expand = true

    return (
        <S.Container>
            {expand && <Header/>}
            <PercentageCard/>

            <ContentHome/>
            
        </S.Container>
    )
}