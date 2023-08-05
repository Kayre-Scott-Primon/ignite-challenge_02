import CardInOut from '@components/cardInOut'
import { ButtonContainer, ButtonEmpty, ButtonEmptyIcon, ButtonEmptyText, ButtonFull, ButtonFullIcon, ButtonFullText, Container, InfoContainer, MomentLabel, MomentTitle, NameLabel, NameTitle } from './styles'

export default function Meal() {

    return (
        <>
            <Container>
                <InfoContainer>
                    <NameTitle>Sanduíche</NameTitle>
                    <NameLabel>Sanduíche de pão integral com atum e salada de alface e tomate</NameLabel>
                    <MomentTitle>Data e hora</MomentTitle>
                    <MomentLabel>12/08/2023 ás 16:00</MomentLabel>
                    <CardInOut/>
                </InfoContainer>
                <ButtonContainer>
                    <ButtonFull>
                        <ButtonFullIcon/>
                        <ButtonFullText>Editar refeição</ButtonFullText>
                    </ButtonFull>
                    <ButtonEmpty>
                        <ButtonEmptyIcon/>
                        <ButtonEmptyText>Editar refeição</ButtonEmptyText>
                    </ButtonEmpty>
                </ButtonContainer>
            </Container>
        </>
    )
}