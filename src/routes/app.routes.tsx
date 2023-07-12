import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewMeal from '@screens/NewMeal'
import Home from '@screens/home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {

    return (
        <Navigator
            screenOptions={{ headerShown: false}}
        >
            <Screen
                name="NewMeal"
                component={NewMeal}
            />
            <Screen
                name="Home"
                component={Home}
            />

        </Navigator>
    )
}