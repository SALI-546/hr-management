<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\TrainingController;

// Route pour afficher la page d'accueil
Route::get('/', function () {
    return view('home');  // Vue de la page d'accueil
});

// Route pour afficher la liste des employés (vue Blade 'employees.index')
Route::get('/employees', [EmployeeController::class, 'index'])->name('employees.index');

Route::get('/requests', [RequestController::class, 'show'])->name('requests.show');

Route::get('/trainings', [TrainingController::class, 'index'])->name('trainings.create');
