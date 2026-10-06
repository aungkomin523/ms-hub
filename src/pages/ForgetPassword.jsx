import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // Simulate password reset request
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 700)
    }

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center px-3 py-5">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6} xl={4}>
                    <Card
                        className="border rounded overflow-hidden"
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

                        <Card.Body className="p-4 p-md-5">
                            <div className="text-center mb-4">
                                <h2 className="fw-bold mb-1">Reset password</h2>
                                <p className="text-body-secondary small mb-0">
                                    Enter your account email to receive recovery instructions
                                </p>
                            </div>

                            {submitted ? (
                                <div className="text-center py-3">
                                    <Alert variant="success" className="small mb-4 text-start">
                                        If an account exists for <strong>{email}</strong>, a password reset link has been sent.
                                    </Alert>
                                    <Link to="/login" className="text-decoration-none">
                                        <Button
                                            variant="outline-secondary"
                                            className="w-100 py-2 fw-semibold rounded"
                                        >
                                            Return to Sign In
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4" controlId="resetEmail">
                                        <Form.Label className="small fw-semibold">Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="name@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="py-2"
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
                                        {loading ? 'Sending link...' : 'Send Reset Link'}
                                    </Button>

                                    <div className="text-center mt-4">
                                        <Link to="/sign-in" className="small text-body-secondary text-decoration-none">
                                            ← Back to Sign In
                                        </Link>
                                    </div>
                                </Form>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ForgotPasswordPage