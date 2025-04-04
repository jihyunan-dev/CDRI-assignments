import { css } from '@emotion/react';
import IconClose from '@/assets/icon-close.svg?react';
import { Stack } from '@/components/Stack';
import { Typography } from '@/components/Typography';
import { SearchRecord } from './type';

type SearchRecordListProps = {
  searchRecords: SearchRecord[];
  deleteSearchRecord(id: number): void;
};

export function SearchRecordList({ searchRecords, deleteSearchRecord }: SearchRecordListProps) {
  return (
    <Stack css={searchListStyle} as="ul" dir="column-reverse">
      {searchRecords.length === 0 && (
        <Stack align="center" justify="center" css={{ height: '100%' }}>
          <Typography.Caption color="subtitle">최근 검색어가 없습니다.</Typography.Caption>
        </Stack>
      )}
      {searchRecords.map((record) => (
        <SearchListItem key={record.id} searchRecord={record} onDelete={() => deleteSearchRecord(record.id)} />
      ))}
    </Stack>
  );
}

function SearchListItem({ searchRecord, onDelete }: { searchRecord: SearchRecord; onDelete?(): void }) {
  return (
    <Stack css={searchListItemStyle} as="li" align="center" width="100%">
      <Typography.Caption as="p" color="subtitle" className="searchListItem-text">
        {searchRecord.value}
      </Typography.Caption>
      <button type="button" onClick={onDelete} className="searchListItem-deleteButton">
        <IconClose className="searchListItem-deleteIcon" />
      </button>
    </Stack>
  );
}

const searchListStyle = css`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 16px 24px 16px 50px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: var(--palette-light-gray);
`;

const searchListItemStyle = css`
  height: 40px;
  .searchListItem-text {
    flex-grow: 1;
  }

  .searchListItem-deleteButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 2px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--palette-light-gray);
    }
  }

  .searchListItem-deleteIcon {
    width: 24px;
    height: 24px;
    fill: var(--palette-black);
  }
`;
