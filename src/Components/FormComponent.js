import React, { useState } from "react";
import "../App.css"

function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [checkBoxes, setCheckBoxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  function handleChangeForm(e) {
    const { name, value } = e.target;
    setFormData((FormData) => ({ ...FormData, [name]: value }));
  }
  

  function handleChangeCheckbox(e) {
    const { name, checked } = e.target;
    setCheckBoxes((checkBoxes) => ({ ...checkBoxes, [name]: checked }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    console.log("Form checked:", checkBoxes);

  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="all-form-values">
        <label>
          First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChangeForm}
          />
    </div>
    <div className="all-form-values">
        <label>
          Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChangeForm}
          />
     </div>
     <div className="all-form-values">
        <label>
          Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeForm}
          />
       
   </div>
        
      

       
        <h4>Checkboxes</h4>
        <div className="all-checked-values">
        <label>option 1</label>
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkBoxes.checkbox1}
              onChange={handleChangeCheckbox}
            />
           
       </div>

       <div className="all-checked-values">
          <label>option 2</label>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkBoxes.checkbox2}
              onChange={handleChangeCheckbox}
            />
        
         
          </div>
          <div className="all-checked-values">
          <label>option 3</label>
            <input
              type="checkbox"
              name="checkbox3"
              checked={checkBoxes.checkbox3}
              onChange={handleChangeCheckbox}
            />
         
        </div>
       
          <button type="submit">Submit</button>
        </form>
      </div>
    
  );
}

export default FormComponent;
