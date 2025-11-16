import { AlertCircle, LogOut, X } from 'lucide-react';

function LogoutConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Close modal only if clicking the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slideUp relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon and Header */}
        <div className="p-6 text-center">
          {/* <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 animate-bounce-slow">
            <LogOut className="w-8 h-8 text-red-600" />
          </div> */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Logout Confirmation
          </h2>
          <p className="text-gray-600 text-lg">
            Are you sure you want to logout?
          </p>
        </div>

        {/* Info Box */}
        <div className="px-6 pb-6">
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all hover:border-gray-400 hover:shadow-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default LogoutConfirmModal;