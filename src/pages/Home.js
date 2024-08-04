import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 5999, "image": "/assets/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 4999, "image": "/assets/1002.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 2799, "image": "/assets/1003.png"},
    {"id": 4, "name": "Logitech H111 Earpods", "price": 3999, "image": "/assets/1004.png"},
    {"id": 5, "name": "MIVI Airpods Max Bluetooth Earpods", "price": 1999, "image": "/assets/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-boom Earbuds", "price": 2290, "image": "/assets/1006.png"}
  ];
  

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
