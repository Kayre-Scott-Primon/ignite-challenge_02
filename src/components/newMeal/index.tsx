import { Button, ButtonContainer, ButtonLabel, ButtonOption, ButtonOptionLabel, ButtonOptionView, Container, Content, ContentView, DateContainer, DateView, FormView, Header, HeaderLabel, InputDate, InputDescription, InputHour, InputName, TitleInput } from './styles'

export default function NewMeal() {

    return (
        <>
            <FormView>
                <TitleInput>Nome</TitleInput>
                <InputName/>
                <TitleInput>Descrição</TitleInput>
                <InputDescription/>
                <DateContainer>
                    <DateView>
                        <TitleInput>Data</TitleInput>
                        <InputDate/>
                    </DateView>
                    <DateView>
                        <TitleInput>Hora</TitleInput>
                        <InputHour/>
                    </DateView>
                </DateContainer>
                <ButtonContainer> 
                    <TitleInput>Está dentro da dieta?</TitleInput>
                    <ButtonOptionView>
                        <ButtonOption>
                            <ButtonOptionLabel>Sim</ButtonOptionLabel>
                        </ButtonOption>
                        <ButtonOption>
                            <ButtonOptionLabel>Não</ButtonOptionLabel>
                        </ButtonOption>
                    </ButtonOptionView>
                </ButtonContainer>
            </FormView>
            <Button>
                <ButtonLabel>Cadastrar refeição</ButtonLabel>
            </Button>
        </>
    )
}