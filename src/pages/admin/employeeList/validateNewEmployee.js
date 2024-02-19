export default function validateAccount({ email, phoneNumber, name , password }) {
  let correctEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );
  let correctPhoneNB = /^(\+?213|0)(5|6|7)[0-9]{8}$/.test(phoneNumber);
  return {
    email: correctEmail,
    phoneNb: correctPhoneNB,
    name: name.length > 3 ? true : false,
    password:password.length >6 ? true : false
  };
}
