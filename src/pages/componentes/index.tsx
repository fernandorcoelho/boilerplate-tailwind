import { useEffect, useState } from 'react';

import { Button } from 'components/Form/Button';
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
      <MetaTags title="BRASA - Componentes" />

      <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 py-6 bg-gray-100 rounded-md">
          <h1 className="text-4xl font-semibold text-blue">Botões</h1>
          <Button>Variante primary</Button>
          <Button variant="secondary">Variante secondary</Button>
        </div>
      </div>
    </>
  );
};

export default Componentes;
