 //eslint-disable react-hooks/rules-of-hooks */
 import React from 'react';
import {useCart} from 'react-use-cart';


const Cart=()=>{
    const{
       
        isEmpty,
        totalUniqueItems,
        items,
        removeItem,
    }=useCart();
    if(isEmpty) return <h1 className='text-center'>Your cart is empty</h1>
    return(
    
     <section className='py-4 container'>
       
        <div className='row justify-content-center' >
          <div className='col-12'>
            <form>
            <h5>cart({totalUniqueItems})</h5>
            <i className="fa-solid fa-cart-shopping"></i>
            </form>
           
           <table className='table table-light table-hover m-1'>
            <tbody>
            {items.map((item,index) =>{
              return(
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity({item.quantity})</td>
                  <td>
                    <button className="btn btn-info ms-2" onClick={()=>removeItem(item.id)}>RemoveItem</button>
                  </td>
                </tr>
              )
            })};
              
            </tbody>
           </table>
         
       
    
     
      

    </div>
     </div>
     </section>
    )
}

// eslint-disable-next-line no-undef
export default Cart;
