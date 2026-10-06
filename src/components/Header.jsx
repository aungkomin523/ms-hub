import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useLocation, Link, useMatch } from 'react-router-dom'

const Header = ({ theme, setTheme }) => {

    const location = useLocation()
    const [expanded, setExpanded] = useState(false)

    const isDashboardRoute = useMatch('/dashboard')


    useEffect(() => {
        setExpanded(false)
    }, [location.pathname])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const handleSignOut = () => {
        console.log('Signed Out');
    }

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            onToggle={setExpanded}
        >
            <Container>

                <Navbar.Brand as={NavLink} to="/" className="brand">
                    Name
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="main-navigation"
                    className="nav-toggle"
                >
                    <span className="toggle-bar" />
                    <span className="toggle-bar" />
                    <span className="toggle-bar" />
                </Navbar.Toggle>

                <Navbar.Collapse id="main-navigation">
                    <Nav className="ms-auto align-items-lg-center gap-2 gap-lg-3">

                        {/* 1. Page Links */}
                        <Nav.Link as={NavLink} to="/" end className="nav-link-item">
                            Home
                        </Nav.Link>

                        {/* <Nav.Link as={NavLink} to="/pricing" end className="nav-link-item">
                            Pricing
                        </Nav.Link> */}

                        {/* 2. Secondary / Returning User */}
                        {isDashboardRoute ? <Nav.Link as={NavLink} to='/' onClick={handleSignOut} className="nav-link-item me-lg-2">
                            Sign Out
                        </Nav.Link> : <Nav.Link as={NavLink} to="/sign-in" className="nav-link-item me-lg-2">
                            Sign In
                        </Nav.Link>}

                        {/* 3. Primary CTA */}
                        {/* <Button
                            as={Link}
                            to="/sign-up"
                            className="fw-bold border-0 px-3 py-2 text-white rounded"
                            style={{
                                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)',
                                fontSize: '0.92rem'
                            }}
                        >
                            Start Free Trial
                        </Button> */}

                        {/* 4. Global Settings / Utilities */}
                        {/* Custom Pill Toggle with Embedded Animated Icon */}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                            className="border-0 p-0 position-relative d-inline-flex align-items-center ms-lg-3 my-2 my-lg-0"
                            style={{
                                width: '54px',
                                height: '28px',
                                borderRadius: '30px',
                                backgroundColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
                                border: theme === 'dark' ? '1px solid #334155' : '1px solid #cbd5e1',
                                cursor: 'pointer',
                                transition: 'background-color 0.25s ease, border-color 0.25s ease'
                            }}
                        >
                            {/* Sliding thumb with icon inside */}
                            <div
                                className="d-flex align-items-center justify-content-center position-absolute shadow-sm"
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    borderRadius: '50%',
                                    backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
                                    transform: theme === 'dark' ? 'translateX(28px)' : 'translateX(3px)',
                                    transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s ease',
                                    fontSize: '11px',
                                    lineHeight: 1
                                }}
                            >
                                {theme === 'light' ? (
                                    /* Sun Icon */
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#eab308"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="4" />
                                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                                    </svg>
                                ) : (
                                    /* Moon Icon */
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="#ffffff"
                                        stroke="#ffffff"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                )}
                            </div>
                        </button>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Header