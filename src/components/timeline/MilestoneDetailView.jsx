import React, { useState } from 'react'
import { Card, Button, Form, Badge } from 'react-bootstrap'

const MilestoneDetailView = ({ milestone, onToggleComplete, onUpdateMilestone }) => {
    const [taskInput, setTaskInput] = useState('')

    if (!milestone) {
        return (
            <Card className="h-100 border rounded d-flex align-items-center justify-content-center text-center p-4 text-body-secondary" style={{ boxShadow: '0 20px 50px rgba(48, 43, 85, 0.08)' }}>
                <div>
                    <div className="fs-1 mb-2">📌</div>
                    <h6 className="fw-bold">No Milestone Selected</h6>
                    <p className="small mb-0">Select a milestone from the list or calendar to view and edit details.</p>
                </div>
            </Card>
        )
    }

    const handleAddTask = (e) => {
        e.preventDefault()
        if (!taskInput.trim()) return
        const updatedTasks = [...(milestone.tasks || []), { id: crypto.randomUUID(), title: taskInput, completed: false }]
        onUpdateMilestone({ ...milestone, tasks: updatedTasks })
        setTaskInput('')
    }

    const handleToggleTask = (taskId) => {
        const updatedTasks = (milestone.tasks || []).map((t) =>
            t.id === taskId ? { ...t, completed: !t.completed } : t
        )
        onUpdateMilestone({ ...milestone, tasks: updatedTasks })
    }

    return (
        <Card className="h-100 border rounded overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(48, 43, 85, 0.08)' }}>
            <div style={{ height: '6px', background: 'linear-gradient(90deg, #06b6d4, #10b981)' }} />
            <Card.Body className="p-4 d-flex flex-column">
                {/* Status Bar */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Badge bg={milestone.completed ? 'success-subtle' : 'warning-subtle'} className={milestone.completed ? 'text-success' : 'text-warning'}>
                        {milestone.completed ? 'Completed' : 'In Progress'}
                    </Badge>

                    <Button
                        size="sm"
                        variant={milestone.completed ? 'outline-secondary' : 'outline-success'}
                        onClick={() => onToggleComplete(milestone.id)}
                        className="fw-semibold small"
                    >
                        {milestone.completed ? 'Mark as Pending' : 'Mark Complete ✓'}
                    </Button>
                </div>

                <h4 className="fw-bold mb-1">{milestone.title}</h4>
                <div className="small text-body-secondary mb-3">
                    📅 Target Due: <strong>{milestone.dueDate || 'Unscheduled'}</strong>
                </div>

                <div className="mb-4">
                    <Form.Label className="small fw-bold text-body-secondary mb-1">Description</Form.Label>
                    <p className="small text-body-secondary p-3 rounded bg-body-tertiary mb-0" style={{ lineHeight: 1.6 }}>
                        {milestone.description || 'No detailed instructions or description provided for this milestone.'}
                    </p>
                </div>

                {/* Subtasks */}
                <div className="flex-grow-1 d-flex flex-column">
                    <h6 className="fw-bold mb-2">Checklist & Action Items</h6>

                    <Form onSubmit={handleAddTask} className="d-flex gap-2 mb-3">
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Add action item..."
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                        />
                        <Button size="sm" type="submit" variant="primary" className="fw-bold px-3">
                            +
                        </Button>
                    </Form>

                    <div className="d-flex flex-column gap-2 overflow-y-auto" style={{ maxHeight: '200px' }}>
                        {(milestone.tasks || []).length === 0 ? (
                            <span className="small text-body-secondary italic">No checklist items yet.</span>
                        ) : (
                            milestone.tasks.map((task) => (
                                <div key={task.id} className="d-flex align-items-center p-2 rounded bg-body-tertiary">
                                    <Form.Check
                                        type="checkbox"
                                        id={`task-${task.id}`}
                                        checked={task.completed}
                                        onChange={() => handleToggleTask(task.id)}
                                        label={
                                            <span className={`small ${task.completed ? 'text-decoration-line-through text-body-secondary' : ''}`}>
                                                {task.title}
                                            </span>
                                        }
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MilestoneDetailView