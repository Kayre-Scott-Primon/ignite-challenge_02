import NewMeal from '@components/newMeal'
import { Container, Content, ContentView, Header, HeaderLabel } from './styles'
import Meal from '@components/meal';

export default function PageMeal() {

    const new_meal = false;

    return (
        <Container>
            <Header>
                <HeaderLabel>Nova refeição</HeaderLabel>
            </Header>
            
            <Content>
                <ContentView>
                {new_meal
                    ?   <NewMeal/>
                    :   <Meal/>
                }
                </ContentView>
            </Content>
        </Container>
    )
}