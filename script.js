

const main = document.querySelector('main');

// const image = [
//     "https://b.zmtcdn.com/data/pictures/3/20863533/06fc9c8faa0fcf64c1a56859ae934abb_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/6/20529116/1b39c4665c00eb96f5bb4542ae0b1fe2_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/8/18238278/8a78794b498468ce663b76c1d2cd8159_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/8/20243538/3224c047011af9a297160dd0605d1352_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/1/19495371/53ccc0683b72fbde87740d033a1ab646_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/6/19295106/3d44032078bfdd6967e4dc7be413d470_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/3/312603/16d5cd13fbc13bcfece4d4333fb2e6ef_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/6/19295106/3d44032078bfdd6967e4dc7be413d470_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/6/20985886/640e2e1efe8fe5ae02258565616b8e3f_featured_v2.jpg?output-format=webp",
//     "https://b.zmtcdn.com/data/pictures/2/18208892/7095ff896bb51f9bb7590fcf472d2cda_featured_v2.jpg",
//     "https://b.zmtcdn.com/data/pictures/9/20324919/64f9a36ad23ae37fd09f368d29008333_featured_v2.jpg",
//     "https://b.zmtcdn.com/data/pictures/7/18418277/46c8ece776ea631abe95e239d85468b5_featured_v2.jpg"
// ];

// const discount = [5,10,15,20,25];

// const restaurant = [
//     "The Gourmet Kitchen",
//     "Urban Spice",
//     "Cafe Delight",
//     "Flavors of India",
//     "The Rooftop Lounge",
//     "Seafood Haven",
//     "The Pasta Place",
//     "Burger Bliss",
//     "Sushi World",
//     "Taco Fiesta",
//     "Steakhouse Supreme",
//     "Dessert Dreams"
// ];
// const rating = [4.5, 4.2, 4.0, 3.8, 4.7, 4.3, 4.1, 3.9, 4.6, 4.0, 4.4, 4.8];

// const cuisines = [
//     "Italian",
//     "Chinese",
//     "Indian",
//     "Mexican",
//     "Japanese",
//     "Thai",
//     "Mediterranean",
//     "French",
//     "Korean",
//     "Vietnamese",
//     "American",
//     "Greek"
// ];
// const locations = [
//     "Connaught Place",
//     "Karol Bagh",
//     "South Extension",
//     "Rajouri Garden",
//     "Dwarka",
//     "Hauz Khas",
//     "Greater Kailash",
//     "Lajpat Nagar",
//     "Chandni Chowk",
//     "Vasant Kunj",
//     "Saket",
//     "Punjabi Bagh"
// ];
// const distance = [
//     2.5, 3.1, 4.7, 5.2, 6.8, 7.5, 8.0, 9.3, 10.1, 11.4, 12.6, 13.0
// ];




// document.addEventListener('DOMContentLoaded',()=>{

//     const div = document.createElement('div');
//     div.className = "card";

//     const divImg = document.createElement('div');
//     divImg.className = 'image';

//     const img = document.createElement('img');
//     img.className ='img';
//     //image src ki array
//     let index = Math.floor(Math.random()*image.length);
//     img.src = image[index];

//     const para = document.createElement("p");
//     para.className = 'off';
//     //taking value from discount array
//     index = Math.floor(Math.random()*discount.length);
//     para.innerHTML = `Flat ${discount[index]}% OFF`;


//     divImg.appendChild(img);
//     divImg.appendChild(para);
//     div.appendChild(divImg);
//     main.appendChild(div);


//     //  Restaurant Name 

//     const divRestaurant = document.createElement('div');
//     divRestaurant.className = 'Restaurant';

//     const Restaurant_name = document.createElement('div');
//     Restaurant_name.className = "Restaurant_name Box";

//     const p1 = document.createElement("p");
//     //taking restaurant name from restaurant array
//     index = Math.floor(Math.random()*restaurant.length);
//     p1.innerHTML = `${restaurant[index]}`;

