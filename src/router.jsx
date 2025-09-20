import React, { useState } from 'react';
import { domainsData } from './data/domains.js';

// Import all the page components
import HomePage from './pages/HomePage.jsx';
import DomainsPage from './pages/DomainsPage.jsx';
import DomainQuestionsPage from './pages/DomainQuestionsPage.jsx';
import DomainFormPage from './pages/DomainFormPage.jsx';
import CongratulationsPage from './pages/CongratulationsPage.jsx';

function App() {
    // State to manage the current page and selected data
    const [page, setPage] = useState('home');
    const [selectedDomainId, setSelectedDomainId] = useState(null);
    const [formData, setFormData] = useState(null);

    // Main navigation function
    const handleNavigation = (newPage, domainId = null, data = null) => {
        setPage(newPage);
        if (domainId) setSelectedDomainId(domainId);
        if (data) setFormData(data);
    };

    // Render the correct page based on state
    const renderPage = () => {
        const domain = domainsData.find(d => d.id === selectedDomainId);

        switch (page) {
            case 'domains':
                return <DomainsPage onNavigate={handleNavigation} />;
            case 'domainQuestions':
                return domain ? <DomainQuestionsPage domain={domain} onNavigate={handleNavigation} /> : <p>Error: Domain not found</p>;
            case 'domainForm':
                return domain ? <DomainFormPage domain={domain} onNavigate={handleNavigation} /> : <p>Error: Domain not found</p>;
            case 'congratulations':
                 return domain && formData ? <CongratulationsPage domain={domain} formData={formData} /> : <p>Error: Missing data for this page</p>;
            case 'home':
            default:
                return <HomePage onNavigate={handleNavigation} />;
        }
    };

    return (
        <>
            {renderPage()}
        </>
    );
}

export default App;

