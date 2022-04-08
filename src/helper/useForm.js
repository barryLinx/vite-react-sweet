import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const clearObjpropert =(obj)=>{
  for (var key in obj) {
    delete obj[key];
  }
}

const useForm = (validate) => {
  const history = useHistory();
  const [values, setValue] = useState({
    fName: "",
    lName: "",
    phone: "",
    city: "",
    conunty: "",
    address: "",
    email: "",
    creditNumber: "",
    creditFname: "",
    creditLname: "",
    expiresYear: "",
    expiresMonth: "",
    lastNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log("nmae",name)
    //console.log("value",value)
    setValue({
      ...values,
      [name]: value,
    });
    //console.log(values)
    //setErrors(validate(values));
    //console.log(values)
  };

  const handleSubmit = (e, next) => {
    e.preventDefault();
    //  setErrors(await validate(values));
    const haserror = Object.values(errors);
   console.log(haserror);
    setErrors(clearObjpropert(errors))
    console.log(haserror.length);
    // if () {
    //   //console.log('error equal 0');
    //   history.push({
    //     pathname:next,
    //     state:values
    //   });     
      //clearObjpropert(errors)}
    
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
