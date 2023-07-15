const App = () => {
    return (
        <section
            className="h-screen flex justify-center items-center bg-cream"
            id="center_container"
        >
            <section
                id="product_card"
                className="flex justify-center items-center flex-col sm:flex-row h-[600px] w-[375px] sm:w-[90%] sm:max-w-[900px]"
            >
                <section
                    id="image_container"
                    className="bg-desktop bg-cover bg-no-repeat bg-center w-full h-1/2 sm:w-1/2 sm:h-full rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl sm:rounded-bl-2xl"
                ></section>
                <section
                    id="product_info"
                    className="w-full sm:w-1/2 sm:h-full flex justify-center items-start flex-col pl-2 bg-white rounded-b-2xl sm:rounded-b-none sm:rounded-tr-2xl sm:rounded-br-2xl"
                >
                    product
                </section>
            </section>
        </section>
    );
};

export default App;
