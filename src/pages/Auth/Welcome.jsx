import { useLocation } from 'react-router-dom';
import './Welcome.css';

export default function Welcome() {
  const location = useLocation();
  const nickname =
    location.state?.nickname || JSON.parse(localStorage.getItem('user'))?.nickname;

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1>
          <span className="nickname">{nickname}</span>님 안녕하세요!
        </h1>
        <p>
          PICOUNT와 함께 건강한 소비 습관을 시작하기 전,<br />
          <span className="highlight">맞춤 예산 설정과 추천</span>을 위한 몇 가지 사항을
          입력해 주세요!
        </p>
        <p className="subtext">
          해당 정보를 바탕으로 비슷한 상황의 사람들을 위한 <br />
          <span className="highlight">맞춤 예산 설정과 추천</span>을 해드려요!
        </p>
        <button className="welcome-button">다음</button>
      </div>
    </div>
  );
}
