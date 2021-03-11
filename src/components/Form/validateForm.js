export default function validateInfo(values) {
  let error = {};

  if (!values.firstName) {
    error.firstName = '*Prénom obligatoire';
  }
  if (!values.lastName) {
    error.lastName = '*Nom obligatoire';
  }
  if (!values.companyName) {
    error.companyName = '*Nom entreprise obligatoire';
  }
  if (!values.phoneNumber) {
    error.phoneNumber = '*Téléphone obligatoire';
  }
  if (!values.email) {
    error.email = '*Email obligatoire';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = 'Email invalide!';
  }
  return error;
}