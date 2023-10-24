import './registrationStyles.scss';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();
  return (
    <div className="registration__container">
      <div className="registration__form">
        <div>Title</div>
        <div>input</div>
        <div>input</div>
        <div>input</div>
        <button type="button" onClick={() => navigate(-1)}>X</button>
      </div>
    </div>
  );
}

export default Registration;
