import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';


const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 ='https://shoehabour.com/wp-content/uploads/2020/12/20201202_185803.jpg'

const Home = () => {
  const productList=[{name:'Mac Book', price:12000, imgSrc:img1, id:'asdfghjkl'},
                      {name:'Black Shoe', price:100, imgSrc:img2, id:'asfaasdfghjkl'}
  ]


  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };


  return (
    <div className='home'>
      {
        productList.map(i=>(
          <ProductCard key={i.id} name={i.name} imgSrc={i.imgSrc} price={i.price} id={i.id} handler={addToCartHandler}/>
        ))
      }
    </div>
  )
}

const ProductCard= ({name,id,price,handler,imgSrc}) => (
  <div className="productCard">
    <img src={imgSrc} alt={name}/>
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=> handler({name, price,id,quantity:1,imgSrc})}>Add to cart</button>
  </div>
)

export default Home