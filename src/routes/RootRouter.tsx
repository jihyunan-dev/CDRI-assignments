import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { NotFoundPage } from '@/pages/404';
import { PATH } from './path';

const SearchPage = lazy(() => import('@/pages/SearchPage').then((module) => ({ default: module.SearchPage })));
const LikesPage = lazy(() => import('@/pages/LikesPage').then((module) => ({ default: module.LikesPage })));

export function RootRouter() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path={PATH.home} element={<SearchPage />} />
        <Route path={PATH.likes} element={<LikesPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
