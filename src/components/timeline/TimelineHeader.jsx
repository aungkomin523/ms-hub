import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

const TimelineHeader = ({ project, onOpenMilestoneModal, onGenerateAI }) => {
    // Calculate timeline duration
    const getDaysRemaining = () => {
        if (!project.endDate) return null
        const diff = new Date(project.endDate) - new Date()
        return Math.ceil(diff / (1000 * 60 * 60 * 24))
    }

    const daysLeft = getDaysRemaining()

    return (
        <Card
            className="border rounded overflow-hidden mb-4"
            style={{ boxShadow: '0 20px 50px rgba(48, 43, 85, 0.08)' }}
        >
            <div
                style={{
                    height: '6px',
                    background: 'linear-gradient(90deg, #7c3aed, #06b6d4, #10b981)'
                }}
            />

            <Card.Body className="p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-1 fw-bold small">
                            ACTIVE PROJECT
                        </span>
                        {daysLeft !== null && (
                            <Badge
                                bg={daysLeft < 7 ? 'danger-subtle' : 'info-subtle'}
                                className={daysLeft < 7 ? 'text-danger' : 'text-info'}
                            >
                                {daysLeft > 0 ? `${daysLeft} days remaining` : 'Deadline reached'}
                            </Badge>
                        )}
                    </div>

                    <h2 className="fw-bold mb-1">{project.projectTitle || 'Untitled Project'}</h2>
                    <p className="text-body-secondary small mb-2" style={{ maxWidth: '650px' }}>
                        {project.description || 'No description provided.'}
                    </p>

                    <div className="small text-body-secondary d-flex gap-3">
                        <span><strong>Start:</strong> {project.startDate || 'Not set'}</span>
                        <span><strong>Target End:</strong> {project.endDate || 'Not set'}</span>
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                    <Button
                        variant="outline-secondary"
                        onClick={onGenerateAI}
                        className="fw-semibold px-3 py-2 rounded"
                    >
                        ✨ AI Plan Suggestions
                    </Button>
                    <Button
                        onClick={onOpenMilestoneModal}
                        className="fw-bold px-3 py-2 border-0 rounded text-white"
                        style={{
                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                            boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)'
                        }}
                    >
                        + Add Milestone
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default TimelineHeader