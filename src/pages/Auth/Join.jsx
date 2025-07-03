// src/pages/Auth/Join.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Join.css'

export default function Join() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }

    setError('')
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
    navigate('/login')
  }

  return (
    <div className="join-page">
      <h2 className="join-title">회원가입</h2>

      <div className="join-container">
        <form className="join-form" onSubmit={handleSubmit}>
          <label>
            <div className="label-row">
              이메일 <span className="required">*</span>
            </div>
            <input type="email" placeholder="이메일 입력" required />
          </label>

          <label>
            <div className="label-row">
              비밀번호 <span className="required">*</span>
            </div>
            <input
              type="password"
              placeholder="영문, 숫자 조합 8자리 이상 15자리 이하"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            <div className="label-row">
              비밀번호 확인 <span className="required">*</span>
            </div>
            <input
              type="password"
              placeholder="비밀번호 재입력"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          {error && <p className="error-message">{error}</p>}

          <label>
            <div className="label-row">
              닉네임 <span className="required">*</span>
            </div>
            <input type="text" placeholder="닉네임 입력 (2자 이상 15자 이하)" required />
          </label>

          <div className="gender-age-section">
            <div className="gender">
              <label>성별</label>
              <div className="gender-options">
                <label><input type="radio" name="gender" /> 남</label>
                <label><input type="radio" name="gender" /> 여</label>
              </div>
            </div>

            <div className="age">
              <label>나이</label>
              <select>
                <option value="">선택</option>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대 이상">40대 이상</option>
              </select>
            </div>
          </div>

          <button type="submit" className="join-button">회원가입</button>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>가입이 완료되었습니다!</p>
            <button onClick={handleModalClose}>확인</button>
          </div>
        </div>
      )}
    </div>
  )
}
