import React from 'react';
import Header from '../components/header/headerBody';
import './style.css';

export const CenterLayout = ({ children }: React.PropsWithChildren<any>) => {
    return <div className='CenterLayout'>
        {children}
    </div>
}

const Layout = ({ children }: React.PropsWithChildren<any>) => {
    return <>
        <Header />
        {children}
    </>
}

export default Layout;