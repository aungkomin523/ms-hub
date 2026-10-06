import React, { useState } from 'react'
import { Modal, Form, Button, Badge } from 'react-bootstrap'

const ShareProjectModal = ({ show, onHide, projectTitle }) => {
    const [email, setEmail] = useState('')
    const [permission, setPermission] = useState('editor')
    const [invitedUsers, setInvitedUsers] = useState([
        { email: 'alex.smith@company.com', permission: 'owner' }
    ])
    const [copied, setCopied] = useState(false)

    const handleInvite = (e) => {
        e.preventDefault()
        if (!email.trim()) return

        setInvitedUsers((prev) => [
            ...prev,
            { email: email.trim(), permission }
        ])
        setEmail('')
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <div style={{ height: '6px', background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }} />
            <Modal.Header closeButton className="border-0 pb-1">
                <div>
                    <Modal.Title className="fw-bold fs-5">Share "{projectTitle || 'Project'}"</Modal.Title>
                    <div className="small text-body-secondary">
                        Invite teammates and control their access rights.
                    </div>
                </div>
            </Modal.Header>

            <Modal.Body className="py-3">
                {/* Invite by Email */}
                <Form onSubmit={handleInvite} className="mb-4">
                    <Form.Label className="small fw-semibold">Invite by Email</Form.Label>
                    <div className="d-flex gap-2">
                        <Form.Control
                            type="email"
                            placeholder="teammate@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Form.Select
                            style={{ maxWidth: '120px' }}
                            value={permission}
                            onChange={(e) => setPermission(e.target.value)}
                        >
                            <option value="editor">Editor</option>
                            <option value="viewer">Viewer</option>
                        </Form.Select>
                        <Button
                            type="submit"
                            className="border-0 px-3 fw-bold text-white text-nowrap"
                            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
                        >
                            Invite
                        </Button>
                    </div>
                </Form>

                {/* Team Members List */}
                <div className="mb-4">
                    <div className="small fw-semibold text-body-secondary mb-2">Team Members with Access</div>
                    <div className="d-flex flex-column gap-2">
                        {invitedUsers.map((user, idx) => (
                            <div
                                key={idx}
                                className="d-flex align-items-center justify-content-between p-2 rounded bg-body-tertiary"
                            >
                                <div className="d-flex align-items-center gap-2">
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary fw-bold"
                                        style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}
                                    >
                                        {user.email.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="small text-truncate" style={{ maxWidth: '210px' }}>
                                        {user.email}
                                    </span>
                                </div>
                                <Badge
                                    bg={user.permission === 'owner' ? 'primary-subtle' : 'secondary-subtle'}
                                    className={user.permission === 'owner' ? 'text-primary' : 'text-body-secondary'}
                                >
                                    {user.permission.toUpperCase()}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copy Workspace Link */}
                <div className="p-3 rounded border bg-body-tertiary d-flex align-items-center justify-content-between">
                    <div>
                        <div className="fw-semibold small">Shareable Link</div>
                        <div className="text-body-secondary" style={{ fontSize: '0.75rem' }}>
                            Anyone with permission can open this workspace
                        </div>
                    </div>
                    <Button
                        size="sm"
                        variant={copied ? 'success' : 'outline-secondary'}
                        onClick={handleCopyLink}
                        className="fw-semibold text-nowrap"
                    >
                        {copied ? 'Copied ✓' : 'Copy link'}
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ShareProjectModal