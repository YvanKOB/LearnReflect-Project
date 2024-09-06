import { useAuth } from '../../Components/Authanciation/AuthProvider';
import DropdownMenu from '../../Components/Design/DropDownController';
function Dashboard() {
    const { user, logout } = useAuth();
    return (
        <div>
            <button onClick={logout}>Logout</button>
            <h1>Welcome  {user}</h1> 
            <DropdownMenu /> 
             <div>
             </div>
      <div className='scroll-container'>
      <div className="scroll-page - QuoteText" id="page-1">
      <p>
      </p>
      </div>
     <div className='scroll-page   - QuoteText' id="page-2">
     <p>
     </p>
     </div>
     <div className='scroll-page   - QuoteText' id="page-3">
     <p>
     </p>
      </div>
  </div>
    </div>
    );
}
export default Dashboard;
