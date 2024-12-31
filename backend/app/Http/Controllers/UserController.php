<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();

        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User;
        $result = $request->validate([
            "email" => ["required", "email", Rule::unique("users", "email")],
            "password" => ["required", Password::min(8)->mixedCase()->numbers()->symbols()],
        ]);
        $user->name = "fernando lagahit";
        $user->email = strip_tags($result["email"]);
        $user->password = strip_tags($result["password"]);
        $user->phone = "09391230045";
        $user->address = "Taguig City";
        $user->role = "customer";
        $user->save();


        return response()->json(['message' => 'User created', 'data' => $user]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json(['message' => 'User details', 'user_id' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            "name" => "required",
            "email" => "required|email",
            "phone" => "required",
            "address" => "required",
        ]);


        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'address' => $validated['address'],
        ]);

        $user->save();


        return response()->json(['message' => 'User updated', 'user_id' => $user, 'data' => $request->all()]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User deleted', 'user_id' => $user]);
    }
}


// store
// $user = new User;
// $result = $request->validate([
//     "name" => "required",
//     "email" => ["required", "email", Rule::unique("users", "email")],
//     "password" => ["required", Password::min(8)->mixedCase()->numbers()->symbols()],
//     "phone" => "required",
//     "address" => "required",
// ]);
// $user->name = strip_tags($result["name"]);
// $user->email = strip_tags($result["email"]);
// $user->password = strip_tags($result["password"]);
// $user->phone = strip_tags($result["phone"]);
// $user->address = strip_tags($result["address"]);
// $user->role = "customer";
// $user->save();
