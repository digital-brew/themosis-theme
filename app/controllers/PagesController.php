<?php

class PagesController extends BaseController
{
    public function home()
    {
        return View::make('home');
    }

    public function sample()
    {
        return 'Sample';
    }

    public function about()
    {
        return 'About';
    }

    public function vision()
    {
        return 'Vision';
    }
}