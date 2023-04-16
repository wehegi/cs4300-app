import './Users.css';
import UserItem from './Useritem.js';
const Users = (props) => {
    return (
      <div className="users">
        {props.user_list.map((username) => (
          <UserItem key={username.id} 
          name={username.name} 
          image={username.image} />
        )//map
        )}
      </div>
    )//return;
  }//props;
  
  export default Users;