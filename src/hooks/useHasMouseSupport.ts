import useMediaQuery from '@material-ui/core/useMediaQuery';

const useHasMouseSupport = () => {
  return useMediaQuery(`(pointer:fine)`);
};

export default useHasMouseSupport;
