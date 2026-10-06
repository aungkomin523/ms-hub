import {useEffect, useState} from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink, Outlet, useMatch } from 'react-router-dom'
import Header from '../components/Header'

function AppLayout({theme, setTheme}){
    const isBoardRoute = useMatch('/project/:projectId')

    return (
        <div className='app-layout d-flex flex-column min-vh-100'>
            <Container fluid className='p-0'>
                {!isBoardRoute && <Header theme={theme} setTheme={setTheme}/>}
                <main>
                    <Outlet />
                </main>
            </Container>
        </div>
    )
}

export default AppLayout