import './App.css';
import Users from './Users';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Auth from "./Auth"

const DUMMY_USERS = [
    {
      id: 'dogs',
      name: 'DOGS',
      image:'https://static.wikia.nocookie.net/disney/images/c/cd/Profile_-_Jasmine.jpeg/revision/latest?cb=20190312021628'
    },
   {
     id: 'cats',
     name: 'CATS',
     image:'https://static.wikia.nocookie.net/dis/images/5/5e/Tumblr_njlwm1L4zC1rm51d6o1_500.jpg/revision/latest?cb=20160611211129'
   },
   {
     id: 'guinea pig',
     name: 'GUINEA PIG',
     image: 'https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png'
   },
   {
     id: 'rats',
     name: 'RATS',
     image: 'https://cdn.dribbble.com/users/2479547/screenshots/7482884/media/dead929c0bfbe92e13a1aa919027fe46.png?compress=1&resize=400x300'
   },
   {
     id: 'snakes',
     name: 'SNAKES',
     image: 'https://cdn.dribbble.com/users/2479547/screenshots/7482884/media/dead929c0bfbe92e13a1aa919027fe46.png?compress=1&resize=400x300'
   },
   {
     id: 'rabbits',
     name: 'RABBITS',
     image: 'https://cdn.dribbble.com/users/2479547/screenshots/7482884/media/dead929c0bfbe92e13a1aa919027fe46.png?compress=1&resize=400x300'
   },   
   ];

   function Root() {
      const navigate = useNavigate();

      return (
        <>
    <div className="App">
      <div>
        <button variant="contained" onClick={() => {navigate('/auth')}} type="button">Log In</button>
      </div>
      <div>
        <button variant="contained" onClick={() => {navigate('/')}} type="button">Home</button>
      </div>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Users user_list={DUMMY_USERS}/>} />
        </Routes>
    </div>
    </>
      )
   }

   function App() {

    return (
    <>
      <BrowserRouter>
          <Root />
      </BrowserRouter>
    </>
    );
  }
  
  export default App;
