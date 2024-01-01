const App = () => {
    return (
        <main className="h-screen flex justify-center items-center bg-cream" id="center_container">
            <h1 className="text-4xl font-bold text-center sr-only">Product Preview</h1>
            <section
                id="product_card"
                className="flex justify-center items-center flex-col sm:flex-row h-[700px] w-[375px] sm:w-[90%] sm:max-w-[600px] sm:h-[500px]"
            >
                <h2 className="text-4xl font-bold text-center sr-only">Product content card</h2>
                <section
                    id="image_container"
                    className="bg-desktop bg-cover bg-no-repeat bg-center w-full h-1/2 sm:w-1/2 sm:h-full rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl sm:rounded-bl-2xl"
                >
                    <h2 className="text-4xl font-bold text-center sr-only">Product image</h2>
                </section>
                <section
                    id="product_info"
                    className="w-full h-2/3 sm:w-1/2 sm:h-full flex justify-evenly items-start flex-col px-6 bg-white rounded-b-2xl sm:rounded-b-none sm:rounded-tr-2xl sm:rounded-br-2xl"
                >
                    <p className="text-greyBlue uppercase tracking-[.25em]">perfume</p>
                    <h2 className="text-4xl font-Fraunces text-darkBlue">
                        Gabrielle Essence Eau De parfum
                    </h2>
                    <p className="text-greyBlue font-medium max-w-[90%]">
                        A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.
                    </p>
                    <aside className="flex justify-center items-center text-darkCyan font-bold text-3xl font-Fraunces">
                        $149.99
                        <span className="line-through text-greyBlue/70 font-Montserrat text-[14px] ml-5 tracking-tight">
                            $169.99
                        </span>
                    </aside>
                    <button className="bg-darkBlue text-white font-bold w-full h-12 rounded-lg">
                        <span className="flex justify-center items-center h-full bg-darkCyan hover:bg-darkCyan/40 rounded-lg transition-colors duration-200">
                            <svg
                                width="15"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2"
                            >
                                <path
                                    d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                                    fill="#FFF"
                                />
                            </svg>
                            Add to Cart
                        </span>
                    </button>
                </section>
            </section>
        </main>
    );
};

export default App;
