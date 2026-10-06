import React from 'react'
import { Card } from 'react-bootstrap'

const AIInsightsCard = ({ insights }) => {
    return (
        <Card className="border-0 rounded mb-4" style={{ boxShadow: '0 20px 50px rgba(48, 43, 85, 0.06)' }}>
            <div style={{ height: '6px', background: 'linear-gradient(90deg, #7c3aed, #2563eb)' }} />
            <Card.Body className="p-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="text-primary fs-5">✨</span>
                    <h6 className="fw-bold mb-0">AI Timeline Insights</h6>
                </div>
                <p className="small text-body-secondary mb-3">
                    {insights || 'AI is ready to review your dates and suggest milestone sequencing to avoid delivery bottlenecks.'}
                </p>
                <div className="p-2 rounded bg-body-tertiary small text-body-secondary">
                    💡 <em>Tip: Adding 3 or more milestones allows AI to predict schedule conflicts.</em>
                </div>
            </Card.Body>
        </Card>
    )
}

export default AIInsightsCard