import Carousal___ from "../Components/Carousal___"
import AnnouncementBar from "../Components/AnnouncementBar"
import ProductCategory from "../Components/ProductCategory"
import Products from "../Components/Products & Product Details/Products"

const Home = () => {
  return (
    <div>
      <Carousal___ />
      <AnnouncementBar />
      <ProductCategory />
      {/* <Products /> */}
      <Products category="Solar" />
      <Products category="Inverter" />
      <Products category="Battery" />
      <Products category="Accessory" />
    </div>
  )
}

export default Home