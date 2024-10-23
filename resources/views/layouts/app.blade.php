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

    <!-- Section Entête Design Adapté -->
    <header class="bg-white shadow p-6">
        <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
            <!-- Employés avec lien fonctionnel (classe par défaut en vert) -->
            <a id="employeesLink" href="{{ route('employees.index') }}" class="link-item block bg-green-500 text-white p-6 rounded-lg shadow-lg text-center">
                <div class="text-3xl font-bold">6.187</div>
                <div class="mt-2">Employés</div>
            </a>

            <!-- Rapports sans lien -->
            <div class="block bg-white text-green-600 p-6 rounded-lg shadow-lg text-center border border-gray-200">
                <div class="text-3xl font-bold">4.732</div>
                <div class="mt-2">Rapports</div>
            </div>

            <!-- Demandes avec lien fonctionnel -->
            <a id="requestsLink" href="{{ route('requests.show') }}" class="link-item block bg-white text-green-600 p-6 rounded-lg shadow-lg text-center border border-gray-200">
                <div class="text-3xl font-bold">07</div>
                <div class="mt-2">Demandes</div>
            </a>

            <!-- Formations avec lien fonctionnel -->
            <a id="trainingsLink" href="{{ route('trainings.create') }}" class="link-item block bg-white text-green-600 p-6 rounded-lg shadow-lg text-center border border-gray-200">
                <div class="text-3xl font-bold">3.275</div>
                <div class="mt-2">Formations</div>
            </a>
        </div>
    </header>

    <main class="container mx-auto mt-8">
        @yield('content')
    </main>

    <!-- Scripts React -->
    @vite(['resources/js/app.jsx'])

    <!-- Ajout du script pour gérer le changement de couleur -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const links = document.querySelectorAll('.link-item');

            // Ajouter un écouteur d'événement pour chaque lien
            links.forEach(link => {
                link.addEventListener('click', function () {
                    // Supprimer la classe active de tous les liens
                    links.forEach(link => link.classList.remove('bg-green-500', 'text-white'));
                    links.forEach(link => link.classList.add('bg-white', 'text-green-600'));

                    // Ajouter la classe active au lien cliqué
                    this.classList.remove('bg-white', 'text-green-600');
                    this.classList.add('bg-green-500', 'text-white');
                });
            });

            // Par défaut, le lien Employés est actif
            document.getElementById('employeesLink').classList.add('bg-green-500', 'text-white');

            // Détecter le lien actif en fonction de l'URL
            const currentPath = window.location.pathname;
            if (currentPath.includes('requests')) {
                document.getElementById('requestsLink').classList.add('bg-green-500', 'text-white');
                document.getElementById('employeesLink').classList.remove('bg-green-500', 'text-white'); // Retirer la classe de "Employés"
            } else if (currentPath.includes('trainings')) {
                document.getElementById('trainingsLink').classList.add('bg-green-500', 'text-white');
                document.getElementById('employeesLink').classList.remove('bg-green-500', 'text-white'); // Retirer la classe de "Employés"
            }
        });
    </script>

</body>
</html>
