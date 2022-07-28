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
        <Button>Teste</Button>
      </div>
    </>
  );
};

export default Componentes;
