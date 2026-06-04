import { useCallback, useEffect, useState } from "react";
import { tryHackMeFallbackProfile, tryHackMeProfile } from "../data/constants";

const toText = (value) => {
  if (value === null || value === undefined) return null;
  const text = String(value).trim();
  return text.length ? text : null;
};

const toNumber = (value) => {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const pickFirst = (...values) => {
  for (const value of values) {
    const normalized = toText(value);
    if (normalized) return normalized;
  }

  return null;
};

const normalizeStats = (payload, username) => {
  const data = payload?.data || payload?.profile || payload?.result || payload;
  const completion = data?.completion || data?.stats || data?.profileStats || {};

  const completedRooms = toNumber(
    pickFirst(
      data?.completedRooms,
      data?.completedRoomsNumber,
      data?.roomsCompleted,
      data?.rooms_completed,
      data?.completedLabs,
      data?.completedLabsNumber,
      data?.labsCompleted,
      data?.labs_completed,
      completion?.completedRooms,
      completion?.completedRoomsNumber,
      completion?.roomsCompleted,
      completion?.rooms_completed,
      completion?.completedLabs,
      completion?.completedLabsNumber,
      completion?.labsCompleted,
      completion?.labs_completed,
    ),
  );

  const rank = pickFirst(
    data?.rank,
    data?.currentRank,
    data?.leaderboardRank,
    data?.profileRank,
    completion?.rank,
  );

  const usernameValue = pickFirst(
    data?.username,
    data?.userName,
    data?.profileName,
    username,
  );

  const lastUpdated = pickFirst(
    data?.lastUpdated,
    data?.updatedAt,
    payload?.lastUpdated,
    payload?.updatedAt,
  ) || new Date().toISOString();

  return {
    username: usernameValue,
    rank,
    completedRooms,
    completedLabs: completedRooms,
    totalCompleted: completedRooms,
    badgesNumber: toNumber(
      pickFirst(
        data?.badgesNumber,
        data?.badges,
        data?.totalBadges,
        completion?.badgesNumber,
        completion?.badges,
        completion?.totalBadges,
      ),
    ),
    totalPoints: toNumber(
      pickFirst(
        data?.totalPoints,
        data?.points,
        completion?.totalPoints,
        completion?.points,
      ),
    ),
    lastUpdated,
  };
};

const fallbackStats = {
  username: tryHackMeFallbackProfile.username,
  rank: tryHackMeFallbackProfile.rank,
  completedRooms: tryHackMeFallbackProfile.completedRooms,
  completedLabs: tryHackMeFallbackProfile.completedRooms,
  totalCompleted: tryHackMeFallbackProfile.completedRooms,
  badgesNumber: tryHackMeFallbackProfile.badgesNumber,
  totalPoints: tryHackMeFallbackProfile.totalPoints,
  lastUpdated: tryHackMeFallbackProfile.lastUpdated,
  isFallback: true,
};

const fetchJson = async (url, signal) => {
  const response = await fetch(url, {
    method: "GET",
    signal,
    credentials: "include",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
  });

  if (!response.ok) {
    throw new Error(`TryHackMe stats request failed with status ${response.status}.`);
  }

  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch (error) {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]);
    }

    throw new Error("TryHackMe stats response did not contain valid JSON.");
  }
};

export function useTryHackMeStats() {
  const [state, setState] = useState({
    status: "success",
    data: fallbackStats,
    error: null,
  });

  const load = useCallback(async (signal) => {
    setState((current) => ({
      status: current.data ? "success" : "loading",
      data: current.data || fallbackStats,
      error: null,
    }));

    try {
      const payload = await fetchJson(tryHackMeProfile.endpoint, signal);
      const normalized = normalizeStats(payload, tryHackMeProfile.username);
      setState({ status: "success", data: { ...normalized, isFallback: false }, error: null });
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }

      setState({
        status: "success",
        data: fallbackStats,
        error: error?.message || "Unable to load TryHackMe stats.",
      });
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);

    return () => controller.abort();
  }, [load]);

  return {
    status: state.status,
    data: state.data,
    error: state.error,
    refresh: () => load(new AbortController().signal),
  };
}
