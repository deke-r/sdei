
import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/63edbd15c2f1ac1e20338ec8/1gpcal77i";  
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup on component unmount (optional, good practice)
      document.body.removeChild(script);
    };
  }, []);

  return null;  // No visible UI needed
};

export default TawkToWidget;
