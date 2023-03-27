<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Exception;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'unique:users|required',
            'linkedin' => 'required',
            'github' => 'required'
        ]);

        if ($validate->fails()) {
            return response()->json(['message' => 'Erro ao gerar codigo QR!', 'error' => $validate->errors()])->setStatusCode(422);
        }

        try {
            User::create([
                'name' => $request->name,
                'linkedin' => $request->linkedin,
                'github' => $request->github
            ]);

            $base_url = "http://localhost:8083/api/" . $request->name;

            $qrCode = QrCode::format('png')->size(250)->generate($base_url);
            return response()->json(['message' => 'Codigo QR criado', 'qrcode' => $qrCode])->setStatusCode(200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Erro por parte do servidor', 'error' => $e->getMessage()]);
        }
    }
}
