import React from 'react'
import { Navigate, useLocation } from 'react-router';
import { useAuth } from './auth';

export default function RequireAuth ({children})  {
    const auth = useAuth();
    
    const location = useLocation();
    if (!auth.user) {
        return <Navigate to="/login" state={{ path:location.pathname }}/>
    }

    return (
    children
  ) 
}
