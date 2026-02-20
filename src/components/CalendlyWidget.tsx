import { useEffect, useRef } from "react";
declare global {
  interface Window {
    Calendly: any;
  }
}
const CalendlyWidget = () => {
   useEffect(() => {
    const init = () => {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/mooenmalik374/new-meeting",
        parentElement: document.getElementById("calendly-root"),
      });
    };

    if (window.Calendly) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="calendly-root"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

export default CalendlyWidget;
