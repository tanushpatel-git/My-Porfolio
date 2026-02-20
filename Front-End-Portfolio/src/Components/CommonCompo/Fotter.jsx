import MagneticLink from "../uiAnimationHooks/MagneticLink";

export default function Fotter() {
    return (
        <div className="relative mt-24 -bottom-20 flex flex-col md:flex-row md:items-center md:justify-between items-end gap-6 text-sm text-white/50">
            <div className="flex gap-8 mt-10">
                <div className="flex flex-col gap-5">
                    <h5>Version</h5>
                    <h1 className="text-white">2026 © Edition</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1>Local time</h1>
                    <h1 className="text-white">{new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true })}</h1>
                </div>
            </div>
            <div className="flex gap-6 mt-18">
                <MagneticLink><p className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full text-white">Instagram</p></MagneticLink>
                <MagneticLink><p className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full text-white">Twitter</p></MagneticLink>
                <MagneticLink><p className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full text-white">LinkedIn</p></MagneticLink>
            </div>
        </div>
    );
}