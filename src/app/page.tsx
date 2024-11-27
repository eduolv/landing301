"use client";
import Head from 'next/head';
import { FC } from 'react';
// Wrappers
import { HeaderWrapper, MainWrapper, PricingWrapper, FooterWrapper } from "@/utils/wrapper/Wrapper";
// Components
import Vantagens from '@/components/organisms/Vantagens/Vantagens';
import Feedback from '@/components/organisms/Feedback/Feedback';
import VariableComponent from '@/components/organisms/VariableComponent/VariableComponent';
import CtaSelectComponent from '@/components/organisms/CtaSelectComponent/CtaSelectComponent';

const Home: FC = () => {

  return (
    <>
      <Head>
        <title>Simplify Your Success | 301 Dashboard</title>
        <meta
          name="description"
          content="Simplificando o sucesso dos brindeiros com marketing e gestão."
        />
        <meta
          name="keywords"
          content="Na 301, transformamos desafios em produtividade. Deixe-nos tornar o seu dia a dia mais ágil e eficiente com uma plataforma que une gestão inteligente e vendas online, tudo em um só lugar."
        />
        <meta name="author" content="301 Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderWrapper />

      <MainWrapper />

      <div className="my-16"></div>

      <section>
        <Vantagens />
        <PricingWrapper />
        <Feedback />
        <VariableComponent />
        <CtaSelectComponent />
        <FooterWrapper />
      </section>
    </>
  );
};

export default Home;
