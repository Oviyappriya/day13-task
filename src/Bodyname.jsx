import Itemcard from "./Itemcard";
import Data from "./Data";

const Bodyname=() => {
    console.log(Data.productdata);
    return (
        <>
        <h3 className="text-center mt-3">All Items</h3>
        <section className="py-4 container">
             <div className="row justify-content-center">
                {Data.productdata.map((item,index)=>{
                    return(
                        <Itemcard 
                        img ={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item} 
                        key={index}/>
                    )
                }
                
                )
                }
            
             </div>
        </section>

        </>
    )
}
export default Bodyname;