import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

const MilestoneTracker = ({ milestones, onToggleMilestone }) => {
    const completedCount = milestones.filter(m => m.completed).length
    const progressPercent = milestones.length
        ? Math.round((completedCount / milestones.length) * 100)
        : 0

    return (
        <Card className="border rounded mb-4" style={{ boxShadow: '0 20px 50px rgba(48, 43, 85, 0.06)' }}>
            <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h5 className="fw-bold mb-0">Project Milestones</h5>
                        <span className="small text-body-secondary">
                            {completedCount} of {milestones.length} milestones completed
                        </span>
                    </div>
                    <span className="fw-bold fs-5 text-primary">{progressPercent}%</span>
                </div>

                <ProgressBar
                    now={progressPercent}
                    className="mb-4"
                    style={{ height: '8px', borderRadius: '4px' }}
                />

                {milestones.length === 0 ? (
                    <div className="text-center py-4 text-body-secondary small">
                        No milestones defined yet. Click <strong>+ Add Milestone</strong> or use AI to generate roadmap stages.
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-3">
                        {milestones.map((m, idx) => (
                            <div
                                key={m.id || idx}
                                onClick={() => onToggleMilestone(m.id)}
                                className="p-3 rounded border d-flex align-items-center justify-content-between"
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: m.completed ? 'var(--bs-tertiary-bg)' : 'transparent',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className={`d-flex align-items-center justify-content-center rounded-circle border ${
                                            m.completed ? 'bg-success text-white border-success' : 'border-secondary'
                                        }`}
                                        style={{ width: '28px', height: '28px', fontSize: '0.85rem' }}
                                    >
                                        {m.completed ? '✓' : idx + 1}
                                    </div>
                                    <div>
                                        <div className={`fw-semibold ${m.completed ? 'text-decoration-line-through text-body-secondary' : ''}`}>
                                            {m.title}
                                        </div>
                                        <div className="small text-body-secondary">{m.dueDate || 'No date set'}</div>
                                    </div>
                                </div>
                                <span className={`badge ${m.completed ? 'bg-success-subtle text-success' : 'bg-primary-subtle text-primary'}`}>
                                    {m.completed ? 'Done' : 'Pending'}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}

export default MilestoneTracker