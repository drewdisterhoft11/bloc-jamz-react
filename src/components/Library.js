import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = {
      albums: albumData
     };
=======
    this.state = { albums: albumData };
>>>>>>> 5312272b7079ca5d219beb7dea68c3d3b01530f6
  }
  render() {
    return (
    <section className="library">
     {
      this.state.albums.map( (album, index) =>
       <Link to={`/album/${album.slug}`} key={index}>
          img src={album.albumCover} alt={album.title} />
          <div>{album.title}</div>
          <div>{album.artist}</div>
          <div>{album.songs.length} songs</div>
        </Link>
      )
     }
      </section>
    );
  }
}

export default Library;
