import {
    headers,
    selectedHeader,
    mains,
    selectedMain,
    pricing,
    selectedPricing,
    footers,
    selectedFooter,
} from "../controller/StyleController";

export function HeaderWrapper() {
    const HeaderComponent = headers[selectedHeader];
    return <HeaderComponent />;
}

export function MainWrapper() {
    const MainComponent = mains[selectedMain];
    return <MainComponent />;
}

export function PricingWrapper() {
    const PricingComponent = pricing[selectedPricing];
    return <PricingComponent />;
}

export function FooterWrapper() {
    const FooterComponent = footers[selectedFooter];
    return <FooterComponent />;
}
