import { memo, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import Main from '@routes/entry';

const App = () => {
  return (
    <ConfigProvider locale={zh_CN} virtual={false}>
      <BrowserRouter>
        <Suspense fallback={<Spin size="large" delay={600} />}>
          <Main />
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default memo(App);
