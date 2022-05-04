import PhotosStorageService from "./Services/PhotosStorageService";
import { useState, useEffect } from "react";


export default function UserPage({ userEmail }) {
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
                if (Array.isArray(data) && data.length > 0) {
                    setUserDataPhotos(data)

                }
            })
        }
    }

    return (
        photosItemUser = userdataphotos.map((item, index, photos) => {
            if (item.email == userEmail)
                userData = item
            return (
                <div className="Cointainer-UserPg" key={index}>
                    <ul className="" >
                        <li className="ContainerPhotoPg" >
                            <div className="UserPhotoPg">
                                <div className=""><img src={userData.photos} /></div>
                                <div className="UserName"><p>{userData.name}</p></div>
                            </div>
                        </li>
                    </ul>
                </div>

            )
        })

    )

}