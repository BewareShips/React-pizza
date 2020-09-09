import React from 'react';
import MainPage from '../Pages/MainPage/MainPage';
import s from './App.module.scss'
import Header from '../Components/Header/Header';
import Cart from '../Pages/Cart/Cart';
import { Route} from "react-router-dom";


const  App = () => {
  
  return (
    <div className={s.wrapper}>
      <Header/>
      <div>
        <Route path="/" component={MainPage} exact />
        <Route path="/cart" component={Cart} exact />
       
      </div>
      
    </div>
  );
}

export default App


//  class App extends React.Component {
//   componentDidMount(){
//     Axios.get('http://localhost:3000/db.json')
//     .then(({data})=> 
//     {
//       this.props.setPizzas(data.pizzas)
//     })
//   }
//   render(){
//     console.log(this.props)
//     return (
//       <div className={s.wrapper}>
//         <Header/>
//         <div>
//           <Route path="/" render ={()=> <MainPage items={this.props.items}/>}  />
//           <Route path="/cart" component={Cart} exact />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) =>{
//   return{
//     items:state.pizza.items
//   }
// }

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     setPizzas: (items)=>{ dispatch(setPizzasAction(items))}
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)


