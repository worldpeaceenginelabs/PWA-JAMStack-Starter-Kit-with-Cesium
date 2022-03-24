import AppleSvg from './apple.svg';
import React from 'react';

const AppleIcon: React.FunctionComponent = (props) => (
  <img {...props} src={AppleSvg} />
);

export default AppleIcon;
