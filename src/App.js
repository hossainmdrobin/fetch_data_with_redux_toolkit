import { Provider, useSelector } from 'react-redux';
import './App.css';
import PostView from './posts/postView';
import store from './app/store'

function App() {
  
  return (
    <div className="App">
        <PostView />
    </div>
  );
}

export default App;
