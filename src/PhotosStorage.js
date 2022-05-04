import { useState, useEffect } from "react";
import PhotosStorageService from "../src/Services/PhotosStorageService"
import Link from 'next/link'
export default function PhotosStorage() {
    const [userdata, setUserdata] = useState([]);


    const photosStorageService = new PhotosStorageService();
    let photosItem = ('');
    let userDataItem = ('')

    useEffect(() => {
        loadList();
    }, []);

    const loadList = () => {
        const userPhotos = photosStorageService.getList('/photos');
        userPhotos.then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                setUserdata(data)
            }
        })
    }
    return (
        photosItem = userdata.map((item, index) => {
            userDataItem = item
            return (
                <ul className="ContainerPhoto" id="ContainerPhoto" key={index}>
                    <li className="ContainerPhoto" >
                        <div className="UserPhoto">
                            <img src={userDataItem.url} />
                            <div className="UserInfo">
                                <div className="UserName"><p>{userDataItem.user.name}</p></div>
                                <div className="UserEmail"> <Link href={`/user/${userDataItem.user.email}`} passHref><a><p>{userDataItem.user.email}</p></a></Link></div>
                                <div className="PhotoText"><p>{userDataItem.text}</p></div>
                            </div>
                        </div>
                    </li>
                </ul>

            )
        })
    )

};