import MenuBarTop from "../src/MenuBarTop";
import Footer from "../src/Footer";
import PhotoStorage from "./PhotosStorage";
export default function Home() {
  return (
    <div>
      <div className='Container-1'>
        <MenuBarTop />
        <div className='Timeline'>
          <PhotoStorage />
        </div>
        <Footer />
      </div>
    </div>
  )
}
