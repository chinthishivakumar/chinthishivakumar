

function App(){
    return(
    <div>
        <nav class="navbar">
            <div class="logo">Groceries</div>
        <ul class="nav-links">
            <li> <a href="Home">Home</a></li>
            <li> <a href="Features">Features</a></li>
            <li> <a href="product">Product</a></li>
            <li> <a href="categories">catagories</a></li>
            <li> <a href="Review">Review</a></li>
            
            <div class="nav-icons"></div>
        <div class="burger">
            <div class="search icon.png"></div>
            <div class="my cart icon.png"></div>
            <div class="login icon.png"></div>
            </div>
        <section id="Home">
            <h1>Fresh And Organic Products For You</h1>
            <p>Enjoy the best of nature with our fresh and organic products, 
            carefully sourced to bring health and quality to your table. 
            Experience the taste of purity in every bite!!</p>

            <button>shop now</button>
            </section>
            
            <section id="features">
        <h2>Features</h2>
        
        <div img src="path/to/your/image.jpg" alt="Description of the image">
            <h3>Fresh and Organic</h3>
            <p>Enjoy the best of nature with our fresh and organic products, carefully sourced to bring health and quality to your table.</p>
            <button>Read more</button>
        </div>
        
        <div img src="path/to/your/image.jpg" alt="Description of the image">
            <h3>Free Delivery</h3>
            <p>Get your products delivered to your doorstep without any additional delivery charges.</p>
            <button>Read more</button>
        </div>
        
        <div img src="path/to/your/image.jpg" alt="Description of the image">
            <h3>Easy Payment</h3>
            <p>Choose from a variety of secure and convenient payment options for a hassle-free experience.</p>
            <button>Read more</button>
        </div>
    </section>
            
        

        </ul>
        </nav>
        <script src="app.js"></script>
    </div>
    );
}
export default App
