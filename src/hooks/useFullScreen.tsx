import React, { useEffect } from 'react'
const useFullScreen   : React.FC = () => {
    useEffect(() => {
        (document.getElementById("button") as HTMLButtonElement).click();
    },[])
    const handleClick = () => {
        if(document)
              document.documentElement.requestFullscreen();
    }
    return (
        <button style={{ display : 'none'}} onClick={handleClick} id="button"> NDIZIHIWE Regis</button>
    )
}

export default useFullScreen