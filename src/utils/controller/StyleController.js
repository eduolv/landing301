import Main from "@/components/organisms/Main/Main";
import Footer from "../../components/organisms/Footer/Footer";
import FooterB from "../../components/organisms/Footer/FooterB";
import Header from "../../components/organisms/Header/Header";
import HeaderB from "../../components/organisms/Header/HeaderB";
import MainB from "@/components/organisms/Main/MainB";
import Pricing from "@/components/organisms/Pricing/Pricing";
import PricingB from "@/components/organisms/Pricing/PricingB";
import MainC from "@/components/organisms/Main/MainC";

// HEADER
export const selectedHeader = 'A';
// 
// MAIN
export const selectedMain = 'A';
//
// PRICING
export const selectedPricing = 'A';
//
// FOOTER
export const selectedFooter = 'A';
//


export const headers = {
    A: Header,
    B: HeaderB,
};

export const mains = {
    A: Main,
    B: MainB,
    C: MainC,
};


export const pricing = {
    A: Pricing,
    B: PricingB,
};


export const footers = {
    A: Footer,
    B: FooterB,
};




