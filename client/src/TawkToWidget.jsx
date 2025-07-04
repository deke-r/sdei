import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/63edbd15c2f1ac1e20338ec8/1gpcal77i";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Set window.Tawk_API and wait for script load
    window.Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    // Only set .onLoad after script is fully loaded
    script.onload = () => {
      if (window.Tawk_API && typeof window.Tawk_API.setAttributes === "function") {
        window.Tawk_API.onLoad = function () {
          window.Tawk_API.setAttributes(
            {
              site: "SDEI", // Change this per site
            },
            function (error) {
              if (error) console.error("Tawk attribute error:", error);
            }
          );
        };
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToWidget;
