



import { useState } from "react";
import styles from "../styles/menu.css";


const foods = [

  

    {
        id:1,
        name:"Royal Beef Burger",
        category:"Burger",
        price:"$14",
        rating:"4.9",
        desc:"Premium beef, cheddar cheese, special sauce",
        image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },

    {
        id:2,
        name:"Double Cheese Burger",
        category:"Burger",
        price:"$16",
        rating:"5.0",
        desc:"Double beef patty with melted cheese",
        image:"https://images.unsplash.com/photo-1553979459-d2229ba7433b"
    },

    {
        id:3,
        name:"Crispy Chicken Burger",
        category:"Burger",
        price:"$12",
        rating:"4.8",
        desc:"Crispy chicken with fresh vegetables",
        image:"https://images.unsplash.com/photo-1606755962773-d324e0a13086"
    },



   

    {
        id:4,
        name:"Truffle Italian Pizza",
        category:"Pizza",
        price:"$18",
        rating:"5.0",
        desc:"Wood fired pizza with fresh mozzarella",
        image:"https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    {
        id:5,
        name:"Pepperoni Pizza",
        category:"Pizza",
        price:"$15",
        rating:"4.9",
        desc:"Classic pepperoni with mozzarella cheese",
        image:"https://images.unsplash.com/photo-1628840042765-356cda07504e"
    },

    {
        id:6,
        name:"Seafood Pizza",
        category:"Pizza",
        price:"$22",
        rating:"4.8",
        desc:"Fresh seafood with Italian herbs",
        image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    },



    // DRINKS 🥤

    {
        id:7,
        name:"Strawberry Mojito",
        category:"Drinks",
        price:"$8",
        rating:"4.9",
        desc:"Fresh strawberry, mint and sparkling water",
        image:"https://images.unsplash.com/photo-1551024709-8f23befc6f87"
    },

    {
        id:8,
        name:"Fresh Orange Juice",
        category:"Drinks",
        price:"$5",
        rating:"4.7",
        desc:"Freshly squeezed orange juice",
        image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba"
    },

    {
        id:9,
        name:"Iced Coffee",
        category:"Drinks",
        price:"$6",
        rating:"4.8",
        desc:"Cold coffee with creamy milk",
        image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c"
    },



  

    {
        id:10,
        name:"Luxury Chocolate Cake",
        category:"Dessert",
        price:"$10",
        rating:"5.0",
        desc:"Dark chocolate with creamy texture",
        image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },

    {
        id:11,
        name:"Vanilla Ice Cream",
        category:"Dessert",
        price:"$6",
        rating:"4.8",
        desc:"Creamy vanilla ice cream with toppings",
        image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb"
    },

    {
        id:12,
        name:"Strawberry Cheesecake",
        category:"Dessert",
        price:"$9",
        rating:"4.9",
        desc:"Fresh strawberry cheesecake",
        image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187"
    }

];



function Menu(){


    const [filter,setFilter] = useState("All");

    const [search,setSearch] = useState("");

    const [selectedImage,setSelectedImage] = useState(null);

    const [cart,setCart] = useState([]);

    const [openCart,setOpenCart] = useState(false);



    // Add to cart

    const addToCart = (food)=>{

        setCart([
            ...cart,
            food
        ]);

    };



    

    const removeFromCart = (index)=>{

        setCart(
            cart.filter((item,i)=> i !== index)
        );

    };



   

    const total = cart.reduce(

        (sum,item)=>

        sum + Number(item.price.replace("$","")),

        0

    );




    const filteredFoods = foods.filter((item)=>{


        const categoryMatch =
        filter === "All" || item.category === filter;


        const searchMatch =
        item.name.toLowerCase()
        .includes(search.toLowerCase())

        ||

        item.category.toLowerCase()
        .includes(search.toLowerCase());


        return categoryMatch && searchMatch;


    });





return(

<section className="menu-page">



<div className="menu-header">

<h1>
Our Signature Menu
</h1>

<p>
Experience unforgettable flavors crafted by our chefs
</p>

</div>





{/* Cart Button */}

<button

className="cart-toggle"

onClick={()=>setOpenCart(true)}

>

🛒 Cart ({cart.length})

</button>







{/* Search */}

<div className="search-box">


<input

type="text"

placeholder="Search your favorite food..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


<span>
🔍
</span>


</div>









<div className="filters">


{

["All","Burger","Pizza","Drinks","Dessert"]

.map((cat)=>(


<button

key={cat}

onClick={()=>setFilter(cat)}

className={
filter===cat ? "selected" : ""
}

>

{cat}

</button>))}

</div>



<div className="food-grid">


{

filteredFoods.map((food)=>(


<div className="lux-card" key={food.id}>


<div className="image-box">


<img

src={food.image}

alt={food.name}

className="food-img"

onClick={()=>setSelectedImage(food.image)}

/>


<span>
{food.category}
</span>


</div>

<div className="content">


<h2>
{food.name}
</h2>


<div className="rating">

⭐ {food.rating}

</div>


<p>
{food.desc}
</p>





<div className="card-footer">


<h3>
{food.price}
</h3>



<button

onClick={()=>addToCart(food)}

>

Add To Cart 🛒

</button>



</div>



</div>


</div>


))}

</div>

{

openCart && (


<div className="cart-side">


<button

className="close-cart"

onClick={()=>setOpenCart(false)}>✕</button>

<h2>
🛒 Your Cart
</h2>{

cart.length === 0 ?


<p>
Your cart is empty
</p>


:


cart.map((item,index)=>(


<div

className="cart-item"

key={index}

>


<div>


<h4>
{item.name}
</h4>

<p>
{item.price}
</p>
</div>


<button

onClick={()=>removeFromCart(index)}>❌</button>

</div>))}


<h3>
Total: ${total}

</h3></div>)}

{

selectedImage && (


<div className="image-modal">


<button

className="close-image"

onClick={()=>setSelectedImage(null)}

>

✕

</button>



<img

src={selectedImage}

alt="zoom"

className="big-image"

/>



</div>


)

}

</section>
);
}

export default Menu;