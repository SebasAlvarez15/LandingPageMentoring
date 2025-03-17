import React from 'react'

interface ActionButtonProps{
  backgroundColor: string;
  textColor: string;
  title: string;
  width: number;
  height: number;
  onClick: () => void;
  loading?: boolean;
}


const Button: React.FC<ActionButtonProps> = ({
    backgroundColor,
    textColor,
    title,
    width,
    onClick,
    height,
    loading,
  }) => {
    return (
        <button
          onClick={onClick}
          disabled={loading}
          style={{
            backgroundColor,
            color: textColor,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`font-semibold rounded-md flex items-center justify-center transition-all duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          ) : (
            title
          )}
        </button>
      );
    };
    
    export default Button;