import './App.css';
import Users from './Users';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Auth from "./Auth"

const DUMMY_USERS = [
    {
      id: 'dogs',
      name: 'DOGS',
      image:'https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg'
    },
   {
     id: 'cats',
     name: 'CATS',
     image:'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
   },
   {
     id: 'guinea pig',
     name: 'GUINEA PIG',
     image: 'https://news.clas.ufl.edu/wp-content/uploads/sites/4/2020/06/AdobeStock_345118478-copy-1440x961-1-e1613512040649-768x644.jpg'
   },
   {
     id: 'rats',
     name: 'RATS',
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ratte-Vache.jpeg/1200px-Ratte-Vache.jpeg'
   },
   {
     id: 'snakes',
     name: 'SNAKES',
     image: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDc1ODIwMzg1OTY5Nzk4/the-smallest-pet-snakes-for-beginners-with-easy-care.jpg'
   },
   {
     id: 'rabbits',
     name: 'RABBITS',
     image: 'https://www.treehugger.com/thmb/Ocxi8FYaubDwjOwria6FNpGjJjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-953005498-4ca60c6c2c5f4b0e881b2746ad5f17ef.jpg'
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
