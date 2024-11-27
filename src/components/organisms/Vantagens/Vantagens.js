import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSyncAlt, faChartLine, faClipboardList, faBullseye } from '@fortawesome/free-solid-svg-icons';

const VantagensCard = ({ title, description, icon, bgColor, textColor, buttonTextColor }) => (
  <div className={`bg-${bgColor} shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2`}>
    <div className="flex items-start space-x-4">
      <div className="w-16 h-16 rounded-full bg-gray-100 p-4 flex items-center justify-center shadow-md">
        <FontAwesomeIcon icon={icon} className="text-blue-500 text-2xl" />
      </div>
      <div>
        <h3 className={`text-lg font-medium ${textColor} mb-2`} dangerouslySetInnerHTML={{ __html: title }}></h3>
        <p className={`${textColor} text-sm`} dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
    <a href="#" className={`flex items-center mt-4 font-medium ${buttonTextColor} transition-all duration-300`}>
      <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
      <span>Saiba Mais</span>
    </a>
  </div>
);

const Vantagens = () => {
  const vantagensData = [
    {
      title: 'Atualização <span class="text-blue-800">Automática</span> de Produtos',
      description: 'Novos produtos são automaticamente adicionados ao seu site, direto dos principais <span class="text-blue-800">fornecedores.</span>',
      icon: faSyncAlt,
      bgColor: 'white',
      textColor: 'text-gray-800',
      buttonTextColor: 'text-blue-800',
    },
    {
      title: 'Mais clientes, menos esforço.',
      description: 'SEO e marketing integrados para resultados surpreendentes.',
      icon: faChartLine,
      bgColor: 'yellow-300',
      textColor: 'text-black',
      buttonTextColor: 'text-blue-800',
    },
    {
      title: 'Tudo em um só lugar.',
      description: 'Pedidos, orçamentos e pagamentos organizados para seus clientes.',
      icon: faClipboardList,
      bgColor: 'blue-800',
      textColor: 'text-white',
      buttonTextColor: 'text-yellow-200',
    },
    {
      title: '<span class="text-blue-800">Orçamentos</span> no alvo.',
      description: 'Cada cliente vai direto para o vendedor certo, sem complicações.',
      icon: faBullseye,
      bgColor: 'gray-100',
      textColor: 'text-gray-800',
      buttonTextColor: 'text-blue-800',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-0.1 p-6">
        
        <div className="relative w-full lg:w-1/3 flex justify-center">
          <img
            src="images/mockup.png"
            alt="Phone Mockup"
            className="max-w-sm h-auto rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-normal text-blue-900 mb-4">Vantagens Exclusivas do Sistema</h2>
          <p className="text-gray-600 mb-6">
            Um sistema pensado para facilitar sua gestão e potencializar suas vendas, tudo de forma automatizada e integrada.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {vantagensData.map((vantagens, index) => (
              <VantagensCard
                key={index}
                title={vantagens.title}
                description={vantagens.description}
                icon={vantagens.icon}
                bgColor={vantagens.bgColor}
                textColor={vantagens.textColor}
                buttonTextColor={vantagens.buttonTextColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vantagens;
