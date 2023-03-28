<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Exception;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class UserController extends Controller
{
    public function store(Request $request)
    {
        // Validando as inforações
        $validate = Validator::make($request->all(),[
            'name' => 'required',
            'linkedin' => 'required',
            'github' => 'required'
        ]);

        if ($validate->fails()) {
            return response()->json(['message' => 'Erro ao gerar codigo QR!', 'error' => $validate->errors()])->setStatusCode(422);
        }

        // Fazendo o cadastro do usuario
        try {
            User::create([
                'name' => $request->name,
                'linkedin' => $request->linkedin,
                'github' => $request->github
            ]);

            $name = $request->name;
            $base_url = "http://localhost:8083/api/" . $name;

            //Tranformando a imagem em base 64
            $qrCodeImage = QrCode::format('png')->size(250)->generate($base_url);
            $base64Image = base64_encode($qrCodeImage);
            return response()->json(['message' => 'Codigo QR criado', 'image' => $base64Image])->setStatusCode(200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Erro por parte do servidor', 'error' => $e->getMessage()])->setStatusCode(500);
        }
    }

    public function getUserByName(Request $request){
        // Validando as inforações
        $validate = Validator::make($request->all(),[
            'name' => 'required'
        ]);

        if ($validate->fails()) {
            return response()->json(['message' => 'Usuario não encontrado', 'error' => $validate->errors()])->setStatusCode(422);
        }

        // Fazendo a busca do usuario
        try {
            $user = User::where('name', $request->name)->get();
            return response()->json(['user' => $user])->setStatusCode(200);
            // Erro do servidor
        } catch (\Exception $e){
            return response()->json(['message' => 'Erro por parte do servidor', 'error' => $e->getMessage()])->setStatusCode(500);
        }
    }
}
