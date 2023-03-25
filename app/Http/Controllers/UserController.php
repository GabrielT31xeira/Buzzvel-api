<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {
        User::create([
            'name' => $request->name,
            'linkedin' => $request->linkedin,
            'github' => $request->github
        ]);
        return "Usuario criado";
    }
}
