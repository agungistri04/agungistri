import LoginScreen from './Login';
import SignupScreen from './Signup';
import DetailsScreen from './Details';
import TabScreen from './Menu/Tab';
import FormDetail from './Menu/form'

module.exports = [
  {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: { headerShown: false },
  },
  {
    name: 'Tab',
    component: TabScreen,
    options: { headerShown: false },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: { headerShown: false },
  },
  {
    name: 'Form',
    component: FormDetail,
    options: { headerShown: false },
  },
];
