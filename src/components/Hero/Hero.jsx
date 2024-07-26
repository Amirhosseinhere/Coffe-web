import BgImage from "../../assets/bg-slate.png";
import CoffeeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};
const Hero = () => {
    return (
        <main style={bgImage}>
            <section className="w-full min-h-[750px]">
                <div className="container">
                    <Navbar />

                    {/* hero section */}
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-items-center min-h-[850px]">
                        <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                            <motion.h1
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.8,
                                }}
                                className="text-7xl font-bold leading-tight mr-14"
                            > کافه تِک
                            </motion.h1>
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1,
                                }}
                            >
                                <div className="relative z-10 space-y-4">
                                    <h1 className="text-2xl"> بیش از یک کافه، یک تجربه فناورانه</h1>
                                    <h1 className="text-sm opacity-55 leading-loose">
                                        مکانی که در آن عطر قهوه با نوآوری فناوری در هم می‌آمیزد، و هر فنجان داستانی از آینده را روایت می‌کند !
                                    </h1>
                                </div>
                                <div className=" absolute -top-6 -right-10 w-[250px] h-[180px] bg-gray-700/25"></div>
                            </motion.div>
                        </div>
                        <div className="relative">
                            <motion.img
                                src={CoffeeMain}
                                alt="black coffee"
                                className="relative z-40 h-[400px] md:h-[600px] img-shadow"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4,
                                }}
                            />
                            <div className="h-[180px] w-[180px] absolute top-24 -left-16 border-primary border-[20px] rounded-full z-10"></div>

                            <div className="absolute -top-16 right-[60px] z-[1]">
                                <h1 className="text-[140px] scale-150 font-bold text-darkGray/50 leading-none">
                                    کافه تِک
                                </h1>
                            </div>
                        </div>

                        <motion.div
                            className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 max-lg:hidden"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 1.2,
                            }}
                        >
                            <h1 className="opacity-0 text-7xl font-bold leading-tight mr-14">
                                کافه تِک
                            </h1>
                            <div className="relative">
                                <div className="relative z-10 space-y-4">
                                    <h1 className="text-2xl">بیش از یک کافه، یک تجربه فناورانه</h1>
                                    <h1 className="text-sm opacity-55 leading-loose">
                                        مکانی که در آن عطر قهوه با نوآوری فناوری در هم می‌آمیزد، و هر فنجان داستانی از آینده را روایت می‌کند !
                                    </h1>
                                </div>
                                {/* <div className=" absolute -top-6 -left-10 w-[250px] h-[180px] bg-darkGray/50"></div> */}
                            </div>
                        </motion.div>
                        <div></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;