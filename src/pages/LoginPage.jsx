import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const proFeatures = [
        'Unlimited active projects & workspaces',
        'Up to 15 team members per project',
        'Unlimited tasks, milestones & roadmaps',
        'High-speed AI Project Planner limits',
        'Automated AI timeline risk insights',
        'Comprehensive project analytics & exports',
        'Priority technical support'
    ]

    const handleChange = (e) => {
        setCredentials(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            // Replace with your login API call
            setTimeout(() => {
                setLoading(false)
                navigate('/')
            }, 700)
        } catch (err) {
            setError(err.message || 'Invalid email or password.')
            setLoading(false)
        }
    }

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center px-3 px-md-5 py-5">
            <Row className="w-100 justify-content-center g-4" style={{ maxWidth: '1080px' }}>
                {/* Card 1: Login Form */}
                <Col xs={12} lg={6}>
                    <Card
                        className="h-100 border rounded overflow-hidden"
                        style={{
                            boxShadow: '0 20px 50px rgba(48, 43, 85, 0.10)'
                        }}
                    >
                        <div
                            style={{
                                height: '8px',
                                background: 'linear-gradient(90deg, #7c3aed, #4f46e5)'
                            }}
                        />

                        <Card.Body className="p-4 p-md-5 d-flex flex-column">
                            <div className="mb-4">
                                <h2 className="fw-bold mb-1">Welcome back</h2>
                                <p className="text-body-secondary small mb-0">
                                    Sign in to your project workspace
                                </p>
                            </div>

                            {error && (
                                <Alert variant="danger" className="py-2 small">
                                    {error}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="loginEmail">
                                    <Form.Label className="small fw-semibold">Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="name@company.com"
                                        value={credentials.email}
                                        onChange={handleChange}
                                        required
                                        className="py-2"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="loginPassword">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <Form.Label className="small fw-semibold mb-0">Password</Form.Label>
                                        <Link
                                            to="/forgot-password"
                                            className="small text-primary text-decoration-none"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        required
                                        className="py-2"
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-100 py-3 fw-bold border-0 rounded text-white mt-3"
                                    style={{
                                        background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                        boxShadow: '0 10px 22px rgba(124, 58, 237, 0.22)'
                                    }}
                                >
                                    {loading ? 'Signing in...' : 'Sign In'}
                                </Button>
                            </Form>

                            <div className="text-center mt-auto pt-4">
                                <span className="small text-body-secondary">
                                    New here?{' '}
                                    <Link to="/register" className="text-primary fw-semibold text-decoration-none">
                                        Start 30-Day Free Trial
                                    </Link>
                                </span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Card 2: Pro Plan Showcase */}
                {/* <Col xs={12} lg={6}>
                    <Card
                        className="h-100 border rounded overflow-hidden"
                        style={{
                            boxShadow: '0 20px 50px rgba(48, 43, 85, 0.10)'
                        }}
                    >
                        <div
                            style={{
                                height: '8px',
                                background: 'linear-gradient(90deg, #7c3aed, #2563eb)'
                            }}
                        />

                        <Card.Body className="p-4 p-md-5 d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill fw-semibold">
                                        Upgrade to Pro
                                    </span>
                                    <div className="d-flex align-items-baseline gap-2 mt-2">
                                        <h2 className="fw-bold mb-0" style={{ fontSize: '2.4rem', letterSpacing: '-0.03em' }}>
                                            £5
                                        </h2>
                                        <span className="text-body-secondary small">/ month</span>
                                    </div>
                                </div>

                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ width: '48px', height: '48px' }}
                                >
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                        <defs>
                                            <linearGradient id="proSvgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#7c3aed" />
                                                <stop offset="100%" stopColor="#2563eb" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z"
                                            fill="url(#proSvgGrad)"
                                        />
                                        <path
                                            d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z"
                                            fill="url(#proSvgGrad)"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <p className="text-body-secondary small mb-4" style={{ lineHeight: 1.7 }}>
                                After your 30-day free trial, keep your team shipping with uninterrupted AI planning and expanded capacity.
                            </p>

                            <div className="d-flex flex-column gap-2 mb-4">
                                {proFeatures.map((feat, idx) => (
                                    <div key={idx} className="d-flex align-items-center text-body-secondary small">
                                        <span className="me-2 text-primary fw-bold">✓</span>
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-2">
                                <Button
                                    as={Link}
                                    to="/pricing"
                                    variant="outline-secondary"
                                    className="w-100 py-2 fw-semibold rounded border-2"
                                >
                                    View Full Pricing Details
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>
        </Container>
    )
}

export default LoginPage