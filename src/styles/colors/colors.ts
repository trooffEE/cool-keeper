import { makeStyles } from '@material-ui/core/styles'
// In the future may be deleted
interface IColors {
  black: IColorAtom,
  cream: IColorAtom,
  white: string,
  // creamDarken: '#DBC39C',
  // creamDarkenDeep: '#756853',
  // creamLighten: '#F5DAAE',
}

interface IColorAtom {
  primary: string,
  secondary: string,
}

const colors: IColors = {
  white: '#FBFBFB',
  black: {
    primary: '#343434',
    secondary: '#4a4a4a',
  },
  cream: {
    primary: '#B5A181',
    secondary: '#DBC39C',
  },
  // creamDarken: '#DBC39C',
  // creamDarkenDeep: '#756853',
  // creamLighten: '#F5DAAE',
}

export default colors
