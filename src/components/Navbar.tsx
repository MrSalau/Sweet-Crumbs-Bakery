import React, { forwardRef, useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

// Create a properly typed wrapper around motion.nav
const MotionNav = forwardRef<HTMLElement, HTMLMotionProps<"nav">>(
  (props, ref) => <motion.nav ref={ref} {...props} />
);

MotionNav.displayName = "MotionNav";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  // Lock scroll when menu is open
  useEffect(() => {
    return () => {
      console.log("some string");
    };
  }, []);

  // Focus trap when menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const modal = menuRef.current;
    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex="0"]'
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      } else if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    modal.addEventListener("keydown", handleKeyDown);
    return () => modal.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const underlineStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-4px",
    left: 0,
    height: "2px",
    width: "100%",
    backgroundColor: "#C4A484",
    transformOrigin: "left",
    transition: "transform 0.5s ease",
    transform: "scaleX(0)",
  };

  return (
    <header className="bg-amber-50 shadow-md sticky top-0 z-50">
      <div className="hidden md:flex max-w-7xl mx-auto px-6 py-4 justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold text-brown-900 hover:text-brown-800 transition"
        >
          🍰 Sweet Crumbs
        </Link>
        <nav className="flex gap-10 font-medium relative">
          {["/", "/menu", "/about", "/contact"].map((to) => (
            <NavLink
              key={to}
              to={to}
              className="relative text-brown-900 transition-colors duration-500 font-semibold"
              style={{ position: "relative" }}
              onMouseEnter={(e) => {
                const u = e.currentTarget.querySelector(
                  ".underline-bar"
                ) as HTMLElement;
                if (u) u.style.transform = "scaleX(1)";
                e.currentTarget.style.color = "#C4A484";
              }}
              onMouseLeave={(e) => {
                const u = e.currentTarget.querySelector(
                  ".underline-bar"
                ) as HTMLElement;
                if (u) u.style.transform = "scaleX(0)";
                e.currentTarget.style.color = "#4A342E";
              }}
            >
              {to.replace("/", "") || "Home"}
              <span className="underline-bar" style={underlineStyle}></span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="md:hidden bg-cream-200 py-4 px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-brown-900 hover:text-brown-800 transition"
        >
          🍰 Sweet Crumbs
        </Link>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="text-brown-800 bg-cream-200 rounded-md p-2 shadow"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <MotionNav
              ref={menuRef}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-amber-50 shadow-xl z-50 py-6 flex flex-col items-center space-y-6"
              aria-modal="true"
              role="dialog"
            >
              {["/", "/menu", "/about", "/contact"].map((to) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="relative block text-center font-semibold px-6 py-2 rounded w-full max-w-xs text-brown-900 transition-colors duration-500"
                  style={{ position: "relative" }}
                  onMouseEnter={(e) => {
                    const u = e.currentTarget.querySelector(
                      ".underline-bar"
                    ) as HTMLElement;
                    if (u) u.style.transform = "scaleX(1)";
                    e.currentTarget.style.color = "#C4A484";
                  }}
                  onMouseLeave={(e) => {
                    const u = e.currentTarget.querySelector(
                      ".underline-bar"
                    ) as HTMLElement;
                    if (u) u.style.transform = "scaleX(0)";
                    e.currentTarget.style.color = "#4A342E";
                  }}
                >
                  {to.replace("/", "") || "Home"}
                  <span className="underline-bar" style={underlineStyle}></span>
                </NavLink>
              ))}
            </MotionNav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
