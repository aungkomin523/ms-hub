import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const targetPlan = searchParams.get('plan') || 'trial'

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        agreeToTerms: false
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const trialPerks = [
        { title: 'Full Platform Access', desc: 'No locked features or artificial friction during your trial.' },
        { title: 'Unlimited Projects', desc: 'Set up as many workspaces, tasks, and roadmaps as you need.' },
        { title: 'AI Project Planner & Insights', desc: 'Generate scopes and surface potential timeline risks instantly.' },
        { title: 'Team Collaboration', desc: 'Invite your teammates right away to test collaborative workflows.' },
        { title: 'Zero Risk', desc: 'No credit card required upfront. Cancel or upgrade whenever you want.' }
    ]

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!formData.agreeToTerms) {
            setError('Please accept the terms and conditions to continue.')
            return
        }

        setLoading(true)
        try {
            // Replace with your registration API call
            setTimeout(() => {
                setLoading(false)
                navigate('/')
            }, 800)
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.')
            setLoading(false)
        }
    }

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center px-3 px-md-5 py-5">
            <Row className="w-100 justify-content-center g-4" style={{ maxWidth: '1080px' }}>
                {/* Card 1: Registration Form */}
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
                                <h2 className="fw-bold mb-1">Create your account</h2>
                                <p className="text-body-secondary small mb-0">
                                    Start your 30-day free trial in seconds.
                                </p>
                            </div>

                            {error && (
                                <Alert variant="danger" className="py-2 small">
                                    {error}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="registerName">
                                    <Form.Label className="small fw-semibold">Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        placeholder="Alex Smith"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="py-2"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="registerEmail">
                                    <Form.Label className="small fw-semibold">Work Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="alex@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="py-2"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="registerPassword">
                                    <Form.Label className="small fw-semibold">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="At least 8 characters"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        minLength={8}
                                        className="py-2"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="registerTerms">
                                    <Form.Check
                                        type="checkbox"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleChange}
                                        label={
                                            <span className="small text-body-secondary">
                                                I agree to the <Link to="/terms" className="text-decoration-none text-primary">Terms</Link> and <Link to="/privacy" className="text-decoration-none text-primary">Privacy Policy</Link>
                                            </span>
                                        }
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-100 py-3 fw-bold border-0 rounded text-white"
                                    style={{
                                        background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                        boxShadow: '0 10px 22px rgba(124, 58, 237, 0.22)'
                                    }}
                                >
                                    {loading ? 'Creating workspace...' : 'Start 30-Day Free Trial'}
                                </Button>
                            </Form>

                            <div className="text-center mt-auto pt-4">
                                <span className="small text-body-secondary">
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-primary fw-semibold text-decoration-none">
                                        Sign In
                                    </Link>
                                </span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Card 2: 30-Day Free Trial Info */}
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
                                background: 'linear-gradient(90deg, #06b6d4, #6366f1)'
                            }}
                        />

                        <Card.Body className="p-4 p-md-5 d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <div
                                    className="d-flex align-items-center justify-content-center me-3"
                                    style={{ width: '48px', height: '48px' }}
                                >
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                        <defs>
                                            <linearGradient id="trialSvgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#06b6d4" />
                                                <stop offset="100%" stopColor="#6366f1" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z"
                                            fill="url(#trialSvgGrad)"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <span className="badge bg-info-subtle text-info px-3 py-1 rounded-pill fw-semibold">
                                        30 Days Free
                                    </span>
                                    <h4 className="fw-bold mb-0 mt-1">Try everything included</h4>
                                </div>
                            </div>

                            <p className="text-body-secondary small mb-4" style={{ lineHeight: 1.7 }}>
                                Test every feature with your real team before making any commitments. Here is what you unlock immediately:
                            </p>

                            <div className="d-flex flex-column gap-3 mb-4">
                                {trialPerks.map((perk, idx) => (
                                    <div key={idx} className="d-flex align-items-start">
                                        <span className="text-info fw-bold me-2 mt-1" style={{ fontSize: '1rem' }}>✓</span>
                                        <div>
                                            <div className="fw-bold small">{perk.title}</div>
                                            <div className="text-body-secondary small">{perk.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto p-3 rounded bg-body-tertiary">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="small text-body-secondary">Trial duration:</span>
                                    <span className="fw-bold small">30 days from signup</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-1">
                                    <span className="small text-body-secondary">Credit card required:</span>
                                    <span className="fw-bold small text-success">None</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage