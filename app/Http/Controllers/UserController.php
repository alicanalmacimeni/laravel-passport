<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function giris(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        $token->save();

        /* return response()->json([
            'success' => true,
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer'
        ]); */

        setcookie(
            $name = "TestCookie",
            $value = "asdasd121212",
            $expire = 3600,
            $path = "",
            $domain = "",
            $secure = false,
            $httponly = true
        );
        
        return $_COOKIE['TestCookie'];
    }
}