//     const divRating = document.createElement('div');
//     divRating.className = 'rating Box';
//     const p2 = document.createElement("p");
//     //rating array se rating lo
//     index = Math.floor(Math.random()*rating.length);
//     p2.innerHTML = `${rating[index]}*`;


//     Restaurant_name.appendChild(p1);
//     divRating.appendChild(p2);
//     divRestaurant.appendChild(Restaurant_name);
//     divRestaurant.appendChild(divRating);
//     div.appendChild(divRestaurant);
    

//     // <!-- food ki information -->

//     const divFood = document.createElement('div');
//     divFood.className = "food";

//     const food = document.createElement("div");
//     food.className = "food_name Box";

//     const p3 = document.createElement('p');
//     index = Math.floor(Math.random()*cuisines.length);
//     p3.innerHTML = `${cuisines[index]}`;

//     food.appendChild(p3);
//     divFood.appendChild(food);
    
//     const price = document.createElement("div");
//     food.className = "price Box";

//     const p4 = document.createElement('p');
//     p4.innerHTML = `₹;2800 for two`;

//     price.appendChild(p4);
//     divFood.appendChild(price);
//     div.appendChild(divFood);


//     // <!-- Location -->

//     const divLocation = document.createElement('div');
//     divLocation.className = "Location";    
//     const place = document.createElement('div');
//     place.className = "Place Box";    

//     const p5 = document.createElement('p');
//     index = Math.floor(Math.random()*locations.length);
//     p5.innerHTML = `${locations[index]}`;

//     place.appendChild(p5);
//     divLocation.appendChild(place);

//     const divDistance = document.createElement('div');
//     divDistance.className = "Distance Box";   

//     const p6 = document.createElement('p');
//     index = Math.floor(Math.random()*distance.length);
//     p6.innerHTML = `${distance[index]} Km`;

//     divDistance.appendChild(p6);
//     divLocation.appendChild(divDistance);
//     div.appendChild(divLocation);

// })


const restaurantsData = [
    {
        image: "https://b.zmtcdn.com/data/pictures/3/20863533/06fc9c8faa0fcf64c1a56859ae934abb_featured_v2.jpg?output-format=webp",
        discount: 5,
        restaurant: "The Gourmet Kitchen",
        rating: 4.5,
        cuisine: "Italian",
        location: "Connaught Place",
        distance: 2.5
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/6/20529116/1b39c4665c00eb96f5bb4542ae0b1fe2_featured_v2.jpg?output-format=webp",
        discount: 10,
        restaurant: "Urban Spice",
        rating: 4.2,
        cuisine: "Chinese",
        location: "Karol Bagh",
        distance: 3.1
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/8/18238278/8a78794b498468ce663b76c1d2cd8159_featured_v2.jpg?output-format=webp",
        discount: 15,
        restaurant: "Cafe Delight",
        rating: 4.0,
        cuisine: "Indian",
        location: "South Extension",
        distance: 4.7
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/8/20243538/3224c047011af9a297160dd0605d1352_featured_v2.jpg?output-format=webp",
        discount: 20,
        restaurant: "Flavors of India",
        rating: 3.8,
        cuisine: "Mexican",
        location: "Rajouri Garden",
        distance: 5.2
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/1/19495371/53ccc0683b72fbde87740d033a1ab646_featured_v2.jpg?output-format=webp",
        discount: 25,
        restaurant: "The Rooftop Lounge",
        rating: 4.7,
        cuisine: "Japanese",
        location: "Dwarka",
        distance: 6.8
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/6/19295106/3d44032078bfdd6967e4dc7be413d470_featured_v2.jpg?output-format=webp",
        discount: 5,
        restaurant: "Seafood Haven",
        rating: 4.3,
        cuisine: "Thai",
        location: "Hauz Khas",
        distance: 7.5
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/3/312603/16d5cd13fbc13bcfece4d4333fb2e6ef_featured_v2.jpg?output-format=webp",
        discount: 10,
        restaurant: "The Pasta Place",
        rating: 4.1,
        cuisine: "Mediterranean",
        location: "Greater Kailash",
        distance: 8.0
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/6/19295106/3d44032078bfdd6967e4dc7be413d470_featured_v2.jpg?output-format=webp",
        discount: 15,
        restaurant: "Burger Bliss",
        rating: 3.9,
        cuisine: "French",
        location: "Lajpat Nagar",
        distance: 9.3
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/6/20985886/640e2e1efe8fe5ae02258565616b8e3f_featured_v2.jpg?output-format=webp",
        discount: 20,
        restaurant: "Sushi World",
        rating: 4.6,
        cuisine: "Korean",
        location: "Chandni Chowk",
        distance: 10.1
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/2/18208892/7095ff896bb51f9bb7590fcf472d2cda_featured_v2.jpg",
        discount: 25,
        restaurant: "Taco Fiesta",
        rating: 4.0,
        cuisine: "Vietnamese",
        location: "Vasant Kunj",
        distance: 11.4
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/9/20324919/64f9a36ad23ae37fd09f368d29008333_featured_v2.jpg",
        discount: 5,
        restaurant: "Steakhouse Supreme",
        rating: 4.4,
        cuisine: "American",
        location: "Saket",
        distance: 12.6
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/7/18418277/46c8ece776ea631abe95e239d85468b5_featured_v2.jpg",
        discount: null,
        restaurant: "Dessert Dreams",
        rating: 4.8,
        cuisine: "Greek",
        location: "Punjabi Bagh",
        distance: 13.0
    }
];


