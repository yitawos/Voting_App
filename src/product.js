import React from'react';
import Css from './css/product.css'
import Image from './img/image.png'
import Image2 from './img/image2.png'


class Product extends React.Component{
    handleVote = () =>{
       this.props.onVote(this.props.id)
    }
    render(){
        return(
            <div className='all'>
            <div className="image1">
             <img src={Image}/>
            </div>
            <div className="body">
                <div><a href='#' onClick={this.handleVote}>up</a>{this.props.vote}</div>
            <div>{this.props.title}</div>
            <div>{this.props.description}</div>
            <div><span>submited by :</span> 
            <img className="image2"src={Image2}/>
            </div>
            </div>
            </div>
        )
    }
}

export default Product;