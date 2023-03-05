import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const LoadingIndicator = () => {
  return (
    <div className="loading-icon">
      <Spin indicator={antIcon} />
    </div>
  );
};

export default LoadingIndicator;
