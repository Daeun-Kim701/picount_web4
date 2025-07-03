// src/pages/Auth/Login.jsx
import './Login.css'

export default function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>

      <div className="login-box">
        <input type="email" placeholder="아이디" className="login-input" />
        <input type="password" placeholder="비밀번호" className="login-input" />
        <button className="login-button">로그인</button>
        
        <div className="login-divider">
          <span className="divider-text">SNS 로그인</span>
        </div>

        <div className="sns-icons">
          <img src="icons/naver_icon.png" alt="naver login" className="kakao" />
          <img src="icons/kakao_icon.png" alt="kakao login" className="naver" />
        </div>

        <div className="login-links">
          <a href="#">아이디 찾기 </a>
          <span className="divider-bar">|</span>
          <a href="#"> 비밀번호 찾기</a>
        </div>
      </div>
    </div>
  )
}
