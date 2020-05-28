import { subStringIndex } from "../utils/index";
const getMainMenuPath = (pathname) => {
  const slashIndex = subStringIndex("/", pathname, 2);
  const subStrLength = slashIndex === -1 ? pathname.length - 1 : slashIndex - 1;
  return pathname.substr(1, subStrLength);
};

export { getMainMenuPath };
