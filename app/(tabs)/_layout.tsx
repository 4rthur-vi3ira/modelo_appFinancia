import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true, tabBarStyle: { backgroundColor: '#387ce2ff', borderTopColor:'#f22' } }} >
      <Tabs.Screen name="index" options={{ title:'Início', tabBarIcon:({color,size})=>
        <Entypo name="shopping-cart" size={24} color="white" /> }} />

  <Tabs.Screen name="cursosFinanceiros" options={{ title:'Cursos Financeiros', tabBarIcon:({color,size})=>
        <MaterialCommunityIcons name="finance" size={24} color="white" /> }} />
        
        <Tabs.Screen name="sensores" options={{ title:'Sensores', tabBarIcon:({color,size})=>
        <Entypo name="home" size={24} color="white" /> }} />

      <Tabs.Screen name="usuario" options={{ title:'Usuário', tabBarIcon:({color,size})=>
        <Entypo name="user" size={24} color="white" /> }} />

      <Tabs.Screen name="dolar" options={{ title:'Dólar', tabBarIcon:({color,size})=>
        <FontAwesome name="usd" size={24} color="white" /> }} />

      <Tabs.Screen name="SimuladorFinanceiro" options={{ title:'Financeiro', tabBarIcon:({color,size})=>
        <Octicons name="graph" size={24} color="white"  /> }} />
        
        
    </Tabs>
  )
}