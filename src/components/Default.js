import Back from "./Back";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";


const Default = () => {
    return (
        <div className="relative">
            <Back />
            <Navbar />

            <div className="flex flex-col items-center justify-center text-center mt-8">
                <PageTitle title={''} />
            </div>
        </div>
    )
}

export default Default;