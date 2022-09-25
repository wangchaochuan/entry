import { FC } from 'react';
import { reactAppMicroConfig } from '@constants/micro-config';

const ReactApp: FC = () => {
  return <div id={reactAppMicroConfig.container.replace('#', '')}></div>;
};

export default ReactApp;
