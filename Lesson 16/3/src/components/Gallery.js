import Photo from "./Photo";

export default function Gallery(props) {
  return (
    <div className="gallery">
      {props.photos.map((photo, i) => (
        <Photo
          key={i}
          name={photo.name}
          img={photo.img}
          description={photo.description}
          genre={photo.genre}
          author={photo.author}
          year={photo.year}
        ></Photo>
      ))}
    </div>
  );
}
