"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, AlertCircle } from 'lucide-react';

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load submissions from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("allFormSubmissions");
    if (storedData) {
      setSubmissions(JSON.parse(storedData));
    }
    setLoading(false);
  }, []);

  // Clear all submissions
  const handleClearAll = () => {
    console.log("Forcing Clear All...");
    localStorage.removeItem("allFormSubmissions");
    setSubmissions([]);
  };

  // Delete a specific submission
  const handleDelete = (id: any) => {
    console.log("Forcing Delete for ID:", id);
    
    // Get fresh data from storage
    const rawData = localStorage.getItem("allFormSubmissions");
    const existing = JSON.parse(rawData || "[]");
    
    // Filter out the item with strict string comparison
    const updated = existing.filter((item: any) => {
      const itemId = String(item.id || '');
      const targetId = String(id || '');
      return itemId !== targetId && itemId !== '';
    });
    
    // Update both storage and state
    localStorage.setItem("allFormSubmissions", JSON.stringify(updated));
    setSubmissions(updated);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white pt-24">
        <p className="text-xl text-gray-500">Loading submissions...</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-off-white min-h-screen">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">All Form Submissions</h1>
            <p className="text-gray-600 text-lg">Centralized view of all data captured from forms across the website.</p>
          </div>
          {submissions.length > 0 && (
            <button 
              onClick={(e) => {
                e.preventDefault();
                handleClearAll();
              }}
              className="flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95"
            >
              <Trash2 size={20} /> Force Clear All
            </button>
          )}
        </div>

        {submissions.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center">
            <AlertCircle size={48} className="text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No submissions available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[...submissions].reverse().map((sub, index) => (
              <motion.div 
                key={sub.id || index} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full relative group"
              >
                <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
                  <div>
                    <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {sub.formType || "Unknown Form"}
                    </span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDelete(sub.id);
                    }}
                    className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white p-2.5 rounded-xl transition-all shadow-sm active:scale-90"
                    title="Force Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <div className="flex-1 space-y-4 text-sm text-gray-700 mb-6">
                  {Object.entries(sub.data || {}).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-3 rounded-lg border border-gray-100 overflow-hidden">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                        {key}
                      </span>
                      <span className="text-secondary font-medium whitespace-pre-wrap break-words">
                        {String(value)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 text-[10px] text-gray-400 font-medium">
                  ID: {sub.id} • {new Date(sub.submittedAt).toLocaleString()}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
