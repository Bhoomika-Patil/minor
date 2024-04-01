// import * as React from 'react'; 
// import MainContainer from './navigation/MainContainer';
// import LandingPage from './navigation/screens/LandingPage';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './navigation/screens/Home';
// import Questions from './navigation/screens/Questions';
// import Login from './navigation/screens/Login';
// import Register from './navigation/screens/Register';
// import SignInScreen from './SignInScreen';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="LandingPage" component={LandingPage} />
//         <Stack.Screen name="MainContainer" component={MainContainer} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Questions" component={Questions} />
//         {/* <Stack.Screen name="Login" component={Login} /> */}
//         {/* <Stack.Screen name="Register" component={Register} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import * as React from 'react'; 
// import MainContainer from './navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Screens_new/Signup';
import Home from './Screens_new/Home';
// import Questions from './navigation/screens/Questions';
// import Landing_1 from './navigation/Screens_new/Landing_1';
// import Login from './navigation/Screens_new/Login';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing_1" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='Landing_1' component={Landing_1}/> */}
        {/* <Stack.Screen name='Login' component={Login}/> */}
        <Stack.Screen name='Signup' component={Signup}/>
        {/* <Stack.Screen name="MainContainer" component={MainContainer} /> */}
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Questions" component={Questions} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}