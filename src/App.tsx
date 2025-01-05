import { Suspense, lazy } from "react";
import Spinner from "./ui/Spinner";

const Header = lazy(() => import("./section/header"));
const Partners = lazy(() => import("./section/partners"));
const Features = lazy(() => import("./section/features"));
const Benefits = lazy(() => import("./section/benefits"));
const FAQs = lazy(() => import("./section/faqs"));
const Testimonials = lazy(() => import("./section/testimonials"));
const Demo = lazy(() => import("./section/demo"));
const Footer = lazy(() => import("./section/footer"));

import "./App.css";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <Partners />
      <Features />
      <Benefits />
      <FAQs />
      <Testimonials />
      <Demo />
      <Footer />
    </Suspense>
  );
}

export default App;
