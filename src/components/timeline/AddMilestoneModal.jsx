import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const AddMilestoneModal = ({ show, onHide, onSave, projectDates }) => {
    const [milestone, setMilestone] = useState({ title: '', dueDate: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!milestone.title) return
        onSave({ ...milestone, id: crypto.randomUUID(), completed: false })
        setMilestone({ title: '', dueDate: '' })
        onHide()
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className="fw-bold text-primary fs-5">Add Milestone</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body className="py-3">
                    <Form.Group className="mb-3" controlId="msTitle">
                        <Form.Label className="small fw-semibold">Milestone Name *</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            placeholder="e.g., MVP Core Flow Complete"
                            value={milestone.title}
                            onChange={(e) => setMilestone({ ...milestone, title: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="msDate">
                        <Form.Label className="small fw-semibold">Target Completion Date</Form.Label>
                        <Form.Control
                            type="date"
                            min={projectDates?.startDate}
                            max={projectDates?.endDate}
                            value={milestone.dueDate}
                            onChange={(e) => setMilestone({ ...milestone, dueDate: e.target.value })}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="border-0 pt-0">
                    <Button type='button' className='bg-primary-subtle text-primary border-0' onClick={onHide}>Cancel</Button>
                    <Button
                        type="submit"
                        className="fw-bold border-0 text-white"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddMilestoneModal