
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import "./index.css";
import App from "./App.jsx";

posthog.init("YOUR_POSTHOG_PROJECT_TOKEN", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only",
  capture_pageview: false,
});

function trackPageView() {
  posthog.capture("$pageview", {
    $current_url: window.location.href,
  });
}

trackPageView();
window.addEventListener("hashchange", trackPageView);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
