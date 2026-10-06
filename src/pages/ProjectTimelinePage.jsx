import React, { useState } from 'react'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

import MilestoneSidebar from '../components/timeline/MilestoneSidebar'
import CalendarView from '../components/timeline/CalendarView'
import MilestoneDetailView from '../components/timeline/MilestoneDetailView'
import AddMilestoneModal from '../components/timeline/AddMilestoneModal'
import ShareProjectModal from '../components/timeline/ShareProjectModal'

const ProjectTimelinePage = () => {
    const { projectId } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    // Grab data forwarded from CreateProjectModal
    const projectData = location.state || {
        projectId: projectId || 'demo-project',
        projectTitle: 'Project Workspace',
        startDate: '2026-10-01',
        endDate: '2026-10-31'
    }

    const [milestones, setMilestones] = useState([
        {
            id: 'm-1',
            title: 'Requirements & Scope',
            dueDate: '2026-10-08',
            description: 'Finalize core user stories and design blueprints with the client.',
            completed: true,
            tasks: [{ id: 't-1', title: 'Complete user flow diagrams', completed: true }]
        },
        {
            id: 'm-2',
            title: 'Database & Auth Architecture',
            dueDate: '2026-10-18',
            description: 'Set up tables, trial logic, and authentication middleware.',
            completed: false,
            tasks: [{ id: 't-2', title: 'Implement Stripe webhook handler', completed: false }]
        }
    ])

    const [selectedMilestone, setSelectedMilestone] = useState(milestones[0])
    const [showAddModal, setShowAddModal] = useState(false)
    const [showShareModal, setShowShareModal] = useState(false)

    const handleAddMilestone = (newMs) => {
        setMilestones((prev) => [...prev, newMs])
        setSelectedMilestone(newMs)
    }

    const handleDeleteMilestone = (id) => {
        setMilestones((prev) => prev.filter((m) => m.id !== id))
        if (selectedMilestone?.id === id) {
            setSelectedMilestone(null)
        }
    }

    const handleToggleComplete = (id) => {
        setMilestones((prev) =>
            prev.map((m) => {
                if (m.id === id) {
                    const updated = { ...m, completed: !m.completed }
                    if (selectedMilestone?.id === id) setSelectedMilestone(updated)
                    return updated
                }
                return m
            })
        )
    }

    const handleUpdateMilestone = (updatedMs) => {
        setMilestones((prev) =>
            prev.map((m) => (m.id === updatedMs.id ? updatedMs : m))
        )
        setSelectedMilestone(updatedMs)
    }

    return (
        <Container fluid className="min-vh-100 px-3 px-md-4 py-4 d-flex flex-column">
            {/* Header Navigation Bar */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom gap-2">
                <div>
                    <h4 className="fw-bold mb-0">{projectData.projectTitle}</h4>
                    <span className="small text-body-secondary">
                        Timeline: {projectData.startDate} → {projectData.endDate}
                    </span>
                </div>

                {/* Right Header Actions: User Profile Circle -> Share / Invite -> Quit / Exit */}
                <div className="d-flex align-items-center gap-2">
                    {/* User Profile Avatar Circle */}
                    <div
                        className="d-flex align-items-center justify-content-center rounded-circle fw-bold text-white shadow-sm user-select-none"
                        style={{
                            width: '38px',
                            height: '38px',
                            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                            fontSize: '0.9rem',
                            cursor: 'pointer'
                        }}
                        title="Signed in as Alex Smith"
                    >
                        AS
                    </div>

                    {/* Share / Invite Teammates Button */}

                    <Button
                        variant="outline-secondary"
                        size='sm'
                        onClick={() => setShowShareModal(true)}
                        id='share-btn'
                        className="d-flex align-items-center gap-1 px-3fw-semibold rounded-1"
                        style={{ fontSize: '0.88rem' }}
                    >
                        <span>Share</span>
                    </Button>

                    {/* Quit & Go to Home Button */}
                    <Button
                        variant="outline"
                        size='sm'
                        onClick={() => navigate('/dashboard')}
                        className="d-flex align-items-center gap-1 fw-semibold rounded-1 border"
                        style={{ fontSize: '0.88rem' }}
                    >
                        <span>✕</span>
                        <span>Back to Dashboard</span>
                    </Button>
                </div>
            </div>

            {/* 3-Column Studio Workspace */}
            <Row className="g-3 flex-grow-1">
                {/* 1. Left: Milestone List */}
                <Col xs={12} md={4} lg={3}>
                    <MilestoneSidebar
                        milestones={milestones}
                        selectedMilestone={selectedMilestone}
                        onSelectMilestone={setSelectedMilestone}
                        onDeleteMilestone={handleDeleteMilestone}
                        onOpenAddModal={() => setShowAddModal(true)}
                    />
                </Col>

                {/* 2. Middle: Interactive Calendar */}
                <Col xs={12} md={8} lg={6}>
                    <CalendarView
                        milestones={milestones}
                        selectedMilestone={selectedMilestone}
                        onSelectMilestone={setSelectedMilestone}
                    />
                </Col>

                {/* 3. Right: Selected Milestone Detail Inspector */}
                <Col xs={12} lg={3}>
                    <MilestoneDetailView
                        milestone={selectedMilestone}
                        onToggleComplete={handleToggleComplete}
                        onUpdateMilestone={handleUpdateMilestone}
                    />
                </Col>
            </Row>

            {/* Modals */}
            <AddMilestoneModal
                show={showAddModal}
                onHide={() => setShowAddModal(false)}
                onSave={handleAddMilestone}
                projectDates={{
                    startDate: projectData.startDate,
                    endDate: projectData.endDate
                }}
            />

            <ShareProjectModal
                show={showShareModal}
                onHide={() => setShowShareModal(false)}
                projectTitle={projectData.projectTitle}
            />
        </Container>
    )
}

export default ProjectTimelinePage