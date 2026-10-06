import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, ProgressBar, Badge, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CreateProjectModal from '../components/CreateProjectModal'

const DashboardPage = () => {
    const navigate = useNavigate()
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')

    // Initial mock list of projects (can be wired to your API/localStorage)
    const [projects, setProjects] = useState([
        {
            projectId: 'proj-101',
            projectTitle: 'E-Commerce Website Redesign',
            description: 'Overhaul storefront UI, integrate Stripe checkout, and revamp navigation taxonomy.',
            startDate: '2026-10-01',
            endDate: '2026-11-15',
            status: 'in_progress',
            completedTasks: 8,
            totalTasks: 12,
            members: ['AS', 'JD', 'MK']
        },
        {
            projectId: 'proj-102',
            projectTitle: 'Mobile App AI Assistant',
            description: 'Implement LLM chat interface, voice prompt input, and user conversation persistence.',
            startDate: '2026-09-15',
            endDate: '2026-10-25',
            status: 'in_progress',
            completedTasks: 14,
            totalTasks: 15,
            members: ['AS', 'RL']
        },
        {
            projectId: 'proj-103',
            projectTitle: 'Brand Identity & Design System',
            description: 'Create reusable UI token library, icon sets, and accessibility guidelines.',
            startDate: '2026-08-01',
            endDate: '2026-09-30',
            status: 'completed',
            completedTasks: 10,
            totalTasks: 10,
            members: ['AS']
        }
    ])

    // Filter projects based on search query and status filter
    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())

        if (filterStatus === 'all') return matchesSearch
        return matchesSearch && project.status === filterStatus
    })

    const handleOpenProject = (project) => {
        navigate(`/project/${project.projectId}`, { state: project })
    }

    const handleDeleteProject = (e, id) => {
        e.stopPropagation()
        setProjects((prev) => prev.filter((p) => p.projectId !== id))
    }

    return (
        <Container fluid className="min-vh-100 px-3 px-md-5 py-4">
            {/* Top Workspace Header */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom gap-3">
                <div>
                    <h2 className="fw-bold mb-1">Projects Dashboard</h2>
                    <p className="text-body-secondary small mb-0">
                        Manage workspaces, monitor milestone timelines, and coordinate team tasks.
                    </p>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <Button
                        onClick={() => setShowCreateModal(true)}
                        className="d-flex align-items-center gap-2 px-3 py-2 fw-bold border-0 text-white rounded"
                        style={{
                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                            boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)'
                        }}
                    >
                        <span>+</span>
                        <span>New Project</span>
                    </Button>
                </div>
            </div>

            {/* Metric KPI Cards */}
            <Row className="g-3 mb-4">
                <Col xs={6} md={4}>
                    <Card className="border rounded h-100 p-3 bg-body-tertiary">
                        <span className="small text-body-secondary fw-semibold">Total Projects</span>
                        <h3 className="fw-bold mb-0 mt-1">{projects.length}</h3>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                    <Card className="border rounded h-100 p-3 bg-body-tertiary">
                        <span className="small text-body-secondary fw-semibold">Active Workspaces</span>
                        <h3 className="fw-bold text-primary mb-0 mt-1">
                            {projects.filter((p) => p.status === 'in_progress').length}
                        </h3>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                    <Card className="border rounded h-100 p-3 bg-body-tertiary">
                        <span className="small text-body-secondary fw-semibold">Completed</span>
                        <h3 className="fw-bold text-success mb-0 mt-1">
                            {projects.filter((p) => p.status === 'completed').length}
                        </h3>
                    </Card>
                </Col>

                {/* After pricing is figured out */}
                {/* <Col xs={6} md={3}>
                    <Card className="border rounded h-100 p-3 bg-body-tertiary">
                        <span className="small text-body-secondary fw-semibold">Trial Status</span>
                        <div className="d-flex align-items-center gap-2 mt-1">
                            <h3 className="fw-bold text-warning mb-0">23</h3>
                            <span className="small text-body-secondary">days left</span>
                        </div>
                    </Card>
                </Col> */}

            </Row>

            {/* Filter and Search Controls */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                <div style={{ maxWidth: '340px', width: '100%' }}>
                    <Form.Control
                        type="text"
                        placeholder="Search projects by name or keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="py-2"
                    />
                </div>

                <div className="d-flex gap-2">
                    <Button
                        size="sm"
                        variant={filterStatus === 'all' ? 'primary' : 'outline-secondary'}
                        onClick={() => setFilterStatus('all')}
                        className="fw-semibold px-3"
                    >
                        All
                    </Button>
                    <Button
                        size="sm"
                        variant={filterStatus === 'in_progress' ? 'primary' : 'outline-secondary'}
                        onClick={() => setFilterStatus('in_progress')}
                        className="fw-semibold px-3"
                    >
                        In Progress
                    </Button>
                    <Button
                        size="sm"
                        variant={filterStatus === 'completed' ? 'primary' : 'outline-secondary'}
                        onClick={() => setFilterStatus('completed')}
                        className="fw-semibold px-3"
                    >
                        Completed
                    </Button>
                </div>
            </div>

            {/* Projects Grid */}
            <Row className="g-4">
                {filteredProjects.length === 0 ? (
                    <Col xs={12}>
                        <Card className="text-center py-5 border rounded bg-body-tertiary">
                            <Card.Body>
                                <div className="fs-1 mb-2">📂</div>
                                <h5 className="fw-bold">No projects found</h5>
                                <p className="text-body-secondary small mb-3">
                                    {searchTerm
                                        ? 'No project matches your search criteria.'
                                        : 'You have not created any projects yet.'}
                                </p>
                                <Button
                                    onClick={() => setShowCreateModal(true)}
                                    className="fw-bold border-0 text-white"
                                    style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
                                >
                                    Create Your First Project
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ) : (
                    filteredProjects.map((project) => {
                        const progress = project.totalTasks
                            ? Math.round((project.completedTasks / project.totalTasks) * 100)
                            : 0

                        return (
                            <Col xs={12} md={6} lg={4} key={project.projectId}>
                                <Card
                                    onClick={() => handleOpenProject(project)}
                                    className="h-100 border rounded overflow-hidden position-relative d-flex flex-column transition-all"
                                    style={{
                                        cursor: 'pointer',
                                        boxShadow: '0 12px 30px rgba(48, 43, 85, 0.06)'
                                    }}
                                >
                                    {/* Top status bar accent */}
                                    <div
                                        style={{
                                            height: '5px',
                                            background:
                                                project.status === 'completed'
                                                    ? 'linear-gradient(90deg, #10b981, #06b6d4)'
                                                    : 'linear-gradient(90deg, #7c3aed, #4f46e5)'
                                        }}
                                    />

                                    <Card.Body className="p-4 d-flex flex-column">
                                        {/* Status badge & contextual menu */}
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <Badge
                                                bg={project.status === 'completed' ? 'success-subtle' : 'primary-subtle'}
                                                className={project.status === 'completed' ? 'text-success' : 'text-primary'}
                                            >
                                                {project.status === 'completed' ? 'Completed' : 'In Progress'}
                                            </Badge>

                                            <Dropdown onClick={(e) => e.stopPropagation()}>
                                                <Dropdown.Toggle
                                                    variant="link"
                                                    className="p-0 text-body-secondary text-decoration-none shadow-none border-0"
                                                    style={{ fontSize: '1.2rem', lineHeight: 1 }}
                                                >
                                                    ⋮
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item onClick={() => handleOpenProject(project)}>
                                                        Open Timeline
                                                    </Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item
                                                        onClick={(e) => handleDeleteProject(e, project.projectId)}
                                                        className="text-danger"
                                                    >
                                                        Delete Workspace
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        <Card.Title className="fw-bold mb-2 fs-5">
                                            {project.projectTitle}
                                        </Card.Title>

                                        <Card.Text
                                            className="text-body-secondary small mb-4 flex-grow-1"
                                            style={{
                                                lineHeight: 1.6,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {project.description}
                                        </Card.Text>

                                        {/* Progress bar */}
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between small text-body-secondary mb-1">
                                                <span>Task Completion</span>
                                                <span className="fw-bold">{progress}%</span>
                                            </div>
                                            <ProgressBar
                                                now={progress}
                                                variant={project.status === 'completed' ? 'success' : 'primary'}
                                                style={{ height: '6px', borderRadius: '3px' }}
                                            />
                                        </div>

                                        {/* Footer meta info: dates + avatars */}
                                        <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                                            <div className="small text-body-secondary">
                                                📅 {project.endDate || 'No deadline'}
                                            </div>

                                            {/* Stacked Member Avatars */}
                                            <div className="d-flex">
                                                {project.members?.map((initials, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="d-flex align-items-center justify-content-center rounded-circle border border-2 border-body bg-primary-subtle text-primary fw-bold"
                                                        style={{
                                                            width: '26px',
                                                            height: '26px',
                                                            fontSize: '0.7rem',
                                                            marginLeft: idx > 0 ? '-8px' : 0
                                                        }}
                                                        title={`Team member: ${initials}`}
                                                    >
                                                        {initials}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                )}
            </Row>

            {/* Reusable Create Project Modal */}
            <CreateProjectModal
                show={showCreateModal}
                onHide={() => setShowCreateModal(false)}
            />
        </Container>
    )
}

export default DashboardPage