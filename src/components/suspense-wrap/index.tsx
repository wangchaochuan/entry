import React, { Suspense, FC } from 'react';
import { Spin } from 'antd';

const SuspenseWrap: FC<{ render?: React.ReactNode }> = ({ render }) => {
  return (
    <React.Fragment>
      <Suspense fallback={<Spin size="large" delay={600} />}>{render}</Suspense>
    </React.Fragment>
  );
};

export default SuspenseWrap;
