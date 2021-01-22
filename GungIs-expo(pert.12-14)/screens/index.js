import LoginScreen from './Login';
import SignupScreen from './Signup';
import DetailsScreen from './Details';
import TabScreen from './Menu/Tab';
import FormDetail from './Menu/form';
import InputanScreen from './Menu/Inputan';
import InputScreens from './Menu/Input';
import UpdateScreens from './Menu/Update';

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
  {
    name: 'Input',
    component: InputScreens,
    options: { headerShown: false },
  },
  {
    name: 'Update',
    component: UpdateScreens,
    options: { headerShown: false },
  },

  {
    name: 'Inputan',
    component: InputanScreen,
    options: { headerShown: false },
  },
];
