import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

let wscale = SCREEN_WIDTH / 360;
let hscale = SCREEN_HEIGHT / 800;

export function fontSize(size: number, based: string) {
  if (hscale && wscale) {
    const newSize = based === 'height' ? size * wscale : size * wscale;
    if (Platform.OS === 'ios') {
      // console.log('fontSize', Math.round(PixelRatio.roundToNearestPixel(18)));
      // console.log('newSize', Math.round(PixelRatio.roundToNearestPixel(newSize)));
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
    }
  }
  // console.warn('ResponsiveScreen.hscale', size);
  // return size;
}

export function normalize(size: number, based: string) {
  // console.warn('ResponsiveScreen.hscale', ResponsiveScreen.hscale);
  if (hscale && wscale) {
    const newSize = based === 'height' ? size * wscale : size * wscale;
    // console.log('newSize',newSize)
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
  }
  // return size;
}
