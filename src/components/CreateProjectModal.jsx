import React, { useState } from 'react'
import { Row, Col, Button, Form, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CreateProjectModal = (props) => {

    const [formData, setFormData] = useState({
        projectTitle: '',
        description: '',
        startDate: '',
        endDate: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const projectId = crypto.randomUUID()

        const payload = {
            ...formData,
            projectId
        }

        console.log('Project created:', payload)

        navigate(`/project/${projectId}`, {
            state: payload
        })
    }

    return (
        <Modal
            {...props}
            aria-labelledby="create-project-modal"
            centered
            size="lg"
        >

            {/* Header */}
            <Modal.Header
                closeButton
                style={{
                    border: 'none',
                    padding: '1.5rem 1.75rem 1rem'
                }}
            >
                <div>

                    <div
                        id="create-project-modal"
                        className="fw-bold mb-1 text-primary"
                        style={{
                            fontSize: '1.45rem'
                        }}
                    >
                        Create a New Project
                    </div>

                    <div className="small text-body-secondary">
                        Set up your project timeline and start organizing your work.
                    </div>

                </div>
            </Modal.Header>


            {/* Body */}
            <Modal.Body
                style={{
                    padding: '0.75rem 1.75rem 1.75rem'
                }}
            >

                <Form onSubmit={handleSubmit}>

                    {/* Project Overview */}
                    <div
                        className="mb-3 text-primary"
                        style={{
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase'
                        }}
                    >
                        Project Overview
                    </div>


                    <Row className="g-4">

                        {/* Project Name */}
                        <Col xs={12}>

                            <Form.Group controlId="projectTitle">

                                <Form.Label className="fw-bold mb-2">
                                    Project Name *
                                </Form.Label>

                                <Form.Control
                                    type="text"
                                    name="projectTitle"
                                    value={formData.projectTitle}
                                    onChange={handleChange}
                                    placeholder="e.g. Website Redesign"
                                    required
                                    className="py-3 px-3"
                                />

                                <Form.Text className="text-body-secondary">
                                    Give your team a clear name for this project.
                                </Form.Text>

                            </Form.Group>

                        </Col>


                        {/* Description */}
                        <Col xs={12}>

                            <Form.Group controlId="description">

                                <Form.Label className="fw-bold mb-2">
                                    Description
                                </Form.Label>

                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Briefly describe what this project is about..."
                                    className="py-3 px-3"
                                    style={{
                                        resize: 'none'
                                    }}
                                />

                            </Form.Group>

                        </Col>

                    </Row>


                    {/* Timeline */}
                    <div
                        className="mb-3 mt-4 text-primary"
                        style={{
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase'
                        }}
                    >
                        Project Timeline
                    </div>


                    <Row className="g-4">

                        {/* Start Date */}
                        <Col xs={12} md={6}>

                            <Form.Group controlId="startDate">

                                <Form.Label className="fw-bold mb-2">
                                    Start Date *
                                </Form.Label>

                                <Form.Control
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    required
                                    className="py-3 px-3"
                                />

                            </Form.Group>

                        </Col>


                        {/* End Date */}
                        <Col xs={12} md={6}>

                            <Form.Group controlId="endDate">

                                <Form.Label className="fw-bold mb-2">
                                    Target End Date *
                                </Form.Label>

                                <Form.Control
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    min={formData.startDate || undefined}
                                    required
                                    className="py-3 px-3"
                                />

                            </Form.Group>

                        </Col>

                    </Row>


                    {/* Information */}
                    <div
                        className="mt-4 p-3 rounded-3 bg-primary-subtle"
                    >
                        <div className="d-flex align-items-start">

                            <div
                                className="me-3 d-flex align-items-center justify-content-center flex-shrink-0 bg-primary text-white rounded-circle"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    fontSize: '0.85rem',
                                    fontWeight: 700
                                }}
                            >
                                i
                            </div>

                            <div>

                                <div className="fw-bold mb-1">
                                    Build your project workspace
                                </div>

                                <div className="small text-body-secondary">
                                    After creating your project, you can add
                                    milestones, create tasks, assign team members,
                                    and track your progress.
                                </div>

                            </div>

                        </div>
                    </div>


                    {/* Actions */}
                    <div
                        className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top"
                    >

                        <Button
                            type="button"
                            onClick={props.onHide}
                            className="px-4 py-2 fw-semibold bg-primary-subtle text-primary border-0"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="primary"
                            className="px-4 py-2 fw-bold"
                        >
                            Create Project
                        </Button>

                    </div>

                </Form>

            </Modal.Body>

        </Modal>
    )
}

export default CreateProjectModal
