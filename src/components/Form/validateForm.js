export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = '*Prénom obligatoire';
  }
  if (!values.firstname) {
    errors.lastname = '*Nom obligatoire';
  }
  if (!values.nameCompagny) {
    errors.nameCompagny = '*Nom entreprise obligatoire';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = '*Téléphone obligatoire';
  }
  if (!values.email) {
    errors.email = '*Email obligatoire';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email invalide!';
  }

  return errors;
}