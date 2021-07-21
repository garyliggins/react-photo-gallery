import React, { useState } from 'react'

export const UploadForm = () => {
    const [file,setFile] = useState(null)

    const types = ['image/png','image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        console.log(selected)

        if(selected){
            setFile(selected)
        }
    }

    return (
        <form>
           <input type='file' onChange={changeHandler}/> 
        </form>
    )
}

export default UploadForm;