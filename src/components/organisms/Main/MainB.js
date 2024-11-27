import Image from 'next/image';
import { ButtonPrimary, ButtonPrimaryWhite, ButtonSecondary, ButtonSecondaryWhite } from '@/components/atoms/Buttons';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function MainB() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-16 -mt-4 bg-[url(/images/backgroundokpng.png)] bg-[length:100vw_100vh] bg-center bg-no-repeat">
            <div className="absolute inset-0 z-0"></div> 

            <div className="relative container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between z-10 text-white">
                <section className="lg:w-1/2 text-center lg:text-left mb-8 mt-8 lg:mb-0 px-4">
                    <h2 className="text-lg font-light text-gray-300 mb-6">Agência 301</h2>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight sm:leading-tight mb-4 sm:mb-6 text-white">
                        Simplificando o sucesso dos <span className="text-yellow-400">brindeiros,</span> com{' '}
                        <span className="text-yellow-400">marketing</span> e{' '}
                        <span className="text-yellow-400">gestão</span>
                    </h1>
                    <p className="text-base sm:text-lg mb-6 sm:mb-6 leading-tight text-gray-300">
                        Na 301, transformamos desafios em produtividade. Deixe-nos tornar o seu dia a dia mais ágil e eficiente com uma plataforma que une gestão inteligente e vendas online, tudo em um só lugar.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-5 sm:space-y-0 sm:space-x-4 transition-all duration-300">
                        <ButtonPrimaryWhite text="Obter acesso" variant="outlined" color="secondary" />
                        <ButtonSecondaryWhite text="Site demonstrativo" variant="outlined" color="secondary" />
                    </div>

                    {/* Seção de redes sociais */}
                    <section className="mt-7">
                        <div className="container mx-auto">
                            <div className="flex justify-center lg:justify-start space-x-6 mt-4">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-white hover:text-yellow-500 text-3xl transition-all duration-300" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-white hover:text-yellow-500 text-3xl transition-all duration-300" />
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* SECTION DOS IMPORTADORES */}
                    <section className="absolute bottom-[-80px] sm:bottom-[-90px] left-0 w-full">
                        <div className="flex justify-center space-x-2 sm:space-x-9">
                            <Image src="/images/xbz.png" alt="01" width={70} height={70} className="hover:grayscale-0 transition-all duration-300" />
                            <Image src="/images/spot.png" alt="02" width={70} height={70} className="hover:grayscale-0 transition-all duration-300" />
                            <Image src="/images/asia.png" alt="03" width={70} height={70} className="hover:grayscale-0 transition-all duration-300" />
                            <Image src="/images/88brindes.png" alt="Logo 4" width={70} height={70} className="hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </section>
                </section>

                {/* Imagem do lado direito */}
                <div className="lg:w-1/2 flex justify-center mt-18 sm:mt-8 lg:mt-0">
                    <Image src="/images/back5.svg" alt="Team working on 301 dashboard" width={600} height={800} className="object-cover rounded-lg" priority={true} />
                </div>
            </div>
        </main>
    );
}
