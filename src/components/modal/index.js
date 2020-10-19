// Modal.js
import React from "react";
import { createPortal } from "react-dom";
import AddModal from "./addPhoto"
import styles from "./styles.module.scss"
// We get hold of the div with the id modal that we have created in index.html
const modalRoot = document.getElementById("modal");
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // We create a overlay to wrap the modal
    this.overlay = document.createElement("div")
    this.overlay.className= styles['overlay']

    // We create an element div for this modal
    this.element = document.createElement("div");
    this.element.className = styles['my-modal']
  }
  // We append the created div to the div#modal
  componentDidMount() {
    modalRoot.appendChild(this.overlay);
    modalRoot.appendChild(this.element);
  }
  /**
   * We remove the created div when this Modal Component is unmounted
   * Used to clean up the memory to avoid memory leak
   */
  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }
  render() {
    return createPortal(this.props.children, this.element);
  }
}
export default Modal;
export {AddModal}