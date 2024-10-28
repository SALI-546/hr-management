<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'HR Management System')</title>
    <!-- Importation des fichiers Vite (CSS & JS) -->
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    <!-- Tailwind CSS via CDN -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body class="antialiased bg-gray-100">

    <!-- Navbar -->
    <nav class="bg-white shadow p-4">
        <div class="max-w-7xl mx-auto flex justify-between">
            <a href="{{ url('/') }}" class="text-lg font-semibold text-gray-700">HR Management</a>
        </div>
    </nav>

    <!-- Main layout with sidebar and content -->
    <div class="flex">

        <!-- Sidebar (Left Column) -->
        <aside class="w-1/5 bg-white h-screen p-4 shadow-lg">
            <!-- Logo -->
            <div class="mb-8">
                <img src="path-to-logo" alt="GBEWA Logo" class="w-20 h-auto mx-auto mb-4">
                <h1 class="text-center text-green-600 font-bold">GBEWA</h1>
                <p class="text-center text-xs">En fin la bonheur</p>
            </div>

            <!-- Sidebar Navigation -->
            <nav class="space-y-4">
                <a href="#" id="rhLink" class="block py-2 px-4 rounded-lg text-gray-700 bg-green-100">
                    <i class="fas fa-users mr-2"></i> Ressources Humaines
                </a>
                <a href="#" id="financesLink" class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-green-100">
                    <i class="fas fa-wallet mr-2"></i> Finances
                </a>
                <a href="#" id="complaintsLink" class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-green-100">
                    <i class="fas fa-comment-dots mr-2"></i> Plainte & Suggestions
                </a>
                <a href="#" id="statsLink" class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-green-100">
                    <i class="fas fa-chart-bar mr-2"></i> Statistiques
                </a>
                <a href="#" id="docsLink" class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-green-100">
                    <i class="fas fa-book mr-2"></i> Documentation
                </a>
                <a href="#" id="settingsLink" class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-green-100">
                    <i class="fas fa-cogs mr-2"></i> Paramètres
                </a>
            </nav>
        </aside>

        <!-- Main Content Wrapper -->
        <div class="flex-1 p-6">
            <!-- Main Content (Ressources Humaines, initially visible) -->
            <main id="mainContent">
                <header class="bg-white shadow p-6">
                    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
                        <!-- Employés with functional link (green default class) -->
                        <a id="employeesLink" href="{{ route('employees.index') }}" class="link-item block bg-green-500 text-white p-6 rounded-lg shadow-lg text-center">
                            <div class="text-3xl font-bold">6.187</div>
                            <div class="mt-2">Employés</div>
                        </a>
                        <!-- Rapports without link -->
                        <div class="block bg-white text-green-600 p-6 rounded-lg shadow-lg text-center border border-gray-200">
                            <div class="text-3xl font-bold">4.732</div>
                            <div class="mt-2">Rapports</div>
                        </div>
                        <!-- Demandes with functional link -->
                        <a id="requestsLink" href="{{ route('requests.show') }}" class="link-item block bg-white text-green-600 p-6 rounded-lg shadow-lg text-center border border-gray-200">
                            <div class="text-3xl font-bold">07</div>
                            <div class="mt-2">Demandes</div>
                        </a>
                        <!-- Formations with functional link -->
                        <a id="trainingsLink" href="{{ route('trainings.create') }}" class="link-item block bg-white text-green-600 p-6 rounded-lg shadow-lg text-center border border-gray-200">
                            <div class="text-3xl font-bold">3.275</div>
                            <div class="mt-2">Formations</div>
                        </a>
                    </div>
                </header>
                <!-- Main content area for dynamic sections -->
                <div class="mt-8">
                    @yield('content')
                </div>
            </main>

            <!-- Finances Section -->
            <section id="financeContent" class="hidden">
                <div class="bg-white shadow p-6">
                    <div class="text-3xl font-bold mb-4">Gestion des Finances</div>
                    <div class="flex items-center">
                        <!-- Div for Demande de Paiement -->
                        <div class="bg-gray-200 text-gray-700 py-2 px-4 rounded mr-2" id="demandePaiementDiv">
                            <a href="{{ route('payments.page') }}" class="text-gray-700" id="demandePaiementLink">
                                <i class="fas fa-file-invoice-dollar"></i> Demande de Paiement
                            </a>
                        </div>
                        <!-- Div for Ordre de Paiement -->
                        <div class="bg-gray-200 text-gray-700 py-2 px-4 rounded mr-2" id="ordrePaiementDiv">
                            <a href="{{ route('orderpayment.page2') }}" class="text-gray-700" id="ordrePaiementLink">
                                <i class="fas fa-money-check-alt"></i> Ordre de Paiement
                            </a>
                        </div>
                        <!-- Div for Fiche d'Engagement -->
                        <div class="bg-gray-200 text-gray-700 py-2 px-4 rounded" id="ficheEngagementDiv">
                            <a href="{{ route('engagement.page') }}" class="text-gray-700" id="ficheEngagementLink">
                                <i class="fas fa-file-contract"></i> Fiche d’Engagement
                            </a>
                        </div>
                    </div>
                    <!-- Intégration du contenu dynamique -->
                    <div class="mt-8">
                        @yield('financeContent')
                    </div>
                </div>
            </section>

            <!-- Other Sections (Complaints, Statistics, etc.) -->
            <section id="complaintsContent" class="hidden">
                <div class="bg-white shadow p-6">
                    <div class="text-3xl font-bold mb-4">Bienvenue à la page des Plaintes & Suggestions</div>
                </div>
            </section>
            <section id="statsContent" class="hidden">
                <div class="bg-white shadow p-6">
                    <div class="text-3xl font-bold mb-4">Bienvenue à la page des Statistiques</div>
                </div>
            </section>
            <section id="docsContent" class="hidden">
                <div class="bg-white shadow p-6">
                    <div class="text-3xl font-bold mb-4">Bienvenue à la page de Documentation</div>
                </div>
            </section>
            <section id="settingsContent" class="hidden">
                <div class="bg-white shadow p-6">
                    <div class="text-3xl font-bold mb-4">Bienvenue à la page des Paramètres</div>
                </div>
            </section>
        </div>

    </div>

    <!-- Scripts React -->
    @vite(['resources/js/app.jsx'])

    <!-- Script to handle click events and toggle content visibility -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const rhLink = document.getElementById('rhLink');
            const financesLink = document.getElementById('financesLink');
            const complaintsLink = document.getElementById('complaintsLink');
            const statsLink = document.getElementById('statsLink');
            const docsLink = document.getElementById('docsLink');
            const settingsLink = document.getElementById('settingsLink');

            const mainContent = document.getElementById('mainContent');
            const financeContent = document.getElementById('financeContent');
            const complaintsContent = document.getElementById('complaintsContent');
            const statsContent = document.getElementById('statsContent');
            const docsContent = document.getElementById('docsContent');
            const settingsContent = document.getElementById('settingsContent');

            // Hide all content sections
            function hideAllSections() {
                mainContent.style.display = 'none';
                financeContent.style.display = 'none';
                complaintsContent.style.display = 'none';
                statsContent.style.display = 'none';
                docsContent.style.display = 'none';
                settingsContent.style.display = 'none';
            }

            // Click event for "Ressources Humaines" to show main content
            rhLink.addEventListener('click', function (e) {
                e.preventDefault();
                hideAllSections();
                mainContent.style.display = 'block';   // Show main content
            });

            // Click event for "Finances" to show finance content
            financesLink.addEventListener('click', function (e) {
                e.preventDefault();
                hideAllSections();
                financeContent.style.display = 'block'; // Show finance content
            });

            // Click event for "Plainte & Suggestions"
            complaintsLink.addEventListener('click', function (e) {
                e.preventDefault();
                hideAllSections();
                complaintsContent.style.display = 'block'; // Show complaints content
            });

            // Click event for "Statistiques"
            statsLink.addEventListener('click', function (e) {
                e.preventDefault();
                hideAllSections();
                statsContent.style.display = 'block'; // Show statistics content
            });

            // Click event for "Documentation"
            docsLink.addEventListener('click', function (e) {
                e.preventDefault();
                hideAllSections();
                docsContent.style.display = 'block'; // Show documentation content
            });

            // Click event for "Paramètres"
            settingsLink.addEventListener('click', function (e) {
                e.preventDefault();
                hideAllSections();
                settingsContent.style.display = 'block'; // Show settings content
            });

            // Detect the active section based on the URL
            const currentPath = window.location.pathname;

            // Hide all sections initially
            hideAllSections();

            // Logic to decide which section to display
            if (currentPath.includes('requests')) {
                document.getElementById('requestsLink').classList.add('bg-green-500', 'text-white');
                mainContent.style.display = 'block';
            } else if (currentPath.includes('trainings')) {
                document.getElementById('trainingsLink').classList.add('bg-green-500', 'text-white');
                mainContent.style.display = 'block';
            } else if (currentPath.includes('payments') || currentPath.includes('orderpayment') || currentPath.includes('engagement')) {
                // Display the financeContent section
                financeContent.style.display = 'block';
                // Add active class to Finances link
                financesLink.classList.add('bg-green-100');

                // Optionnel : Ajouter une classe active au lien spécifique si nécessaire
                if (currentPath.includes('payments')) {
                    const demandePaiementDiv = document.getElementById('demandePaiementDiv');
                    if (demandePaiementDiv) {
                        demandePaiementDiv.classList.add('bg-green-500', 'text-white');
                        const demandePaiementLink = document.getElementById('demandePaiementLink');
                        demandePaiementLink.classList.add('text-white');
                    }
                } else if (currentPath.includes('orderpayment')) {
                    const ordrePaiementDiv = document.getElementById('ordrePaiementDiv');
                    if (ordrePaiementDiv) {
                        ordrePaiementDiv.classList.add('bg-green-500', 'text-white');
                        const ordrePaiementLink = document.getElementById('ordrePaiementLink');
                        ordrePaiementLink.classList.add('text-white');
                    }
                } else if (currentPath.includes('engagement')) {
                    const ficheEngagementDiv = document.getElementById('ficheEngagementDiv');
                    if (ficheEngagementDiv) {
                        ficheEngagementDiv.classList.add('bg-green-500', 'text-white');
                        const ficheEngagementLink = document.getElementById('ficheEngagementLink');
                        ficheEngagementLink.classList.add('text-white');
                    }
                }
            } else {
                // By default, display the mainContent section
                mainContent.style.display = 'block';
                // Add active class to Ressources Humaines link
                rhLink.classList.add('bg-green-100');
            }
        });
    </script>

</body>
</html>
