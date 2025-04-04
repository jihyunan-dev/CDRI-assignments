import { Link } from 'react-router';
import { Button } from '../Button';
import { useBookListItemContext } from './context';

export function BookPurchaseButton() {
  const {
    isOpen,
    book: { url },
  } = useBookListItemContext();

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <Button color="primary" width={isOpen ? '240px' : '115px'} className="book-purchase-button">
        구매하기
      </Button>
    </Link>
  );
}
