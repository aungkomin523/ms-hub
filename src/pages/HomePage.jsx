import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import CreateProjectModal from '../components/CreateProjectModal'

const HomePage = () => {

    const [showCreateModal, setShowCreateModal] = useState(false)

    const handleCreateAction = (e) => {
        e.preventDefault()
        setShowCreateModal(true)
    }

    return (
        <Container
            fluid
            className="min-vh-100 px-3 px-md-5 py-5"
        >

            {/* Hero */}
            <Row className="justify-content-center text-center mb-5">
                <Col xs={12} lg={8}>

                    <div
                        className="d-inline-flex align-items-center px-3 py-2 mb-3 fw-bold bg-primary-subtle text-primary rounded-pill"
                    >
                        <span className="me-2 text-primary">●</span>
                        PLAN • TRACK • COLLABORATE
                    </div>

                    <h1
                        className="fw-bold mb-3"
                        style={{
                            fontSize: 'clamp(2.3rem, 6vw, 4.3rem)',
                            letterSpacing: '-0.04em',
                            lineHeight: 1.05
                        }}
                    >
                        Manage your{' '}
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #7c3aed, #2563eb)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            projects together
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
                        Plan projects, organize tasks, track milestones,
                        and keep your whole team on the same timeline.
                    </p>

                </Col>
            </Row>


            {/* Main Content */}
            <Row className="g-4 justify-content-center">

                {/* Create Project */}
                <Col xs={12} md={6} lg={5}>
                    <Card
                        className="h-100 border rounded overflow-hidden my-card"
                        style={{
                            minHeight: '390px',
                            boxShadow: '0 20px 50px rgba(48, 43, 85, 0.10)'
                        }}
                    >

                        <div
                            style={{
                                height: '8px',
                                background:
                                    'linear-gradient(90deg, #7c3aed, #4f46e5)'
                            }}
                        />

                        <Card.Body className="p-4 p-md-5 d-flex flex-column">

                            <div
                                className="d-flex align-items-center justify-content-center mb-4 bg-primary-subtle"
                                style={{
                                    width: '68px',
                                    height: '68px',
                                    borderRadius: '20px',
                                    color: '#7c3aed',
                                    fontSize: '2rem'
                                }}
                            >
                                +
                            </div>

                            <Card.Title
                                className="fw-bold mb-3 text-primary"
                                style={{
                                    fontSize: '1.7rem'
                                }}
                            >
                                Create a Project
                            </Card.Title>

                            <Card.Text
                                className="mb-4 text-body-secondary"
                                style={{
                                    lineHeight: 1.7
                                }}
                            >
                                Start a new project workspace, organize your
                                tasks and milestones, and invite your team
                                members to collaborate.
                            </Card.Text>

                            <div className="mt-auto">

                                <div
                                    className="d-flex align-items-center mb-4 text-body-secondary"
                                    style={{
                                        fontSize: '0.88rem'
                                    }}
                                >
                                    <span
                                        className="me-2 text-primary"
                                        style={{
                                            fontSize: '1rem'
                                        }}
                                    >
                                        ✓
                                    </span>

                                    Create your project workspace
                                </div>

                                <Button
                                    onClick={handleCreateAction}
                                    className="w-100 py-3 fw-bold border-0 rounded"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                        boxShadow:
                                            '0 10px 22px rgba(124, 58, 237, 0.22)'
                                    }}
                                >
                                    Create Project
                                </Button>

                            </div>

                            <CreateProjectModal
                                show={showCreateModal}
                                onHide={() => setShowCreateModal(false)}
                            />

                        </Card.Body>
                    </Card>
                </Col>


                {/* How It Works */}
                <Col xs={12} md={6} lg={5}>
                    <Card
                        className="h-100 border rounded overflow-hidden"
                        style={{
                            minHeight: '390px',
                            boxShadow: '0 20px 50px rgba(48, 43, 85, 0.10)'
                        }}
                    >

                        <div
                            style={{
                                height: '8px',
                                background:
                                    'linear-gradient(90deg, #06b6d4, #6366f1)'
                            }}
                        />

                        <Card.Body className="p-4 p-md-5 d-flex flex-column">

                            <div
                                className="d-flex align-items-center justify-content-center mb-4 bg-info-subtle"
                                style={{
                                    width: '68px',
                                    height: '68px',
                                    borderRadius: '20px',
                                    color: '#0891b2',
                                    fontSize: '1.8rem',
                                    fontWeight: 800
                                }}
                            >
                                ✓
                            </div>

                            <Card.Title
                                className="fw-bold mb-3 text-info"
                                style={{
                                    fontSize: '1.7rem'
                                }}
                            >
                                How It Works
                            </Card.Title>

                            <Card.Text
                                className="mb-4 text-body-secondary"
                                style={{
                                    lineHeight: 1.7
                                }}
                            >
                                Bring your team together and manage the
                                entire project from one shared workspace.
                            </Card.Text>

                            <div className="mt-auto">

                                {/* Step 1 */}
                                <div className="d-flex align-items-start mb-3">
                                    <div
                                        className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary-subtle text-primary fw-bold"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        1
                                    </div>

                                    <div className="ms-3">
                                        <div className="fw-bold">
                                            Create your project
                                        </div>

                                        <div className="small text-body-secondary">
                                            Set up your project workspace.
                                        </div>
                                    </div>
                                </div>


                                {/* Step 2 */}
                                <div className="d-flex align-items-start mb-3">
                                    <div
                                        className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary-subtle text-primary fw-bold"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        2
                                    </div>

                                    <div className="ms-3">
                                        <div className="fw-bold">
                                            Invite your team
                                        </div>

                                        <div className="small text-body-secondary">
                                            Add teammates to your project.
                                        </div>
                                    </div>
                                </div>


                                {/* Step 3 */}
                                <div className="d-flex align-items-start mb-3">
                                    <div
                                        className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary-subtle text-primary fw-bold"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        3
                                    </div>

                                    <div className="ms-3">
                                        <div className="fw-bold">
                                            Plan and assign tasks
                                        </div>

                                        <div className="small text-body-secondary">
                                            Organize work and assign responsibilities.
                                        </div>
                                    </div>
                                </div>


                                {/* Step 4 */}
                                <div className="d-flex align-items-start">
                                    <div
                                        className="d-flex align-items-center justify-content-center flex-shrink-0 bg-success-subtle text-success fw-bold"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        4
                                    </div>

                                    <div className="ms-3">
                                        <div className="fw-bold">
                                            Track your progress
                                        </div>

                                        <div className="small text-body-secondary">
                                            Monitor tasks, milestones, and deadlines.
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>


            {/* AI Features */}
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
                                background:
                                    'linear-gradient(90deg, #7c3aed, #06b6d4, #10b981)'
                            }}
                        />

                        <Card.Body className="p-4 p-md-5">

                            <Row className="align-items-center">

                                <Col lg={5} className="mb-4 mb-lg-0">

                                    {/* <div
                                        className="d-inline-flex align-items-center px-3 py-2 mb-3 fw-bold bg-primary-subtle text-primary rounded-pill"
                                    >
                                        🤖 AI POWERED
                                    </div> */}

                                    <h2 className="fw-bold mb-3">
                                        Plan smarter with AI
                                    </h2>

                                    <p
                                        className="text-body-secondary mb-0"
                                        style={{
                                            lineHeight: 1.7
                                        }}
                                    >
                                        Let AI help turn your project ideas into
                                        an organized plan, identify potential
                                        risks, and give your team useful insights
                                        throughout the project.
                                    </p>

                                </Col>


                                <Col lg={7}>

                                    <Row className="g-3">

                                        {/* AI Planner */}
                                        <Col xs={12} md={4}>
                                            <div className="h-100 p-3 rounded bg-body-tertiary">

                                                <div
                                                    className="mb-3 text-primary"
                                                    style={{
                                                        fontSize: '1.7rem'
                                                    }}
                                                >
                                                    ✨
                                                </div>

                                                <h6 className="fw-bold">
                                                    AI Project Planner
                                                </h6>

                                                <p className="small text-body-secondary mb-0">
                                                    Turn a project description
                                                    into suggested milestones
                                                    and tasks.
                                                </p>

                                            </div>
                                        </Col>


                                        {/* Smart Timeline */}
                                        <Col xs={12} md={4}>
                                            <div className="h-100 p-3 rounded bg-body-tertiary">

                                                <div
                                                    className="mb-3 text-info"
                                                    style={{
                                                        fontSize: '1.7rem'
                                                    }}
                                                >
                                                    ◷
                                                </div>

                                                <h6 className="fw-bold">
                                                    Smart Timeline
                                                </h6>

                                                <p className="small text-body-secondary mb-0">
                                                    Get intelligent suggestions
                                                    for task priorities and
                                                    project schedules.
                                                </p>

                                            </div>
                                        </Col>


                                        {/* AI Insights */}
                                        <Col xs={12} md={4}>
                                            <div className="h-100 p-3 rounded bg-body-tertiary">

                                                <div
                                                    className="mb-3 text-success"
                                                    style={{
                                                        fontSize: '1.7rem'
                                                    }}
                                                >
                                                    ◈
                                                </div>

                                                <h6 className="fw-bold">
                                                    Project Insights
                                                </h6>

                                                <p className="small text-body-secondary mb-0">
                                                    Discover potential delays,
                                                    risks, and areas that need
                                                    attention.
                                                </p>

                                            </div>
                                        </Col>

                                    </Row>

                                </Col>

                            </Row>

                        </Card.Body>
                    </Card>

                </Col>
            </Row>


            {/* Features */}
            <Row className="justify-content-center text-center mt-5">
                <Col xs={12} lg={9}>

                    <Row className="g-4">

                        <Col xs={12} md={4}>
                            <div className="p-3">

                                <div
                                    className="mb-2 text-primary"
                                    style={{ fontSize: '1.7rem' }}
                                >
                                    ◈
                                </div>

                                <h6 className="fw-bold">
                                    Project Timeline
                                </h6>

                                <p className="small text-body-secondary mb-0">
                                    Visualize milestones, deadlines, and
                                    project progress.
                                </p>

                            </div>
                        </Col>


                        <Col xs={12} md={4}>
                            <div className="p-3">

                                <div
                                    className="mb-2 text-warning"
                                    style={{ fontSize: '1.7rem' }}
                                >
                                    ✓
                                </div>

                                <h6 className="fw-bold">
                                    Task Tracking
                                </h6>

                                <p className="small text-body-secondary mb-0">
                                    Create, assign, prioritize, and track
                                    tasks from start to finish.
                                </p>

                            </div>
                        </Col>


                        <Col xs={12} md={4}>
                            <div className="p-3">

                                <div
                                    className="mb-2 text-success"
                                    style={{ fontSize: '1.7rem' }}
                                >
                                    ◎
                                </div>

                                <h6 className="fw-bold">
                                    Team Collaboration
                                </h6>

                                <p className="small text-body-secondary mb-0">
                                    Work together in one shared project
                                    workspace.
                                </p>

                            </div>
                        </Col>

                    </Row>

                </Col>
            </Row>


            {/* Footer Hint */}
            <Row className="justify-content-center text-center mt-4">
                <Col xs={12}>
                    <div className="small text-body-secondary">
                        Create a project • Invite your team • Plan • Track • Deliver
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage