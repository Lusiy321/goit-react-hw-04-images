import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { AppWrap } from './Styles';
import { Styles } from './Styles';

export class App extends Component {
  state = {
    searchName: '',
    showModal: false,
    card: {},
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  showPicture = evt => {
    this.toggleModal();
    const card = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    this.setState({ card });
  };

  render() {
    const { card, searchName } = this.state;
    return (
      <AppWrap>
        {this.state.showModal && (
          <Modal onToggle={this.toggleModal}>
            <img src={card.largeImageURL} alt={card.alt} />
          </Modal>
        )}
        <Styles></Styles>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={searchName} showPicture={this.showPicture} />
      </AppWrap>
    );
  }
}
