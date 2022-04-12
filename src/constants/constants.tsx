import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

export const DEVICE_WIDTH = window.width;
export const DEVICE_HEIGHT = window.height;

export const RATIO = DEVICE_HEIGHT / DEVICE_WIDTH;
