import { css } from '@emotion/react';
import IconHeartFill from '@/assets/icon-heart-fill.svg?react';
import IconHeartLine from '@/assets/icon-heart-line.svg?react';
import { useLikeStore } from '@/store/useLikeStore';
import { useBookListItemContext } from './context';

export function BookThumbnail() {
  const { isOpen, book } = useBookListItemContext();
  const { title, thumbnail, isbn } = book;

  const size = isOpen ? 'large' : 'small';
  const iconSize = size === 'small' ? 16 : 24;

  const likeStore = useLikeStore();
  const isLiked = likeStore.isLike(isbn);
  const clickLikeButton = () => {
    if (isLiked) {
      likeStore.removeLike(isbn);
    } else {
      likeStore.addLike(book);
    }
  };

  return (
    <div data-size={size} css={style}>
      <button type="button" className="like-button" onClick={clickLikeButton}>
        {isLiked ? (
          <IconHeartFill width={iconSize} height={iconSize} />
        ) : (
          <IconHeartLine width={iconSize} height={iconSize} />
        )}
      </button>
      <img src={thumbnail} alt={title} />
    </div>
  );
}

const style = css`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .like-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  &[data-size='small'] {
    width: 48px;
    height: 68px;

    .like-button {
      padding: 2px;
    }
  }

  &[data-size='large'] {
    width: 200px;
    height: 264px;

    .like-button {
      padding: 6px;
    }
  }
`;
