import React, { useState } from 'react';
import {app} from './base'

const db = app.firestore()

export const NewAlbumForm = () =>{
    const [albumName, setAlbumName]= useState("")

    const onAlbumNameChange = (e) => {
        setAlbumName(e.target.value)
      }

    const onAlbumCreate = () => {
        if(!albumName){
            return;
            }
            db.collection("albums").doc(albumName).set({
                name: albumName,
            });
            setAlbumName("")
    }
  return(
      <fragment>
      <input value={albumName} onChange={onAlbumNameChange} type="text"/>
    <button onClick={onAlbumCreate}> Create Album</button>
      </fragment>
  )
}