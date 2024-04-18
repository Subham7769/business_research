import { useNavigate } from 'react-router-dom';
import './OverlayComponent.css'

const OverlayComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="overlay">
      <p>Add at least one product</p>
      <button onClick={handleNavigate}>Go to Home</button>
    </div>
  );
};

export default OverlayComponent;
