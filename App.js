import './App.css';
import Users from './Users';
const DUMMY_USERS = [
    {
      id: 'u1',
      name: 'Princess Jasmine',
      image:'https://static.wikia.nocookie.net/disney/images/c/cd/Profile_-_Jasmine.jpeg/revision/latest?cb=20190312021628'
    },
   {
     id: 'u1',
     name: 'Princess Tiana',
     image:'https://static.wikia.nocookie.net/dis/images/5/5e/Tumblr_njlwm1L4zC1rm51d6o1_500.jpg/revision/latest?cb=20160611211129'
   },
   {
     id: 'u1',
     name: 'Princess Ariel',
     image: 'https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png'
   },
   
   ]
   function App() {
    return (
      <div className="App">
        <Users user_list={DUMMY_USERS} />
      </div>
    );
  }
  
  export default App;
