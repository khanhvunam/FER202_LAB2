function Footer() {
  const student = {
    name: 'Vu Nam Khanh',
    studentId: 'HE205101',
    className: 'NodeJS2009',
    email: 'khanhvn@gmail.com',
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Shop fashion</h2>
        <div className="student-info" aria-label="Student information">
          <p>
            <span>Student name:</span> {student.name}
          </p>
          <p>
            <span>Student ID:</span> {student.studentId}
          </p>
          <p>
            <span>Class:</span> {student.className}
          </p>
          <p>
            <span>Email:</span> {student.email}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
