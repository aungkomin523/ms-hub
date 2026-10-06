import React from 'react'
import { Card, Button, ProgressBar } from 'react-bootstrap'

const MilestoneSidebar = ({
    milestones,
    selectedMilestone,
    onSelectMilestone,
    onDeleteMilestone,
    onOpenAddModal
}) => {
    const completedCount = milestones.filter((m) => m.completed).length
    const progressPercent = milestones.length
        ? Math.round((completedCount / milestones.length) * 100)
        : 0

    return (
        <Card className="h-100 border rounded overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(48, 43, 85, 0.08)' }}>
            <div style={{ height: '6px', background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }} />
            <Card.Body className="p-3 p-md-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="fw-bold mb-0">Milestones</h5>
                    <Button
                        size="sm"
                        onClick={onOpenAddModal}
                        className="fw-bold border-0 px-3 py-1 text-white rounded"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
                    >
                        + Add
                    </Button>
                </div>

                <div className="mb-3">
                    <div className="d-flex justify-content-between small text-body-secondary mb-1">
                        <span>{completedCount}/{milestones.length} completed</span>
                        <span className="fw-bold text-primary">{progressPercent}%</span>
                    </div>
                    <ProgressBar now={progressPercent} style={{ height: '6px', borderRadius: '3px' }} />
                </div>

                <div className="d-flex flex-column gap-2 overflow-y-auto flex-grow-1 pe-1" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                    {milestones.length === 0 ? (
                        <div className="text-center py-5 text-body-secondary small">
                            No milestones yet. Click <strong>+ Add</strong> to create one.
                        </div>
                    ) : (
                        milestones.map((m) => {
                            const isSelected = selectedMilestone?.id === m.id
                            return (
                                <div
                                    key={m.id}
                                    onClick={() => onSelectMilestone(m)}
                                    className={`p-3 rounded border d-flex align-items-center justify-content-between transition-all ${
                                        isSelected
                                            ? 'border-primary bg-primary-subtle'
                                            : 'bg-body'
                                    }`}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="d-flex align-items-center gap-2 text-truncate me-2">
                                        <span className={`small ${m.completed ? 'text-success' : 'text-primary'}`}>
                                            {m.completed ? '✓' : '◈'}
                                        </span>
                                        <div className="text-truncate">
                                            <div className={`small fw-semibold text-truncate ${m.completed ? 'text-decoration-line-through text-body-secondary' : ''}`}>
                                                {m.title}
                                            </div>
                                            <div className="text-body-secondary" style={{ fontSize: '0.72rem' }}>
                                                {m.dueDate || 'No deadline'}
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        variant="link"
                                        size="sm"
                                        className="text-danger p-0 ms-1 text-decoration-none opacity-75"
                                        title="Delete milestone"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onDeleteMilestone(m.id)
                                        }}
                                    >
                                        ✕
                                    </Button>
                                </div>
                            )
                        })
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default MilestoneSidebar