import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      leaderboardData: null,
      setLeaderboardData: (data) => set({ leaderboardData: data }),

      videoList: [],
      setVideoList: (list) => set({ videoList: list }),
    }),
    {
      name: 'video-list-storage', 
      getStorage: () => localStorage, 
    }
  )
);

export default useStore;
