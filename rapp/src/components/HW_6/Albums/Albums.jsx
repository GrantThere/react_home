import React, {useEffect, useState} from 'react';
import {JSNapiService} from "../../../services/JSNapiService";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        JSNapiService.getalbums()
            .then(({data}) => setAlbums(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Albums;