import { useState } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { AppWrap } from './Styles';
import { Styles } from './Styles';

export function App() {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [card, setCard] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
  };

  const showPicture = evt => {
    toggleModal();
    const card = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    setCard(card);
  };

  return (
    <AppWrap>
      {showModal && (
        <Modal onToggle={toggleModal}>
          <img src={card.largeImageURL} alt={card.alt} />
        </Modal>
      )}
      <Styles></Styles>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery
        searchName={searchName}
        showPicture={showPicture}
        page={page}
        nextPage={() => setPage(page + 1)}
      />
    </AppWrap>
  );
}
