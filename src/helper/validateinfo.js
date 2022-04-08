export default  function validateInfo(values) {
  let errors = {};

  if (!values.fName.trim()) {
    errors.fName = "必填";
  }

  if (!values.lName.trim()) {
    errors.lName = "必填";
  }

  if (!values.city.trim()) {
    errors.city = "必填";
  }

  if (!values.conunty.trim()) {
    errors.conunty = "必填";
  }
  
  if (!values.address.trim()) {
    errors.address = "必填";
  }

  const regexPhone = new RegExp(/\d{4}-\d{3}-\d{3}$/, "i");
  
  if (!values.phone.trim()) {
    errors.phone = "必填";
  } else if (!regexPhone.test(values.phone.trim())) {
    errors.phone = "格式錯誤";
  }
  //console.log(regexPhone.test(values.phone.trim()))
  return errors;
}
