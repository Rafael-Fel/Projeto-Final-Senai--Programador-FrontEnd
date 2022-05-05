import PhotosStorageService from "./Services/PhotosStorageService";
import { useState, useEffect } from "react";
import axios from "axios";


export default function UserPage({ userEmail }) {
    const [userdataphotos, setUserDataPhotos] = useState([]);

    let photosItemUser = ('');
    let userData = ('')
    const userEmailurl = userEmail
    const userPhotos = ('')
    const photosStorageUser = getList();

    function getList() {
        return axios
            .get(`https://senaigram.herokuapp.com/users/${userEmailurl}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
            });
    }


    useEffect(() => {
        if (userEmailurl !== undefined && userEmailurl !== '') {
            loadListUser();
        }
    }, [userEmailurl]);

    const loadListUser = () => {
        if (userEmailurl !== undefined) {
            photosStorageUser.then((data) => {
                if (typeof data === "object") {
                    setUserDataPhotos(data)
                }
            })
        }
    }


    return (
        userdataphotos.photos !== undefined && (
            photosItemUser = userdataphotos.photos.map((item, index) => {
                userData = item
                return (
                    <div className="Cointainer-UserPg" key={index}>
                        <ul className="" >
                            <li className="ContainerPhotoPg" >
                                <div className="UserPhotoPg">
                                    <div className=""><img src={userData.url} /></div>
                                    <div className="UserName"><p>{userdataphotos.name}</p></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                )
            }))

    )

}