import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class ImageProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      imagePieces: [],
      newPieces: [],
    };
  }

  cutImageUp = async () => {
    var imagePieces = [];
    for (var x = 0; x < 4; ++x) {
      for (var y = 0; y < 4; ++y) {
        var canvas = document.createElement("canvas");
        canvas.width = 277;
        canvas.height = 150;
        var context = canvas.getContext("2d");
        var img = new Image();
        img.src = this.state.image;
        context.drawImage(
          img,
          y * 277,
          x * 150,
          350,
          100,
          0,
          0,
          canvas.width,
          canvas.height
        );
        imagePieces.push(await canvas.toDataURL());
      }
    }
    this.setState({ imagePieces: imagePieces });
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result }, () => this.cutImageUp());
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  shuffle = () => {
    let newPieces = this.state.imagePieces.sort(() => Math.random() - 0.5);
    this.setState({ newPieces: newPieces });
  };

  unshuffle = () => {
    this.setState({ newPieces: [] });
    this.cutImageUp();
  };

  render() {
    const { image, imagePieces, newPieces } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={12}>
              <label htmlFor="imagefile">Select a Image:</label>
              <input
                type="file"
                id="image-file"
                name="imagefile"
                onChange={(e) => this.onImageChange(e)}
              />
            </Col>
            {image && (
              <Col sm={12}>
                <img id="selected-img" src={image} alt="Image" />
              </Col>
            )}
            {imagePieces.length > 0 && (
              <Col sm={12}>
                <div className="display-pieces">
                  <Row>
                    {newPieces.length > 0
                      ? newPieces.map((src, i) => (
                          <Col sm={3} className="pieces-cont">
                            <img
                              key={`${src}-${i + 1}`}
                              src={src}
                              alt="Image"
                              className="pieces"
                            />
                          </Col>
                        ))
                      : imagePieces.map((src, i) => (
                          <Col sm={3} className="pieces-cont">
                            <img
                              key={`${src}-${i + 1}`}
                              src={src}
                              alt="Image"
                              className="pieces"
                            />
                          </Col>
                        ))}
                  </Row>
                </div>
              </Col>
            )}
          </Row>
          {image && (
            <Row>
              <Col sm={6} className="padding-y">
                <button onClick={() => this.shuffle()} className={"button font-white primary button-text"}>Shuffle</button>
              </Col>
              <Col sm={6} className="padding-y">
                <button onClick={() => this.unshuffle()} className={"button font-white primary button-text"}>Unshuffle</button>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    );
  }
}

export default ImageProcess;
