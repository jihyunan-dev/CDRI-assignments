import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { SEARCH_MAX_RECORD_NUM } from '@/constants/search';
import { SearchRecord } from '@/types/searchRecord';

export const useSearchRecordStore = create(
  persist<{
    searchRecords: SearchRecord[];
    addSearchRecord(newValue: string): void;
    deleteSearchRecord(id: number): void;
  }>(
    (set) => ({
      searchRecords: [],
      addSearchRecord: (newValue: string) => {
        set((state) => {
          const record: SearchRecord = { id: Date.now(), value: newValue };
          const newRecords = [...state.searchRecords, record];
          if (newRecords.length > SEARCH_MAX_RECORD_NUM) {
            newRecords.shift();
          }
          return { searchRecords: newRecords };
        });
      },
      deleteSearchRecord: (id: number) => {
        set((state) => ({
          searchRecords: state.searchRecords.filter((record) => record.id !== id),
        }));
      },
    }),
    {
      name: 'search-records',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
