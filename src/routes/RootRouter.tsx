import { Route, Routes } from 'react-router';
import { NotFoundPage } from '@/pages/404';
import { LikesPage } from '@/pages/LikesPage';
import { SearchPage } from '@/pages/SearchPage';
import { PATH } from './path';

export function RootRouter() {
  return (
    <Routes>
      <Route path={PATH.home} element={<SearchPage />} />
      <Route path={PATH.likes} element={<LikesPage />} />
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
}