restaurantsData.forEach((restaurant) =>{

    const div = document.createElement('div');
    div.className = "card";

    // Image Section
    const divImg = document.createElement('div');
    divImg.className = 'image';

    const img = document.createElement('img');
    img.className = 'img';
    img.src = restaurant.image;

    const para = document.createElement("p");
    para.className = 'off';
    if(restaurant.discount)
    para.innerHTML = `Flat ${restaurant.discount}% OFF`;

    divImg.appendChild(img);
    divImg.appendChild(para);
    div.appendChild(divImg);

    // Restaurant Section
    const divRestaurant = document.createElement('div');
    divRestaurant.className = 'Restaurant';

    const Restaurant_name = document.createElement('div');
    Restaurant_name.className = "Restaurant_name Box";

    const p1 = document.createElement("p");
    p1.innerHTML = `${restaurant.restaurant}`;

    const divRating = document.createElement('div');
    divRating.className = 'rating Box';
    const p2 = document.createElement("p");
    p2.innerHTML = `${restaurant.rating}*`;

    Restaurant_name.appendChild(p1);
    divRating.appendChild(p2);
    divRestaurant.appendChild(Restaurant_name);
    divRestaurant.appendChild(divRating);
    div.appendChild(divRestaurant);

    // Food Information Section
    const divFood = document.createElement('div');
    divFood.className = "food";

    const food = document.createElement("div");
    food.className = "food_name Box";

    const p3 = document.createElement('p');
    p3.innerHTML = `${restaurant.cuisine}`;

    food.appendChild(p3);
    divFood.appendChild(food);

    const price = document.createElement("div");
    price.className = "price Box";

    const p4 = document.createElement('p');
    p4.innerHTML = `₹2800 for two`;

    price.appendChild(p4);
    divFood.appendChild(price);
    div.appendChild(divFood);

    // Location Section
    const divLocation = document.createElement('div');
    divLocation.className = "Location";

    const place = document.createElement('div');
    place.className = "Place Box";

    const p5 = document.createElement('p');
    p5.innerHTML = `${restaurant.location}`;

    place.appendChild(p5);
    divLocation.appendChild(place);

    const divDistance = document.createElement('div');
    divDistance.className = "Distance Box";

    const p6 = document.createElement('p');
    p6.innerHTML = `${restaurant.distance} Km`;

    divDistance.appendChild(p6);
    divLocation.appendChild(divDistance);
    div.appendChild(divLocation);

    // Append the card to the main container
    main.appendChild(div);

})


