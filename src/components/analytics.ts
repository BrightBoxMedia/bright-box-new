declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function pageView(url: string) {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", "G-8Q0ZLB33ZB", {
      page_path: url,
    });
  }
}

// for gtag to be global
export { };
