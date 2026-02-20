import {useEffect, useRef, useState} from "react"
import TanushImage from "../assets/TanushImage.png"
import Navbar from "../Components/CommonCompo/Navbar"
import {motion, useScroll, useTransform, useAnimation} from "framer-motion"
import MagneticLink from "../Components/uiAnimationHooks/MagneticLink"
import axios from "axios";
import {toast} from 'react-toastify'


export default function ContactPage() {

    const sectionRef = useRef(null);
    const [error, setError] = useState([]);
    const controls = useAnimation();
    const [offsetX, setOffsetX] = useState(0);
    const [loading, setLoading] = useState(false);
    const [form, setFrom] = useState({
        name: "", email: "", organisation_name: "", service: "", message: ""
    })

    const fadeUp = {
        hidden: {opacity: 0, y: 40}, visible: {
            opacity: 1, y: 0, transition: {duration: 0.8, ease: [0.25, 0.1, 0.25, 1]}
        }
    }

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const handleMouseEnterForHover = () => {
        controls.start({
            y: "0%", transition: {duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0]}, // Custom bezier as requested
        });
    };

    const handleMouseLeaveForHover = async () => {
        await controls.start({
            y: "-100%", transition: {duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0]},
        });
        controls.set({y: "100%"});
    };

    const {scrollYProgress} = useScroll({
        target: sectionRef, offset: ["start start", "end start"],
    });
    const {scrollYProgress: scrollYProgress2} = useScroll();
    const leftToRight = useTransform(scrollYProgress2, [0, 1], ["-200%", "-10%"]);

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const radius = useTransform(scrollYProgress, [0, 1], [48, 0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Control how far the button moves (max 200px)
            const maxMove = 200;
            const move = Math.min(scrollY * 0.3, maxMove);

            setOffsetX(move);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.document.title = "Contact-Tanush Patel"
    }, [])

    const checkValidation = () => {
        const nameValidator = /^([A-Za-z]\.\s?)*[A-Za-z]+(?: [A-Za-z]+)*$/;
        const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const textValidator = /^[A-Za-z0-9 .,!?'"()\-:@#&/+\n\r]+$/;
        const customValidator = /^web\s+(development|design)$/i;
        const orgNameValidator = /^[A-Za-z0-9&.,'()\-\s]+$/;

        const {name, email, organisation_name, service, message} = form;
        const errors = {};

        if (!name?.trim()) {
            errors.name = "Name is required.";
        } else if (!nameValidator.test(name)) {
            errors.name = "Please enter your name in the correct format.";
        }

        if (!email?.trim()) {
            errors.email = "Email is required.";
        } else if (!emailValidator.test(email)) {
            errors.email = "Please enter a valid email address.";
        }

        if (!message?.trim()) {
            errors.message = "Message is required.";
        } else if (!textValidator.test(message)) {
            errors.message = "Please enter a valid message.";
        }

        if (!service?.trim()) {
            errors.service = "Service is required.";
        } else if (!customValidator.test(service)) {
            errors.service = "Service must be 'web development' or 'web design'.";
        }

        if (!organisation_name?.trim()) {
            errors.organisationName = "Organisation name is required.";
        } else if (!orgNameValidator.test(organisation_name)) {
            errors.organisationName = "Please enter a valid organisation name.";
        }

        setError(errors);

        // return validation result
        return Object.keys(errors).length === 0;
    };

    const sendDataInBackendForMail = async () => {
        try {
            const res = await axios.post('http://localhost:8001/message/send', form, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            return res.data.message;
        } catch (err) {
            console.log("error", err);
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const isValid = checkValidation();

        if (!isValid) {
            setLoading(false);
            return;
        }

        // Form is valid → submit API / logic here
        const data = await sendDataInBackendForMail();
        if (data) {
            toast(
                <CustomToast />,
                {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                }
            );
        } else {
            toast.error(
                <ErrorToast />,
                {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                }
            );
        }
        setLoading(false);
        setFrom({
            name: "", email: "", organisation_name: "", service: "", message: ""
        })
    };

    return (<>
        <Navbar/>
        <main className="min-h-screen bg-[#1c1e21] text-white flex justify-center">
            <div className="w-full max-w-[1400px] px-20 pt-[8vh] space-y-14">

                {/* ================= HERO ================= */}
                <section className="min-h-[80vh] flex items-center justify-around">

                    {/* Animated Heading */}
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-[90px] font-medium leading-[1.15] max-w-[720px]"
                    >
                        Let's start a <br/>
                        project together
                    </motion.h1>

                    {/* Animated Image */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.2}}
                        className="w-[120px] h-[120px] rounded-full overflow-hidden"
                    >
                        <img
                            src={TanushImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </section>

                {/* ================= CONTACT ================= */}
                <section className="pb-32 relative -mt-50 left-20">

                    {/* Divider */}
                    <motion.div
                        initial={{scaleX: 0}}
                        animate={{scaleX: 1}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                        className="origin-left w-[90%] h-px bg-white/10 mb-24"
                    />

                    <div className="flex gap-24">

                        {/* LEFT FORM */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                            className="flex-1 space-y-24"
                        >
                            <div className="space-y-6">
                                <div className="flex gap-10 items-center">
                                    <span className="text-white/40 text-2xl">01</span>

                                    <div className="flex-1">
                                        <p className="text-3xl font-sans font-extralight">What's your name?</p>
                                        <input
                                            type="text"
                                            value={form.name}
                                            placeholder="John Doe *"
                                            onChange={(e) => {
                                                setFrom({...form, name: e.target.value});
                                                setError((prev) => ({...prev, name: ""}));
                                            }}
                                            className="mt-4 w-full text-2xl font-sans font-extralight bg-transparent text-white/40 placeholder-white/30 outline-none"
                                        />

                                        {error.name && (<p className="mt-2 text-sm text-red-400">{error.name}</p>)}
                                    </div>
                                </div>

                                <div className="h-px bg-white/10"/>
                                <div className="flex gap-10 items-center">
                                    <span className="text-white/40 text-2xl">02</span>

                                    <div className="flex-1">
                                        <p className="text-3xl font-sans font-extralight">What's your email?</p>
                                        <input
                                            type="text"
                                            value={form.email}
                                            placeholder="john@gmail.com *"
                                            onChange={(e) => {
                                                setFrom({...form, email: e.target.value});
                                                setError((prev) => ({...prev, email: ""}));
                                            }}
                                            className="mt-4 w-full text-2xl font-sans font-extralight bg-transparent text-white/40 placeholder-white/30 outline-none"
                                        />

                                        {error.email && (<p className="mt-2 text-sm text-red-400">{error.email}</p>)}
                                    </div>
                                </div>

                                <div className="h-px bg-white/10"/>
                                <div className="flex gap-10 items-center">
                                    <span className="text-white/40 text-2xl">03</span>

                                    <div className="flex-1">
                                        <p className="text-3xl font-sans font-extralight">What's the name of your
                                            organization?</p>
                                        <input
                                            type="text"
                                            value={form.organisation_name}
                                            placeholder="John & Doe"
                                            onChange={(e) => {
                                                setFrom({...form, organisation_name: e.target.value});
                                                setError((prev) => ({...prev, organisationName: ""}));
                                            }}
                                            className="mt-4 w-full text-2xl font-sans font-extralight bg-transparent text-white/40 placeholder-white/30 outline-none"
                                        />

                                        {error.organisationName && (<p className="mt-2 text-sm text-red-400">
                                            {error.organisationName}
                                        </p>)}
                                    </div>
                                </div>

                                <div className="h-px bg-white/10"/>
                                <div className="flex gap-10 items-center">
                                    <span className="text-white/40 text-2xl">04</span>

                                    <div className="flex-1">
                                        <p className="text-3xl font-sans font-extralight">What services are you
                                            looking for?</p>
                                        <input
                                            type="text"
                                            value={form.service}
                                            placeholder="Web Design or Web Development"
                                            onChange={(e) => {
                                                setFrom({...form, service: e.target.value});
                                                setError((prev) => ({...prev, service: ""}));
                                            }}
                                            className="mt-4 w-full text-2xl font-sans font-extralight bg-transparent text-white/40 placeholder-white/30 outline-none"
                                        />

                                        {error.service && (
                                            <p className="mt-2 text-sm text-red-400">{error.service}</p>)}
                                    </div>
                                </div>

                                <div className="h-px bg-white/10"/>
                                <div className="flex gap-10 items-center">
                                    <span className="text-white/40 text-2xl">05</span>

                                    <div className="flex-1">
                                        <p className="text-3xl font-sans font-extralight">Your message</p>
                                        <input
                                            type="text"
                                            value={form.message}
                                            placeholder="Hello Tanush, can you help me with *"
                                            onChange={(e) => {
                                                setFrom({...form, message: e.target.value});
                                                setError((prev) => ({...prev, message: ""}));
                                            }}
                                            className="mt-4 w-full text-2xl font-sans font-extralight bg-transparent text-white/40 placeholder-white/30 outline-none"
                                        />

                                        {error.message && (
                                            <p className="mt-2 text-sm text-red-400">{error.message}</p>)}
                                    </div>
                                </div>

                                <div className="h-px bg-white/10"/>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDEBAR */}
                        <motion.aside
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{delay: 0.4}}
                            className="w-[360px] space-y-14 text-sm"
                        >
                            <SidebarSection title="CONTACT DETAILS">
                                <MagneticLink>
                                    <p className="relative inline-block w-fit mt-2 text-white cursor-pointer
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-white
    after:-translate-x-1/2 after:transition-all after:duration-300
    hover:after:w-full">
                                        tanush000patel@gmail.com
                                    </p>
                                </MagneticLink>

                                <MagneticLink>
                                    <p className="relative inline-block w-fit mt-2 text-white cursor-pointer
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-white
    after:-translate-x-1/2 after:transition-all after:duration-300
    hover:after:w-full">
                                        +91 9729348173
                                    </p>
                                </MagneticLink>
                            </SidebarSection>


                            <SidebarSection title="BUSINESS DETAILS">
                                <p>Tanush Patel. Tanx</p>
                                <p className="mt-2">Location: India</p>
                            </SidebarSection>

                            <SidebarSection title="SOCIALS">
                                <p className="relative inline-block w-fit mt-2 text-white cursor-pointer
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-white
    after:-translate-x-1/2 after:transition-all after:duration-300
    hover:after:w-full">
                                    Instagram
                                </p>
                                <p className="relative inline-block w-fit mt-2 text-white cursor-pointer
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-white
    after:-translate-x-1/2 after:transition-all after:duration-300
    hover:after:w-full">
                                    Twitter
                                </p>
                                <p className="relative inline-block w-fit mt-2 text-white cursor-pointer
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-white
    after:-translate-x-1/2 after:transition-all after:duration-300
    hover:after:w-full">
                                    Linkdin
                                </p>
                            </SidebarSection>
                        </motion.aside>

                    </div>
                </section>

                <div className="relative my-40">
                    <div className="h-px bg-white/20 w-full"/>

                    {/* Animated Button (scroll-ready) */}
                    <motion.div
                        style={{x: leftToRight}}
                        className="absolute right-20 -top-24">
                        <MagneticLink>
                            <button
                                onClick={handleFormSubmit}
                                disabled={loading}
                                className={`w-48 h-48 rounded-full bg-[#455ce9] text-white text-sm tracking-wide
        transition-transform overflow-hidden
        ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}
    `}
                            >
                                <div
                                    onMouseEnter={!loading ? handleMouseEnterForHover : undefined}
                                    onMouseLeave={!loading ? handleMouseLeaveForHover : undefined}
                                    className="relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden"
                                >
                                    {/* BLUE CIRCLE */}
                                    <motion.div
                                        initial={{y: "100%"}}
                                        animate={controls}
                                        className="absolute inset-0 z-0 bg-[#384abe]"
                                        style={{
                                            width: "100%", height: "100%", borderRadius: "9999px"
                                        }}
                                    />
                                    {/* ICON */}
                                    <div className="relative z-10 text-xl font-sans flex justify-center items-center">
                                        {loading ? <Loader /> : "Send It"}
                                    </div>
                                </div>
                            </button>
                        </MagneticLink>
                    </motion.div>
                </div>
            </div>
        </main>
        <div className="-mt-10 p-10 bg-[#1c1e21] min-h-36">
            <div
                className="relative flex flex-col md:flex-row md:items-center md:justify-between items-end gap-6 text-sm text-white/50">
                <div className="flex gap-8 mt-10">
                    <div className="flex flex-col gap-5">
                        <h5>Version</h5>
                        <h1 className="text-white">2026 © Edition</h1>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1>Local time</h1>
                        <h1 className="text-white">{new Date().toLocaleString('en-US', {
                            timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true
                        })}</h1>
                    </div>
                </div>
                <div className="flex gap-6 mt-18">
                    <MagneticLink><p
                        className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full text-white">Instagram</p>
                    </MagneticLink>
                    <MagneticLink><p
                        className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full text-white">Twitter</p>
                    </MagneticLink>
                    <MagneticLink><p
                        className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full text-white">LinkedIn</p>
                    </MagneticLink>
                </div>
            </div>
        </div>
    </>)
}


function CustomToast() {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>✅</span>
            <div>
                <strong>Message Sent</strong>
                <div style={{ fontSize: "14px" }}>
                    Message successfully sent to <b>Tanush</b>
                </div>
            </div>
        </div>
    );
}


function ErrorToast() {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>❌</span>
            <div>
                <strong>Server Error</strong>
                <div style={{ fontSize: "14px" }}>
                    Internal sever error please try after sometime! sorry for disturbance.
                </div>
            </div>
        </div>
    );
}

function Loader() {
    return (
        <motion.div
            className="w-6 h-6 border-2 border-white/40 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "linear"
            }}
        />
    );
}

function SidebarSection({title, children}) {
    return (<div>
        <p className="text-white/40 text-xs font-sans font-extralight mb-4 tracking-wider">
            {title}
        </p>
        <div className="space-y-1 flex flex-col justify-center">{children}</div>
    </div>);
}