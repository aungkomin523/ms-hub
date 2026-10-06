import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const TaskBoard = ({ tasks, onAddTask, onToggleTask }) => {
    const [title, setTitle] = useState('')

    const handleCreate = (e) => {
        e.preventDefault()
        if (!title.trim()) return
        onAddTask({ id: crypto.randomUUID(), title, completed: false })
        setTitle('')
    }

    return (
        <Card className="border rounded" style={{ boxShadow: '0 20px 50px rgba(48, 43, 85, 0.06)' }}>
            <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Tasks & Action Items</h5>

                <Form onSubmit={handleCreate} className="d-flex gap-2 mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Add a new task..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="py-2"
                    />
                    <Button
                        type="submit"
                        className="fw-bold border-0 px-3 text-white"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
                    >
                        Add
                    </Button>
                </Form>

                <div className="d-flex flex-column gap-2">
                    {tasks.length === 0 ? (
                        <p className="text-body-secondary small text-center my-3">No tasks added yet.</p>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task.id}
                                className="d-flex align-items-center justify-content-between p-2 rounded bg-body-tertiary"
                            >
                                <Form.Check
                                    type="checkbox"
                                    id={`task-${task.id}`}
                                    checked={task.completed}
                                    onChange={() => onToggleTask(task.id)}
                                    label={
                                        <span className={`small ${task.completed ? 'text-decoration-line-through text-body-secondary' : 'fw-medium'}`}>
                                            {task.title}
                                        </span>
                                    }
                                />
                            </div>
                        ))
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default TaskBoard