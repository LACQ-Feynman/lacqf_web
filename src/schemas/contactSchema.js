import * as Yup from "yup";

export const initialValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nome muito curto")
    .max(100, "Nome muito longo")
    .required("Nome é obrigatório"),

  phone: Yup.string()
    .matches(/^\+?\d{8,15}$/, "Número de telefone inválido")
    .required("Telefone é obrigatório"),

  email: Yup.string()
    .email("Email inválido")
    .required("Email é obrigatório"),

  subject: Yup.string()
      .min(3, "Assunto muito curto")
    .required("Assunto é obrigatório"),

  message: Yup.string()
    .min(10, "Mensagem muito curta")
    .required("Mensagem é obrigatória"),
});