import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>Whatsapp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}


