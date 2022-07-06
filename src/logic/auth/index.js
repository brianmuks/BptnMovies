import AsyncStorage from '@react-native-community/async-storage';
import {IS_FIRSRT_LAUNCH} from '../../constants/auth';
import authRtkSlice from '../../redux/reducers/auth';
import reduxStore from '../../redux/store';

export const __onViewWelcomeScreen = async ({}) => {
  try {
    await AsyncStorage.setItem(IS_FIRSRT_LAUNCH, 'false');
    reduxStore.dispatch(
      authRtkSlice.actions.setFirstLaunchStatus({
        isFirstLaunch: false,
      }),
    );
    reduxStore.dispatch(
      authRtkSlice.actions.setFirstLaunchStatus({
        isFirstLaunch: false,
      }),
    );
  } catch (error) {
    console.log('__onViewWelcomeScreen:err', error);
  }
};

export const __checkWelcomeScreenStatus = async ({}) => {
  try {
    const firstLaunchStatus = JSON.parse(
      await AsyncStorage.getItem(IS_FIRSRT_LAUNCH),
    );
    reduxStore.dispatch(
      authRtkSlice.actions.setFirstLaunchStatus({
        isFirstLaunch: firstLaunchStatus,
      }),
    );
    return firstLaunchStatus;
  } catch (error) {
    console.log('__checkWelcomeScreenStatus:err', error);
  }
};
