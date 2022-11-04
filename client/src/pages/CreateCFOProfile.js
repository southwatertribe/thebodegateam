import React from "react";
import "./pages.css";
function CreateCFOProfile() {
  return (
    //CREATE CFO PROFILE PAGE
    <div className="CFOProfileForm">
      <h2>Create CFO Profile</h2>
      <label>Full Name</label>
      <input type="text" id="firstName" placeholder="First name" />
      <input type="text" id="midleName" placeholder="Midle name" />
      <input type="text" id="lastName" placeholder="Last name" />
      <label>Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="123-45-678"
      />
      <label>Email Address</label>
      <input type="email" id="email" placeholder="Email address" />
      <label for="foodTag">Food Tag</label>
      <input type="text" id="foodTag" name="FoodTag" />
      <label for="Menu">Website</label>
      <input type="url" id="foodTag" name="website" placeholder="link" />
      <label for=""> Address</label>
      <input type="street" id="autocomplete" placeholder="Street" />
      <input type="city" id="inputCity" placeholder="City" />
      <input type="state" id="inputState" placeholder="State" />
      <input type="zip" class="form-control" id="inputZip" placeholder="Zip" />
      <input type="county" id="inputCounty" placeholder="County" />
      <input type="country" id="inputCountry" placeholder="Country" />
      <label for="Menu">Upload Menu</label>
      <input type="file" id="Menu" name="File Name" accept="application/pdf" />
      <button type="submit" value="Submit">
        Submit
      </button>
      <button type="reset" value="Reset">
        Reset
      </button>
    </div>
  );
}

export default CreateCFOProfile;
