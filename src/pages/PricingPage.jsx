import React from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PricingPage = () => {
    const navigate = useNavigate()

    const trialFeatures = [
        'Full platform access',
        'Unlimited projects during trial',
        'Team collaboration & invites',
        'Timeline & milestone tracking',
        'AI Project Planner',
        'AI Project Insights',
        'No credit card required'
    ]

    const proFeatures = [
        'Unlimited projects',
        'Up to 15 team members per project',
        'Unlimited tasks & milestones',
        'AI Project Planner',
        'AI Project Insights',
        'Higher AI usage limits',
        'Advanced project analytics',
        'Priority support'
    ]

    return (
        <Container fluid className="min-vh-100 px-3 px-md-5 py-5">
            {/* Header / Hero */}
            <Row className="justify-content-center text-center mb-5">
                <Col xs={12} lg={8}>
                    <div className="d-inline-flex align-items-center px-3 py-2 mb-3 fw-bold bg-primary-subtle text-primary rounded-pill">
                        <span className="me-2 text-primary">●</span>
                        SIMPLE, TRANSPARENT PRICING
                    </div>

                    <h1
                        className="fw-bold mb-3"
                        style={{
                            fontSize: 'clamp(2.3rem, 6vw, 4.3rem)',
                            letterSpacing: '-0.04em',
                            lineHeight: 1.05
                        }}
                    >
                        Start your{' '}
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #7c3aed, #2563eb)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            30-day free trial
                        </span>
                    </h1>

                    <p
                        className="mx-auto mb-0 text-body-secondary"
                        style={{
                            maxWidth: '650px',
                            fontSize: '1.05rem',
                            lineHeight: 1.7
                        }}
                    >
                        No commitment. Experience the full power of AI-powered project planning.
                        Upgrade when you're ready.
                    </p>
                </Col>
            </Row>

            {/* Pricing Cards */}
            <Row className="g-4 justify-content-center align-items-stretch">
                {/* 30-Day Free Trial */}
                <Col xs={12} md={6} lg={5}>
                    <Card
                        className="h-100 border rounded overflow-hidden"
                        style={{
                            minHeight: '520px',
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
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div
                                    className="d-flex align-items-center justify-content-center bg-info-subtle"
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        color: '#0891b2',
                                        fontSize: '1.5rem',
                                        fontWeight: 800
                                    }}
                                >
                                    ✓
                                </div>
                                <Badge bg="info-subtle" className="text-info px-3 py-2 rounded-pill fw-semibold">
                                    Zero Risk
                                </Badge>
                            </div>

                            <Card.Title className="fw-bold mb-1" style={{ fontSize: '1.7rem' }}>
                                30-Day Trial
                            </Card.Title>

                            <div className="d-flex align-items-baseline gap-1 my-3">
                                <span className="fw-bold" style={{ fontSize: '2.5rem', letterSpacing: '-0.03em' }}>
                                    £0
                                </span>
                                <span className="text-body-secondary">/ first 30 days</span>
                            </div>

                            <Card.Text className="mb-4 text-body-secondary" style={{ lineHeight: 1.7 }}>
                                Complete access to all tools so your entire team can hit the ground running.
                            </Card.Text>

                            <div className="mt-2 mb-4 d-flex flex-column gap-3">
                                {trialFeatures.map((item, idx) => (
                                    <div key={idx} className="d-flex align-items-center text-body-secondary small">
                                        <span className="me-2 text-info fw-bold">✓</span>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-2">
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => navigate('/register')}
                                    className="w-100 py-3 fw-bold rounded border-2"
                                >
                                    Start Free Trial
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Pro Tier */}
                <Col xs={12} md={6} lg={5}>
                    <Card
                        className="h-100 border rounded overflow-hidden position-relative"
                        style={{
                            minHeight: '520px',
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
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div
                                    className="d-flex align-items-center justify-content-center bg-primary-subtle rounded-3"
                                    style={{
                                        width: '56px',
                                        height: '56px'
                                    }}
                                >
                                    <svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <linearGradient id="proIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#7c3aed" />
                                                <stop offset="100%" stopColor="#2563eb" />
                                            </linearGradient>
                                        </defs>

                                        {/* Crisp multi-star / sparkle shape */}
                                        <path
                                            d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z"
                                            fill="url(#proIconGradient)"
                                        />
                                        <path
                                            d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z"
                                            fill="url(#proIconGradient)"
                                        />
                                    </svg>
                                </div>
                                <Badge
                                    className="px-3 py-2 rounded-pill fw-semibold border-0"
                                    style={{
                                        background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                        color: '#fff'
                                    }}
                                >
                                    Most Popular
                                </Badge>
                            </div>

                            <Card.Title className="fw-bold mb-1 text-primary" style={{ fontSize: '1.7rem' }}>
                                Pro
                            </Card.Title>

                            <div className="d-flex align-items-baseline gap-1 my-3">
                                <span className="fw-bold" style={{ fontSize: '2.5rem', letterSpacing: '-0.03em' }}>
                                    £5
                                </span>
                                <span className="text-body-secondary">/ month</span>
                            </div>

                            <Card.Text className="mb-4 text-body-secondary" style={{ lineHeight: 1.7 }}>
                                Continuous planning, smart insights, and higher capacity for growing teams.
                            </Card.Text>

                            <div className="mt-2 mb-4 d-flex flex-column gap-3">
                                {proFeatures.map((item, idx) => (
                                    <div key={idx} className="d-flex align-items-center text-body-secondary small">
                                        <span className="me-2 text-primary fw-bold">✓</span>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-2">
                                <Button
                                    onClick={() => navigate('/register?plan=pro')}
                                    className="w-100 py-3 fw-bold border-0 rounded"
                                    style={{
                                        background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                        boxShadow: '0 10px 22px rgba(124, 58, 237, 0.22)'
                                    }}
                                >
                                    Get Started with Pro
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Trial Guarantee Strip */}
            <Row className="justify-content-center mt-5">
                <Col xs={12} lg={10}>
                    <Card
                        className="border-0 overflow-hidden"
                        style={{
                            boxShadow: '0 20px 50px rgba(48, 43, 85, 0.10)'
                        }}
                    >
                        <div
                            style={{
                                height: '8px',
                                background: 'linear-gradient(90deg, #7c3aed, #06b6d4, #10b981)'
                            }}
                        />
                        <Card.Body className="p-4 p-md-5">
                            <Row className="align-items-center text-center text-md-start">
                                <Col md={8}>
                                    <h4 className="fw-bold mb-2">How the 30-day trial works</h4>
                                    <p className="text-body-secondary mb-0" style={{ lineHeight: 1.7 }}>
                                        Every new account automatically gets full access for 30 days. No credit card is
                                        required upfront. Once your trial ends, your data stays intact and you can upgrade
                                        to Pro anytime to resume editing and AI workflows.
                                    </p>
                                </Col>
                                <Col md={4} className="text-md-end mt-4 mt-md-0">
                                    <Button
                                        onClick={() => navigate('/register')}
                                        className="py-2 px-4 fw-bold border-0 rounded"
                                        style={{
                                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                            boxShadow: '0 10px 22px rgba(124, 58, 237, 0.22)'
                                        }}
                                    >
                                        Try Free for 30 Days
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Subtle Footer Note */}
            <Row className="justify-content-center text-center mt-4">
                <Col xs={12}>
                    <div className="small text-body-secondary">
                        30 days free • Cancel anytime • Stripe secure checkout • Instant activation
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PricingPage