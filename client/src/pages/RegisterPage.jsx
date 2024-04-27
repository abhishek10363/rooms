import React, { useState } from "react";
import "../style/Register.scss";

const RegisterPage = () => {
  const [formdata, setfromdata] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setfromdata({
      ...formdata,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };
  console.log(formdata);
  // const [passwordMatch,setPasswordMatch]=useState(true)
  // const handleSubmit=async (e)=>{
  //   e.preventDefault()
  //   if (formdata.password==formdata.confirmPassword){
  //     setPasswordMatch(true)
  //   }else{
  //     setPasswordMatch(false)
  //   }
  //   try{
  //     const register_form=new FormData()
  //     for (var key in FormData){
  //       register_form.append(key,FormData[key])
  //     }
  //     const response =await fetch("http://localhost:3001/auth/register"{
  //     method:"POST",
  //     body: register_form
      
  //   }) }catch(error)
  //   {
  //     console.log(error)
  //   }
  // }
  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <input
            placeholder="First Name"
            name="firstname"
            value={formdata.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastname"
            value={formdata.lastName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            type="email"
            required
          />
          <input
            placeholder="Password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            type="password"
            required
          />
          <input
            placeholder="ConfirmPassword"
            name="confirmPassword"
            value={formdata.confirmPassword}
            onChange={handleChange}
            type="password"
            required
          />
          <input
            id="image"
            type="file"
            name="profileiImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">
            <img src="add-image-16.png" alt="add profile photo" />
            <p>Upload Your photo</p>
          </label>
        {formdata.profileImage && (
          <img src={URL.createObjectURL(formdata.profileImage)} alt="profile photo" />
        )}
          <button type="submit">Register</button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
