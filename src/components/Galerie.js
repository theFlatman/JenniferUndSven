import React from "react";
import Gallery from "react-grid-gallery";
import { fetchPhotos } from "../apis/bilder";

class Galerie extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const responsePhotosets = await fetchPhotos(this.props.match.params.id);

    const photos = responsePhotosets.data.photoset.photo;

    const IMAGES = [];

    photos.forEach(photo => {
      var img = new Image();
      const originalSource = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;

      img.onload = () => {
        this.setState(prevState => ({
          data: [
            ...prevState.data,
            {
              src: originalSource,
              thumbnail: img.src,
              thumbnailWidth: img.width,
              thumbnailHeight: img.height
            }
          ]
        }));
      };

      img.src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`;

      this.setState({ data: IMAGES });
    });
  }

  render() {
    return (
      <div>
        <Gallery images={this.state.data} />
      </div>
    );
  }
}

export default Galerie;
