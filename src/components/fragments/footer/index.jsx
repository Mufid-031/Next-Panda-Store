import FooterList from "./footerlist"

const Footer = () => {

    return (
        <footer className="w-full h-screen lg:h-[420px] text-slate-200 pt-10 border-t-2 flex flex-col lg:flex-row justify-around relative bg-[#1a1a1a] lg:bg-transparent">
            <FooterList />
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150 bg-[#1a1a1a] hidden lg:block absolute -top-0 -z-10"><defs><linearGradient id="gradient" x1="0%" y1="54%" x2="100%" y2="46%"><stop offset="5%" stopColor="#00d084"></stop><stop offset="95%" stopColor="#9900ef"></stop></linearGradient></defs><path d="M 0,400 L 0,75 C 122,84.125 244,93.25 366,100 C 488,106.75 610,111.125 713,129 C 816,146.875 900,178.25 1018,209 C 1136,239.75 1288,269.875 1440,300 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="54%" x2="100%" y2="46%"><stop offset="5%" stopColor="#00d084"></stop><stop offset="95%" stopColor="#9900ef"></stop></linearGradient></defs><path d="M 0,400 L 0,175 C 88.82142857142858,157.05357142857144 177.64285714285717,139.10714285714286 297,166 C 416.35714285714283,192.89285714285714 566.25,264.62500000000006 699,286 C 831.75,307.37499999999994 947.3571428571429,278.3928571428571 1068,289 C 1188.642857142857,299.6071428571429 1314.3214285714284,349.80357142857144 1440,400 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="0%" y1="54%" x2="100%" y2="46%"><stop offset="5%" stopColor="#00d084"></stop><stop offset="95%" stopColor="#9900ef"></stop></linearGradient></defs><path d="M 0,400 L 0,275 C 135,254.48214285714286 270,233.96428571428572 378,253 C 486,272.0357142857143 567,330.625 687,367 C 807,403.375 966,417.5357142857142 1098,436 C 1230,454.4642857142858 1335,477.2321428571429 1440,500 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
        </footer>
    )
}

export default Footer