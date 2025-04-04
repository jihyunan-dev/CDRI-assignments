import { useState } from 'react';
import { css } from '@emotion/react';
import { Stack } from '@/components/Stack';
import { useSearchRecordStore } from '@/store/useSearchRecordStore';
import { SearchInput, SearchInputProps } from './SearchInput';
import { SearchOverlay } from './SearchOverlay';
import { SearchRecordList } from './SearchRecordList';

export type SearchFieldProps = {
  submitValue(value: string): void;
} & SearchInputProps;

export function SearchField({ submitValue, ...props }: SearchFieldProps) {
  const [isListOpen, setIsListOpen] = useState(false);
  const { searchRecords, addSearchRecord, deleteSearchRecord } = useSearchRecordStore();

  const openList = () => setIsListOpen(true);
  const closeList = () => setIsListOpen(false);

  const submitSearchValue = (newValue: string) => {
    addSearchRecord(newValue);
    submitValue(newValue);
  };

  return (
    <>
      <Stack dir="column" width="100%" css={style} data-list-open={isListOpen}>
        <SearchInput {...props} onFocus={openList} submitValue={submitSearchValue} />
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
