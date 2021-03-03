import { useState } from 'react';


const ModaleFunction = () => {

    const [openModale, setOpenModale] = useState(false);

    function toggleModale(){
        setOpenModale(!openModale)
    }
    return(

        openModale,
        toggleModale
    )
}

export default ModaleFunction