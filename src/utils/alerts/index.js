import React from 'react';

import Toast from 'react-native-toast-message';

export const showMsg = ({
  position = 'top',
  text1 = 'Done',
  text2 = ' ', //space is a workaround for this bug ? https://github.com/calintamas/react-native-toast-message/issues/313
  bottomOffset = 40,
  onShow = () => {},
  onHide = () => {},
  timeout = 4000,
  autoHide = true,
  topOffset = 30,
}) =>
  Toast.show({
    type: 'info',
    position,
    text1,
    text2,
    visibilityTime: timeout,
    autoHide,
    topOffset,
    bottomOffset,
    onShow,
    onHide,
  });

export const showOkMsg = ({
  position = 'top',
  text1 = 'Success',
  text2 = ' ',
  bottomOffset = 40,
  onShow = () => {},
  onHide = () => {},
  timeout = 4000,
  autoHide = true,
  topOffset = 30,
}) =>
  Toast.show({
    type: 'success',
    position,
    text1,
    text2,
    visibilityTime: timeout,
    autoHide,
    topOffset,
    bottomOffset,
    onShow,
    onHide,
  });

/**Toasts an alert message indicate an error
 *
 * @param {*} param0
 *
 * @returns null
 */
export const showErrMsg = ({
  position = 'top',
  text1 = 'Error occured',
  text2 = ' ',
  bottomOffset = 40,
  onShow = () => {},
  onHide = () => {},
  timeout = 4000,
  autoHide = true,
  topOffset = 30,
}) =>
  Toast.show({
    type: 'error',
    position,
    text1,
    text2,
    visibilityTime: timeout,
    autoHide,
    topOffset,
    bottomOffset,
    onShow,
    onHide,
  });
