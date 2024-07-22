import BgImage from "../../assets/bg-slate.png";
import Coffemain from "../../assets/black.png";
const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};
 const Hero=()=>{
    return(
        <main style={bgImage}>
            <section className="w-full min-h-[750px]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                            <h1 className="text-7xl font-bold leading-tight mr-14">بلک کافی</h1>
                            <div className="relative">
                                <div className="relative z-10 space-y-4">
                                    <h1 className="text-2xl"> عاشقان لایف استایل مشکی</h1>
                                    <h1 className="text-sm opacity-55 leading-loose">
                                        بوی قهوه به قدری زیباست که نمیتونه متعلق به این جهان باشه
                                        ..! اونم کنار یار!
                                    </h1>
                                </div>
                                <div className="absolute -top-6 -right-10 w-[250px] h-[180px] bg-gray-700/25"></div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={Coffemain} alt="black coffe" className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                            />
                            <div className="h-[180px] w-[180px] absolute top-24 -left-16 border-primary border-[20px] rounded-full z-10"></div>
                            <div className="absolute -top-20 right-[200px] z-[1]">
                                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                                    بلک کافی
                                </h1>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </main>
    )
}
 export default Hero