import * as yup from 'yup';

export const signUpFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  cellphone: yup
    .string()
    .required('Celular obrigatório')
    .min(14, 'Mínimo 11 dígitos')
});
