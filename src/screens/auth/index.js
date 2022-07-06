import React from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {__checkWelcomeScreenStatus} from '../../logic/auth';
import MainNavigation from '../../navigation/main';
import WelcomeScreen from '../welcome';

export const AuthView = ({}) => {
  const {isFirstLaunch} = useSelector(state => state.authReducer);

  useEffect(() => {
    checkWelcomeScreenStatus();
  }, []);

  const checkWelcomeScreenStatus = async () => {
    try {
      __checkWelcomeScreenStatus({});
    } catch (error) {
      console.log('checkWelcomeScreenStatus:err', error);
    }
  };

  if (isFirstLaunch) {
    return <WelcomeScreen />;
  } else {
    return <MainNavigation />;
  }
};

const AuthScreen = ({}) => {
  return <AuthView />;
};
export default AuthScreen;
