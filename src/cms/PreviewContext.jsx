import { createContext, useContext, useEffect, useMemo, useState } from "react";

const PreviewContext = createContext({ isPreview: false });

const STORAGE_KEY = "sanity-preview";

function readStoredPreview() {
  const expected = import.meta.env.VITE_SANITY_PREVIEW_SECRET;
  if (!expected) return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === expected;
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
    if (activatePreviewFromQuery()) return true;
    return readStoredPreview();
  });

  useEffect(() => {
    const onStorage = () => setIsPreview(readStoredPreview());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(() => ({ isPreview, setIsPreview }), [isPreview]);

  useEffect(() => {
    document.documentElement.classList.toggle("is-preview", isPreview);
    const inIframe = window.self !== window.top;
    document.documentElement.classList.toggle("is-studio-iframe", inIframe);
  }, [isPreview]);

  return (
    <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}

export function enablePreviewMode() {
  const expected = import.meta.env.VITE_SANITY_PREVIEW_SECRET;
  if (!expected) return false;
  sessionStorage.setItem(STORAGE_KEY, expected);
  return true;
}

export function disablePreviewMode() {
  sessionStorage.removeItem(STORAGE_KEY);
}
