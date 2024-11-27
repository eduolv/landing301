const NewsletterForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email enviado!');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <label className="block pb-2">
                Mantenha-se atualizado
            </label>
            <div className="flex items-center border border-gray-500 rounded-md p-1">
                <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full p-2.5 outline-none"
                    required
                />
                <button
                    type="submit"
                    className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default NewsletterForm;
