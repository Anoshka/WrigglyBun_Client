import { createContext, useContext, useEffect, useMemo, useState } from "react";

const PreviewContext = createContext({ isPreview: false });

const STORAGE_KEY = "sanity-preview";

function inIframe() {
  if (typeof window === "undefined") return false;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
}

function readStoredPreview() {
  const expected = import.meta.env.VITE_SANITY_PREVIEW_SECRET;
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    if (!expected) return stored === "on";
    return stored === expected || stored === "on";
  } catch {
    return false;
  }
}

function activatePreviewFromQuery() {
  const expected = import.meta.env.VITE_SANITY_PREVIEW_SECRET;
  if (!expected) return false;

  const params = new URLSearchParams(window.location.search);
  const fromQuery =
    params.get("sanity-preview") || params.get("sanity-preview-secret");
  if (fromQuery && fromQuery === expected) {
    sessionStorage.setItem(STORAGE_KEY, expected);
    params.delete("sanity-preview");
    params.delete("sanity-preview-secret");
    const next = `${window.location.pathname}${
      params.toString() ? `?${params}` : ""
    }${window.location.hash}`;
    window.history.replaceState({}, "", next);
    return true;
  }
  return false;
}

export function PreviewProvider({ children }) {
  const [isPreview, setIsPreview] = useState(() => {
    if (inIframe()) {
      enablePreviewMode();
      return true;
    }
    if (activatePreviewFromQuery()) return true;
    return readStoredPreview();
  });

  useEffect(() => {
    const onStorage = () => setIsPreview(readStoredPreview() || inIframe());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(() => ({ isPreview, setIsPreview }), [isPreview]);

  useEffect(() => {
    document.documentElement.classList.toggle("is-preview", isPreview);
    document.documentElement.classList.toggle("is-studio-iframe", inIframe());
  }, [isPreview]);

  return (
    <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}

export function enablePreviewMode() {
  try {
    const expected = import.meta.env.VITE_SANITY_PREVIEW_SECRET;
    sessionStorage.setItem(STORAGE_KEY, expected || "on");
  } catch {
    /* ignore */
  }
  return true;
}

export function disablePreviewMode() {
  sessionStorage.removeItem(STORAGE_KEY);
}
