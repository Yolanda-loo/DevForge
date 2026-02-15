import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';

const DevForgeEditor = ({ roomId }) => {
  const [code, setCode] = useState("// Start coding together...");
  const socketRef = useRef(null);

  useEffect(() => {
    // 1. Initialize WebSocket connection to your FastAPI backend
    socketRef.current = new WebSocket(`ws://localhost:8000/ws/${roomId}`);

    // 2. Listen for incoming code updates from other users
    socketRef.current.onmessage = (event) => {
      const incomingCode = event.data;
      if (incomingCode !== code) {
        setCode(incomingCode);
      }
    };

    return () => {
      socketRef.current.close();
    };
  }, [roomId]);

  const handleEditorChange = (value) => {
    setCode(value);
    // 3. Send our changes to the server to broadcast to others
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(value);
    }
  };

  return (
    <div className="h-screen w-full bg-gray-900 p-4">
      <div className="mb-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-blue-400 underline decoration-indigo-500">DevForge: Room {roomId}</h1>
        <span className="bg-green-600 px-3 py-1 rounded-full text-xs">Live Sync Active</span>
      </div>
      
      <div className="border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
        <Editor
          height="80vh"
          theme="vs-dark"
          defaultLanguage="python"
          value={code}
          onChange={handleEditorChange}
          options={{
            fontSize: 16,
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
};

export default DevForgeEditor;