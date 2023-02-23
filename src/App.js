import React from 'react';
import Seed from './Seed'
import Product from './product';

class App extends React.Component{
/* constructor(props){
  super(props)

  this.state = {
    products:[],
  }
} */
handelProductVote(productId){
 const products = Seed
 products.forEach(item=>{
    if(item.id === productId){
        item.vote = item.vote + 1;
       
    } 
  })
  
 this.setState({products:products.vote+1}) 
} 


  render(){
    const pro = Seed.sort((a,b)=>
      (b.vote - a.vote)
    )
      
    
    const productes =   pro.map(lists=>
      <Product 
      key={lists.id}
      id={lists.id}
      title={lists.title}
      description={lists.description}
      vote={lists.vote}
      image1={lists.submitUrl}
      image={lists.imageUrl}
      onVote={this.handelProductVote}
      />
      )
    return(
    
      <div>
     { productes}
      </div>

    )
  }

}

export default App;