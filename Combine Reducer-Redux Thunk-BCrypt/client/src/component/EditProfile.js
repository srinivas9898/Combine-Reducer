import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import TopNavigation from './TopNavigation';

function EditProfile() {

  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let passwordInputRef = useRef();
  let ageInputRef = useRef();
  let emailInputRef = useRef();
  let mobileNoInputRef = useRef();
  let profilePicInputRef = useRef();

  let storeObj = useSelector((store)=>{return store});

  useEffect(()=>{
   
     firstNameInputRef.current.value = storeObj. reducer.userDetails.firstName;
     lastNameInputRef.current.value = storeObj.reducer.userDetails.lastName;

     ageInputRef.current.value = storeObj.reducer.userDetails.age;

     emailInputRef.current.value = storeObj.reducer.userDetails.email;
     mobileNoInputRef.current.value = storeObj.reducer.userDetails.mobileNo;
     
     setProfilePic(`http://localhost:4567/ ${storeObj.reducer.userDetails.profilePic}`);
  },[]);

  let[profilePic,setProfilePic] = useState("./images/noimage.png");

  let updateProfile = async()=>{
   
      let dataToSend = new FormData();
      dataToSend.append("firstName",firstNameInputRef.current.value);
      dataToSend.append("lastName",lastNameInputRef.current.value);
      dataToSend.append("email",emailInputRef.current.value);
      dataToSend.append("password",passwordInputRef.current.value);
      dataToSend.append("age",firstNameInputRef.current.value);
      dataToSend.append("mobileNo",mobileNoInputRef.current.value);
      dataToSend.append("profilePic",profilePicInputRef.current.value);
      
    let reqOptions={
      method:"PUT",
      body:dataToSend,
    };

       let JSONData = await fetch("http://localhost:4567/updateUserDetails",reqOptions);
     let JSOData = await JSONData.json();
     alert(JSOData.msg);
       console.log(JSOData)
  };    

  return (
    <div className="App">
      <TopNavigation/>
        <form>
          <h2>EditProfile</h2>
            <div>
            <label>FirstName:</label>
            <input ref={firstNameInputRef}></input>
            </div>
            <div>
            <label>LastName:</label>
            <input ref={lastNameInputRef}></input>
            </div>
            <div>
            <label>Email:</label>
            <input ref={emailInputRef} readOnly></input>
            </div>
            <div>
            <label>Password:</label>
            <input ref={passwordInputRef}></input>
            </div>
            <div>
            <label>Age:</label>
            <input ref={ageInputRef}></input>
            </div>
            <div>
            <label>Mobile No:</label>
            <input ref={mobileNoInputRef}></input>
            </div>
            <div>
            <label>Profile Pic:</label>
            <input ref={profilePicInputRef} type="file" accept="image/*" onClick={(eo)=>{
               let selectedPicPath = URL.createObjectURL(eo.target.files[0]);
               setProfilePic(selectedPicPath);
            }}></input>
            <br></br>
            <img src={profilePic} className="profilePic"></img>
            </div>
            <div>
         

           <button type="button" onClick={()=>{
           updateProfile();
           }}>Update Profile </button>
            </div>
        </form>
    </div>
  );
};

export default EditProfile;