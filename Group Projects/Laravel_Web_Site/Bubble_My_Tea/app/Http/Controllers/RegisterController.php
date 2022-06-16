<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function show(){
        return view('register');
    }

    public function store(request $request)
    {
      dd(request->input('name'));
    }
}
