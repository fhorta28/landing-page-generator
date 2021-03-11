export default function validateInfo(value) {
  let error = {};

  if (!value.firstName || value.firstName === '' ) {
    error.firstName = '*Prénom obligatoire';
  }
  if (!value.lastName) {
    error.lastName = '*Nom obligatoire';
  }
  if (!value.companyName) {
    error.companyName = '*Nom entreprise obligatoire';
  }
  if (!value.phoneNumber) {
    error.phoneNumber = '*Téléphone obligatoire';
  }
  if (!value.email) {
    error.email = '*Email obligatoire';
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    error.email = 'Email invalide!';
  }
  return error;
}