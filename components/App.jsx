import './App.css';
import Users from './components/Users';


function App() {

  const DUMMY_USERS = [
    {
      id: 'u1',
      name: 'Rapunzel',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/5c239685ecbea2c12fcb8ee661a04d0a9098e141.jpeg?region=0,0,600,600'
    },
    {
      id: 'u2',
      name: 'Maui',
      image:
        'https://e0.pxfuel.com/wallpapers/998/966/desktop-wallpaper-maui-moana-moana-maui.jpg'
    },
    {
      id: 'u3',
      name: 'Baymax',
      image:
        'https://cdn.dribbble.com/users/2479547/screenshots/7482884/media/dead929c0bfbe92e13a1aa919027fe46.png?compress=1&resize=400x300'
    },
    {
        id: 'u4',
        name: 'Baymax',
        image:
          'https://cdn.dribbble.com/users/2479547/screenshots/7482884/media/dead929c0bfbe92e13a1aa919027fe46.png?compress=1&resize=400x300'
      },
      {
        id: 'u5',
        name: 'Baymax',
        image:
          'https://cdn.dribbble.com/users/2479547/screenshots/7482884/media/dead929c0bfbe92e13a1aa919027fe46.png?compress=1&resize=400x300'
      },
      {
        id: 'u6',
        name: 'Baymax',
        image:
          'https://cdn.dribbble.com/users/2479547/screenshots/7482884/media/dead929c0bfbe92e13a1aa919027fe46.png?compress=1&resize=400x300'
      },
   ];

return (
  <Users user_list={DUMMY_USERS} />
); 
}

export default App;
