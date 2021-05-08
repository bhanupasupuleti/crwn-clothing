import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {auth} from './firebase/firebase.utils'

import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

class App extends React.Component {
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
       this.setState({currentUser:user})
     })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  state={
    currentUser:null
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SigninAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
