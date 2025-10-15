

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";


// ScrollToTop component
// - behavior: 'auto' | 'smooth' (default: 'auto')
// - handles in-page hashes (tries to scroll to element with matching id)
export default function ScrollToTop({ behavior = "auto" }) {
    const { pathname, hash } = useLocation();


    useEffect(() => {
        if (typeof window === "undefined") return;


        // If there's a hash, attempt to scroll to that element
        if (hash) {
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                // allow the browser to paint / let elements mount
                setTimeout(() => el.scrollIntoView({ behavior }), 0);
                return;
            }
        }


        // Default: scroll to top of the page
        window.scrollTo({ top: 0, behavior });
    }, [pathname, hash, behavior]);


    return null; // component doesn't render anything
}