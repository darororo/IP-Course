<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProduct($productId) {
        return ["message" => "getting one product based on productId"];
    }

    public function getProducts() {
        return ["message" => "getting a list of Products"];
    }

    public function createProduct($productId) {
        return ["message" => "creating a product with productId"];
    }

    public function updateProduct($productId) {
        return ["message" => "updating product based on productId"];
    }

    public function deleteProduct($productId) {
        return ['message' => 'deleting a product based on productId'];
    }

    public function getProductsByCategory($categoryId) {
        return ['message' => 'getting a list of products based on categoryId'];
    }

}
