import { Text } from 'react-native'
import { Header } from '../../components/header'
import * as S from './styles'
import { PercentageCard } from '@components/percentageCard'

export default function Home() {

    return (
        <S.Container>
            <Header/>
            <PercentageCard/>
        </S.Container>
    )
}