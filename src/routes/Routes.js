import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import Logo from '../components/Logo';
import Login from '../pages/Login';
import Singup from '../pages/Signup';

const RootStack = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Details: {
        screen: DetailsScreen,
      },
      Logo: {
        screen: Logo,
      },
      Login: {
        screen: Login,
      },
      Signup: {
        screen: Singup,
      }
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);

  export default AppContainer;