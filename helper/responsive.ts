import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 393;
const scaleVertical = SCREEN_HEIGHT / 852;

export function actuatedNormalize(size: number): number {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export function actuatedNormalizeVertical(size: number): number {
  const newSize = size * scaleVertical;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export const s = actuatedNormalize;
export const vs = actuatedNormalizeVertical;
