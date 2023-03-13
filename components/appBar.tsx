import { CodeOutlined, CustomerServiceOutlined, FileTextOutlined, HomeOutlined, LinkOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type AppBarProps = {
    hidden: boolean;
}

const AppBar = ({ hidden }: AppBarProps) => {
    const router = useRouter();
    const [appBarClass, setAppBarClass] = useState( hidden ? 'app-bar-hide' : 'app-bar-show');
    
    useEffect(() => {
        if (!hidden) {
            setAppBarClass('app-bar-show')
        } else {
            setAppBarClass('app-bar-hide')
        }
    }, [hidden])

    return (
        <div className='app-bar'>
        <div className={`${appBarClass} ${router.pathname=='/articles/[article]' ? 'app-bar-article' : ''} `}>
        {/* <CodeOutlined />
        <FileTextOutlined />
        <LinkOutlined />
        <CustomerServiceOutlined /> */}
        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/'}>
          <div className="app-bar-element">
            <p>Home</p>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/about'}>
          <div className="app-bar-element">
            <p>About</p>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/articles'}>
          <div className="app-bar-element">
            <p>Articles</p>
          </div>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/music'}>
          <div className="app-bar-element">
            <p>Music</p>
          </div>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/links'}>
          <div className="app-bar-element">
            <p>Links</p>
          </div>
        </Link>
    </div>
    </div>
    )
}

export default AppBar;