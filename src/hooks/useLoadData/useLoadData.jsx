import {useEffect, useState} from 'react';

const useLoadData = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then((res) => res.json())
            .then((data) => setMenuItems(data))
            .catch((err) => console.log(err.message));
    }, []);

    return menuItems;
};

export default useLoadData;
