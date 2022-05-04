import PhotosStorage from "../src/PhotosStorage"
export default function PhotoStorage() {

    
    return (
        <div>
        <div className='PhotoBookBanner'>
          <h1>Welcome to PhotoBook</h1>
        </div>
        <div>
        <p className="simbolo"><a href="#ContainerPhoto">&#11167;</a></p>
        </div>
        <PhotosStorage />
        </div>
    )
};