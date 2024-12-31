<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $data = Product::paginate(5);
        $data = Product::all();
        return response()->json($data);
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
    public function store(ProductRequest $request)
    {
        $incomingData = $request->validated();

        $data = Product::create($incomingData);
        $data->save();
        return response()->json(['message' => 'Form submitted successfully!', "data" => $data], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return response()->json($product);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, Product $product)
    {
        $incomingData = $request->validated();
        $product->update($incomingData);
        return response()->json(["message" => "Products is successfully updated!", "data" => $product], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findorFail($id);

        if(!$product){
            return response()->json(["message" => "Product not found."], 404);
        }

        $product->delete();
        return response()->json(["message" => "Products is successfully deleted!"], 201);
    }
}
