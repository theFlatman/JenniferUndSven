import React from "react";
import styled from "styled-components";
import { fetchPhotosets, fetchPhotos } from "../apis/bilder";
import { Link } from "react-router-dom";

const ContentBox = styled.div`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    margin-right: 100px;
    padding: 0px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  padding: 5px;
  transition: font-weight 0.5s, text-shadow 0.5s;
  :hover {
    text-shadow: 0 0 5px #f5c1e7, 0 0 3px #ef94d6;
    font-weight: bold;
  }

  img {
    height: 200px;
    -webkit-filter: blur(0px);
    filter: blur(0px);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  img:hover {
    -webkit-filter: blur(1px);
    filter: blur(1px);
    border-radius: 5px;
  }

  p {
    font-size: 18px !important;
    margin-bottom: 2px !important;
  }
`;

const fetchCoverInfo = async photosetID => {
  const photos = await fetchPhotos(photosetID);
  return {
    photosetID: photosetID,
    coverPhoto: `https://farm${photos.data.photoset.photo[0].farm}.staticflickr.com/${photos.data.photoset.photo[0].server}/${photos.data.photoset.photo[0].id}_${photos.data.photoset.photo[0].secret}_n.jpg`,
    albumName: photos.data.photoset.title
  };
};

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      photoSet: []
    };
  }

  async componentDidMount() {
    const responsePhotosets = await fetchPhotosets();
    console.log(responsePhotosets);

    for (var i = 0; i < responsePhotosets.data.photosets.photoset.length; i++) {
      const coverInfo = await fetchCoverInfo(
        responsePhotosets.data.photosets.photoset[i].id
      );

      this.setState(prevState => ({
        photoSet: [...prevState.photoSet, coverInfo]
      }));
    }
  }

  renderAlben() {
    return this.state.photoSet.map(album => {
      return (
        <li key={album.photosetID}>
          <StyledLink to={`/galerie/${album.photosetID}`}>
            <p>{album.albumName}</p>
            <img src={album.coverPhoto} alt={album.albumName} />
          </StyledLink>
        </li>
      );
    });
  }

  render() {
    return (
      <ContentBox>
        <ul>{this.renderAlben()}</ul>
      </ContentBox>
    );
  }
}

export default Album;
