import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
                <h1 className="text-6xl text-rose-500 font-black mb-4">Oops!</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
                <p className="text-gray-600 mb-6">
                    {error.statusText || error.message || "An unexpected error occurred."}
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
