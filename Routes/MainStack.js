import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import  Homescreen  from '../Screens/Homescreen';
import  Det1  from '../Screens/Det1';
import  Det2  from '../Screens/Det2';
import  Det3  from '../Screens/Det3';

const screens = {
Home: {
    screen: Homescreen,
    navigationOptions: {
    headerShown: false,
   }
},

Details1: {
    screen: Det1 ,
    navigationOptions: {
        headerShown: false,
       }
    },
    Details2: {
        screen: Det2 ,
        navigationOptions: {
            headerShown: false,
           }
        },
Details3: {
        screen: Det3 ,
        navigationOptions: {
        headerShown: false,
             }
            }


};

const Stack1 = createStackNavigator(screens);
export default createAppContainer(Stack1);