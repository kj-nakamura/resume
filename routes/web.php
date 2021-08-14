<?php

use App\Http\Controllers\publicControllers\profileController;
use App\Http\Controllers\publicControllers\resumeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

if (config('app.env') === 'production') {
    URL::forceScheme('https');
}

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::inertia('/', 'Home');

Route::inertia('/test', 'Test');
Route::get('/resume', [resumeController::class, 'index'])->name('resume');
Route::get('/resume/pdfPreview', [resumeController::class, 'pdfPreview'])->name('resumePdfPreview');
Route::get('/resume/pdfDownload', [resumeController::class, 'pdfDownload'])->name('resumePdfDownload');
Route::get('/resume/webPreview', [resumeController::class, 'webPreview'])->name('resumeWebPreview');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/profile', [profileController::class, 'index'])->name('profile');
    Route::delete('/profilePhotoDelete', [profileController::class, 'deleteProfilePhoto'])->name('profilePhotoDelete');
    Route::put('/profilePhotoUpdate', [profileController::class, 'updateProfilePhoto'])->name('profilePhotoUpdate');
    Route::delete('/profileDelete', [profileController::class, 'deleteProfile'])->name('profileDelete');
});
