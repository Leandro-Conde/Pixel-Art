export default function Window({ children }) {
    return (
      <div className="window">
        <div className="title-bar">
          <span>🎵 Music Box</span>
          <span>✕</span>
        </div>
  
        {children}
      </div>
    );
  }