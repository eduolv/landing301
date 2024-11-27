import NewsletterForm from "../../molecules/NewsletterForm/NewsletterForm ";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-[#2B6CAE] to-[#172E7A]">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col space-y-3 text-white">
          <h2 className="text-4xl font-extrabold text-center md:text-6xl">
            <span className="block">Inscreva-se na nossa Newsletter</span>
          </h2>

        </div>
        <div className="flex items-center justify-center">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
