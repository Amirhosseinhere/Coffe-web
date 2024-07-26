import {motion} from "framer-motion";
import coffee1 from '../../assets/coffee/coffee1.png'
import coffee3 from '../../assets/coffee/coffee3.png'

const servicesData = [
    {
        id: 1,
        image: coffee3,
        title: "قهوه سیاه",
        subtitle: "تلفیق تکنولوژی و طعم در هر فنجان"
    },
    {
        id: 2,
        image: coffee1,
        title: "قهوه سرد",
        subtitle: "تلفیق تکنولوژی و طعم در هر فنجان"
    },
    {
        id: 3,
        image: coffee3,
        title: "قهوه داغ",
        subtitle: "تلفیق تکنولوژی و طعم در هر فنجان"
    }
];
const cardVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut"
        }
    }
};

const containerVariants = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4,
        }
    }
};
const Services = () => {
    return (
        <div className="container my-16 space-y-4">
            <div className="text-center max-w-lg mx-auto space-y-2">
                <motion.h1
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className="text-3xl font-bold text-lightGray">
                    تازه و <span className="text-primary">خوشمزه</span>
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.4,
                    }}
                    className="text-sm opacity-50">
                    تِک‌نوکافه، جایی که فناوری و آرامش در هم می‌آمیزند. اینجا می‌توانید در حالی که از قهوه‌ای عالی لذت
                    می‌برید، جدیدترین دستاوردهای دنیای تکنولوژی را تجربه کنید. از میزهای هوشمند گرفته تا سفارش با هوش
                    مصنوعی، هر گوشه این کافه داستانی از نوآوری را روایت می‌کند.
                </motion.p>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{amount: 0.8}}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {servicesData.map((service, id) => (
                    <div className="text-center p-4 space-y-6" key={id}>
                        <img className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
                             src={service.image} alt=""/>
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold text-primary">
                                {service.title}
                            </h1>
                            <p className="text-darkGray">{service.subtitle}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
export default Services;