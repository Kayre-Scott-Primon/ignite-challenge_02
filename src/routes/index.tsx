import { NavigationContainer, useTheme } from "@react-navigation/native";
import { View } from "react-native";
import { AppRoutes } from "./app.routes";


export default function Routes() {
    //const { COLORS } = useTheme()

    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer>
        </View>
    )
}