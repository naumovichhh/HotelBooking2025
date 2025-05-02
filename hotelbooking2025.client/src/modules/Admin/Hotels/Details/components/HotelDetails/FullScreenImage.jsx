function FullScreenImage({ src, onClose }) {
    return <div className="fullscreen-container">
        <span onClick={onClose} className="btn-close fullscreen-close"></span>
        <img src={src} className="fullscreen-content" alt="hotel" />
    </div>;
}

export default FullScreenImage;