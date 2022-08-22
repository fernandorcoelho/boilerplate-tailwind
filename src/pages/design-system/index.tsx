import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { Button } from 'components/Form/Button';
import { Input } from 'components/Form/Input';
import MetaTags from 'components/MetaTags';
import { signUpFormSchema } from 'shared/validators';
import { maskName } from 'utils/MaskName';
import { maskPhoneNumber } from 'utils/MaskPhoneNumber';

const Componentes = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm({ resolver: yupResolver(signUpFormSchema) });

  const handleSubmitSignUpForm = async (values) => {
    try {
      alert('Formulário enviado com sucesso!');
      console.log(values);
    } catch (err) {
      const error = err as AxiosError;
      alert(error.message);
    }
  };

  return (
    <>
      <MetaTags title="FIT - Componentes" />

      <div className="flex flex-col items-center justify-center w-screen h-screen gap-8 bg-gray-50">
        <h1 className="text-4xl font-bold tracking-wide uppercase text-blue">
          Design System
        </h1>

        <div className="container flex flex-wrap items-center justify-center gap-4 px-4 py-6 rounded-md group bg-gray-150">
          <h1 className="text-2xl font-bold tracking-wide uppercase text-blue">
            Botões
          </h1>

          <Button>primary</Button>
          <Button variant="disable">disable</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="contact">contact</Button>
          <Button variant="cancel">cancel</Button>
          <Button variant="update">update</Button>
          <Button variant="underline">underline</Button>
          <Button variant="underlineWhite">underlineWhite</Button>
          <Button variant="save">save</Button>
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitSignUpForm)}
          className="container flex flex-wrap items-center justify-center gap-4 px-4 py-6 rounded-md group bg-gray-150"
        >
          <h1 className="text-2xl font-bold tracking-wide uppercase text-blue">
            Inputs
          </h1>

          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                name="name"
                placeholder="Seu nome Completo"
                label={
                  <>
                    Seu <strong>Nome</strong>
                  </>
                }
                error={errors.name}
                value={value}
                onChange={(e) => onChange(maskName(e.target.value))}
              />
            )}
          />

          <Controller
            name="cellphone"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                name="cellphone"
                placeholder="Ex: (11) 93210 1234"
                label={
                  <>
                    Seu número de <strong>celular</strong>
                  </>
                }
                error={errors.cellphone}
                value={value}
                onChange={(e) => onChange(maskPhoneNumber(e.target.value))}
              />
            )}
          />

          <Input
            name="email"
            placeholder="Seu email mais usado"
            label={
              <>
                Seu <strong>email</strong>
              </>
            }
            {...register('email')}
            error={errors.email}
          />

          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </>
  );
};

export default Componentes;
