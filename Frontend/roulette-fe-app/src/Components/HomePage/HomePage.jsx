import './HomePage.css'
import { useNavigate } from 'react-router-dom'
export const HomePage =()=>{
    const navigate=useNavigate();

    const handleNavigate =()=>{
        navigate('/artists');
    }

    return (
        <div className="artists-dashboard">
        <h1>Welcome to Artists Dashboard!</h1>
        <button onClick={handleNavigate}>Proceed here to make your list </button>
        </div>
    )

}