import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
// import logo from '..././images/header/KDpgvguMpGfqaHPjicRK.svg';

const { Search } = Input;

export default function Navbar() {
  const onSearch = value => console.log(value);
  return (
    <>
      <section className="section-header">
        <div className="header-inner">
          <div className="header-left">
            <div className="logo">
              <Link>
                <img src="" alt="" />
              </Link>
            </div>
          </div>
          <div className="header-center">
            <div className="form-search">
              <Space direction="vertical">
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  enterButton
                />
              </Space>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
