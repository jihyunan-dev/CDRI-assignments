import { useState } from 'react';
import { css } from '@emotion/react';
import { Stack } from '@/components/Stack';
import { SearchInput, SearchInputProps } from './SearchInput';
import { SearchOverlay } from './SearchOverlay';
import { SearchRecordList } from './SearchRecordList';
import { SearchRecord } from './type';

const MAX_RECORD_NUM = 8;

export type SearchFieldProps = SearchInputProps;

export function SearchField({ ...props }: SearchFieldProps) {
  const [isListOpen, setIsListOpen] = useState(false);

  // TODO: 상태 기억하는 방향으로 변경예정
  const [searchRecords, setSearchRecords] = useState<SearchRecord[]>([]);

  const openList = () => setIsListOpen(true);
  const closeList = () => setIsListOpen(false);

  const addSearchRecord = (newValue: string) => {
    const newRecord: SearchRecord = { id: Date.now(), value: newValue };
    setSearchRecords((prev) => {
      const newRecords = [...prev, newRecord];
      if (newRecords.length > MAX_RECORD_NUM) {
        newRecords.shift();
      }
      return newRecords;
    });
  };

  const deleteSearchRecord = (id: number) => {
    setSearchRecords((prev) => prev.filter((record) => record.id !== id));
  };

  return (
    <>
      <Stack dir="column" css={style} data-list-open={isListOpen}>
        <SearchInput {...props} onFocus={openList} submitValue={addSearchRecord} />
        {isListOpen && <SearchRecordList searchRecords={searchRecords} deleteSearchRecord={deleteSearchRecord} />}
      </Stack>
      {isListOpen && <SearchOverlay onClick={closeList} />}
    </>
  );
}

const style = css`
  position: relative;
  background-color: var(--palette-light-gray);
  border-radius: 24px;
  z-index: 2;

  &[data-list-open='true'] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
