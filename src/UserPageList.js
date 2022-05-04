import PhotosStorageService from "./Services/PhotosStorageService";
import { useState, useEffect } from "react";
import UserPageList from "./UserPageList";

export default function UserPageList(userEmail) {
    const [userdataphotos, setUserDataPhotos] = useState([]);
    
    const photosStorageUser = new PhotosStorageService();
    
    let photosItemUser = ('');
    let userData = ('')

    
    useEffect(() => {
        loadListUser();
    }, [userEmail]);
   
    const loadListUser = () => {
        if (userEmail !== undefined) {
            const userPhotos = photosStorageUser.getList(`/users/${userEmail}`);
            userPhotos.then((data) => {
                console.log(userEmail);
                if (Array.isArray(data) && data.length > 0) {
                    setUserDataPhotos(data)

                }
            })
        }
    }
    return(
        photosItemUser = userdataphotos.map((item, index) => {
            if (item.email == userEmail)
                userData = item
            console.log(userData)
            return (
                <div className="Cointainer-UserPg">
                    <ul className="" >
                        <li className="ContainerPhotoPg" key={index}>
                            <div className="UserPhotoPg">
                                <div className=""><img src={userData} /></div>
                                <div className="UserName"><p>{userData.name}</p></div>
                            </div>
                        </li>
                    </ul>
                </div>

            )
        })
    )
}