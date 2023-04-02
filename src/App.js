import "./App.css";
import { renderComponent } from './components/render/renderComponent';
import { config } from './config';

function App() {
  const reactEvents = {
    // Mouse Events
    onClick: () => {},
    onContextMenu: () => {},
    onDoubleClick: () => {},
    onDrag: () => {},
    onDragEnd: () => {},
    onDragEnter: () => {},
    onDragExit: () => {},
    onDragLeave: () => {},
    onDragOver: () => {},
    onDragStart: () => {},
    onDrop: () => {},
    onMouseDown: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onMouseMove: () => {},
    onMouseOut: () => {},
    onMouseOver: () => {},
    onMouseUp: () => {},

    // Keyboard Events
    onKeyDown: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},

    // Form Events
    onChange: () => {},
    onInput: () => {},
    onSubmit: () => {},

    // Touch Events
    onTouchCancel: () => {},
    onTouchEnd: () => {},
    onTouchMove: () => {},
    onTouchStart: () => {},

    // Focus Events
    onFocus: () => {},
    onBlur: () => {},

    // Other Events
    onScroll: () => {},
    onLoad: () => {},
    onError: () => {},
  };
  return (
    <div className="App">
      {renderComponent(config)}
    </div>
  );
}

export default App;
