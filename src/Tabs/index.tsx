import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Principal from "./Principal";
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import Explorar from "./Explorar";

const screenOptions={
    tabBarStyle: {
        backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#FFF"
}

const tab=[
    {
        name: 'Início',
        component: Principal,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    }
]

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {tab.map((tab)=>(
            <Tab.Screen
                key={tab.name}
                name={tab.name}
                component={tab.component}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name={tab.icon} color={color} size={size} />
                    )
                }}
            />
            ))}
            
        </Tab.Navigator>
    )
}