<?php

namespace App\Providers;

use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Inertia::share('errors', function (){
        //     return session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() :
        //     (object) [];
        // });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(UrlGenerator $url)
    {
        if (env('APP_ENV') === 'production') {
            $url->forceScheme('https');
        }
    }
}
