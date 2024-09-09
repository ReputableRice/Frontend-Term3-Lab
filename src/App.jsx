

function App() {

  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>
          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All Products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>
        </header>
        <main>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg" alt="A photo of Asics Gel-Cumulus 22 Shoes" />
            <p className="pr-name">Awesome Shoes</p>
            <p className="pr-price">$25</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg" alt="A Shirt" />
            <p className="pr-name">Stylish Shirt</p>
            <p className="pr-price">$55</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Windbreaker_Jacket%2C_Hood_Outside.jpg" alt="Windbreaker Jacket" />
            <p className="pr-name">Windbreaker Jacket</p>
            <p className="pr-price">$85</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Apple_cake_with_vanilla_ice_cream_2.jpg" alt="Ice Cream Apple Cake" />
            <p className="pr-name">Ice Cream Apple Cake</p>
            <p className="pr-price">$15</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Broek_en_jas_van_uniform_ROTEB%2C_objectnr_62773-B-C%282%29.JPG" alt="Pants" />
            <p className="pr-name">Awesome Pants</p>
            <p className="pr-price">$25</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Hat-59647_-_Hans_Braxmeier.jpg" alt="Hat" />
            <p className="pr-name">Awesome Hat</p>
            <p className="pr-price">$20</p>
          </div>

        </main>
      </section>
      <footer>

        <div>
          <h3>Who we are</h3>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Sell With us</a></li>
          </ul>
        </div>

        <div>
          <h3>Our Policies</h3>
          <ul>
            <li><a href="">Return policies</a></li>
            <li><a href="">Shipping policies</a></li>
            <li><a href="">Terms of service</a></li>
          </ul>
        </div>

        <div>
          <h3>Our products</h3>
          <ul>
            <li><a href="">Home page</a></li>
            <li><a href="">Search</a></li>
            <li><a href="">Catalog</a></li>
          </ul>
        </div>
        
      </footer>
    </div>
  );
}

export default App
