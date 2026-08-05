import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import News from "./pages/News";
import GlobalOffices from "./pages/GlobalOffices";
import Platform from "./pages/Platform";
import PropertyManagement from "./pages/PropertyManagement";
import Analytics from "./pages/Analytics";
import Security from "./pages/Security";
import MobileApp from "./pages/MobileApp";
import TeamManagement from "./pages/TeamManagement";
import CloudPlatform from "./pages/CloudPlatform";
import Documentation from "./pages/Documentation";
import Blog from "./pages/Blog";
import Tutorials from "./pages/Tutorials";
import HelpCenter from "./pages/HelpCenter";
import Learning from "./pages/Learning";
import Resources from "./pages/Resources";
import CallUs from "./pages/CallUs";
import LiveChat from "./pages/LiveChat";
import EmailSupport from "./pages/EmailSupport";
import SupportCenter from "./pages/SupportCenter";
import Pricing from "./pages/Pricing";
import Starter from "./pages/Starter";
import Professional from "./pages/Professional";
import Enterprise from "./pages/Enterprise";
import RequestDemo from "./pages/RequestDemo";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/signup" element={<Signup />} />


      <Route path="/about" element={<About />} />

      <Route path="/team" element={<Team />} />

      <Route path="/careers" element={<Careers />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/partners" element={<Partners />} />

      <Route path="/news" element={<News />} />

      <Route 
        path="/global-offices" 
        element={<GlobalOffices />} 
        
      />

      <Route 
        path="/platform" 
        element={<Platform />} 
      />
<Route 
  path="/property-management" 
  element={<PropertyManagement />} 
/>
<Route path="/analytics" element={<Analytics />} />

<Route path="/security" element={<Security />} />
<Route path="/mobile-app" element={<MobileApp />} />

<Route 
 path="/team-management" 
 element={<TeamManagement />} 
/>
<Route 
  path="/cloud" 
  element={<CloudPlatform />} 
/>
<Route path="/documentation" element={<Documentation />} />
<Route path="/blog" element={<Blog />} />
<Route path="/tutorials" element={<Tutorials />} />
<Route path="/help-center" element={<HelpCenter />} />
<Route path="/learning" element={<Learning />} />
<Route path="/resources" element={<Resources />} />

<Route
  path="/call-us"
  element={<CallUs />}
/>
<Route
    path="/live-chat"
    element={<LiveChat />}
/>
<Route
  path="/email-support"
  element={<EmailSupport />}
/>
<Route
  path="/support-center"
  element={<SupportCenter />}
/>
<Route path="/pricing" element={<Pricing />} />
<Route
  path="/starter"
  element={<Starter />}
/>
<Route
  path="/professional"
  element={<Professional />}
/>
<Route
 path="/enterprise"
 element={<Enterprise />}
/>
<Route
  path="/request-demo"
  element={<RequestDemo />}
/>
    </Routes>

  );

}


export default App;