const filterButton = document.getElementById("filterButton");

const form = document.querySelector('form');

form.addEventListener('click',(e)=>{
    
    // e.preventDefault();

    main.innerHTML = '';

    console.log(e.target.id);  //e.target.id -> string mai ayegi na ki number mai

    if(e.target.value = '')
    {
        alert("Please select a sort option")
        return;
    }

    if(e.target.id === "1")
    {
        restaurantsData.sort((a,b)=> b.rating - a.rating);
    }
    else if(e.target.id === "2")
    {    
        restaurantsData.sort((a,b)=> a.rating - b.rating);  
    }

    restaurantsData.forEach((restaurant) =>{

        const div = document.createElement('div');
        div.className = "card";
    
        // Image Section
        const divImg = document.createElement('div');
        divImg.className = 'image';
    
        const img = document.createElement('img');
        img.className = 'img';
        img.src = restaurant.image;
    
        const para = document.createElement("p");
        para.className = 'off';
        if(restaurant.discount)
        para.innerHTML = `Flat ${restaurant.discount}% OFF`;
    
        divImg.appendChild(img);
        divImg.appendChild(para);
        div.appendChild(divImg);
    
        // Restaurant Section
        const divRestaurant = document.createElement('div');
        divRestaurant.className = 'Restaurant';
    
        const Restaurant_name = document.createElement('div');
        Restaurant_name.className = "Restaurant_name Box";
    
        const p1 = document.createElement("p");
        p1.innerHTML = `${restaurant.restaurant}`;
    
        const divRating = document.createElement('div');
        divRating.className = 'rating Box';
        const p2 = document.createElement("p");
        p2.innerHTML = `${restaurant.rating}*`;
    
        Restaurant_name.appendChild(p1);
        divRating.appendChild(p2);
        divRestaurant.appendChild(Restaurant_name);
        divRestaurant.appendChild(divRating);
        div.appendChild(divRestaurant);
    
        // Food Information Section
        const divFood = document.createElement('div');
        divFood.className = "food";
    
        const food = document.createElement("div");
        food.className = "food_name Box";
    
        const p3 = document.createElement('p');
        p3.innerHTML = `${restaurant.cuisine}`;
    
        food.appendChild(p3);
        divFood.appendChild(food);
    
        const price = document.createElement("div");
        price.className = "price Box";
    
        const p4 = document.createElement('p');
        p4.innerHTML = `₹2800 for two`;
    
        price.appendChild(p4);
        divFood.appendChild(price);
        div.appendChild(divFood);
    
        // Location Section
        const divLocation = document.createElement('div');
        divLocation.className = "Location";
    
        const place = document.createElement('div');
        place.className = "Place Box";
    
        const p5 = document.createElement('p');
        p5.innerHTML = `${restaurant.location}`;
    
        place.appendChild(p5);
        divLocation.appendChild(place);
    
        const divDistance = document.createElement('div');
        divDistance.className = "Distance Box";
    
        const p6 = document.createElement('p');
        p6.innerHTML = `${restaurant.distance} Km`;
    
        divDistance.appendChild(p6);
        divLocation.appendChild(divDistance);
        div.appendChild(divLocation);
    
        // Append the card to the main container
        main.appendChild(div);
    
    })

    const filterOptions = document.querySelector('.filterOptions');
    filterOptions.style.visibility = 'hidden';
    filterOptions.style.transform = "translate(-50%,-50%) scale(1.0)";
})



filterButton.addEventListener('click',()=>{

    const filterOptions = document.querySelector('.filterOptions');
    filterOptions.style.visibility = 'visible';
    filterOptions.style.top = '50%';
    filterOptions.style.transform = "translate(-50%,-50%) scale(1.0)";

})

// const ok = document.getElementById("ok");

// ok.addEventListener('click',()=>{

//     const filterOptions = document.querySelector('.filterOptions');
//     filterOptions.style.visibility = 'hidden';
//     filterOptions.style.transform = "translate(-50%,-50%) scale(1.0)";

// })