import TanushImage from "../assets/TanushImage.png"
import Navbar from "../Components/CommonCompo/Navbar"
import { motion } from "framer-motion"

export default function ContactPage() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
        }
    }

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    return (
        <>
            <Navbar />

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
                            Let's start a <br />
                            project together
                        </motion.h1>

                        {/* Animated Image */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 }}
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
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
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
                                <FormRow number="01" question="What's your name?" placeholder="John Doe *" />
                                <FormRow number="02" question="What's your email?" placeholder="john@doe.com *" />
                                <FormRow number="03" question="What's the name of your organization?" placeholder="John & Doe ®" />
                                <FormRow number="04" question="What services are you looking for?" placeholder="Web Design, Web Development ..." />
                                <FormRow number="05" question="Your message" placeholder="Hello Tanush, can you help me with *" />
                            </motion.div>

                            {/* RIGHT SIDEBAR */}
                            <motion.aside
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                                className="w-[360px] space-y-14 text-sm"
                            >
                                <SidebarSection title="CONTACT DETAILS">
                                    <p>info@dennissnellenberg.com</p>
                                    <p className="mt-2">+31 6 27 84 74 30</p>
                                </SidebarSection>

                                <SidebarSection title="BUSINESS DETAILS">
                                    <p>Tanush Patel. Tanx</p>
                                    <p className="mt-2">CoC: 9729348173</p>
                                    <p className="mt-2">Location: India</p>
                                </SidebarSection>

                                <SidebarSection title="SOCIALS">
                                    <p>Instagram</p>
                                    <p className="mt-2">Twitter</p>
                                    <p className="mt-2">LinkedIn</p>
                                </SidebarSection>
                            </motion.aside>

                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

function SidebarSection({ title, children }) {
    return (
        <div>
            <p className="text-white/40 text-xs mb-4 tracking-wider">
                {title}
            </p>
            <div className="space-y-1">{children}</div>
        </div>
    );
}

function FormRow({ number, question, placeholder }) {
    return (
        <div className="space-y-6">
            <div className="flex gap-10">
                <span className="text-white/40">{number}</span>

                <div className="flex-1">
                    <p className="text-lg">{question}</p>
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="mt-4 w-full bg-transparent text-white/40 placeholder-white/30 outline-none"
                    />
                </div>
            </div>

            <div className="h-px bg-white/10" />
        </div>
    )
}

<>
            <Navbar />

            {/* ===== Animated Wrapper ===== */}
            <motion.main
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.1,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className="min-h-screen bg-[#1c1e21] text-white flex justify-center"
            >
                {/* ===== Content Container ===== */}
                <div className="w-full max-w-[1400px] px-20 pt-[8vh] space-y-14">

                    {/* ================= HERO ================= */}
                    <section className="min-h-[80vh] flex items-center justify-around">
                        <h1 className="text-[90px] font-medium leading-[1.15] max-w-[720px]">
                            Let's start a <br />
                            project together
                        </h1>

                        <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                            <img
                                src={TanushImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>

                    {/* ================= CONTACT ================= */}
                    <section className="pb-32 -mt-50 bg-[#1c1e21] relative left-30">

                        {/* Divider */}
                        <div className="absolute top-0 left-0 right-[380px] h-px bg-white/10" />

                        <div className="flex gap-24 pt-24">

                            {/* LEFT FORM */}
                            <div className="flex-1 space-y-24">
                                <FormRow number="01" question="What's your name?" placeholder="John Doe *" />
                                <FormRow number="02" question="What's your email?" placeholder="john@doe.com *" />
                                <FormRow number="03" question="What's the name of your organization?" placeholder="John & Doe ®" />
                                <FormRow number="04" question="What services are you looking for?" placeholder="Web Design, Web Development ..." />
                                <FormRow number="05" question="Your message" placeholder="Hello Tanush, can you help me with *" />
                            </div>

                            {/* RIGHT SIDEBAR */}
                            <aside className="w-[360px] space-y-14 text-sm">
                                <SidebarSection title="CONTACT DETAILS">
                                    <p>info@dennissnellenberg.com</p>
                                    <p className="mt-2">+31 6 27 84 74 30</p>
                                </SidebarSection>

                                <SidebarSection title="BUSINESS DETAILS">
                                    <p>Tanush Patel. Tanx</p>
                                    <p className="mt-2">CoC: 9729348173</p>
                                    <p className="mt-2">Location: India</p>
                                </SidebarSection>

                                <SidebarSection title="SOCIALS">
                                    <p>Instagram</p>
                                    <p className="mt-2">Twitter</p>
                                    <p className="mt-2">LinkedIn</p>
                                </SidebarSection>
                            </aside>
                        </div>
                    </section>
                </div>
            </motion.main>
        </>



