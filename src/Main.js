import React, { Component } from 'react'
import Dropzone from "react-dropzone"

class Meme extends Component {
    constructor(props) {
                super(props)
                this.state = {
                               dropzone: [],
                               topText : "",
                               bottomText : "" ,

                            }
            this.handleChange = this.handleChange.bind(this)
        }

        addFilesToDropzone(imgss, dropzone) {
    
            imgss.map(imgs => {
            imgs["preview"] = URL.createObjectURL(imgs);
            
            });
            this.setState({ [dropzone]: imgss });
        }
         


        handleChange(event){
            const {name , value } = event.target
            this.setState( { [name] : value })
        }
        render() {
            const { dropzone } = this.state;
            return (
                <div>
                    <form className="meme-form">
                        <input type="text"
                               placeholder="Top-Text"
                               name="topText"
                               value={this.state.topText}
                               onChange={this.handleChange}

                        />
                        <input type="text"
                               placeholder="bottom-Text"
                               name="bottomText"
                               value={this.state.bottomText}
                               onChange={this.handleChange}

                        />

                    </form>
                    <div className="drop">
                        
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>

                </div>

                    <div >
                        <Dropzone
                            onDrop={imgss => {
                                this.addFilesToDropzone(imgss, "dropzone");
                            }}
                            >
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className="">
                                    <input {...getInputProps()} />
                                    <div className="container-fluid" style={{ margin:"2px",backgroundColor: "#bababa", border: "2px dashed black",textAlign:"center",padding:"2%" }}>
                                        Drop your image here

                                        {dropzone.map(imgs => (
                                        <img
                                            src={imgs.preview}
                                            alt={imgs.path}
                                            style={{ width: "60vw", height: "80vh",position:"center" ,marginLeft:"-18%" }}
                                        />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Dropzone>

                
                    </div>
                </div>
            
            )
        }
}
export default Main
