import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { BookDocument } from '@/types/book';

export const useLikeStore = create(
  persist<{
    likes: BookDocument[];
    addLike(book: BookDocument): void;
    removeLike(isbn: string): void;
    isLike(isbn: string): boolean;
  }>(
    (set, get) => ({
      likes: [],
      addLike: (book: BookDocument) => set((state) => ({ likes: [...state.likes, book] })),
      removeLike: (isbn: string) => set((state) => ({ likes: state.likes.filter((b) => b.isbn !== isbn) })),
      isLike: (isbn: string) => get().likes.some((b) => b.isbn === isbn),
    }),
    { name: 'likes', storage: createJSONStorage(() => localStorage) },
  ),
);
