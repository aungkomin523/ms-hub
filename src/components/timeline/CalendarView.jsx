import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const CalendarView = ({ milestones, selectedMilestone, onSelectMilestone }) => {
    const [currentDate, setCurrentDate] = useState(new Date())

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDayIndex = new Date(year, month, 1).getDay()
    const totalDays = new Date(year, month + 1, 0).getDate()

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
    const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

    // Match milestones to a specific calendar date (YYYY-MM-DD)
    const getMilestonesForDate = (dayNumber) => {
        const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`
        return milestones.filter((m) => m.dueDate === formattedDate)
    }

    const calendarCells = []

    // Leading empty cells
    for (let i = 0; i < firstDayIndex; i++) {
        calendarCells.push(
            <div
                key={`empty-start-${i}`}
                className="p-2 border border-opacity-10 bg-body-tertiary opacity-25 rounded"
                style={{ height: '105px', boxSizing: 'border-box' }}
            />
        )
    }

    // Active calendar days
    for (let day = 1; day <= totalDays; day++) {
        const dayMilestones = getMilestonesForDate(day)
        const isToday =
            new Date().getDate() === day &&
            new Date().getMonth() === month &&
            new Date().getFullYear() === year

        calendarCells.push(
            <div
                key={`day-${day}`}
                className={`p-2 border border-opacity-10 rounded d-flex flex-column transition-all ${
                    isToday ? 'bg-primary-subtle' : 'bg-body'
                }`}
                style={{
                    height: '105px',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                }}
            >
                {/* Date number header */}
                <div className="d-flex justify-content-between align-items-center mb-1 flex-shrink-0">
                    <span className={`small fw-bold ${isToday ? 'text-primary' : 'text-body-secondary'}`}>
                        {day}
                    </span>
                    {dayMilestones.length > 0 && (
                        <span className="badge rounded-pill bg-primary" style={{ fontSize: '0.65rem' }}>
                            {dayMilestones.length}
                        </span>
                    )}
                </div>

                {/* Scrollable milestones within the fixed-height cell */}
                <div className="d-flex flex-column gap-1 overflow-y-auto flex-grow-1 pe-1">
                    {dayMilestones.map((m) => {
                        const isSelected = selectedMilestone?.id === m.id
                        return (
                            <div
                                key={m.id}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onSelectMilestone(m)
                                }}
                                className={`text-truncate px-1 py-1 rounded small flex-shrink-0 ${
                                    isSelected
                                        ? 'bg-primary text-white fw-bold shadow-sm'
                                        : m.completed
                                        ? 'bg-success-subtle text-success text-decoration-line-through'
                                        : 'bg-body-secondary text-body'
                                }`}
                                style={{ fontSize: '0.72rem', cursor: 'pointer', lineHeight: 1.2 }}
                                title={m.title}
                            >
                                {m.completed ? '✓ ' : '◈ '}
                                {m.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    // Trailing empty cells to complete the final row
    const totalFilled = firstDayIndex + totalDays
    const trailingEmpty = totalFilled % 7 === 0 ? 0 : 7 - (totalFilled % 7)
    for (let j = 0; j < trailingEmpty; j++) {
        calendarCells.push(
            <div
                key={`empty-end-${j}`}
                className="p-2 border border-opacity-10 bg-body-tertiary opacity-25 rounded"
                style={{ height: '105px', boxSizing: 'border-box' }}
            />
        )
    }

    return (
        <Card className="h-100 border rounded overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(48, 43, 85, 0.08)' }}>
            <div style={{ height: '6px', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
            <Card.Body className="p-4 d-flex flex-column h-100 overflow-hidden">
                {/* Header Controls (Stays pinned at top) */}
                <div className="d-flex justify-content-between align-items-center mb-3 flex-shrink-0">
                    <div>
                        <h4 className="fw-bold mb-0">
                            {monthNames[month]} {year}
                        </h4>
                        <span className="small text-body-secondary">Interactive Schedule & Milestones</span>
                    </div>

                    <div className="d-flex gap-2">
                        <Button variant="outline-secondary" size="sm" onClick={handlePrevMonth} className="px-3 fw-bold">
                            ‹
                        </Button>
                        <Button variant="outline-secondary" size="sm" onClick={() => setCurrentDate(new Date())} className="small fw-semibold">
                            Today
                        </Button>
                        <Button variant="outline-secondary" size="sm" onClick={handleNextMonth} className="px-3 fw-bold">
                            ›
                        </Button>
                    </div>
                </div>

                {/* Single Unified Scrollable Container: Day Headers & Cells scroll together */}
                <div className="overflow-auto flex-grow-1 pe-1">
                    <div style={{ minWidth: '450px' }}>
                        {/* Day of Week Headers */}
                        <div
                            className="d-grid mb-2 text-center text-body-secondary fw-bold small"
                            style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' }}
                        >
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>

                        {/* 7-column Uniform Calendar Grid */}
                        <div
                            className="d-grid gap-1"
                            style={{
                                gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                                gridAutoRows: '105px'
                            }}
                        >
                            {calendarCells}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CalendarView