import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {children}
    </div>
  );
};

export default Layout;