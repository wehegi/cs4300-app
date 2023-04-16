import UserItem from './UserItem';
import './Users.css';

function Users(props) {
    console.log("Data in Object: ", props)
    console.log("Data type ", typeof props)
    return (
        <div className="userList">
            {props.user_list.map((user_list)=>
            <UserItem
            key = {user_list.id}
            name={user_list.name}
            image={user_list.image}
            />
            )}
        </div>
    );
}



export default Users;