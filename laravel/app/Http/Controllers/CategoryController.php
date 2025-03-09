<?php

namespace App\Http\Controllers;

class CategoryController extends Controller
{
    public function getCategories() {
        return ["message" => "GEtting list of categories"];
    }

    public function getCategory($categoryId) {
        return ["message" => "Getting 1 category based on categoryId"];
    }

    public function createCategory($categoryId) {
        return ["message" => "Creating 1 new category"];
    }

    public function updateCategory($categoryId) {
        return ["message" => "Updating 1 categpry based on given categoryId"];
    }

    public function deleteCategory($categoryId) {
        return ["message" => "Deleting 1 category based on given categoryId"];
    }
}
