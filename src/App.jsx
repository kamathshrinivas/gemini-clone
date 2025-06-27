import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <Sidebar />
      <Main />

      {/* Footer with fixed styling */}
      <footer
        style={{
          textAlign: 'center',
          padding: '10px',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: '#f0f0f0',
          zIndex: 999
        }}
      >
        Built by Shrinivas Kamath 🚀
      </footer>
    </>
  );
};

export default App;
