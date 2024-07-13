const validate = (values) => {
    let errors = {};
  
    const nameValidation = /^[a-zA-Z\s]+$/;
    const postcodeValidation = /^\d{6}$/; 
  
    
    if (!values.firstName) {
      errors.firstName = "First Name cannot be empty";
    } else if (!nameValidation.test(values.firstName)) {
      errors.firstName = "Enter a valid first name";
    }
  
    
    if (!values.lastName) {
      errors.lastName = "Fabric of Cloth cannot be empty";
    } else if (!nameValidation.test(values.lastName)) {
      errors.lastName = "Enter a valid fabric of cloth";
    }
  
    
    if (!values.address) {
      errors.address = "Address cannot be empty";
    }
  
    
    if (!values.postcode) {
      errors.postcode = "Postcode cannot be empty";
    } else if (!postcodeValidation.test(values.postcode)) {
      errors.postcode = "A postcode should be 6 characters long";
    }
  
    return errors;
  };
  
  export default validate;