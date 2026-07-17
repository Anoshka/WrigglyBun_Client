import { useEffect, useMemo, useState } from "react";
import { useCmsClient } from "./useCmsClient";
import { useImageUrl } from "./useImageUrl";
import { eventsQuery, eventBySlugQuery } from "./queries";

export function useEvents() {
  const client = useCmsClient();
  const toImgUrl = useImageUrl();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(eventsQuery)
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client]);

  const events = useMemo(() => {
    if (!raw) return [];
    return (raw || []).map((e) => ({
      ...e,
      image: e.thumbnail ? toImgUrl(e.thumbnail, 800) : null,
    }));
  }, [raw, toImgUrl]);

  return { events, loading, error };
}

export function useEvent(slug) {
  const client = useCmsClient();
  const toImgUrl = useImageUrl();
  const [raw, setRaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    client
      .fetch(eventBySlugQuery, { slug })
      .then(setRaw)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [client, slug]);

  const event = useMemo(() => {
    if (!raw) return null;
    return {
      ...raw,
      thumbnail: raw.thumbnail ? toImgUrl(raw.thumbnail, 1200) : null,
      images: (raw.images || []).map((img) => toImgUrl(img, 1200)),
    };
  }, [raw, toImgUrl]);

  return { event, loading, error };
}
