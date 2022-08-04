import { useEffect, useState } from 'react';

import { Button } from 'components/Form/Button';
import { Input } from 'components/Form/Input';
import MetaTags from 'components/MetaTags';

const Componentes = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

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

        <div className="container flex flex-wrap items-center justify-center gap-4 px-4 py-6 rounded-md group bg-gray-150">
          <h1 className="text-2xl font-bold tracking-wide uppercase text-blue">
            Inputs
          </h1>

          <Input
            name="name"
            placeholder="Seu nome completo"
            label={
              <span>
                Seu <strong>Nome</strong>
              </span>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Componentes;
