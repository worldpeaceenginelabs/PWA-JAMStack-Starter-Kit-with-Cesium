import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useIsSmallDevice = () => {
  const theme = useTheme();

  return useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`);
};

export default useIsSmallDevice;
