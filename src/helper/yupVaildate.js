import * as yup from "yup";

const checkoutSchema = yup.object().shape({
  firstName:yup.string().required("必填"),
  lastName:yup.string().required("必填"),
  phone:yup.string().required("必填").matches(/\d{4}-\d{3}-\d{3}$/i,'格式不正確'),
  city:yup.string().required("必填"),
  conunty:yup.string().required("必填"),
  address:yup.string().required("必填"),
});

const checkoutPaySchema = yup.object().shape({
  creditFname:yup.string().required("必填"),
  creditLname:yup.string().required("必填"),
  creditNumber:yup.string().required("必填").matches(/\d{4}-\d{4}-\d{4}-\d{4}$/i,'格式不正確'),
  expiresYear:yup.string().required("必填"),
  expiresMonth:yup.string().required("必填"),
  lastThreeNumbr:yup.string().required("必填"),
});

const emailInvoiceSchema = yup.object().shape({
   emailInvoice: yup.string().email().required("必填"),

});

const addressInvoiceSchema = yup.object().shape({
  cityInvoice:yup.string().required("必填"),
  conuntyInvoice:yup.string().required("必填"),
  addressInvoice: yup.string().required("必填"),
});

const registerSchema = yup.object().shape({
  email:yup.string().email().required("必填"),
  password:yup.string().required("必填"),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], '密碼必須一致'),
});


export {
  checkoutSchema,
  checkoutPaySchema,
  emailInvoiceSchema,
  addressInvoiceSchema,
  registerSchema
}

