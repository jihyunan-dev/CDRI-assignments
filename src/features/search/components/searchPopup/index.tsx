import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import IconClose from '@/assets/icon-close.svg?react';
import { Button } from '@/components/Button';
import { Select } from '@/components/Select';
import { Stack } from '@/components/Stack';
import { useSearchRecordStore } from '@/store/useSearchRecordStore';
import { BookSearchTarget } from '@/types/book';
import { SearchInput } from './SearchInput';

type SearchPopupProps = {
  submitValue: (target: BookSearchTarget, query: string) => void;
};

const searchTargetOptions = [
  { label: '제목', value: BookSearchTarget.Title },
  { label: '저자명', value: BookSearchTarget.Person },
  { label: '출판사', value: BookSearchTarget.Publisher },
];

export function SearchPopup({ submitValue }: SearchPopupProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTarget, setSearchTarget] = useState<BookSearchTarget>(BookSearchTarget.Title);
  const { addSearchRecord } = useSearchRecordStore();

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const onChangeTarget = (target: BookSearchTarget) => {
    setSearchTarget(target);
  };

  const onClickCloseButton = () => {
    closePopup();
    setSearchTarget(BookSearchTarget.Title);
  };

  const onSubmit = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current?.value;
      submitValue(searchTarget, inputValue ?? '');
      addSearchRecord(inputValue ?? '');
      inputRef.current.value = '';
    }
    closePopup();
    setSearchTarget(BookSearchTarget.Title);
  };

  return (
    <div css={style}>
      <Button size="small" color="outline" onClick={openPopup}>
        상세검색
      </Button>
      {isOpen && (
        <>
          <div className="searchPopup-overlay" onClick={onClickCloseButton} />
          <Stack dir="column" gap={16} className="searchPopup-content">
            <button type="button" className="close-button" onClick={onClickCloseButton}>
              <IconClose width={20} height={20} />
            </button>
            <Stack gap={4} width="100%">
              <Select
                value={searchTarget}
                options={searchTargetOptions}
                onChange={(v) => onChangeTarget(v as BookSearchTarget)}
              />
              <SearchInput ref={inputRef} placeholder="검색어 입력" />
            </Stack>
            <Button size="large" color="primary" width="100%" onClick={onSubmit}>
              검색하기
            </Button>
          </Stack>
        </>
      )}
    </div>
  );
}

const style = css`
  position: relative;
  flex-shrink: 0;

  .searchPopup-content {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    width: 360px;
    padding: 36px 24px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 4px 14px 6px #97979726;

    .close-button {
      position: absolute;
      top: 16px;
      right: 16px;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .searchPopup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    z-index: 2;
  }
`;
