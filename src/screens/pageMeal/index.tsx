import NewMeal from '@components/newMeal'
import { Container, Content, ContentView, Header, HeaderLabel } from './styles'
import Meal from '@components/meal';
import EditMeal from '@components/editMeal';


export default function PageMeal() {

    const pageState = 'EditMeal';

    return (
        <Container>
            <Header>
                <HeaderLabel>
                    {pageState == 'Meal' && 'Refeição'}
                    {pageState == 'NewMeal' && 'Nova refeição'}
                    {pageState == 'EditMeal' && 'Editar refeição'}
                </HeaderLabel>
            </Header>
            
            <Content>
                <ContentView>
                    { pageState == 'Meal' && <Meal/>}
                    { pageState == 'NewMeal' && <NewMeal/>}
                    {pageState == 'EditMeal' && <EditMeal/>}
                </ContentView>
            </Content>
        </Container>
    )
}