import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">Sidebar</aside>
      <header className="header">Header</header>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout; 