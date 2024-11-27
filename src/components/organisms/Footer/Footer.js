import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import NewsletterForm from '../../molecules/NewsletterForm/NewsletterForm ';
import NavigationList from '../../molecules/NavigationListFooter.js/NavigationListFooter';

const footerNavs = [
    {
        label: "Empresa",
        items: [
            { href: 'javascript:void()', name: 'Importadores Parceiros' },
            { href: 'javascript:void()', name: 'Planos' },
            { href: 'javascript:void()', name: 'Equipe' },
            { href: 'javascript:void()', name: 'Carreiras' },
        ],
    },
    {
        label: "Produtos",
        items: [
            { href: 'javascript:void()', name: 'Sistema 301' },
            { href: 'javascript:void()', name: 'Redes Sociais' },
            { href: 'javascript:void()', name: 'Tráfego' },
            { href: 'javascript:void()', name: 'IA 301' },
        ],
    },
    {
        label: "Sobre",
        items: [
            { href: 'javascript:void()', name: 'Termos e licença' },
            { href: 'javascript:void()', name: 'Privacidade' },
            { href: 'javascript:void()', name: 'Sobre nós' },
        ],
    }
];

const Footer = () => (
    <footer className="text-gray-500 bg-white px-4 py-8 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
            <div className="flex-1">
                <div className="max-w-xs">
                    <h1 className="font-bold text-4xl text-[#19327E]">301</h1>
                    <p className="leading-relaxed mt-2 text-[15px]">
                        Agência com 301 motivos para você fechar conosco. Tecnologia e interligente.
                    </p>
                    <NewsletterForm />
                </div>
            </div>
            <div className="flex-1 mt-10 space-y-6 items-start justify-between sm:flex md:space-y-0 md:mt-0">
                {footerNavs.map((item, idx) => (
                    <NavigationList key={idx} label={item.label} items={item.items} />
                ))}
            </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
            <div className="mt-4 sm:mt-0">
                &copy; 2024 Agência 301.
            </div>
            <div className="mt-6 sm:mt-0">
                <ul className="flex items-center space-x-4">
                    <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="text-gray-500 hover:text-indigo-600" />
                        </a>
                    </li>
                    <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedinIn className="text-gray-500 hover:text-indigo-600" />
                        </a>
                    </li>
                    <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF className="text-gray-500 hover:text-indigo-600" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
