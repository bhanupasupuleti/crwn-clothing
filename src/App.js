import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component';
import SigninAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {setCurrentUser} from './redux/user/user.actions';
import {hideCart} from './redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {  
  unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }
      setCurrentUser(userAuth)
     })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div className="App" >
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          <Route path ='/checkoutpage' component={CheckOutPage} />
          <Route 
            exact 
            path='/signin' 
            render={()=>
                    this.props.currentUser?(
                      <Redirect to='/' />
                    ):
                    <SigninAndSignUp />
                    } />
        </Switch>
      </div>
    );
  }
}
const mapStatetoProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
export default connect(mapStatetoProps,{setCurrentUser,hideCart})(App);
