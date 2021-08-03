import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="bg-gray-900 h-screen">
        <main className="max-w-7xl mx-auto pt-4 md:grid grid-cols-2 gap-4">
          <textarea className="bg-white border border-black w-full h-72"></textarea>
        </main>
      </div>
    );
  }
}

export default App;
