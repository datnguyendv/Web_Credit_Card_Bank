import React from 'react';
import '../css/loading.css'
export const LoadingScreen: React.FC = () => {
    return (
       <div className = "loading">
            <div className= "loading-body">
            <div className="spinner-border" role="status">
            </div>
            <span className="sr-only font-weight-bold ms-3">Loading...</span>
           </div>
       </div>
    )
}