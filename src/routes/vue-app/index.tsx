import { FC } from 'react';
import { vueAppMicroConfig } from '@constants/micro-config';

const VueApp: FC = () => {
  return <div id={vueAppMicroConfig.container.replace('#', '')}></div>;
};

export default VueApp;
