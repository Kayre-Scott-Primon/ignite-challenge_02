import NewMeal from '@components/newMeal'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/home'
import PageMeal from '@screens/pageMeal'
import Meal from '@screens/pageMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {

    return (
        <Navigator
            screenOptions={{ headerShown: false}}
        >
            <Screen
                name="PageMeal"
                component={PageMeal}
            />
            <Screen
                name="Home"
                component={Home}
            />

        </Navigator>
    )
}